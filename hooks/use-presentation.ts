"use client"

import { useState, useEffect, useCallback } from "react"

export function usePresentation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1)

  const handlePrevious = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide, totalSlides])

  const handleGoToSlide = useCallback(
    (slideNumber: number) => {
      if (slideNumber >= 1 && slideNumber <= totalSlides) {
        setCurrentSlide(slideNumber)
      }
    },
    [totalSlides],
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          break
        case "Home":
          handleGoToSlide(1)
          break
        case "End":
          handleGoToSlide(totalSlides)
          break
        default:
          // Handle number keys 1-6
          if (event.key >= "1" && event.key <= "6") {
            const slideNumber = Number.parseInt(event.key)
            handleGoToSlide(slideNumber)
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handlePrevious, handleNext, handleGoToSlide, totalSlides])

  return {
    currentSlide,
    handlePrevious,
    handleNext,
    handleGoToSlide,
  }
}

"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

interface PresentationNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (slide: number) => void
  slideTitle: string
}

export function PresentationNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  slideTitle,
}: PresentationNavigationProps) {
  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent">
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            disabled={currentSlide === 1}
            className="rounded-full p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-1 sm:gap-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => onGoToSlide(i + 1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i + 1 ? "bg-blue-600 w-6 sm:w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className="rounded-full p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* <div className="text-xs text-gray-500 text-center mt-1 sm:mt-2 font-medium">
          {currentSlide} / {totalSlides}
        </div> */}
      </div>

      {/* Top Left - Slide Title */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 bg-transparent">
        <p className="text-xs sm:text-sm font-semibold text-gray-700 truncate">{slideTitle}</p>
      </div>

      {/* Top Right - Controls */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 bg-transparent">
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" onClick={() => onGoToSlide(1)} className="p-1">
            <Home className="w-4 h-4" />
          </Button>
          <div className="text-xs text-gray-500 hidden sm:block">Use ← → keys or 1-13</div>
        </div>
      </div>
    </>
  )
}

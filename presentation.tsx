"use client"

import { PresentationNavigation } from "./components/presentation-navigation"
import { usePresentation } from "./hooks/use-presentation"
import { SLIDE_CONFIG } from "./config/slides"

export default function Presentation() {
  const { currentSlide, handlePrevious, handleNext, handleGoToSlide } = usePresentation(SLIDE_CONFIG.length)

  const currentSlideConfig = SLIDE_CONFIG[currentSlide - 1]
  const CurrentSlideComponent = currentSlideConfig.component

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Slide Content */}
      <div className="h-screen overflow-y-auto">
        <CurrentSlideComponent isActive={true} />
      </div>

      {/* Navigation */}
      <PresentationNavigation
        currentSlide={currentSlide}
        totalSlides={SLIDE_CONFIG.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onGoToSlide={handleGoToSlide}
        slideTitle={currentSlideConfig.title}
      />
    </div>
  )
}

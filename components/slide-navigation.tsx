"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (slide: number) => void
}

export function SlideNavigation({ currentSlide, totalSlides, onPrevious, onNext, onGoToSlide }: SlideNavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onPrevious} disabled={currentSlide === 1} className="rounded-full">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => onGoToSlide(i + 1)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === i + 1 ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-xs text-gray-500 text-center mt-2">
        {currentSlide} / {totalSlides}
      </div>
    </div>
  )
}

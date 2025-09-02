"use client"

import { useState, useEffect } from "react"

interface InteractiveProgressProps {
  steps: string[]
  currentStep?: number
  onStepClick?: (step: number) => void
  className?: string
}

export function InteractiveProgress({ steps, currentStep = 0, onStepClick, className = "" }: InteractiveProgressProps) {
  const [animatedStep, setAnimatedStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedStep < currentStep) {
        setAnimatedStep(animatedStep + 1)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [animatedStep, currentStep])

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <button
            onClick={() => onStepClick?.(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
              index <= animatedStep
                ? "bg-blue-600 text-white shadow-lg scale-110"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>

          {index < steps.length - 1 && (
            <div className="flex-1 mx-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-blue-600 transition-all duration-1000 ${index < animatedStep ? "w-full" : "w-0"}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

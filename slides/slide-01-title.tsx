"use client"

import Image from "next/image"
import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import type { SlideProps } from "../types/slide"

export function Slide01Title({ isActive }: SlideProps) {
  const [isAnimating, setIsAnimating] = useState(true)
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const resetAnimation = () => {
    setIsAnimating(false)
    setTimeout(() => setIsAnimating(true), 100)
  }

  return (
    <SlideContainer background="bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="text-center max-w-6xl mx-auto w-full px-4">
        {/* Animation Controls */}
        <div className="fixed top-20 right-4 flex gap-2 z-10">
          <button
            onClick={toggleAnimation}
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={resetAnimation}
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Company Logos */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
          <div
            className={`cursor-pointer transition-all duration-500 ${isAnimating ? "animate-fade-in-up delay-200" : ""} ${
              selectedLogo === "RTCC" ? "scale-110 ring-4 ring-blue-300 rounded-lg" : "hover:scale-105"
            }`}
            onClick={() => setSelectedLogo(selectedLogo === "RTCC" ? null : "RTCC")}
          >
            <Image
              src="/images/RTcc.png"
              alt="RTCC Logo"
              width={200}
              height={80}
              className="object-contain w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
              priority
            />
            {selectedLogo === "RTCC" && (
              <div className="mt-2 p-2 bg-blue-100 rounded-lg text-xs text-blue-800 font-medium">
                Fleet Management Expertise
              </div>
            )}
          </div>

          <div
            className={`w-px h-16 md:h-20 bg-gray-300 mx-8 ${isAnimating ? "animate-fade-in delay-500" : ""}`}
          />

          <div
            className={`cursor-pointer transition-all duration-500 ${isAnimating ? "animate-fade-in-up delay-700" : ""} ${
              selectedLogo === "tracking" ? "scale-110 ring-4 ring-orange-300 rounded-lg" : "hover:scale-105"
            }`}
            onClick={() => setSelectedLogo(selectedLogo === "tracking" ? null : "tracking")}
          >
            <Image
              src="/images/tracking-logo.png"
              alt="Tracking KSA Logo"
              width={120}
              height={80}
              className="object-contain w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
            />
            {selectedLogo === "tracking" && (
              <div className="mt-2 p-2 bg-orange-100 rounded-lg text-xs text-orange-800 font-medium">
                IoT & AI Technology Innovation
              </div>
            )}
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight ${
            isAnimating ? "animate-fade-in-up delay-1000" : ""
          }`}
        >
          Strategic Collaboration for
          <br />
          <span
            className={`text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-300 ${
              isAnimating ? "animate-pulse-slow" : ""
            }`}
          >
            IoT-Based
          </span>{" "}
          and{" "}
          <span
            className={`text-orange-500 cursor-pointer hover:text-orange-600 transition-colors duration-300 ${
              isAnimating ? "animate-pulse-slow" : ""
            }`}
          >
            AI-Enabled
          </span>
          <br />
          Fleet Management System
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto ${
            isAnimating ? "animate-fade-in-up delay-1300" : ""
          }`}
        >
          Partnerships Driving Innovation in Smart Fleet Solutions
        </p>

        {/* Interactive Tags */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500">
          <div
            className={`px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              isAnimating ? "animate-fade-in-up delay-1600" : ""
            }`}
          >
            <span className="font-medium">RTCC Proposal 2025</span>
          </div>
          <div
            className={`px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              isAnimating ? "animate-fade-in-up delay-1900" : ""
            }`}
          >
            <span className="font-medium">Strategic Partnership Initiative</span>
          </div>
        </div>

        {/* Interactive Hint */}
        <div className="mt-8 text-xs text-gray-400 animate-bounce">
          Click on logos to learn more • Use controls to manage animations
        </div>
      </div>
    </SlideContainer>
  )
}

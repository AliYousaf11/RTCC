"use client"

import { useState, useEffect } from "react"
import { MapPin, Fuel, Wrench, Cpu, BarChart3, Zap, Database, TrendingUp } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const IOT_DEVICES = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    title: "GPS Trackers",
    description: "GPS trackers in vehicles provide real-time location data to improve navigation and fleet management.",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Fuel className="w-8 h-8 text-orange-500" />,
    title: "Fuel Sensors",
    description:
      "Fuel sensors monitor fuel levels to optimize consumption and detect leaks for efficient vehicle operation.",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Wrench className="w-8 h-8 text-green-600" />,
    title: "Engine Diagnostics",
    description:
      "Engine diagnostics sensors collect data on vehicle performance to predict maintenance needs and prevent breakdowns.",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
]

const AI_PLATFORMS = [
  {
    icon: <Database className="w-8 h-8 text-purple-600" />,
    title: "Data Processing from IoT Devices",
    description: "AI platforms collect and analyse data from connected IoT devices to generate actionable insights.",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    title: "Predictive Analytics",
    description: "Predictive models forecast outcomes, helping optimise routes and anticipate operational challenges.",
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-100",
  },
  {
    icon: <Zap className="w-8 h-8 text-teal-600" />,
    title: "Enhanced Operational Decisions",
    description:
      "AI-driven decisions improve fleet efficiency and responsiveness by supporting real-time operational choices.",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100",
  },
]

export function SystemArchitecture({ isActive }: SlideProps) {
  const [activeDevice, setActiveDevice] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState<number | null>(null)
  const [flowAnimation, setFlowAnimation] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setFlowAnimation(1), 500)
      const timer2 = setTimeout(() => setFlowAnimation(2), 1000)
      const timer3 = setTimeout(() => setFlowAnimation(3), 1500)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="System Architecture and Technological Components"
          subtitle="Comprehensive technology stack for intelligent fleet management"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* IoT Devices Section */}
          <div
            className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6 transition-all duration-700 ${
              flowAnimation >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-5 sm:w-7 h-5 sm:h-7 text-blue-600 animate-pulse" />
              </div>
              IoT Devices and Sensor Integration in Vehicles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {IOT_DEVICES.map((device, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${device.color} shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl ${
                    activeDevice === index ? "ring-4 ring-blue-300 transform scale-105" : "hover:scale-102"
                  } ${flowAnimation >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActiveDevice(activeDevice === index ? null : index)}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex p-3 sm:p-4 ${device.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4 transition-all duration-300 ${
                        activeDevice === index ? "rotate-12 scale-110 animate-pulse" : ""
                      }`}
                    >
                      {device.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{device.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{device.description}</p>

                    {/* Connection indicator */}
                    <div
                      className={`mt-4 flex items-center justify-center gap-2 transition-all duration-300 ${
                        activeDevice === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                      <span className="text-xs text-green-600 font-medium">Connected</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analytics Section */}
          <div
            className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6 transition-all duration-700 ${
              flowAnimation >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
                <Cpu className="w-5 sm:w-7 h-5 sm:h-7 text-purple-600" />
              </div>
              AI-Driven Analytics and Decision-Making Platforms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {AI_PLATFORMS.map((platform, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${platform.color} shadow-sm cursor-pointer transition-all duration-500 hover:shadow-xl ${
                    activePlatform === index ? "ring-4 ring-purple-300 transform scale-105" : "hover:scale-102"
                  } ${flowAnimation >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActivePlatform(activePlatform === index ? null : index)}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex p-3 sm:p-4 ${platform.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4 transition-all duration-300 ${
                        activePlatform === index ? "rotate-12 scale-110" : ""
                      }`}
                    >
                      {platform.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{platform.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{platform.description}</p>

                    {/* Processing indicator */}
                    <div
                      className={`mt-4 transition-all duration-300 ${
                        activePlatform === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="w-1 h-4 bg-purple-500 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-purple-600 font-medium mt-2 block">Processing Data</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Integration Flow */}
          <div
            className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white shadow-lg transition-all duration-700 ${
              flowAnimation >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                {[MapPin, Database, Cpu, BarChart3].map((Icon, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`relative p-2 sm:p-3 bg-white/20 rounded-full transition-all duration-500 hover:bg-white/30 hover:scale-110 ${
                        flowAnimation >= 3 ? "animate-bounce" : ""
                      }`}
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />

                      {/* Data flow animation */}
                      <div
                        className={`absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full transition-all duration-1000 ${
                          flowAnimation >= 3 ? "opacity-100 animate-ping" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 400}ms` }}
                      ></div>
                    </div>

                    {index < 3 && (
                      <div
                        className={`hidden sm:block transition-all duration-500 ${
                          flowAnimation >= 3 ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 400 + 200}ms` }}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-0.5 bg-white/60 animate-pulse"></div>
                          <div className="text-lg font-bold ml-2">→</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Integrated Technology Ecosystem</h3>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                IoT sensors collect real-time vehicle data → AI platforms process and analyze information → Predictive
                models generate insights → Enhanced operational decisions drive fleet optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

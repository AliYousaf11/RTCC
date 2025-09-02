"use client"

import { useState, useEffect } from "react"
import {
  Camera,
  Eye,
  AlertTriangle,
  Shield,
  Clock,
  TrendingDown,
  CheckCircle,
  Zap,
  Brain,
  Car,
  CloudSnow,
  Navigation,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const DASHCAM_FEATURES = [
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Driver Behavior Analysis",
    description: "Real-time monitoring of fatigue, distraction, and unsafe driving patterns",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    title: "Incident Detection",
    description: "Automatic detection of accidents, harsh braking, and emergency situations",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Emergency Alerts",
    description: "Instant notifications to fleet managers and emergency services",
  },
  {
    icon: <Navigation className="w-6 h-6 text-purple-600" />,
    title: "Lane Departure Warnings",
    description: "AI-powered lane detection with real-time driver alerts",
  },
  {
    icon: <Car className="w-6 h-6 text-orange-600" />,
    title: "Collision Avoidance",
    description: "Predictive collision detection with automatic emergency braking integration",
  },
  {
    icon: <CloudSnow className="w-6 h-6 text-indigo-600" />,
    title: "Weather Adaptation",
    description: "Intelligent system adjustments based on weather and road conditions",
  },
]

const SAFETY_METRICS = [
  {
    metric: "70%",
    label: "Reduction in Accidents",
    description: "Proactive safety monitoring",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <Shield className="w-8 h-8 text-green-600" />,
  },
  {
    metric: "25%",
    label: "Insurance Premium Savings",
    description: "Lower risk profile",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <TrendingDown className="w-8 h-8 text-blue-600" />,
  },
  {
    metric: "100%",
    label: "Regulatory Compliance",
    description: "Meet all safety standards",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
  },
  {
    metric: "80%",
    label: "Faster Incident Response",
    description: "Immediate alert system",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <Clock className="w-8 h-8 text-orange-600" />,
  },
]

const AI_CAPABILITIES = [
  {
    title: "Computer Vision",
    description: "Advanced image processing for real-time scene analysis",
    features: ["Object detection", "Lane recognition", "Traffic sign reading", "Pedestrian detection"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Behavioral Analytics",
    description: "Machine learning algorithms for driver behavior assessment",
    features: ["Fatigue detection", "Distraction monitoring", "Aggressive driving alerts", "Performance scoring"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Predictive Safety",
    description: "AI-powered risk assessment and prevention systems",
    features: ["Collision prediction", "Route risk analysis", "Weather impact assessment", "Maintenance alerts"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function Slide20AIDashcams({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedCapability, setSelectedCapability] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 300)
      const timer2 = setTimeout(() => setAnimationPhase(2), 800)
      const timer3 = setTimeout(() => setAnimationPhase(3), 1300)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isActive])

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSelectedCapability((prev) => (prev + 1) % AI_CAPABILITIES.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: AI-BASED DASHCAMS & COMPUTER VISION"
          subtitle="Intelligent Video Analytics for Enhanced Fleet Safety & Performance"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Smart Dashcam Technology</h2>
                      <p className="text-green-100">AI-Powered Safety Monitoring</p>
                    </div>
                  </div>
                  <p className="text-xl opacity-95 leading-relaxed mb-6">
                    Revolutionary AI-powered dashcam system with advanced computer vision capabilities, providing
                    real-time behavior analysis, incident detection, and comprehensive safety monitoring for your entire
                    fleet.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-green-100 text-sm">Continuous Monitoring</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">Real-time</div>
                      <div className="text-green-100 text-sm">AI Analysis</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {AI_CAPABILITIES.map((capability, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          selectedCapability === index
                            ? "bg-white/30 scale-105 shadow-lg"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Brain className="w-6 h-6 text-white" />
                          <h4 className="font-bold text-white">{capability.title}</h4>
                        </div>
                        <p className="text-green-100 text-sm mb-3">{capability.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {capability.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-300" />
                              <span className="text-white text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Advanced Safety Features</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive AI-driven safety monitoring and incident prevention capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DASHCAM_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Impact Metrics */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Safety & Cost Impact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Measurable improvements in fleet safety, compliance, and operational costs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SAFETY_METRICS.map((metric, index) => (
                <div
                  key={index}
                  className={`${metric.bgColor} rounded-2xl p-6 text-center border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-4">{metric.icon}</div>
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.metric}</div>
                  <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
                  <div className="text-gray-600 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Benefits */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Implementation Timeline: 4-6 Months</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Comprehensive deployment with immediate safety improvements and long-term cost benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Enhanced Safety</h4>
                  <p className="text-sm opacity-90">Immediate improvement in driver safety and fleet security</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <TrendingDown className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Cost Reduction</h4>
                  <p className="text-sm opacity-90">Lower insurance premiums and accident-related costs</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI in 12 Months</h4>
                  <p className="text-sm opacity-90">Fastest return on investment among Phase 2 solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

"use client"

import { useState, useEffect } from "react"
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Camera,
  Wrench,
  Wifi,
  Database,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const AI_SOLUTIONS = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "AI Chatbot for Fleet Operations",
    description: "24/7 intelligent virtual assistant for fleet management",
    impact: "40% faster response times",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Camera className="w-8 h-8 text-green-600" />,
    title: "AI-Based Dashcams & Computer Vision",
    description: "Smart video analytics for safety and compliance",
    impact: "70% reduction in accidents",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: <Wrench className="w-8 h-8 text-purple-600" />,
    title: "Predictive Analytics & Maintenance",
    description: "AI-driven maintenance and performance optimization",
    impact: "50% reduction in breakdowns",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Wifi className="w-8 h-8 text-orange-600" />,
    title: "Advanced IoT Sensor Integration",
    description: "Comprehensive monitoring with intelligent sensors",
    impact: "95% cargo integrity assurance",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    title: "Historic Data Analytics & Intelligence",
    description: "AI-powered insights from historical fleet data",
    impact: "85% improvement in decision accuracy",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

const STRATEGIC_BENEFITS = [
  {
    icon: <Target className="w-6 h-6 text-green-600" />,
    title: "Market Leadership",
    description: "Position RTCC as the leading AI-enabled fleet management provider in the region",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Revenue Growth",
    description: "Projected 40% increase in annual revenue through premium AI services",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    title: "Client Retention",
    description: "Enhanced client satisfaction and 95% retention rate through superior technology",
  },
  {
    icon: <Award className="w-6 h-6 text-orange-600" />,
    title: "Competitive Advantage",
    description: "Unique AI capabilities that differentiate from traditional fleet management",
  },
]

export function Slide18Phase2Overview({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedSolution, setSelectedSolution] = useState(0)

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
        setSelectedSolution((prev) => (prev + 1) % AI_SOLUTIONS.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: AI-ENABLED FLEET INTELLIGENCE"
          subtitle="Next-Generation AI Solutions for Advanced Fleet Management & Optimization"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Vision Section */}
          <div
            className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-4 bg-white/20 rounded-2xl">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-4xl font-bold mb-2">AI-Powered Fleet Revolution</h2>
                    <p className="text-xl text-indigo-100">
                      Transforming Fleet Management with Artificial Intelligence
                    </p>
                  </div>
                </div>
                <p className="text-2xl opacity-95 leading-relaxed max-w-4xl mx-auto">
                  Phase 2 introduces cutting-edge AI technologies that transform traditional fleet management into an
                  intelligent, predictive, and autonomous system capable of self-optimization and proactive
                  decision-making.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Brain className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
                  <p className="text-indigo-100">AI-driven processes that learn and adapt</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Predictive Intelligence</h3>
                  <p className="text-indigo-100">Anticipate issues before they occur</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Star className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Competitive Edge</h3>
                  <p className="text-indigo-100">Market-leading AI capabilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Solutions Portfolio */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Core AI Solutions</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Five revolutionary AI-powered solutions that will transform your fleet operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {AI_SOLUTIONS.map((solution, index) => (
                <div
                  key={index}
                  className={`${solution.bgColor} rounded-2xl p-6 border-2 transition-all duration-500 transform hover:scale-105 ${
                    selectedSolution === index
                      ? "border-current shadow-2xl scale-105"
                      : "border-transparent hover:shadow-xl"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">{solution.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">{solution.title}</h4>
                    <p className="text-gray-700 text-xs leading-relaxed mb-4">{solution.description}</p>
                    <div className="bg-white rounded-lg p-3 border">
                      <div className="text-lg font-bold text-gray-900 mb-1">{solution.impact}</div>
                      <div className="text-gray-600 text-xs">Expected Impact</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Business Impact */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Strategic Business Impact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Phase 2 AI implementation delivers measurable business value and competitive advantages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STRATEGIC_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Roadmap Preview */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Phase 2 Implementation Overview</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Comprehensive 14-month implementation plan with measurable milestones and ROI tracking
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold">Total Investment</h4>
                  </div>
                  <div className="text-3xl font-bold mb-2">SR 5.55M</div>
                  <p className="text-sm opacity-90">First year comprehensive implementation</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold">Implementation Timeline</h4>
                  </div>
                  <div className="text-3xl font-bold mb-2">14 Months</div>
                  <p className="text-sm opacity-90">Phased deployment with quick wins</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold">ROI Break-even</h4>
                  </div>
                  <div className="text-3xl font-bold mb-2">18 Months</div>
                  <p className="text-sm opacity-90">Rapid return on investment</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="text-lg font-semibold">Next: Detailed Use Cases</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

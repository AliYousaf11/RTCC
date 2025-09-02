"use client"

import { useState, useEffect } from "react"
import {
  MessageSquare,
  Bot,
  Zap,
  Clock,
  Users,
  BarChart3,
  CheckCircle,
  Mic,
  Globe,
  Brain,
  Headphones,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const CHATBOT_FEATURES = [
  {
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
    title: "Natural Language Processing",
    description: "Advanced NLP for understanding complex fleet management queries in Arabic and English",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: "24/7 Availability",
    description: "Round-the-clock support for fleet managers, drivers, and operations teams",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    title: "Real-time Fleet Updates",
    description: "Instant access to vehicle status, location, and performance metrics",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-600" />,
    title: "Multi-user Support",
    description: "Simultaneous conversations with multiple users across different departments",
  },
  {
    icon: <Mic className="w-6 h-6 text-indigo-600" />,
    title: "Voice Integration",
    description: "Voice commands and responses for hands-free fleet management",
  },
  {
    icon: <Globe className="w-6 h-6 text-pink-600" />,
    title: "Multi-language Support",
    description: "Seamless communication in Arabic, English, and other regional languages",
  },
]

const PERFORMANCE_METRICS = [
  {
    metric: "40%",
    label: "Faster Response Times",
    description: "Instant query resolution",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    metric: "60%",
    label: "Support Cost Reduction",
    description: "Automated customer service",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <BarChart3 className="w-8 h-8 text-green-600" />,
  },
  {
    metric: "95%",
    label: "Query Resolution Rate",
    description: "First-contact resolution",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
  },
  {
    metric: "24/7",
    label: "Continuous Availability",
    description: "Always-on support",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <Clock className="w-8 h-8 text-orange-600" />,
  },
]

const USE_CASES = [
  {
    title: "Fleet Status Inquiries",
    description: "Get instant updates on vehicle locations, fuel levels, and maintenance schedules",
    example: '"Where is vehicle SA-1234 and when is its next maintenance due?"',
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Route Optimization",
    description: "Request optimal routes based on traffic, weather, and delivery priorities",
    example: '"What\'s the best route from Riyadh to Jeddah avoiding current traffic?"',
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Emergency Support",
    description: "Immediate assistance for breakdowns, accidents, and urgent situations",
    example: '"Vehicle SA-5678 has broken down on Highway 40, need immediate assistance"',
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Performance Analytics",
    description: "Access detailed reports on driver performance, fuel efficiency, and costs",
    example: '"Show me last month\'s fuel consumption report for the Riyadh fleet"',
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function Slide19AIChatbot({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedUseCase, setSelectedUseCase] = useState(0)

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
        setSelectedUseCase((prev) => (prev + 1) % USE_CASES.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: AI CHATBOT FOR LOGISTICS & FLEET OPERATIONS"
          subtitle="Intelligent Virtual Assistant for 24/7 Fleet Management Support"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      <Bot className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">AI-Powered Assistant</h2>
                      <p className="text-blue-100">Intelligent Fleet Support</p>
                    </div>
                  </div>
                  <p className="text-xl opacity-95 leading-relaxed mb-6">
                    Revolutionary AI chatbot that understands natural language queries, provides instant fleet updates,
                    and offers intelligent recommendations for optimal fleet management decisions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">95%</div>
                      <div className="text-blue-100 text-sm">Query Resolution</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">2 Sec</div>
                      <div className="text-blue-100 text-sm">Avg Response Time</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {USE_CASES.map((useCase, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          selectedUseCase === index
                            ? "bg-white/30 scale-105 shadow-lg"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-blue-100 text-sm mb-3">{useCase.description}</p>
                        <div className="bg-white/20 rounded-lg p-3">
                          <p className="text-white text-xs italic">{useCase.example}</p>
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Advanced AI Capabilities</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Sophisticated natural language processing and machine learning for intelligent fleet assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHATBOT_FEATURES.map((feature, index) => (
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

          {/* Performance Impact */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Operational Impact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Measurable improvements in response times, cost reduction, and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PERFORMANCE_METRICS.map((metric, index) => (
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

          {/* Conversation Examples */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Real-World Use Cases</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Practical examples of how the AI chatbot enhances daily fleet operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {USE_CASES.map((useCase, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${useCase.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">{useCase.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{useCase.description}</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4 border-l-4 border-current">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-800 text-sm italic font-medium">{useCase.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Benefits */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Implementation Timeline: 3-4 Months</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Rapid deployment with immediate productivity gains and customer satisfaction improvements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Smart Learning</h4>
                  <p className="text-sm opacity-90">Continuously improves responses based on interactions</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Headphones className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Reduced Support Load</h4>
                  <p className="text-sm opacity-90">60% reduction in human support requirements</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI in 8 Months</h4>
                  <p className="text-sm opacity-90">Fastest payback period among Phase 2 solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

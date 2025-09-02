"use client"

import { useState, useEffect } from "react"
import {
  Brain,
  TrendingUp,
  Wrench,
  Fuel,
  Route,
  BarChart3,
  Target,
  CheckCircle,
  Clock,
  DollarSign,
  Activity,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const ANALYTICS_FEATURES = [
  {
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    title: "Predictive Maintenance",
    description: "AI algorithms predict vehicle maintenance needs before breakdowns occur",
  },
  {
    icon: <Fuel className="w-6 h-6 text-green-600" />,
    title: "Fuel Optimization",
    description: "Machine learning models optimize fuel consumption patterns and routes",
  },
  {
    icon: <Route className="w-6 h-6 text-purple-600" />,
    title: "Route Efficiency Analysis",
    description: "Advanced analytics for optimal route planning and traffic pattern analysis",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
    title: "Performance Prediction",
    description: "Driver and vehicle performance forecasting with actionable insights",
  },
  {
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    title: "Demand Forecasting",
    description: "Predictive models for fleet capacity planning and resource allocation",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-pink-600" />,
    title: "Cost Optimization",
    description: "AI-driven cost analysis and optimization recommendations",
  },
]

const PERFORMANCE_METRICS = [
  {
    metric: "50%",
    label: "Reduction in Breakdowns",
    description: "Proactive maintenance scheduling",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
  },
  {
    metric: "20%",
    label: "Fuel Cost Savings",
    description: "Optimized consumption patterns",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <Fuel className="w-8 h-8 text-green-600" />,
  },
  {
    metric: "35%",
    label: "Operational Efficiency Gain",
    description: "Streamlined operations",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
  },
  {
    metric: "90%",
    label: "Demand Forecasting Accuracy",
    description: "Precise capacity planning",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <Target className="w-8 h-8 text-orange-600" />,
  },
]

const ML_MODELS = [
  {
    title: "Maintenance Prediction Model",
    description:
      "Advanced algorithms analyzing vehicle sensor data, usage patterns, and historical maintenance records",
    capabilities: [
      "Engine health monitoring",
      "Brake system analysis",
      "Tire wear prediction",
      "Battery life estimation",
    ],
    accuracy: "95%",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Route Optimization Engine",
    description: "Machine learning system processing traffic data, weather conditions, and delivery priorities",
    capabilities: [
      "Real-time traffic analysis",
      "Weather impact assessment",
      "Delivery time optimization",
      "Fuel consumption minimization",
    ],
    accuracy: "88%",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Performance Analytics Platform",
    description: "Comprehensive driver and fleet performance analysis with predictive insights",
    capabilities: [
      "Driver behavior scoring",
      "Fleet utilization analysis",
      "Cost trend prediction",
      "Risk assessment modeling",
    ],
    accuracy: "92%",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function Slide21PredictiveAnalytics({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedModel, setSelectedModel] = useState(0)

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
        setSelectedModel((prev) => (prev + 1) % ML_MODELS.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: PREDICTIVE ANALYTICS & MAINTENANCE"
          subtitle="AI-Driven Insights for Proactive Fleet Management & Optimization"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Predictive Intelligence</h2>
                      <p className="text-purple-100">Machine Learning Analytics</p>
                    </div>
                  </div>
                  <p className="text-xl opacity-95 leading-relaxed mb-6">
                    Advanced machine learning algorithms that analyze vast amounts of fleet data to predict maintenance
                    needs, optimize operations, and provide actionable insights for proactive decision-making.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">3</div>
                      <div className="text-purple-100 text-sm">ML Models</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">92%</div>
                      <div className="text-purple-100 text-sm">Avg Accuracy</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {ML_MODELS.map((model, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          selectedModel === index ? "bg-white/30 scale-105 shadow-lg" : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">{model.title}</h4>
                          <div className="bg-white/20 rounded-full px-3 py-1">
                            <span className="text-white text-xs font-medium">{model.accuracy}</span>
                          </div>
                        </div>
                        <p className="text-purple-100 text-sm mb-3">{model.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {model.capabilities.slice(0, 4).map((capability, cIndex) => (
                            <div key={cIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-300" />
                              <span className="text-white text-xs">{capability}</span>
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

          {/* Core Analytics Features */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Advanced Analytics Capabilities</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive AI-driven analytics for proactive fleet management and operational optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ANALYTICS_FEATURES.map((feature, index) => (
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
                Measurable improvements in fleet efficiency, cost reduction, and operational excellence
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

          {/* Machine Learning Models Detail */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Machine Learning Models</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Sophisticated AI models trained on fleet data for accurate predictions and insights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ML_MODELS.map((model, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${model.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Activity className="w-6 h-6 text-gray-700" />
                      <h4 className="font-bold text-gray-900">{model.title}</h4>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 inline-block mb-4">
                      <span className="text-2xl font-bold text-gray-900">{model.accuracy}</span>
                      <span className="text-gray-600 text-sm ml-1">Accuracy</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{model.description}</p>
                  </div>

                  <div className="space-y-2">
                    {model.capabilities.map((capability, cIndex) => (
                      <div key={cIndex} className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 text-sm font-medium">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Benefits */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Implementation Timeline: 5-7 Months</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Comprehensive AI model development and deployment with continuous learning capabilities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Intelligent Insights</h4>
                  <p className="text-sm opacity-90">Data-driven decision making with predictive capabilities</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p className="text-sm opacity-90">Models improve accuracy over time with more data</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI in 15 Months</h4>
                  <p className="text-sm opacity-90">Substantial return through operational optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

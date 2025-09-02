"use client"

import { useState, useEffect } from "react"
import {
  Database,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  Calendar,
  Truck,
  Fuel,
  MapPin,
  Settings,
  DollarSign,
  Clock,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const ANALYTICS_CAPABILITIES = [
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: "Fleet Performance Analytics",
    description:
      "Comprehensive analysis of vehicle utilization, performance metrics, and operational efficiency across the entire fleet",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    title: "Automated Report Generation",
    description: "AI-powered creation of comprehensive fleet reports with actionable recommendations and insights",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    title: "Predictive Fleet Analytics",
    description: "Machine learning algorithms forecasting fleet performance, maintenance needs, and operational trends",
  },
  {
    icon: <MapPin className="w-6 h-6 text-orange-600" />,
    title: "Route & Logistics Analytics",
    description: "Deep analysis of route efficiency, delivery patterns, and logistics optimization opportunities",
  },
  {
    icon: <Fuel className="w-6 h-6 text-indigo-600" />,
    title: "Cost Pattern Recognition",
    description:
      "AI identification of cost optimization opportunities across fuel, maintenance, and operational expenses",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-600" />,
    title: "Driver Behavior Analytics",
    description: "Comprehensive analysis and ranking system for driver performance optimization and safety",
  },
]

const ANALYTICS_METRICS = [
  {
    metric: "85%",
    label: "Fleet Decision Accuracy",
    description: "Data-driven insights",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    metric: "60%",
    label: "Reporting Time Reduction",
    description: "Automated generation",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <BarChart3 className="w-8 h-8 text-green-600" />,
  },
  {
    metric: "35%",
    label: "Fleet Efficiency Boost",
    description: "Optimization insights",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <Truck className="w-8 h-8 text-purple-600" />,
  },
  {
    metric: "30%",
    label: "Cost Optimization",
    description: "Pattern-based savings",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <DollarSign className="w-8 h-8 text-orange-600" />,
  },
]

const FLEET_ANALYTICS_SYSTEM = [
  {
    title: "Vehicle Performance Analysis",
    description: "Comprehensive analysis of vehicle health, utilization rates, and performance metrics",
    metrics: ["Vehicle utilization", "Performance trends", "Maintenance patterns", "Lifecycle analysis"],
    accuracy: "96%",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Route & Logistics Intelligence",
    description: "AI analysis of route efficiency, delivery patterns, and logistics optimization",
    metrics: ["Route optimization", "Delivery patterns", "Traffic analysis", "Time efficiency"],
    accuracy: "93%",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    icon: <MapPin className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Driver Performance Ranking",
    description: "Multi-dimensional scoring system for driver performance and safety analysis",
    metrics: ["Safety scoring", "Fuel efficiency", "Performance trends", "Training needs"],
    accuracy: "91%",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    icon: <Users className="w-6 h-6 text-purple-600" />,
  },
]

const HISTORIC_DATA_INSIGHTS = [
  {
    category: "Fleet Operations",
    insights: [
      "Vehicle utilization optimization",
      "Peak performance periods",
      "Seasonal operational patterns",
      "Fleet capacity planning",
    ],
    impact: "35% efficiency gain",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <Truck className="w-5 h-5 text-blue-600" />,
  },
  {
    category: "Cost Analysis",
    insights: [
      "Fuel consumption patterns",
      "Maintenance cost trends",
      "Hidden operational costs",
      "ROI optimization areas",
    ],
    impact: "30% cost reduction",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <DollarSign className="w-5 h-5 text-green-600" />,
  },
  {
    category: "Route Intelligence",
    insights: [
      "Optimal route identification",
      "Traffic pattern analysis",
      "Delivery time optimization",
      "Logistics efficiency gains",
    ],
    impact: "25% time savings",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <MapPin className="w-5 h-5 text-purple-600" />,
  },
  {
    category: "Maintenance Patterns",
    insights: [
      "Predictive maintenance needs",
      "Vehicle health trends",
      "Breakdown pattern analysis",
      "Maintenance cost optimization",
    ],
    impact: "40% downtime reduction",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <Settings className="w-5 h-5 text-orange-600" />,
  },
]

const FLEET_DATA_CATEGORIES = [
  {
    title: "Vehicle Analytics",
    description: "Comprehensive vehicle performance and utilization analysis",
    dataPoints: [
      "Vehicle health monitoring",
      "Utilization rate analysis",
      "Performance benchmarking",
      "Lifecycle cost analysis",
      "Fuel efficiency patterns",
      "Maintenance scheduling optimization",
    ],
    impact: "35% fleet efficiency improvement",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Route & Logistics",
    description: "Advanced route optimization and logistics intelligence",
    dataPoints: [
      "Route efficiency analysis",
      "Traffic pattern recognition",
      "Delivery time optimization",
      "Customer location analytics",
      "Load optimization patterns",
      "Geographic performance mapping",
    ],
    impact: "25% delivery time reduction",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Operational Intelligence",
    description: "Fleet-wide operational patterns and performance insights",
    dataPoints: [
      "Peak operation identification",
      "Seasonal trend analysis",
      "Resource allocation optimization",
      "Service quality metrics",
      "Customer satisfaction patterns",
      "Operational cost breakdown",
    ],
    impact: "30% operational cost savings",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
]

export function Slide24DataAnalytics({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedAnalytics, setSelectedAnalytics] = useState(0)

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
        setSelectedAnalytics((prev) => (prev + 1) % FLEET_ANALYTICS_SYSTEM.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: HISTORIC DATA ANALYTICS & INTELLIGENCE"
          subtitle="AI-Powered Fleet Analytics from Historical Data & Comprehensive Performance Intelligence"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      <Database className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Fleet Intelligence Platform</h2>
                      <p className="text-indigo-100">Historic Analytics & Insights</p>
                    </div>
                  </div>
                  <p className="text-xl opacity-95 leading-relaxed mb-6">
                    Advanced AI-powered analytics platform that transforms years of historical fleet data into
                    actionable insights, comprehensive reports, and predictive intelligence for strategic fleet
                    management and optimization.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">5+ Years</div>
                      <div className="text-indigo-100 text-sm">Fleet Data Analysis</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">10,000+</div>
                      <div className="text-indigo-100 text-sm">Data Points Daily</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {FLEET_ANALYTICS_SYSTEM.map((system, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          selectedAnalytics === index
                            ? "bg-white/30 scale-105 shadow-lg"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {system.icon}
                            <h4 className="font-bold text-white">{system.title}</h4>
                          </div>
                          <div className="bg-white/20 rounded-full px-3 py-1">
                            <span className="text-white text-xs font-medium">{system.accuracy}</span>
                          </div>
                        </div>
                        <p className="text-indigo-100 text-sm mb-3">{system.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {system.metrics.slice(0, 4).map((metric, mIndex) => (
                            <div key={mIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-300" />
                              <span className="text-white text-xs">{metric}</span>
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

          {/* Analytics Capabilities */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Fleet Analytics Capabilities
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                AI-driven analytics covering all aspects of fleet operations, from vehicle performance to driver
                behavior
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ANALYTICS_CAPABILITIES.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{capability.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{capability.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Data Categories */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fleet Data Analysis Categories</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive analysis across all fleet operational dimensions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {FLEET_DATA_CATEGORIES.map((category, index) => (
                <div
                  key={index}
                  className={`${category.bgColor} rounded-2xl p-6 border-2 ${category.borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h4 className="font-bold text-gray-900 mb-3">{category.title}</h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{category.description}</p>

                  <div className="space-y-2 mb-4">
                    {category.dataPoints.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`text-lg font-bold ${category.color} text-center bg-white/60 rounded-lg py-2`}>
                    {category.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historic Data Insights */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Historic Fleet Data Insights</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Key insights extracted from years of comprehensive fleet operational data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HISTORIC_DATA_INSIGHTS.map((insight, index) => (
                <div
                  key={index}
                  className={`${insight.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {insight.icon}
                    <h4 className="font-bold text-gray-900">{insight.category}</h4>
                  </div>
                  <div className="space-y-2 mb-4">
                    {insight.insights.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`text-lg font-bold ${insight.color} text-center`}>{insight.impact}</div>
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fleet Analytics Impact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Measurable improvements through comprehensive fleet data analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ANALYTICS_METRICS.map((metric, index) => (
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
            className={`bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Implementation Timeline: 4-5 Months</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Comprehensive fleet analytics platform with historical analysis and predictive intelligence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Truck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Fleet Intelligence</h4>
                  <p className="text-sm opacity-90">35% fleet efficiency improvement</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Cost Optimization</h4>
                  <p className="text-sm opacity-90">30% operational cost reduction</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Time Savings</h4>
                  <p className="text-sm opacity-90">25% delivery time reduction</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI Timeline</h4>
                  <p className="text-sm opacity-90">Returns within 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

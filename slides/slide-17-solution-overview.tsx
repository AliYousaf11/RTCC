import {
  Truck,
  Wifi,
  Cloud,
  Smartphone,
  BarChart3,
  Cpu,
  Shield,
  Zap,
  Users,
  MapPin,
  Wrench,
  Fuel,
  ArrowRight,
  Database,
  Globe,
  Bell,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const SOLUTION_LAYERS = [
  {
    title: "Vehicle Layer",
    description: "Smart IoT-enabled fleet vehicles",
    components: [
      { icon: <Truck className="w-6 h-6 text-blue-600" />, name: "Fleet Vehicles", color: "bg-blue-100" },
      { icon: <MapPin className="w-6 h-6 text-green-600" />, name: "GPS Tracking", color: "bg-green-100" },
      { icon: <Fuel className="w-6 h-6 text-orange-600" />, name: "Fuel Sensors", color: "bg-orange-100" },
      { icon: <Wrench className="w-6 h-6 text-purple-600" />, name: "Engine Diagnostics", color: "bg-purple-100" },
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Connectivity Layer",
    description: "Real-time data transmission",
    components: [
      { icon: <Wifi className="w-6 h-6 text-blue-600" />, name: "IoT Connectivity", color: "bg-blue-100" },
      { icon: <Globe className="w-6 h-6 text-green-600" />, name: "Network Infrastructure", color: "bg-green-100" },
      { icon: <Shield className="w-6 h-6 text-red-600" />, name: "Security Protocols", color: "bg-red-100" },
    ],
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Processing Layer",
    description: "AI-powered analytics and intelligence",
    components: [
      { icon: <Cloud className="w-6 h-6 text-blue-600" />, name: "Cloud Platform", color: "bg-blue-100" },
      { icon: <Cpu className="w-6 h-6 text-purple-600" />, name: "AI Analytics", color: "bg-purple-100" },
      { icon: <Database className="w-6 h-6 text-indigo-600" />, name: "Data Processing", color: "bg-indigo-100" },
      { icon: <Zap className="w-6 h-6 text-yellow-600" />, name: "Real-time Processing", color: "bg-yellow-100" },
    ],
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    title: "Application Layer",
    description: "User interfaces and dashboards",
    components: [
      { icon: <Smartphone className="w-6 h-6 text-blue-600" />, name: "Mobile Apps", color: "bg-blue-100" },
      { icon: <BarChart3 className="w-6 h-6 text-green-600" />, name: "Analytics Dashboard", color: "bg-green-100" },
      { icon: <Users className="w-6 h-6 text-orange-600" />, name: "User Management", color: "bg-orange-100" },
      { icon: <Bell className="w-6 h-6 text-red-600" />, name: "Alert System", color: "bg-red-100" },
    ],
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
]

const ADVANCEMENT_FEATURES = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms for predictive analytics",
    advancement: "Next-Gen",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Real-Time Processing",
    description: "Instant data processing and decision making",
    advancement: "Ultra-Fast",
    color: "bg-orange-50 border-orange-200",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Advanced Security",
    description: "End-to-end encryption and data protection",
    advancement: "Enterprise-Grade",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: "Scalable Architecture",
    description: "Cloud-native infrastructure for unlimited growth",
    advancement: "Future-Ready",
    color: "bg-purple-50 border-purple-200",
  },
]

export function Slide17SolutionOverview({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <div className="animate-fade-in-up">
          <SlideHeader
            title="Complete Solution Architecture"
            subtitle="Comprehensive IoT and AI-enabled fleet management ecosystem"
            className="mb-6 sm:mb-8"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Solution Architecture Layers */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border mb-6 sm:mb-8 animate-scale-in delay-300">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Four-Layer Solution Architecture
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {SOLUTION_LAYERS.map((layer, layerIndex) => (
                <div key={layerIndex} className="relative">
                  {/* Layer Container */}
                  <div
                    className={`rounded-xl p-4 sm:p-6 border-2 ${layer.bgColor} ${layer.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-in-right`}
                    style={{ animationDelay: `${layerIndex * 200 + 500}ms` }}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
                      {/* Layer Info */}
                      <div className="flex-shrink-0 lg:w-1/4">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{layer.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{layer.description}</p>
                      </div>

                      {/* Components */}
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {layer.components.map((component, compIndex) => (
                          <div
                            key={compIndex}
                            className={`${component.color} rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in`}
                            style={{ animationDelay: `${layerIndex * 200 + compIndex * 100 + 700}ms` }}
                          >
                            <div className="flex justify-center mb-2 hover:rotate-12 transition-transform duration-300">
                              {component.icon}
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-800">{component.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow between layers */}
                  {layerIndex < SOLUTION_LAYERS.length - 1 && (
                    <div className="flex justify-center my-2 sm:my-3">
                      <div className="p-2 bg-white rounded-full shadow-md animate-bounce delay-1000">
                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technological Advancements */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border mb-6 sm:mb-8 animate-fade-in-up delay-1500">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Technological Advancements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {ADVANCEMENT_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${feature.color} shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in`}
                  style={{ animationDelay: `${1700 + index * 200}ms` }}
                >
                  <div className="text-center">
                    {/* Advancement Badge */}
                    <div className="inline-block px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full mb-3 animate-pulse">
                      {feature.advancement}
                    </div>

                    <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-3 hover:rotate-12 transition-transform duration-300">
                      {feature.icon}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Flow Visualization */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-2500">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 animate-fade-in delay-2700">
                Real-Time Data Flow & Processing
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2 animate-slide-in-left delay-2900">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Vehicle Data</span>
                </div>

                <ArrowRight className="w-5 h-5 animate-pulse delay-3000" />

                <div className="flex items-center gap-2 animate-slide-in-left delay-3100">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">IoT Transmission</span>
                </div>

                <ArrowRight className="w-5 h-5 animate-pulse delay-3200" />

                <div className="flex items-center gap-2 animate-slide-in-left delay-3300">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">AI Processing</span>
                </div>

                <ArrowRight className="w-5 h-5 animate-pulse delay-3400" />

                <div className="flex items-center gap-2 animate-slide-in-left delay-3500">
                  <div className="p-2 bg-white/20 rounded-full">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">Actionable Insights</span>
                </div>
              </div>

              <p className="text-sm sm:text-lg opacity-95 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-3600">
                From vehicle sensors to intelligent insights in milliseconds - our advanced architecture ensures
                real-time processing, predictive analytics, and immediate actionable intelligence for optimal fleet
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

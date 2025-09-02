"use client"

import { useState, useEffect } from "react"
import { Wifi, Thermometer, Shield, Droplets, Zap, Eye, CheckCircle, Activity, Radio, Gauge, Lock } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const IOT_SENSORS = [
  {
    icon: <Thermometer className="w-6 h-6 text-red-600" />,
    title: "Temperature & Humidity Sensors",
    description: "Real-time monitoring of cargo conditions for sensitive goods",
    applications: ["Cold chain logistics", "Pharmaceutical transport", "Food safety"],
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Security & Intrusion Detection",
    description: "Advanced sensors for cargo security and unauthorized access alerts",
    applications: ["Cargo protection", "Door/window monitoring", "Perimeter security"],
  },
  {
    icon: <Droplets className="w-6 h-6 text-cyan-600" />,
    title: "Moisture & Leak Detection",
    description: "Prevent cargo damage from water ingress and humidity issues",
    applications: ["Electronics protection", "Document safety", "Chemical transport"],
  },
  {
    icon: <Activity className="w-6 h-6 text-green-600" />,
    title: "Vibration & Shock Sensors",
    description: "Monitor handling conditions and detect rough transport",
    applications: ["Fragile goods", "Equipment transport", "Quality assurance"],
  },
  {
    icon: <Gauge className="w-6 h-6 text-purple-600" />,
    title: "Pressure & Load Sensors",
    description: "Accurate weight monitoring and pressure detection",
    applications: ["Load optimization", "Safety compliance", "Fuel efficiency"],
  },
  {
    icon: <Radio className="w-6 h-6 text-orange-600" />,
    title: "Air Quality & Gas Detection",
    description: "Monitor air quality and detect hazardous gas leaks",
    applications: ["Chemical transport", "Driver safety", "Environmental compliance"],
  },
]

const MONITORING_METRICS = [
  {
    metric: "95%",
    label: "Cargo Integrity Assurance",
    description: "Real-time condition monitoring",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: <Shield className="w-8 h-8 text-green-600" />,
  },
  {
    metric: "80%",
    label: "Theft Reduction",
    description: "Advanced security monitoring",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: <Lock className="w-8 h-8 text-blue-600" />,
  },
  {
    metric: "30%",
    label: "Insurance Cost Savings",
    description: "Lower risk profile",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
  },
  {
    metric: "99.9%",
    label: "Sensor Uptime",
    description: "Reliable monitoring",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <Activity className="w-8 h-8 text-orange-600" />,
  },
]

const SENSOR_NETWORKS = [
  {
    title: "Environmental Monitoring Network",
    description: "Comprehensive environmental condition tracking for sensitive cargo",
    sensors: ["Temperature sensors", "Humidity monitors", "Air quality detectors", "UV light sensors"],
    coverage: "100%",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Security & Safety Network",
    description: "Multi-layered security system with intrusion detection and alerts",
    sensors: ["Motion detectors", "Door/window sensors", "Vibration monitors", "Panic buttons"],
    coverage: "360°",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Performance Monitoring Network",
    description: "Vehicle and cargo performance optimization through intelligent sensing",
    sensors: ["Load sensors", "Pressure monitors", "Fuel level sensors", "Engine diagnostics"],
    coverage: "Real-time",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function Slide22IoTSensors({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedNetwork, setSelectedNetwork] = useState(0)

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
        setSelectedNetwork((prev) => (prev + 1) % SENSOR_NETWORKS.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: ADVANCED IOT SENSOR INTEGRATION"
          subtitle="Comprehensive Monitoring Network for Enhanced Fleet Intelligence & Security"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      <Wifi className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Smart Sensor Network</h2>
                      <p className="text-orange-100">IoT-Enabled Monitoring</p>
                    </div>
                  </div>
                  <p className="text-xl opacity-95 leading-relaxed mb-6">
                    Advanced IoT sensor network providing comprehensive real-time monitoring of environmental
                    conditions, security status, and cargo integrity across your entire fleet operation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">50+</div>
                      <div className="text-orange-100 text-sm">Sensor Types</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-orange-100 text-sm">Monitoring</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {SENSOR_NETWORKS.map((network, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-500 ${
                          selectedNetwork === index
                            ? "bg-white/30 scale-105 shadow-lg"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">{network.title}</h4>
                          <div className="bg-white/20 rounded-full px-3 py-1">
                            <span className="text-white text-xs font-medium">{network.coverage}</span>
                          </div>
                        </div>
                        <p className="text-orange-100 text-sm mb-3">{network.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {network.sensors.slice(0, 4).map((sensor, sIndex) => (
                            <div key={sIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-300" />
                              <span className="text-white text-xs">{sensor}</span>
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

          {/* IoT Sensor Types */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Advanced Sensor Technologies</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive IoT sensor suite for complete fleet and cargo monitoring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {IOT_SENSORS.map((sensor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{sensor.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{sensor.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{sensor.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800 text-sm">Applications:</h5>
                    {sensor.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-gray-700 text-xs">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Impact */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Monitoring Impact</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Measurable improvements in cargo security, condition monitoring, and operational efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MONITORING_METRICS.map((metric, index) => (
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

          {/* Sensor Network Details */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Integrated Sensor Networks</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Three specialized sensor networks working together for comprehensive fleet intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SENSOR_NETWORKS.map((network, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${network.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Wifi className="w-6 h-6 text-gray-700" />
                      <h4 className="font-bold text-gray-900">{network.title}</h4>
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 inline-block mb-4">
                      <span className="text-2xl font-bold text-gray-900">{network.coverage}</span>
                      <span className="text-gray-600 text-sm ml-1">Coverage</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{network.description}</p>
                  </div>

                  <div className="space-y-2">
                    {network.sensors.map((sensor, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                        <Eye className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        <span className="text-gray-800 text-sm font-medium">{sensor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Benefits */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Implementation Timeline: 6-8 Months</h3>
                <p className="text-xl opacity-95 max-w-3xl mx-auto">
                  Comprehensive sensor network deployment with scalable architecture and real-time monitoring
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Enhanced Security</h4>
                  <p className="text-sm opacity-90">Comprehensive cargo and vehicle protection</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Activity className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Real-time Insights</h4>
                  <p className="text-sm opacity-90">Instant alerts and condition monitoring</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI in 20 Months</h4>
                  <p className="text-sm opacity-90">Long-term value through risk reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

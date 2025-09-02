import { Wifi, Wrench, MapPin, Cpu, Route, Fuel, Users, Eye, Zap, Shield, DollarSign, Star } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const IOT_APPLICATIONS = [
  {
    icon: <Wifi className="w-6 h-6 text-blue-600" />,
    title: "Real-Time Connectivity",
    description:
      "IoT provides real-time data exchange between fleet vehicles and operational centres enhancing communication.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    title: "Predictive Maintenance",
    description: "Sensors monitor vehicle health to predict maintenance needs, reducing downtime and costs.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-600" />,
    title: "Efficient Route Management",
    description: "IoT enables dynamic route optimisation improving fleet efficiency and reducing travel time.",
  },
]

const AI_OPTIMIZATION = [
  {
    icon: <Route className="w-6 h-6 text-blue-600" />,
    title: "Route Optimisation",
    description: "AI uses data to optimise vehicle routes, reducing travel time and fuel consumption for fleets.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    title: "Predictive Maintenance",
    description: "AI predicts vehicle maintenance needs by analysing IoT sensor data, preventing breakdowns.",
  },
  {
    icon: <Fuel className="w-6 h-6 text-green-600" />,
    title: "Fuel Efficiency Improvement",
    description: "AI enhances fuel efficiency by analysing driving patterns and vehicle data to reduce costs.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Driver Rankings",
    description:
      "AI provides drivers behaviour and rankings based on historic data and the violations based on the defined customized parameters.",
  },
]

const KEY_BENEFITS = [
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Comprehensive Insights",
    description:
      "Integrating IoT and AI delivers detailed real-time data, enabling in-depth fleet performance analysis and smarter decisions.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Proactive Decision-Making",
    description:
      "AI-driven insights from IoT data allow fleets to anticipate issues and optimize routes for efficiency.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Improved Safety and Reduced Downtime",
    description:
      "Combining IoT sensors and AI helps detect potential vehicle issues early, enhancing safety and minimizing downtime.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-purple-600" />,
    title: "Cost Savings and Efficiency",
    description:
      "Smart fleet management powered by IoT and AI reduces operational costs through optimized resource usage and maintenance.",
  },
]

export function IOTIntegration({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Overview of IoT and AI in Fleet Management"
          subtitle="Transforming transportation through intelligent technology integration"
          className="mb-6"
        />

        <div className="flex-1 space-y-5">
          {/* IoT Applications */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              IoT and Its Applications in Transportation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {IOT_APPLICATIONS.map((app, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{app.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{app.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Optimization */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Cpu className="w-6 h-6 text-orange-600" />
              </div>
              The Role of Artificial Intelligence in Fleet Optimisation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {AI_OPTIMIZATION.map((ai, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{ai.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{ai.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{ai.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              Key Benefits of Combining IoT and AI for Fleet Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KEY_BENEFITS.map((benefit, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{benefit.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Business Proposition */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Unique Business Proposition</h3>
              </div>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Differentiating from conventional market players through utilization of advanced technological tools in
                business offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

import { Wifi, Wrench, MapPin, Truck, Signal, Clock } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const IOT_APPLICATIONS = [
  {
    icon: <Wifi className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
    title: "Real-Time Connectivity",
    description:
      "IoT provides real-time data exchange between fleet vehicles and operational centres enhancing communication.",
    features: [
      "Continuous vehicle-to-center communication",
      "Real-time status updates and alerts",
      "Enhanced operational coordination",
      "Immediate response capabilities",
      "Seamless data transmission",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Wrench className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />,
    title: "Predictive Maintenance",
    description: "Sensors monitor vehicle health to predict maintenance needs, reducing downtime and costs.",
    features: [
      "Continuous vehicle health monitoring",
      "Early maintenance need detection",
      "Reduced unexpected breakdowns",
      "Cost-effective maintenance scheduling",
      "Extended vehicle lifespan",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
    title: "Efficient Route Management",
    description: "IoT enables dynamic route optimisation improving fleet efficiency and reducing travel time.",
    features: [
      "Dynamic route optimization",
      "Real-time traffic adaptation",
      "Fuel consumption reduction",
      "Improved delivery times",
      "Enhanced fleet efficiency",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
]

export function Slide03IoTApplications({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <div className="animate-fade-in-up">
          <SlideHeader
            title="IoT and Its Applications in Transportation"
            subtitle="Transforming fleet operations through intelligent connectivity and monitoring"
            className="mb-6 sm:mb-8"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {IOT_APPLICATIONS.map((app, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 sm:p-6 border-2 ${app.color} shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.05] hover-lift animate-scale-in`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div
                    className={`inline-flex p-3 sm:p-4 ${app.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4 hover:rotate-12 transition-transform duration-300`}
                  >
                    {app.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{app.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 sm:mb-3">Key Features:</h4>
                  {app.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-2 animate-slide-in-left"
                      style={{ animationDelay: `${index * 300 + featureIndex * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-700 text-sm hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* IoT Integration Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up delay-1000">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full animate-bounce delay-200">
                  <Truck className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block animate-pulse">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full animate-bounce delay-400">
                  <Signal className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block animate-pulse">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full animate-bounce delay-600">
                  <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 animate-fade-in delay-800">
                IoT-Enabled Transportation Excellence
              </h3>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95 animate-fade-in delay-1000">
                Vehicle Connectivity → Real-Time Monitoring → Optimized Operations for enhanced fleet performance and
                operational efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

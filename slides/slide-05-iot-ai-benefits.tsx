import { Eye, Zap, Shield, DollarSign, Star, Award } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const KEY_BENEFITS = [
  {
    icon: <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
    title: "Comprehensive Insights",
    description:
      "Integrating IoT and AI delivers detailed real-time data, enabling in-depth fleet performance analysis and smarter decisions.",
    advantages: [
      "Real-time performance monitoring",
      "Detailed analytics and reporting",
      "Data-driven decision making",
      "Comprehensive fleet visibility",
      "Actionable business insights",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />,
    title: "Proactive Decision-Making",
    description:
      "AI-driven insights from IoT data allow fleets to anticipate issues and optimize routes for efficiency.",
    advantages: [
      "Predictive issue identification",
      "Proactive maintenance scheduling",
      "Route optimization capabilities",
      "Efficiency improvement strategies",
      "Risk mitigation planning",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
    title: "Improved Safety and Reduced Downtime",
    description:
      "Combining IoT sensors and AI helps detect potential vehicle issues early, enhancing safety and minimizing downtime.",
    advantages: [
      "Early issue detection systems",
      "Enhanced safety protocols",
      "Downtime minimization strategies",
      "Preventive maintenance alerts",
      "Safety compliance monitoring",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    icon: <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />,
    title: "Cost Savings and Efficiency",
    description:
      "Smart fleet management powered by IoT and AI reduces operational costs through optimized resource usage and maintenance.",
    advantages: [
      "Operational cost reduction",
      "Resource optimization strategies",
      "Maintenance cost efficiency",
      "Fuel consumption optimization",
      "ROI improvement initiatives",
    ],
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
]

export function Slide05IoTAIBenefits({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Key Benefits of Combining IoT and AI for Fleet Operations"
          subtitle="Maximizing operational value through intelligent technology integration"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {KEY_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 sm:p-6 border-2 ${benefit.color} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                  <div className={`p-2 sm:p-3 ${benefit.iconBg} rounded-xl shadow-sm flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>

                {/* Advantages */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 sm:mb-3">Key Advantages:</h4>
                  {benefit.advantages.map((advantage, advantageIndex) => (
                    <div key={advantageIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Unique Business Proposition */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-lg mb-4 sm:mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Unique Business Proposition</h3>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Differentiating from conventional market players through utilization of advanced technological tools in
                business offerings.
              </p>
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                  <Award className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Combined IoT & AI Value</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                The synergy between IoT connectivity and AI intelligence creates unprecedented opportunities for fleet
                optimization, cost reduction, and competitive advantage in the transportation industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

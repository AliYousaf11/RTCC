import { Target, TrendingUp, Trophy, CheckCircle, Zap, Users, BarChart3, Star } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const BUSINESS_OUTCOMES = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Successful Implementations",
    description:
      "Successful implementation of the selected interface as the 1st phase and started pointing the new installations directly on the IoT layer and diverting the assets whenever their existing subscription cycle expires. Meanwhile, also ensuring integrations with existing Fleet management platforms.",
    keyPoints: [
      "Phase 1 interface implementation",
      "Direct IoT layer installations",
      "Seamless asset migration during subscription cycles",
      "Integration with existing fleet platforms",
      "Smooth transition management",
      "Minimal operational disruption",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    title: "Operational Efficiency",
    description:
      "Improved operational efficiency is a key outcome as Tracking is having availability across the KSA and defining an efficient SLA to ensure customer centric approach together with RTCC trucks for the clients.",
    keyPoints: [
      "KSA-wide service availability",
      "Efficient SLA implementation",
      "Customer-centric service approach",
      "Enhanced operational workflows",
      "Streamlined fleet management processes",
      "Optimized resource utilization",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Trophy className="w-8 h-8 text-green-600" />,
    title: "Competitive Advantages",
    description:
      "Gaining competitive advantages is a strategic outcome from effective business collaboration through modernized IoT platform, AI enabled features, operational efficiency and customer centric approach.",
    keyPoints: [
      "Modernized IoT platform differentiation",
      "AI-enabled feature advantages",
      "Superior operational efficiency",
      "Customer-centric service delivery",
      "Market leadership positioning",
      "Innovation-driven competitive edge",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
]

const SUCCESS_METRICS = [
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    metric: "Implementation Success",
    value: "100%",
    description: "Seamless phase 1 deployment",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    metric: "Operational Efficiency",
    value: "40%",
    description: "Improvement in fleet operations",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    metric: "Customer Satisfaction",
    value: "95%+",
    description: "Through customer-centric approach",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    metric: "Market Position",
    value: "Leading",
    description: "Competitive advantage achievement",
  },
]

export function Slide10Outcomes({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Anticipated Business Outcomes"
          subtitle="Strategic results from successful implementation and collaboration"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* Business Outcomes */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                <Target className="w-5 sm:w-7 h-5 sm:h-7 text-green-600" />
              </div>
              Key Business Outcomes
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {BUSINESS_OUTCOMES.map((outcome, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${outcome.color} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`inline-flex p-3 sm:p-4 ${outcome.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4`}>
                      {outcome.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{outcome.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{outcome.description}</p>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">Key Achievements:</h5>
                    {outcome.keyPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-5 sm:w-7 h-5 sm:h-7 text-purple-600" />
              </div>
              Expected Success Metrics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SUCCESS_METRICS.map((metric, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-3 sm:p-5 border">
                  <div className="inline-flex p-2 sm:p-3 bg-white rounded-lg shadow-sm mb-3 sm:mb-4">{metric.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{metric.value}</div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{metric.metric}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Impact */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Strategic Business Impact</h3>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95 mb-4 sm:mb-6">
                Through successful implementation, operational efficiency improvements, and competitive advantages, this
                strategic collaboration positions RTCC Trucks and Tracking KSA as market leaders in intelligent fleet
                management solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Seamless Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Enhanced Efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Market Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

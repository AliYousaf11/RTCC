import { Handshake, Cpu, TrendingUp, Star, ArrowRight, CheckCircle, Target } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const CONCLUSION_PILLARS = [
  {
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    title: "Strategic Collaboration",
    description:
      "Collaboration among stakeholders is crucial to successfully implement IoT and AI solutions in fleet management.",
    keyPoints: [
      "Stakeholder alignment and cooperation",
      "Shared expertise and resources",
      "Unified implementation approach",
      "Collaborative problem-solving",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    title: "Advanced Technology Integration",
    description: "Leveraging IoT and AI technologies enables smarter, efficient, and connected fleet operations.",
    keyPoints: [
      "Smart IoT sensor integration",
      "AI-powered analytics and insights",
      "Connected fleet ecosystem",
      "Efficient operational workflows",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "Operational Excellence and Growth",
    description:
      "Following a robust implementation plan helps achieve operational excellence and drives sustainable business growth.",
    keyPoints: [
      "Robust implementation methodology",
      "Operational excellence achievement",
      "Sustainable business growth",
      "Continuous improvement processes",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
]

const NEXT_STEPS = [
  "Partnership agreement finalization",
  "Technical team formation and planning",
  "Phase 1 implementation kickoff",
  "Pilot program initiation and testing",
]

export function Slide11Conclusion({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Conclusion"
          subtitle="Strategic partnership for transformative fleet management solutions"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* Conclusion Pillars */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                <Star className="w-5 sm:w-7 h-5 sm:h-7 text-green-600" />
              </div>
              Key Success Factors
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {CONCLUSION_PILLARS.map((pillar, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${pillar.color} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`inline-flex p-3 sm:p-4 ${pillar.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4`}>
                      {pillar.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{pillar.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">Key Elements:</h5>
                    {pillar.keyPoints.map((point, pointIndex) => (
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

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-4 sm:p-6 text-white shadow-lg mb-4 sm:mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Ready to Transform Fleet Management?</h3>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95 mb-4 sm:mb-6">
                Through strategic collaboration, advanced technology integration, and operational excellence, we're
                positioned to revolutionize the fleet management industry together.
              </p>

              {/* Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {NEXT_STEPS.map((step, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-xs sm:text-sm font-medium">{step}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl font-semibold">
                <Handshake className="w-5 sm:w-6 h-5 sm:h-6" />
                <span>Let's Begin This Transformative Journey</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

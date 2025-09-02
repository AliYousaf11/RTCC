import { Handshake, Target, Zap, Globe, TrendingUp, Users } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PARTNERSHIP_BENEFITS = [
  {
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    title: "Strategic Alliance",
    description: "Combining RTCC's fleet expertise with advanced tracking technology for market leadership",
  },
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Market Leadership",
    description: "Positioning as the premier IoT-enabled fleet management solution in the region",
  },
  {
    icon: <Zap className="w-6 h-6 text-green-600" />,
    title: "Innovation Acceleration",
    description: "Rapid development and deployment of next-generation fleet management features",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-600" />,
    title: "Market Expansion",
    description: "Leveraging combined networks and expertise for broader market reach",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    title: "Revenue Growth",
    description: "Accelerated revenue generation through innovative service offerings",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-600" />,
    title: "Customer Value",
    description: "Enhanced customer experience through integrated technology solutions",
  },
]

export function Partnership({ isActive }: SlideProps) {
  return (
    <SlideContainer>
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader
          title="Partnership Benefits"
          subtitle="Strategic collaboration unlocking unprecedented value in fleet management solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-h-96 overflow-y-auto">
          {PARTNERSHIP_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-50 rounded-lg">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center border">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Synergistic Value Creation</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Together, we're not just improving fleet management – we're defining the future of intelligent
            transportation systems and creating unprecedented value for our customers.
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}

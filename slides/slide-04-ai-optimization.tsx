import { Route, Wrench, Fuel, Users, Cpu, BarChart3, Target } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const AI_OPTIMIZATION = [
  {
    icon: <Route className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
    title: "Route Optimisation",
    description: "AI uses data to optimise vehicle routes, reducing travel time and fuel consumption for fleets.",
    features: [
      "Intelligent route planning algorithms",
      "Real-time traffic analysis",
      "Fuel consumption optimization",
      "Travel time reduction",
      "Dynamic route adjustments",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Wrench className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />,
    title: "Predictive Maintenance",
    description: "AI predicts vehicle maintenance needs by analysing IoT sensor data, preventing breakdowns.",
    features: [
      "IoT sensor data analysis",
      "Breakdown prevention strategies",
      "Maintenance scheduling optimization",
      "Cost reduction through prediction",
      "Vehicle reliability enhancement",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Fuel className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
    title: "Fuel Efficiency Improvement",
    description: "AI enhances fuel efficiency by analysing driving patterns and vehicle data to reduce costs.",
    features: [
      "Driving pattern analysis",
      "Vehicle performance optimization",
      "Fuel consumption monitoring",
      "Cost reduction strategies",
      "Environmental impact reduction",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />,
    title: "Driver Rankings",
    description:
      "AI provides drivers behaviour and rankings based on historic data and the violations based on the defined customized parameters.",
    features: [
      "Historic data analysis",
      "Behavior pattern recognition",
      "Customized parameter tracking",
      "Violation monitoring system",
      "Performance ranking system",
    ],
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
]

export function Slide04AIOptimization({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="The Role of Artificial Intelligence in Fleet Optimisation"
          subtitle="Leveraging AI for intelligent decision-making and operational excellence"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {AI_OPTIMIZATION.map((ai, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 sm:p-6 border-2 ${ai.color} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                  <div className={`p-2 sm:p-3 ${ai.iconBg} rounded-xl shadow-sm flex-shrink-0`}>{ai.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{ai.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{ai.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 sm:mb-3">AI Capabilities:</h4>
                  {ai.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Integration Summary */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI-Powered Fleet Intelligence</h3>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Data Analysis → AI Processing → Optimized Decisions for enhanced fleet performance, cost reduction, and
                operational efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

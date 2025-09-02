import { Clock, Users, TrendingUp, Target, Zap, Database, Wrench, Eye, RefreshCw, BarChart3 } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PHASED_DEPLOYMENT = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Pilot Testing Phase",
    description:
      "Initial rollout involves pilot testing to validate functionality and identify issues before wider deployment.",
    color: "bg-blue-50 border-l-blue-500",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: "Gradual Scaling",
    description: "Scaling up deployment gradually to manage resources efficiently and ensure system stability.",
    color: "bg-orange-50 border-l-orange-500",
  },
  {
    icon: <Target className="w-6 h-6 text-green-600" />,
    title: "Full Deployment",
    description: "Complete rollout of the system after successful testing and scaling to meet all operational goals.",
    color: "bg-green-50 border-l-green-500",
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: "Timeline Management",
    description:
      "Realistic timeline estimates are critical to track progress and allocate resources effectively throughout deployment.",
    color: "bg-purple-50 border-l-purple-500",
  },
]

const SYSTEM_INTEGRATION = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Seamless System Integration",
    description:
      "Integrating new solutions smoothly with existing systems reduces operational disruptions effectively.",
    color: "bg-blue-50 border-l-blue-500",
  },
  {
    icon: <Database className="w-6 h-6 text-orange-500" />,
    title: "Leveraging Existing Data",
    description: "Utilising existing data enhances decision-making and improves fleet management capabilities.",
    color: "bg-orange-50 border-l-orange-500",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    title: "Infrastructure Efficiency",
    description: "Maximising existing infrastructure ensures cost-effective and efficient fleet management upgrades.",
    color: "bg-green-50 border-l-green-500",
  },
]

const MONITORING_MAINTENANCE = [
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "System Monitoring",
    description:
      "Continuous system monitoring detects issues early to maintain smooth operation and high performance levels.",
    color: "bg-blue-50 border-l-blue-500",
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    title: "Regular Maintenance",
    description:
      "Scheduled maintenance prevents failures and extends system lifespan, ensuring reliable functionality.",
    color: "bg-orange-50 border-l-orange-500",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-green-600" />,
    title: "Feedback and Iteration",
    description:
      "Feedback loops enable iterative improvements, helping systems adapt to changing requirements effectively.",
    color: "bg-green-50 border-l-green-500",
  },
]

export function ImplementationDetails({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Implementation Roadmap and Operational Workflow"
          subtitle="Structured approach to deployment, integration, and continuous improvement"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* Phased Deployment Section */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              </div>
              Phased Deployment and Timeline Estimates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {PHASED_DEPLOYMENT.map((phase, index) => (
                <div key={index} className={`rounded-lg p-3 sm:p-4 border-l-4 ${phase.color} shadow-sm`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1 sm:p-2 bg-white rounded-lg shadow-sm">{phase.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{phase.title}</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Integration Section */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600" />
              </div>
              Integration with Existing Fleet Management Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {SYSTEM_INTEGRATION.map((integration, index) => (
                <div key={index} className={`rounded-lg p-3 sm:p-4 border-l-4 ${integration.color} shadow-sm`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1 sm:p-2 bg-white rounded-lg shadow-sm">{integration.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{integration.title}</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring and Maintenance Section */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
              </div>
              Monitoring, Maintenance, and Continuous Improvement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {MONITORING_MAINTENANCE.map((monitoring, index) => (
                <div key={index} className={`rounded-lg p-3 sm:p-4 border-l-4 ${monitoring.color} shadow-sm`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1 sm:p-2 bg-white rounded-lg shadow-sm">{monitoring.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{monitoring.title}</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{monitoring.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Success Framework */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Comprehensive Implementation Strategy</h3>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Pilot Testing → Gradual Scaling → Full Deployment → System Integration → Continuous Monitoring and
                Improvement for sustained operational excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

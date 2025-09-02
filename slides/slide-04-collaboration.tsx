import { Users, Cpu, Truck, Shield, BarChart3, Lock, FileText, Eye } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const KEY_STAKEHOLDERS = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "Technology Provider",
    description:
      "Technology provider supply vital tools and solutions that drive innovation and project success. Tracking will partner RTCC Trucks to provide technological advancements within their business offerings to create differentiation in the market segment.",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: "Fleet Operator",
    description:
      "Fleet operators manage vehicle operations ensuring efficiency and reliability in transportation. RTCC Trucks will utilize business expertise in providing the insights to enhance the functionalities and creating differentiation in the combined effort with Tracking.",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Regulatory Bodies",
    description:
      "Regulatory bodies establish rules and guidelines that maintain safety and compliance standards. RTCC Trucks and Tracking will work together for ensuring the compliance.",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    title: "Data Security & Analytical Experts",
    description:
      "Data security experts protect sensitive information ensuring privacy and data integrity. Tracking will provide periodic data analytics to enable RTCC business for timely decisions and to stand-out among the competition.",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
]

const RISK_MITIGATION_STRATEGIES = [
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Data Governance",
    description:
      "Establishing strong data governance frameworks ensures proper management and accountability of data assets.",
    color: "bg-blue-50 border-l-blue-500",
  },
  {
    icon: <Lock className="w-6 h-6 text-orange-500" />,
    title: "Cybersecurity Protocols",
    description: "Implementing cybersecurity protocols protects data from breaches and malicious threats.",
    color: "bg-orange-50 border-l-orange-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-green-600" />,
    title: "Data Ownership Agreements",
    description:
      "Clear agreements on data ownership and sharing build trust and clarify responsibilities among collaborators.",
    color: "bg-green-50 border-l-green-500",
  },
]

export function Slide04Collaboration({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Strategic Collaboration Framework"
          subtitle="Building partnerships for innovative fleet management solutions"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* Key Stakeholders Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 sm:w-7 h-5 sm:h-7 text-blue-600" />
              </div>
              Identifying Key Stakeholders and Partners
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {KEY_STAKEHOLDERS.map((stakeholder, index) => (
                <div key={index} className={`rounded-xl p-4 sm:p-5 border-2 ${stakeholder.color} shadow-sm`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 ${stakeholder.iconBg} rounded-xl shadow-sm`}>{stakeholder.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{stakeholder.title}</h4>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{stakeholder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Mitigation Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-red-100 rounded-lg">
                <Shield className="w-5 sm:w-7 h-5 sm:h-7 text-red-600" />
              </div>
              Risk Mitigation and Data Sharing Strategies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {RISK_MITIGATION_STRATEGIES.map((strategy, index) => (
                <div key={index} className={`rounded-lg p-4 sm:p-5 border-l-4 ${strategy.color} shadow-sm`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-white rounded-lg shadow-sm">{strategy.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">{strategy.title}</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Strategic Partnership Excellence</h3>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Through strategic collaboration between RTCC Trucks and Tracking KSA, we create a comprehensive
                ecosystem that leverages technology, expertise, compliance, and security to deliver unparalleled fleet
                management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

import { DollarSign, Package, Users, Cpu, BarChart3, Settings, Shield, Zap } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PRICING_TIERS = [
  {
    icon: <Package className="w-8 h-8 text-blue-600" />,
    title: "Standard Interface",
    subtitle: "Essential Fleet Tracking",
    description:
      "Standard features of the tracking platform including Live location, trip history, Geo-fencing, speed, etc",
    features: [
      "Live location tracking",
      "Trip history and reports",
      "Geo-fencing capabilities",
      "Speed monitoring",
      "Basic alerts and notifications",
      "Standard dashboard interface",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    tier: "Basic",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Semi-Advanced Interface",
    subtitle: "Enhanced Management Features",
    description:
      "All standard features of the tracking platform with addition of essential features, admin and sub-user accounts",
    features: [
      "All Standard Interface features",
      "Admin and sub-user accounts",
      "Advanced user management",
      "Enhanced reporting capabilities",
      "Multi-level access controls",
      "Extended analytics dashboard",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
    tier: "Professional",
  },
  {
    icon: <Cpu className="w-8 h-8 text-green-600" />,
    title: "Advanced Interface",
    subtitle: "AI-Enabled IoT Platform",
    description:
      "A modernized IoT platform with customized widgets, provision of customized dashboards for multiple user layers. A wide range of data analytics, provision of future scalable AI enabled use-case",
    features: [
      "All Semi-Advanced features",
      "Customized widgets and dashboards",
      "Multiple user layer interfaces",
      "Comprehensive data analytics",
      "AI-enabled predictive insights",
      "Future scalable AI use-cases",
      "Advanced IoT integration",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    tier: "Enterprise",
  },
]

const VALUE_PROPOSITIONS = [
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Scalable Solutions",
    description: "Flexible pricing tiers that grow with your business needs",
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    title: "Customization",
    description: "Tailored interfaces and features for specific operational requirements",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Future-Ready",
    description: "AI-enabled platform designed for tomorrow's fleet management challenges",
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    title: "Competitive Advantage",
    description: "Advanced technology stack providing market differentiation",
  },
]

export function Slide07Commercial({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Commercial Proposal and Value Proposition"
          subtitle="PHASE-1: Cost Structure, Pricing Models, and Interface Tiers"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* Pricing Tiers Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-5 sm:w-7 h-5 sm:h-7 text-green-600" />
              </div>
              Pricing Models and Interface Tiers
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {PRICING_TIERS.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${tier.color} shadow-sm hover:shadow-md transition-shadow relative`}
                >
                  {/* Tier Badge */}
                  <div className="absolute -top-3 left-4 sm:left-6">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-gray-700 shadow-sm border">
                      {tier.tier}
                    </span>
                  </div>

                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`inline-flex p-3 sm:p-4 ${tier.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4`}>
                      {tier.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{tier.title}</h4>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">{tier.subtitle}</p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">Key Features:</h5>
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Propositions */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-5 sm:w-7 h-5 sm:h-7 text-purple-600" />
              </div>
              Strategic Value Propositions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {VALUE_PROPOSITIONS.map((value, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-3 sm:p-5 border">
                  <div className="inline-flex p-2 sm:p-3 bg-white rounded-lg shadow-sm mb-3 sm:mb-4">{value.icon}</div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Summary */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Package className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold hidden sm:block">→</div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Cpu className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Flexible Commercial Framework</h3>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95">
                Three-tier pricing model designed to accommodate businesses of all sizes, from basic fleet tracking to
                advanced AI-enabled IoT platforms with comprehensive analytics and future scalability
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

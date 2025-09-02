import { Shield, Clock, Users, CheckCircle, Phone, Settings, AlertCircle, Headphones } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const SLA_COMPONENTS = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Reliability Assurance",
    description:
      "Support agreements guarantee system reliability through continuous monitoring and proactive maintenance.",
    features: [
      "99.9% system uptime guarantee",
      "24/7 continuous monitoring",
      "Proactive maintenance scheduling",
      "Real-time system health checks",
      "Automated backup and recovery",
      "Performance optimization",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: "Quick Issue Resolution",
    description:
      "Timely problem-solving is central to support packages, minimizing downtime and enhancing performance.",
    features: [
      "4-hour response time guarantee",
      "Priority ticket escalation",
      "Remote diagnostic capabilities",
      "On-site support when needed",
      "Issue tracking and reporting",
      "Root cause analysis",
    ],
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Ongoing Customer Service",
    description: "Continuous customer service maintains satisfaction and supports evolving system needs.",
    features: [
      "Dedicated account management",
      "Regular system reviews",
      "Training and onboarding support",
      "Feature updates and enhancements",
      "Business consultation services",
      "Scalability planning assistance",
    ],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
]

const SUPPORT_TIERS = [
  {
    tier: "Standard Support",
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    responseTime: "8 hours",
    availability: "Business Hours",
    channels: ["Email", "Portal"],
    color: "border-blue-500",
  },
  {
    tier: "Premium Support",
    icon: <Phone className="w-6 h-6 text-orange-500" />,
    responseTime: "4 hours",
    availability: "Extended Hours",
    channels: ["Email", "Phone", "Portal"],
    color: "border-orange-500",
  },
  {
    tier: "Enterprise Support",
    icon: <Headphones className="w-6 h-6 text-green-600" />,
    responseTime: "1 hour",
    availability: "24/7",
    channels: ["Email", "Phone", "Portal", "Dedicated Manager"],
    color: "border-green-500",
  },
]

export function Slide09SLA({ isActive }: SlideProps) {
  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Service Level Agreements and Support Packages"
          subtitle="Comprehensive support framework ensuring optimal system performance"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto">
          {/* SLA Components */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                <Shield className="w-5 sm:w-7 h-5 sm:h-7 text-blue-600" />
              </div>
              Service Level Agreement Components
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {SLA_COMPONENTS.map((component, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 sm:p-6 border-2 ${component.color} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`inline-flex p-3 sm:p-4 ${component.iconBg} rounded-xl shadow-sm mb-3 sm:mb-4`}>
                      {component.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{component.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{component.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2 sm:mb-3">Key Features:</h5>
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Tiers */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
                <Settings className="w-5 sm:w-7 h-5 sm:h-7 text-orange-600" />
              </div>
              Support Package Tiers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SUPPORT_TIERS.map((tier, index) => (
                <div key={index} className={`rounded-lg p-3 sm:p-5 border-l-4 ${tier.color} bg-gray-50 shadow-sm`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1 sm:p-2 bg-white rounded-lg shadow-sm">{tier.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">{tier.tier}</h4>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">Response Time:</span>
                      <div className="text-base sm:text-lg font-semibold text-gray-900">{tier.responseTime}</div>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">Availability:</span>
                      <div className="text-xs sm:text-sm text-gray-700">{tier.availability}</div>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">Support Channels:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tier.channels.map((channel, channelIndex) => (
                          <span
                            key={channelIndex}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white text-gray-700 rounded text-xs border"
                          >
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Commitment */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Our Service Commitment</h3>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto opacity-95 mb-4 sm:mb-6">
                We guarantee exceptional service delivery through comprehensive SLAs, ensuring your fleet management
                system operates at peak performance with minimal disruption to your business operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Dedicated Support Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

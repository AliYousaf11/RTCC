"use client"

import { useState, useEffect } from "react"
import { DollarSign, Package, Users, Cpu, Settings, Shield, CheckCircle, Star, TrendingUp, Award } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PRICING_TIERS = [
  {
    id: "standard",
    icon: <Package className="w-10 h-10 text-blue-600" />,
    title: "Standard Interface",
    subtitle: "Essential Fleet Tracking",
    badge: "Basic",
    description: "Perfect for small to medium fleets requiring core tracking capabilities",
    features: [
      "Real-time GPS tracking",
      "Trip history & reports",
      "Geo-fencing alerts",
      "Speed monitoring",
      "Basic notifications",
      "Standard dashboard",
      "Mobile app access",
      "24/7 support",
    ],
    highlights: ["Easy setup in 24 hours", "No technical expertise required", "Cost-effective solution"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    popular: false,
  },
  {
    id: "semi-advanced",
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Semi-Advanced Interface",
    subtitle: "Enhanced Management",
    badge: "Professional",
    description: "Ideal for growing businesses with multiple user requirements",
    features: [
      "All Standard features",
      "Multi-user management",
      "Admin & sub-user accounts",
      "Advanced reporting",
      "Role-based access control",
      "Extended analytics",
      "Custom alerts",
      "API integration",
    ],
    highlights: ["Scalable user management", "Advanced reporting suite", "Enhanced security features"],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    popular: true,
  },
  {
    id: "advanced",
    icon: <Cpu className="w-10 h-10 text-green-600" />,
    title: "Advanced Interface",
    subtitle: "AI-Enabled IoT Platform",
    badge: "Enterprise",
    description: "Complete solution for large enterprises requiring AI-powered insights",
    features: [
      "All Semi-Advanced features",
      "AI predictive analytics",
      "Custom dashboards",
      "IoT sensor integration",
      "Machine learning insights",
      "Predictive maintenance",
      "Advanced data visualization",
      "White-label options",
    ],
    highlights: ["Future-ready AI capabilities", "Unlimited customization", "Dedicated support team"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    popular: false,
  },
]

const VALUE_PROPOSITIONS = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "ROI Optimization",
    description: "Reduce operational costs by up to 25% through intelligent fleet management",
    metric: "25% Cost Reduction",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Risk Mitigation",
    description: "Advanced safety features and compliance monitoring for reduced liability",
    metric: "40% Fewer Incidents",
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-600" />,
    title: "Operational Efficiency",
    description: "Streamlined workflows and automated processes for maximum productivity",
    metric: "30% Time Savings",
  },
  {
    icon: <Award className="w-8 h-8 text-orange-600" />,
    title: "Competitive Edge",
    description: "Stay ahead with cutting-edge technology and industry-leading features",
    metric: "Market Leadership",
  },
]

export function CommercialProposal({ isActive }: SlideProps) {
  const [selectedTier, setSelectedTier] = useState<string>("semi-advanced")
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 300)
      const timer2 = setTimeout(() => setAnimationPhase(2), 800)
      const timer3 = setTimeout(() => setAnimationPhase(3), 1300)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isActive])

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Commercial Proposal & Value Proposition"
          subtitle="PHASE-1: Strategic Pricing Models & Business Value Framework"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-6">
          {/* Hero Section */}
          <div
            className={`bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Flexible Investment Framework</h2>
              </div>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                Three-tier commercial model designed to scale with your business growth, from essential tracking to
                AI-powered fleet optimization
              </p>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PRICING_TIERS.map((tier, index) => (
                <div
                  key={tier.id}
                  className={`relative bg-white rounded-2xl border-2 shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                    selectedTier === tier.id
                      ? `${tier.borderColor} ring-4 ring-opacity-50 transform scale-105 shadow-2xl`
                      : "border-gray-200 hover:border-gray-300"
                  } ${animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 ${tier.bgColor} rounded-2xl mb-4 transition-all duration-300 ${
                          selectedTier === tier.id ? "animate-bounce" : ""
                        }`}
                      >
                        {tier.icon}
                      </div>
                      <div className="mb-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tier.bgColor} ${tier.borderColor} border`}
                        >
                          {tier.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                      <p className="text-sm font-medium text-gray-600 mb-3">{tier.subtitle}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{tier.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <div className="space-y-2">
                        {tier.features
                          .slice(0, selectedTier === tier.id ? tier.features.length : 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className={`flex items-start gap-3 transition-all duration-300 ${
                                selectedTier === tier.id ? "translate-x-0 opacity-100" : "translate-x-1 opacity-90"
                              }`}
                              style={{ transitionDelay: `${featureIndex * 50}ms` }}
                            >
                              <CheckCircle
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                  selectedTier === tier.id ? "text-green-500" : "text-gray-400"
                                }`}
                              />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        {selectedTier !== tier.id && tier.features.length > 4 && (
                          <div className="text-center pt-2">
                            <span className="text-xs text-gray-500">+{tier.features.length - 4} more features</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div
                      className={`space-y-2 transition-all duration-500 ${
                        selectedTier === tier.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <h4 className="font-semibold text-gray-900 text-sm">Key Highlights:</h4>
                      {tier.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-600 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Selection Indicator */}
                    <div
                      className={`mt-6 text-center transition-all duration-300 ${
                        selectedTier === tier.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${tier.color} text-white rounded-full`}
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Selected Package</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Propositions */}
          <div
            className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Business Value</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Measurable returns and competitive advantages through our comprehensive fleet management solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUE_PROPOSITIONS.map((value, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl border cursor-pointer transition-all duration-500 hover:shadow-lg ${
                    hoveredValue === index
                      ? "transform scale-105 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
                      : "bg-gray-50 border-gray-200"
                  } ${animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div
                    className={`inline-flex p-4 bg-white rounded-xl shadow-sm mb-4 transition-all duration-300 ${
                      hoveredValue === index ? "rotate-6 scale-110" : ""
                    }`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{value.description}</p>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                      hoveredValue === index
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {value.metric}
                  </div>

                  {/* Progress indicator */}
                  <div
                    className={`mt-4 h-1 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 ${
                      hoveredValue === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ${
                        hoveredValue === index ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Fleet Operations?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                Join leading companies in Saudi Arabia who trust RTCC for their fleet management needs. Start with any
                tier and scale as your business grows.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Scalable Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { DollarSign, Package, Users, Cpu, CheckCircle, Star, Zap, Crown, Shield } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PRICING_PACKAGES = [
  {
    id: "standard",
    icon: <Package className="w-10 h-10 text-blue-600" />,
    title: "Standard Interface",
    subtitle: "Essential Fleet Management",
    badge: "Basic",
    description: "Perfect for small to medium fleets requiring core tracking capabilities with RTCC white labelling.",
    features: [
      "Real-time GPS tracking",
      "Trip history & reports",
      "Geo-fencing alerts",
      "Speed monitoring",
      "Basic notifications",
      "Standard dashboard",
      "Mobile app access",
      "RTCC white labelling",
      "24/7 email support",
    ],
    setupCost: 250000,
    annualCostPerAsset: 100,
    popular: false,
    gradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-300",
  },
  {
    id: "semi-standard",
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Semi-Standard Interface",
    subtitle: "Enhanced Management Features",
    badge: "Professional",
    description:
      "Ideal for growing businesses with multiple user requirements, advanced reporting and RTCC white labelling.",
    features: [
      "All Standard features",
      "Multi-user management",
      "Admin & sub-user accounts",
      "Advanced reporting suite",
      "Role-based access control",
      "Extended analytics dashboard",
      "Custom alerts & triggers",
      "RTCC white labelling",
      "Dedicated phone support",
    ],
    setupCost: 750000,
    annualCostPerAsset: 140,
    popular: true,
    gradient: "from-orange-50 to-orange-100",
    borderColor: "border-orange-300",
  },
  {
    id: "advanced",
    icon: <Cpu className="w-10 h-10 text-green-600" />,
    title: "Advanced Interface",
    subtitle: "AI-Enabled IoT Platform",
    badge: "Enterprise",
    description:
      "Scalable version with futuristic advancements and AI-enabled development for 2nd phase deployment with RTCC white labelling.",
    features: [
      "All Semi-Standard features",
      "AI predictive analytics",
      "Customizable widgets & dashboards",
      "IoT sensor integration",
      "Machine learning insights",
      "Predictive maintenance",
      "Advanced data visualization",
      "RTCC white labelling",
      "Scalable architecture",
      "Phase 2 AI deployment ready",
      "24/7 priority support",
    ],
    setupCost: 1500000,
    annualCostPerAsset: 180,
    popular: false,
    gradient: "from-green-50 to-green-100",
    borderColor: "border-green-300",
  },
]

export function CommercialProposalWithoutValue({ isActive }: SlideProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(PRICING_PACKAGES[1].id)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 300)
      const timer2 = setTimeout(() => setAnimationPhase(2), 800)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [isActive])

  const formatCurrency = (amount: number) => {
    return `SR ${amount.toLocaleString()}`
  }

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="COMMERCIAL PROPOSAL"
          subtitle="Comprehensive Pricing Structure & Investment Details (Excluding VAT)"
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
                <h2 className="text-2xl sm:text-3xl font-bold">Fleet Management Investment Options</h2>
              </div>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                Three comprehensive packages designed to meet diverse fleet management needs, all featuring RTCC white
                labelling
              </p>
            </div>
          </div>

          {/* Key Highlights Banner */}
          <div
            className={`bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border-2 border-green-200 transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-800">All Prices Exclude VAT</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-purple-800">RTCC White Labelling Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-600" />
                <span className="font-semibold text-orange-800">Advanced Interface: Phase 2 Ready</span>
              </div>
            </div>
          </div>

          {/* Pricing Packages */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PRICING_PACKAGES.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className={`relative bg-gradient-to-br ${pkg.gradient} rounded-2xl border-2 shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                    selectedPackage === pkg.id
                      ? `${pkg.borderColor} ring-4 ring-opacity-50 ${pkg.borderColor.replace("border-", "ring-")} transform scale-105 shadow-2xl`
                      : "border-gray-200 hover:border-gray-300"
                  } ${animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Selected Indicator */}
                  {selectedPackage === pkg.id && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 bg-white/80 rounded-2xl mb-4 shadow-lg transition-all duration-300 ${
                          selectedPackage === pkg.id ? "animate-bounce" : ""
                        }`}
                      >
                        {pkg.icon}
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-gray-200 shadow-sm">
                          {pkg.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                      <p className="text-sm font-medium text-gray-700 mb-3">{pkg.subtitle}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{pkg.description}</p>
                    </div>

                    {/* Pricing Display */}
                    <div className="bg-white/90 rounded-xl p-6 mb-6 shadow-lg border border-white/50">
                      <div className="text-center">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 font-medium">Setup Cost (One-time)</p>
                          <p className="text-3xl font-bold text-gray-900">{formatCurrency(pkg.setupCost)}</p>
                          <p className="text-xs text-gray-500">without VAT</p>
                        </div>
                        <div className="border-t pt-4">
                          <p className="text-sm text-gray-600 font-medium">Annual Subscription</p>
                          <p className="text-2xl font-bold text-gray-900">{formatCurrency(pkg.annualCostPerAsset)}</p>
                          <p className="text-xs text-gray-500">per asset per year</p>
                        </div>
                      </div>
                    </div>

                    {/* Cost Examples */}
                    <div className="bg-white/70 rounded-lg p-4 mb-6 border border-white/50">
                      <p className="text-sm font-semibold text-gray-800 mb-3 text-center">Annual Cost Examples:</p>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-blue-50 p-2 rounded">
                          <p className="font-medium text-blue-800">50 Assets</p>
                          <p className="text-blue-600">{formatCurrency(pkg.annualCostPerAsset * 50)}</p>
                        </div>
                        <div className="bg-orange-50 p-2 rounded">
                          <p className="font-medium text-orange-800">100 Assets</p>
                          <p className="text-orange-600">{formatCurrency(pkg.annualCostPerAsset * 100)}</p>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <p className="font-medium text-green-800">200 Assets</p>
                          <p className="text-green-600">{formatCurrency(pkg.annualCostPerAsset * 200)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {pkg.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`flex items-start gap-3 transition-all duration-300 ${
                              selectedPackage === pkg.id ? "translate-x-0 opacity-100" : "translate-x-1 opacity-90"
                            }`}
                            style={{ transitionDelay: `${featureIndex * 50}ms` }}
                          >
                            <CheckCircle
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                selectedPackage === pkg.id ? "text-green-500" : "text-gray-400"
                              }`}
                            />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Selection Button */}
                    <div className="mt-6">
                      <button
                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                          selectedPackage === pkg.id
                            ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg"
                            : "bg-white/80 text-gray-700 border border-gray-300 hover:bg-white"
                        }`}
                      >
                        {selectedPackage === pkg.id ? "Selected Package" : "Select Package"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Interface Special Highlight */}
          <div
            className={`bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-full animate-pulse">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="p-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Advanced Interface: Future-Ready Investment</h3>
              <p className="text-lg opacity-95 mb-6 max-w-4xl mx-auto leading-relaxed">
                The Advanced Interface features a scalable architecture with futuristic advancements and AI-enabled
                development, specifically designed for Phase 2 deployment and future technological evolution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <Cpu className="w-5 h-5" />
                  <span className="font-medium">AI Integration Ready</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <Package className="w-5 h-5" />
                  <span className="font-medium">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Phase 2 Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

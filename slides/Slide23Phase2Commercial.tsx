"use client"

import { useState, useEffect } from "react"
import {
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Database,
  Award,
  Briefcase,
  Brain,
  Star,
} from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PHASE2_COMMERCIAL_STRUCTURE = {
  developmentCost: 3500000,
  implementationCost: 0, // Included in development
  annualLicensing: 0, // Included in AMC
  supportMaintenance: 600000, // AMC
  trainingCost: 0, // Included in development
  totalFirstYear: 3500000,
  subsequentYears: 600000,
}

const AI_USE_CASES = [
  {
    title: "AI Chatbot for Fleet Operations",
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    description: "Intelligent conversational interface for fleet management",
    features: ["Natural language queries", "Real-time fleet insights", "Automated reporting", "24/7 availability"],
    investment: "SR 600,000",
    roi: "18 months",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "AI-Based Dashcams & Computer Vision",
    icon: <Shield className="w-8 h-8 text-green-600" />,
    description: "Advanced driver monitoring and safety analytics",
    features: ["Real-time driver monitoring", "Incident detection", "Safety scoring", "Behavioral analysis"],
    investment: "SR 800,000",
    roi: "12 months",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Predictive Analytics & Maintenance",
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    description: "AI-powered predictive maintenance and optimization",
    features: ["Failure prediction", "Maintenance scheduling", "Cost optimization", "Performance analytics"],
    investment: "SR 700,000",
    roi: "15 months",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Advanced IoT Sensor Integration",
    icon: <Cpu className="w-8 h-8 text-orange-600" />,
    description: "Comprehensive IoT ecosystem for fleet intelligence",
    features: ["Multi-sensor integration", "Real-time monitoring", "Environmental tracking", "Asset management"],
    investment: "SR 900,000",
    roi: "20 months",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Historic Data Analytics & Intelligence",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    description: "Comprehensive fleet intelligence through data analysis",
    features: ["Historic data mining", "Pattern recognition", "Performance benchmarking", "Strategic insights"],
    investment: "SR 500,000",
    roi: "12 months",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

const TECH_PARTNERSHIP_BENEFITS = [
  {
    title: "Data Analytics Leadership",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    description: "Advanced analytics capabilities creating competitive differentiation",
    benefits: [
      "Proprietary analytics algorithms",
      "Custom reporting solutions",
      "Predictive intelligence models",
      "Real-time decision support",
    ],
    value: "Market Leadership",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Business Differentiation",
    icon: <Star className="w-8 h-8 text-green-600" />,
    description: "Unique value propositions for RTCC's client offerings",
    benefits: [
      "AI-powered fleet insights",
      "Predictive maintenance services",
      "Advanced driver analytics",
      "Custom intelligence dashboards",
    ],
    value: "Competitive Advantage",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Technology Innovation",
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    description: "Cutting-edge technology stack and continuous innovation",
    benefits: [
      "Latest AI/ML technologies",
      "Scalable cloud architecture",
      "Continuous feature updates",
      "Future-ready platform",
    ],
    value: "Innovation Leadership",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Strategic Partnership",
    icon: <Briefcase className="w-8 h-8 text-orange-600" />,
    description: "Long-term technology partnership for sustained growth",
    benefits: [
      "Dedicated development team",
      "Priority support & maintenance",
      "Custom feature development",
      "Strategic technology roadmap",
    ],
    value: "Long-term Growth",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
]

const IMPLEMENTATION_TIMELINE = [
  {
    phase: "Planning & Architecture",
    duration: "2 months",
    cost: "SR 400,000",
    activities: ["Requirements analysis", "System architecture", "Technology selection", "Team formation"],
    deliverables: ["Technical specifications", "Architecture design", "Project roadmap"],
  },
  {
    phase: "AI Development & Integration",
    duration: "8 months",
    cost: "SR 2,100,000",
    activities: ["AI model development", "System integration", "Testing & validation", "Performance optimization"],
    deliverables: ["AI models", "Integrated platform", "Test results", "Performance metrics"],
  },
  {
    phase: "Deployment & Training",
    duration: "3 months",
    cost: "SR 600,000",
    activities: ["System deployment", "User training", "Documentation", "Go-live support"],
    deliverables: ["Live system", "Training materials", "User documentation", "Support framework"],
  },
  {
    phase: "Optimization & Handover",
    duration: "1 month",
    cost: "SR 400,000",
    activities: ["Performance tuning", "Knowledge transfer", "Support setup", "Final optimization"],
    deliverables: ["Optimized system", "Knowledge base", "Support procedures", "Maintenance plan"],
  },
]

const ROI_PROJECTIONS = [
  {
    year: "Year 1",
    investment: 3500000,
    savings: 1400000,
    netROI: -2100000,
    cumulativeROI: -2100000,
    color: "text-red-600",
  },
  {
    year: "Year 2",
    investment: 600000,
    savings: 3500000,
    netROI: 2900000,
    cumulativeROI: 800000,
    color: "text-green-600",
  },
  {
    year: "Year 3",
    investment: 600000,
    savings: 4200000,
    netROI: 3600000,
    cumulativeROI: 4400000,
    color: "text-green-600",
  },
  {
    year: "Year 4",
    investment: 600000,
    savings: 4900000,
    netROI: 4300000,
    cumulativeROI: 8700000,
    color: "text-green-600",
  },
  {
    year: "Year 5",
    investment: 600000,
    savings: 5600000,
    netROI: 5000000,
    cumulativeROI: 13700000,
    color: "text-green-600",
  },
]

export function Slide23Phase2Commercial({ isActive }: SlideProps) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [selectedUseCase, setSelectedUseCase] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 300)
      const timer2 = setTimeout(() => setAnimationPhase(2), 800)
      const timer3 = setTimeout(() => setAnimationPhase(3), 1300)
      const timer4 = setTimeout(() => setAnimationPhase(4), 1800)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    }
  }, [isActive])

  const formatCurrency = (amount: number) => {
    return `SR ${amount.toLocaleString()}`
  }

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="PHASE 2: COMMERCIAL PLAN"
          subtitle="Strategic AI Investment & Technology Partnership Framework"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Commercial Overview */}
          <div
            className={`bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Phase 2 Investment Framework</h2>
                </div>
                <p className="text-xl opacity-95 max-w-4xl mx-auto">
                  Comprehensive AI-enabled fleet intelligence platform with strategic technology partnership delivering
                  competitive differentiation and market leadership
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <div className="p-3 bg-blue-600 rounded-full w-fit mx-auto mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Total Investment</h4>
                  <p className="text-2xl font-bold mb-1">
                    {formatCurrency(PHASE2_COMMERCIAL_STRUCTURE.totalFirstYear)}
                  </p>
                  <p className="text-sm opacity-90">Complete AI platform development</p>
                </div>

                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <div className="p-3 bg-green-600 rounded-full w-fit mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">AMC</h4>
                  <p className="text-2xl font-bold mb-1">
                    {formatCurrency(PHASE2_COMMERCIAL_STRUCTURE.supportMaintenance)}
                  </p>
                  <p className="text-sm opacity-90">Maintenance & support</p>
                </div>

                {/* <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <div className="p-3 bg-purple-600 rounded-full w-fit mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Break-even</h4>
                  <p className="text-2xl font-bold mb-1">18 Months</p>
                  <p className="text-sm opacity-90">Positive ROI achievement</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* AI Use Cases */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5 AI Use Cases Investment</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Comprehensive AI solutions delivering transformational fleet intelligence capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {AI_USE_CASES.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedUseCase(index)}
                  className={`${useCase.bgColor} rounded-2xl p-6 border-2 transition-all duration-500 text-left ${
                    selectedUseCase === index
                      ? "border-current scale-105 shadow-xl"
                      : "border-transparent hover:border-gray-300 hover:shadow-lg"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-lg">{useCase.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{useCase.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{useCase.description}</p>
                      {/* <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-gray-900">{useCase.investment}</div>
                        <div className="text-sm text-green-600 font-semibold">ROI: {useCase.roi}</div>
                      </div> */}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Use Case Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-3">
                    {AI_USE_CASES[selectedUseCase].icon}
                    {AI_USE_CASES[selectedUseCase].title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{AI_USE_CASES[selectedUseCase].description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {AI_USE_CASES[selectedUseCase].investment}
                      </div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div> */}
                    {/* <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 mb-1">{AI_USE_CASES[selectedUseCase].roi}</div>
                      <div className="text-sm text-gray-600">ROI Timeline</div>
                    </div> */}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">Key Features & Capabilities:</h5>
                  <div className="space-y-3">
                    {AI_USE_CASES[selectedUseCase].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partnership Benefits */}
          <div
            className={`transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technology Partnership Value</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Strategic partnership delivering data analytics leadership and business differentiation for RTCC
                clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TECH_PARTNERSHIP_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className={`${benefit.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-current transition-all duration-300 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-lg">{benefit.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{benefit.title}</h4>
                        <div className="text-sm font-semibold text-purple-600 bg-white px-3 py-1 rounded-full">
                          {benefit.value}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{benefit.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {benefit.benefits.map((item, bIndex) => (
                      <div key={bIndex} className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Timeline */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Clock className="w-8 h-8 text-purple-600" />
                Implementation Plan
              </h3>
              {/* <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Structured deployment timeline with clear milestones and deliverables
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {IMPLEMENTATION_TIMELINE.map((phase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full text-white font-bold mb-3">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">{phase.phase}</h4>
                    {/* <p className="text-xs text-gray-600 mb-2">{phase.duration}</p> */}
                    {/* <p className="text-sm font-semibold text-purple-600">{phase.cost}</p> */}
                  </div>

                  <div className="space-y-2 mb-4">
                    <h5 className="font-semibold text-gray-900 text-xs">Activities:</h5>
                    {phase.activities.map((activity, aIndex) => (
                      <div key={aIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 text-xs">Deliverables:</h5>
                    {phase.deliverables.map((deliverable, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <Target className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Projections */}
          {/* <div
            className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-700 ${
              animationPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} */}
          {/* > */}
            {/* <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
                5-Year ROI Projections
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Detailed financial projections showing break-even point and long-term profitability
              </p>
            </div> */}

            {/* <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Year</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Investment</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Savings</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Net ROI</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">Cumulative ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {ROI_PROJECTIONS.map((projection, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold text-gray-900">Year {index + 1}</td>
                      <td className="py-4 px-4 text-right text-red-600 font-medium">
                        {formatCurrency(projection.investment)}
                      </td>
                      <td className="py-4 px-4 text-right text-green-600 font-medium">
                        {formatCurrency(projection.savings)}
                      </td>
                      <td className={`py-4 px-4 text-right font-bold ${projection.color}`}>
                        {formatCurrency(projection.netROI)}
                      </td>
                      <td className={`py-4 px-4 text-right font-bold ${projection.color}`}>
                        {formatCurrency(projection.cumulativeROI)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}

            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Break-even Point</h4>
                <p className="text-2xl font-bold text-blue-600">Month 18</p>
                <p className="text-blue-700 text-sm mt-1">Positive cumulative ROI achieved</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">5-Year Total ROI</h4>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(13700000)}</p>
                <p className="text-green-700 text-sm mt-1">Cumulative return on investment</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">Average Annual ROI</h4>
                <p className="text-2xl font-bold text-purple-600">285%</p>
                <p className="text-purple-700 text-sm mt-1">Years 2-5 average return</p>
              </div>
            </div> */}
          {/* </div> */}

          {/* Strategic Value Proposition */}
          <div
            className={`bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
              animationPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Strategic Partnership Value</h3>
              <p className="text-xl opacity-95 mb-8 max-w-4xl mx-auto leading-relaxed">
                As your technology partner, we provide advanced data analytics capabilities that create significant
                business differentiation for RTCC's client offerings, positioning you as the market leader in
                AI-enabled fleet intelligence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <Database className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-bold text-xl mb-2">Analytics Leadership</h4>
                  <p className="opacity-90">Proprietary data analytics creating unique client value</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold text-xl mb-2">Market Differentiation</h4>
                  <p className="opacity-90">Unique AI capabilities setting RTCC apart from competitors</p>
                </div>
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-bold text-xl mb-2">Client Success</h4>
                  <p className="opacity-90">Enhanced client outcomes through advanced intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

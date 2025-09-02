"use client"

import { Cpu, Users, Cog, MapPin, DollarSign, Wifi, BarChart3, Clock, Target } from "lucide-react"
import { useState } from "react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import { InteractiveCard } from "../components/ui/interactive-card"
import type { SlideProps } from "../types/slide"

const OVERVIEW_SECTIONS = [
  {
    id: "iot-ai",
    icon: <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
    title: "Overview of IoT and AI in Fleet Management",
    description:
      "Exploring how Internet of Things and Artificial Intelligence technologies revolutionize fleet operations through real-time monitoring, predictive analytics, and intelligent automation.",
    highlights: ["Real-time connectivity", "Predictive maintenance", "Smart analytics", "Driver behaviour monitoring"],
    color: "border-blue-500 bg-blue-50",
    iconBg: "bg-blue-100",
    details: [
      "IoT sensors for real-time data collection",
      "Machine-learning algorithms for pattern recognition",
      "Cloud computing for scalable processing",
      "Mobile apps for user interaction",
    ],
  },
  {
    id: "collaboration",
    icon: <Users className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />,
    title: "Strategic Collaboration Framework",
    description:
      "Defining the partnership structure between RTCC and Tracking KSA to leverage combined expertise, resources, and market presence for mutual growth and innovation.",
    highlights: ["Joint development", "Shared resources", "Market expansion", "Innovation synergy"],
    color: "border-orange-500 bg-orange-50",
    iconBg: "bg-orange-100",
    details: [
      "Combined market expertise and reach",
      "Shared development costs and risks",
      "Accelerated time-to-market",
      "Enhanced competitive positioning",
    ],
  },
  {
    id: "architecture",
    icon: <Cog className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />,
    title: "System Architecture and Technological Components",
    description:
      "Comprehensive technical framework including IoT sensors, AI engines, cloud infrastructure, mobile applications, and integration protocols for seamless fleet management.",
    highlights: ["IoT sensor network", "AI analytics engine", "Cloud platform", "Mobile interfaces"],
    color: "border-green-500 bg-green-50",
    iconBg: "bg-green-100",
    details: [
      "Device layer – IoT sensors & hardware",
      "Connectivity layer – network protocols",
      "Data layer – AI & analytics",
      "Application layer – user interfaces",
    ],
  },
  {
    id: "implementation",
    icon: <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />,
    title: "Implementation Roadmap and Operational Workflow",
    description:
      "Detailed 12-month implementation plan with clear phases, milestones, and operational workflows to ensure successful deployment and adoption of the fleet management system.",
    highlights: ["4-phase implementation", "12-month timeline", "Operational workflows", "Success metrics"],
    color: "border-purple-500 bg-purple-50",
    iconBg: "bg-purple-100",
    details: [
      "Phase 1: Foundation & Planning (M1-2)",
      "Phase 2: Development & Integration (M3-6)",
      "Phase 3: Testing & Validation (M7-9)",
      "Phase 4: Launch & Scale (M10-12)",
    ],
  },
  {
    id: "commercial",
    icon: <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 text-teal-600" />,
    title: "Commercial Proposal and Value Proposition",
    description:
      "Comprehensive business case demonstrating ROI, cost savings, efficiency gains, and competitive advantages through the strategic implementation of IoT and AI technologies.",
    highlights: ["25-30% cost reduction", "40% efficiency gain", "ROI analysis", "Market differentiation"],
    color: "border-teal-500 bg-teal-50",
    iconBg: "bg-teal-100",
    details: [
      "25-30% reduction in operational costs",
      "40% improvement in fleet efficiency",
      "50% reduction in maintenance costs",
      "60% improvement in route optimisation",
    ],
  },
]

export function Slide02Overview({ isActive }: SlideProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <SlideContainer className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <SlideHeader
          title="Overview"
          subtitle="Strategic Collaboration for IoT-Based and AI-Enabled Fleet Management System"
          className="mb-6 sm:mb-8"
        />

        <div className="flex-1 space-y-10 sm:space-y-4 md:space-y-6 overflow-y-auto">
          {OVERVIEW_SECTIONS.map((sec, idx) => (
            <InteractiveCard
              key={sec.id}
              title={sec.title}
              icon={sec.icon}
              color={sec.color}
              iconBg={sec.iconBg}
              isSelected={selectedId === sec.id}
              forceExpand={selectedId === sec.id} // expand when selected
              onClick={() => setSelectedId(selectedId === sec.id ? null : sec.id)}
              className="animate-slide-in-right"
              style={{ animationDelay: `${idx * 150}ms` } as any}
              expandableContent={
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                  {sec.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              }
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{sec.description}</p>
              <div className="flex flex-wrap gap-2">
                {sec.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Bottom summary unchanged */}
        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-4 sm:p-6 text-white text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Wifi className="w-5 sm:w-6 h-5 sm:h-6 animate-bounce delay-200" />
            <BarChart3 className="w-5 sm:w-6 h-5 sm:h-6 animate-bounce delay-400" />
            <Clock className="w-5 sm:w-6 h-5 sm:h-6 animate-bounce delay-600" />
            <Target className="w-5 sm:w-6 h-5 sm:h-6 animate-bounce delay-800" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Comprehensive Fleet Management Solution</h3>
          <p className="text-sm sm:text-lg opacity-90">
            Integrating cutting-edge technology with strategic partnership for unprecedented fleet optimisation
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}

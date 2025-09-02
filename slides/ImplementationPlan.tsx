"use client"

import { Calendar, CheckCircle, Clock, Users, Wrench, Rocket } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"
import { useState, useEffect } from "react"

const IMPLEMENTATION_PHASES = [
  {
    phase: "Phase 1",
    title: "Foundation & Planning",
    duration: "Months 1-2",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-200",
    tasks: [
      "Partnership agreement finalization and legal framework",
      "Technical architecture design and system specifications",
      "Team formation and resource allocation planning",
      "Initial prototype development and proof of concept",
    ],
  },
  {
    phase: "Phase 2",
    title: "Development & Integration",
    duration: "Months 3-6",
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-200",
    tasks: [
      "IoT sensor integration and hardware deployment",
      "AI analytics engine development and training",
      "Mobile application creation for drivers and managers",
      "Cloud infrastructure setup and security implementation",
    ],
  },
  {
    phase: "Phase 3",
    title: "Testing & Validation",
    duration: "Months 7-9",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    color: "bg-green-50 border-green-200",
    tasks: [
      "Pilot program implementation with select fleet partners",
      "Performance optimization and system fine-tuning",
      "Comprehensive security testing and validation",
      "User training programs and documentation creation",
    ],
  },
  {
    phase: "Phase 4",
    title: "Launch & Scale",
    duration: "Months 10-12",
    icon: <Rocket className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-200",
    tasks: [
      "Full market launch and go-to-market strategy execution",
      "Customer onboarding and support system deployment",
      "Continuous improvement and feature enhancement",
      "Market expansion planning and partnership development",
    ],
  },
]

export function ImplementationPlan({ isActive }: SlideProps) {
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const [progressAnimation, setProgressAnimation] = useState(0)

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setProgressAnimation(1), 300)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  return (
    <SlideContainer>
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader
          title="Implementation Roadmap"
          subtitle="Strategic phased approach ensuring successful project delivery and market penetration"
        />

        <div className="overflow-y-auto h-80 -mx-4 mb-4">
          <div className="flex flex-col gap-4 px-4">
            {IMPLEMENTATION_PHASES.map((phase, index) => (
              <div
                key={index}
                className={`min-w-[280px] md:min-w-0 rounded-xl p-4 shadow-lg border-2 ${phase.color} cursor-pointer transition-all duration-500 hover:shadow-xl ${activePhase === index ? "ring-4 ring-blue-300 transform scale-105" : "hover:scale-102"
                  } ${progressAnimation >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setActivePhase(activePhase === index ? null : index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${activePhase === index ? "rotate-12 scale-110" : ""
                      }`}
                  >
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                    <p className="text-xs text-gray-600 flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </p>
                  </div>

                  {/* Phase indicator */}
                  <div
                    className={`ml-auto transition-all duration-300 ${activePhase === index ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className={`flex items-start gap-2 text-xs text-gray-700 transition-all duration-300 ${activePhase === index ? "translate-x-0 opacity-100" : "translate-x-2 opacity-80"
                        }`}
                      style={{ transitionDelay: `${taskIndex * 100}ms` }}
                    >
                      <CheckCircle
                        className={`w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 transition-all duration-300 ${activePhase === index ? "animate-bounce" : ""
                          }`}
                      />
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div
                  className={`mt-6 transition-all duration-500 ${activePhase === index ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{Math.round((index + 1) * 25)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ${activePhase === index ? "w-full" : "w-0"
                        }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center border transition-all duration-700 ${progressAnimation >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar
              className={`w-8 h-8 text-blue-600 transition-all duration-500 ${progressAnimation >= 1 ? "animate-bounce" : ""
                }`}
            />
            <h3 className="text-2xl font-bold text-gray-900">12-Month Delivery Timeline</h3>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Structured approach with clear milestones, deliverables, and success metrics for successful project
            execution and market launch.
          </p>

          {/* Timeline visualization */}
          <div
            className={`mt-6 flex items-center justify-center gap-4 transition-all duration-1000 ${progressAnimation >= 1 ? "opacity-100" : "opacity-0"
              }`}
          >
            {IMPLEMENTATION_PHASES.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full bg-blue-500 animate-pulse`}
                  style={{ animationDelay: `${index * 300}ms` }}
                ></div>
                {index < IMPLEMENTATION_PHASES.length - 1 && <div className="w-12 h-0.5 bg-blue-300 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

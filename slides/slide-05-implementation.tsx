import { Calendar, CheckCircle, Clock, Users, Wrench, Rocket } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

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

export function Slide05Implementation({ isActive }: SlideProps) {
  return (
    <SlideContainer>
      <div className="max-w-7xl mx-auto w-full">
        <SlideHeader
          title="Implementation Roadmap"
          subtitle="Strategic phased approach ensuring successful project delivery and market penetration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {IMPLEMENTATION_PHASES.map((phase, index) => (
            <div key={index} className={`rounded-xl p-6 shadow-lg border-2 ${phase.color}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  {phase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4" />
                    {phase.duration}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center border">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">12-Month Delivery Timeline</h3>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Structured approach with clear milestones, deliverables, and success metrics for successful project
            execution and market launch.
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}

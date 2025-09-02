import { Calendar, CheckCircle, Clock } from "lucide-react"

export function ImplementationSlide() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Planning",
      duration: "Months 1-2",
      tasks: [
        "Partnership agreement finalization",
        "Technical architecture design",
        "Team formation and resource allocation",
        "Initial prototype development",
      ],
    },
    {
      phase: "Phase 2",
      title: "Development & Integration",
      duration: "Months 3-6",
      tasks: [
        "IoT sensor integration",
        "AI analytics engine development",
        "Mobile application creation",
        "Cloud infrastructure setup",
      ],
    },
    {
      phase: "Phase 3",
      title: "Testing & Deployment",
      duration: "Months 7-9",
      tasks: [
        "Pilot program with select fleets",
        "Performance optimization",
        "Security testing and validation",
        "User training and documentation",
      ],
    },
    {
      phase: "Phase 4",
      title: "Launch & Scale",
      duration: "Months 10-12",
      tasks: ["Full market launch", "Customer onboarding", "Continuous improvement", "Market expansion planning"],
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center px-12 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Implementation Roadmap</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Strategic phased approach ensuring successful project delivery and market penetration
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {phase.duration}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">12-Month Delivery Timeline</h3>
          </div>
          <p className="text-gray-700">
            Structured approach with clear milestones and deliverables for successful project execution
          </p>
        </div>
      </div>
    </div>
  )
}

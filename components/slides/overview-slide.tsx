import { Truck, Cpu, Wifi, BarChart3 } from "lucide-react"

export function OverviewSlide() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fleet Management",
      description: "Comprehensive vehicle tracking and management solutions",
    },
    {
      icon: <Wifi className="w-8 h-8 text-orange-500" />,
      title: "IoT Integration",
      description: "Real-time sensor data and connectivity across all vehicles",
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Analytics",
      description: "Intelligent insights for predictive maintenance and optimization",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Performance Metrics",
      description: "Advanced reporting and KPI tracking for operational excellence",
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center px-12 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Overview</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Revolutionizing fleet management through strategic partnerships and cutting-edge technology integration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Cpu, Wifi, Cloud, Shield, Smartphone, Database } from "lucide-react"

export function TechnologySlide() {
  const technologies = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "IoT Sensors",
      description: "Real-time vehicle monitoring and data collection",
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "AI Analytics",
      description: "Machine learning for predictive insights",
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      title: "Cloud Platform",
      description: "Scalable infrastructure for data processing",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile Apps",
      description: "Driver and manager interfaces for real-time control",
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: "Data Management",
      description: "Secure storage and analytics of fleet data",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Security",
      description: "End-to-end encryption and data protection",
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center px-12 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Cutting-edge technologies powering the next generation of fleet management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-center">
              <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full">
          <span className="text-blue-800 font-medium">Integrated Solution Architecture</span>
        </div>
      </div>
    </div>
  )
}

import { Cpu, Wifi, Cloud, Shield, Smartphone, Database, Zap, BarChart } from "lucide-react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const TECHNOLOGY_STACK = [
  {
    icon: <Wifi className="w-8 h-8 text-blue-600" />,
    title: "IoT Sensors",
    description: "Real-time vehicle monitoring and comprehensive data collection",
    category: "Hardware",
  },
  {
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    title: "AI Analytics",
    description: "Machine learning algorithms for predictive insights and optimization",
    category: "Intelligence",
  },
  {
    icon: <Cloud className="w-8 h-8 text-green-600" />,
    title: "Cloud Platform",
    description: "Scalable infrastructure for data processing and storage",
    category: "Infrastructure",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    title: "Mobile Apps",
    description: "Driver and manager interfaces for real-time fleet control",
    category: "Interface",
  },
  {
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    title: "Data Management",
    description: "Secure storage, processing, and analytics of fleet data",
    category: "Data",
  },
  {
    icon: <Shield className="w-8 h-8 text-red-600" />,
    title: "Security",
    description: "End-to-end encryption and comprehensive data protection",
    category: "Security",
  },
  {
    icon: <BarChart className="w-8 h-8 text-teal-600" />,
    title: "Analytics Dashboard",
    description: "Real-time reporting and business intelligence tools",
    category: "Analytics",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "API Integration",
    description: "Seamless integration with existing fleet management systems",
    category: "Integration",
  },
]

export function Slide04Technology({ isActive }: SlideProps) {
  return (
    <SlideContainer>
      <div className="max-w-7xl mx-auto w-full">
        <SlideHeader
          title="Technology Stack"
          subtitle="Cutting-edge technologies powering the next generation of fleet management"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TECHNOLOGY_STACK.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">{tech.icon}</div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Integrated Solution Architecture</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            All components work seamlessly together to provide a comprehensive, scalable, and secure fleet management
            ecosystem.
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}

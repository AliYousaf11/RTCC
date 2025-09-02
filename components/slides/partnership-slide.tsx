import { Handshake, Target, Zap, Globe } from "lucide-react"

export function PartnershipSlide() {
  const benefits = [
    {
      icon: <Handshake className="w-6 h-6 text-blue-600" />,
      title: "Strategic Alliance",
      description: "Combining RTCC's fleet expertise with advanced tracking technology",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Market Leadership",
      description: "Positioning as the premier IoT-enabled fleet management solution",
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Innovation Acceleration",
      description: "Rapid development and deployment of next-generation features",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "Market Expansion",
      description: "Leveraging combined networks for broader market reach",
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center px-12 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Strategic collaboration unlocking unprecedented value in fleet management solutions
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                {benefit.icon}
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Synergistic Value Creation</h3>
          <p className="text-gray-700 text-lg">
            Together, we're not just improving fleet management – we're defining the future of intelligent
            transportation systems.
          </p>
        </div>
      </div>
    </div>
  )
}

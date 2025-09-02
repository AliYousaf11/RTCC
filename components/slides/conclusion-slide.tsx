import { ArrowRight, Star, Trophy, Rocket } from "lucide-react"
import Image from "next/image"

export function ConclusionSlide() {
  const outcomes = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      title: "Market Leadership",
      description: "Establish dominant position in smart fleet management",
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Innovation Excellence",
      description: "Set new industry standards for IoT and AI integration",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Accelerated Growth",
      description: "Rapid market expansion and revenue generation",
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center px-12 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Moving Forward Together</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          A strategic partnership that will transform the fleet management industry
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">{outcome.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{outcome.title}</h3>
              <p className="text-gray-600 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Fleet Management?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how this strategic collaboration can drive unprecedented value for both organizations
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <span>Next Steps</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Image
            src="/images/RTcc.png"
            alt="RTCC Trucks Logo"
            width={150}
            height={60}
            className="object-contain opacity-80"
          />
          <div className="text-2xl text-gray-400">+</div>
          <Image
            src="/images/tracking-logo.png"
            alt="Tracking KSA Logo"
            width={100}
            height={60}
            className="object-contain opacity-80"
          />
          <div className="text-2xl text-gray-400">=</div>
          <div className="text-xl font-bold text-gray-700">Future of Fleet Management</div>
        </div>
      </div>
    </div>
  )
}

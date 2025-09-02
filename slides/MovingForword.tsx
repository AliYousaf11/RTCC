import { ArrowRight, Star, Trophy, Rocket, Handshake, Target } from "lucide-react"
import Image from "next/image"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const SUCCESS_OUTCOMES = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-600" />,
    title: "Market Leadership",
    description: "Establish dominant position in smart fleet management solutions",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Innovation Excellence",
    description: "Set new industry standards for IoT and AI integration",
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    title: "Accelerated Growth",
    description: "Rapid market expansion and sustainable revenue generation",
  },
  {
    icon: <Target className="w-8 h-8 text-green-600" />,
    title: "Customer Success",
    description: "Deliver exceptional value and operational efficiency to clients",
  },
]

const NEXT_STEPS = [
  "Partnership agreement finalization",
  "Technical team formation",
  "Project kickoff and planning",
  "Pilot program initiation",
]

export function MovingForward({ isActive }: SlideProps) {
  return (
    <SlideContainer>
      <div className="max-w-6xl mx-auto w-full overflow-y-auto h-full">
        <SlideHeader
          title="Moving Forward Together"
          subtitle="A strategic partnership that will transform the fleet management industry"
        />

        {/* Success Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SUCCESS_OUTCOMES.map((outcome, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border">
              <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">{outcome.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{outcome.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Fleet Management?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Let's discuss how this strategic collaboration can drive unprecedented value for both organizations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {NEXT_STEPS.map((step, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3 text-sm font-medium">
                {step}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-xl font-semibold mt-6">
            <Handshake className="w-6 h-6" />
            <span>Let's Begin This Journey</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>

        {/* Partnership Visual */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Image
            src="/images/RTcc.png"
            alt="RTCC Trucks Logo"
            width={180}
            height={72}
            className="object-contain opacity-80"
          />
          <div className="text-3xl text-gray-400 font-bold">+</div>
          <Image
            src="/images/tracking-logo.png"
            alt="Tracking KSA Logo"
            width={120}
            height={72}
            className="object-contain opacity-80"
          />
          <div className="text-3xl text-gray-400 font-bold">=</div>
          <div className="text-2xl font-bold text-gray-700 text-center">
            Future of
            <br />
            Fleet Management
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

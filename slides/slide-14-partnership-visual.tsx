import { Zap, Star, ArrowRight, Handshake, Target, TrendingUp } from "lucide-react"
import Image from "next/image"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import type { SlideProps } from "../types/slide"

const PARTNERSHIP_BENEFITS = [
  {
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    title: "Strategic Collaboration",
    description: "Combining expertise and resources for mutual success",
  },
  {
    icon: <Target className="w-6 h-6 text-green-600" />,
    title: "Market Leadership",
    description: "Establishing dominance in smart fleet management",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: "Innovation Excellence",
    description: "Driving the future of transportation technology",
  },
]

export function Slide14PartnershipVisual({ isActive }: SlideProps) {
  return (
    <SlideContainer background="bg-gradient-to-br from-blue-50 via-white to-orange-50" className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
        <div className="animate-fade-in-up">
          <SlideHeader
            title="Strategic Partnership Excellence"
            subtitle="Together, we're shaping the future of fleet management"
            className="mb-6 sm:mb-8"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Main Partnership Visual */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border mb-6 sm:mb-8 hover:shadow-3xl transition-all duration-500 animate-scale-in delay-300">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
              {/* RTCC Logo */}
              <div className="flex flex-col items-center group animate-slide-in-left delay-500">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-4 sm:p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Image
                    src="/images/RTcc.png"
                    alt="RTCC Logo"
                    width={200}
                    height={80}
                    className="object-contain w-36 sm:w-48 h-auto"
                    priority
                  />
                </div>
                <div className="mt-3 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-200 transition-colors duration-300">
                  Fleet Expertise
                </div>
              </div>

              {/* Plus Symbol and Partnership Badge */}
              <div className="flex flex-col items-center animate-bounce-slow delay-800">
                <div className="text-3xl sm:text-5xl text-gray-300 font-bold mb-3 hover:text-gray-500 transition-colors duration-300 animate-pulse">
                  +
                </div>
                <div className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Strategic Partnership
                </div>
              </div>

              {/* Tracking Logo */}
              <div className="flex flex-col items-center group animate-slide-in-right delay-700">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-4 sm:p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Image
                    src="/images/tracking-logo.png"
                    alt="Tracking KSA Logo"
                    width={150}
                    height={80}
                    className="object-contain w-28 sm:w-36 h-auto"
                  />
                </div>
                <div className="mt-3 px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-semibold hover:bg-orange-200 transition-colors duration-300">
                  Technology Innovation
                </div>
              </div>

              {/* Equals Symbol and Market Leadership */}
              <div className="flex flex-col items-center animate-bounce-slow delay-1000">
                <div className="text-3xl sm:text-5xl text-gray-300 font-bold mb-3 hover:text-gray-500 transition-colors duration-300 animate-pulse">
                  =
                </div>
                <div className="px-4 sm:px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Market Leadership
                </div>
              </div>

              {/* Future of Fleet Management */}
              <div className="flex flex-col items-center group animate-scale-in delay-1200">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-4 sm:p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <div className="flex flex-col items-center">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl mb-3 hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-10 sm:w-12 h-10 sm:h-12 text-gray-700" />
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-xl font-bold text-gray-700 mb-1">Future of</div>
                      <div className="text-base sm:text-xl font-bold text-gray-700">Fleet Management</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Industry Transformation
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {PARTNERSHIP_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-lg border hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${1400 + index * 200}ms` }}
              >
                <div className="inline-flex p-3 bg-gray-50 rounded-full mb-3 hover:rotate-12 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up delay-2000">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-3 animate-bounce delay-2200">
                <Star className="w-6 h-6 text-white animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold">Partnership Excellence</h3>
                <Star className="w-6 h-6 text-white animate-pulse" />
              </div>
              <p className="text-sm sm:text-lg opacity-95 mb-4 sm:mb-6 max-w-3xl mx-auto animate-fade-in delay-2400">
                Where fleet expertise meets technological innovation to create the future of intelligent transportation
              </p>
              <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold animate-slide-in-right delay-2600">
                <span>Ready to Transform Together</span>
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { SlideContainer } from "../components/ui/slide-container"
import type { SlideProps } from "../types/slide"

export function Slide15ThankYou({ isActive }: SlideProps) {
  return (
    <SlideContainer background="bg-gradient-to-br from-blue-50 via-white to-orange-50" className="py-4 sm:py-6">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-center">
        {/* Company Logos */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
          <Image
            src="/images/RTcc.png"
            alt="RTCC Trucks Logo"
            width={200}
            height={80}
            className="object-contain w-32 sm:w-40 md:w-48 h-auto opacity-90"
            priority
          />
          <div className="w-full sm:w-px h-px sm:h-16 bg-gray-300" />
          <Image
            src="/images/tracking-logo.png"
            alt="Tracking KSA Logo"
            width={120}
            height={80}
            className="object-contain w-24 sm:w-28 md:w-32 h-auto opacity-90"
          />
        </div>

        {/* Thank You Message */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Thank You</h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            For considering our proposal for IoT-based and AI-enabled
            <br className="hidden sm:block" />
            fleet management solutions.
          </p>
          <div className="flex items-center justify-center gap-3 text-lg sm:text-xl font-semibold">
            <MessageCircle className="w-6 h-6" />
            <span>Let's Transform Fleet Management Together</span>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

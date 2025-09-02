import Image from "next/image"

export function TitleSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="mb-8 flex items-center gap-8">
        <Image
          src="/images/RTcc.png"
          alt="RTCC Trucks Logo"
          width={200}
          height={80}
          className="object-contain"
        />
        {/* <div className="w-px h-16 bg-gray-300" /> */}
        <Image
          src="/images/tracking-logo.png"
          alt="Tracking KSA Logo"
          width={120}
          height={80}
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Strategic Collaboration for
        <br />
        <span className="text-blue-600">IoT-Based</span> and <span className="text-orange-500">AI-Enabled</span>
        <br />
        Fleet Management System
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-3xl">Partnerships Driving Innovation in Smart Fleet Solutions</p>

      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="px-4 py-2 bg-white rounded-full shadow-sm">RTCC Proposal 2024</div>
        <div className="px-4 py-2 bg-white rounded-full shadow-sm">Strategic Partnership Initiative</div>
      </div>
    </div>
  )
}

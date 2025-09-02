// import { Mail, Phone, MapPin, Globe, Building } from "lucide-react"
// import { SlideContainer } from "../components/ui/slide-container"
// import { SlideHeader } from "../components/ui/slide-header"
// import type { SlideProps } from "../types/slide"

// const CONTACT_INFO = [
//   {
//     icon: <Building className="w-6 h-6 text-blue-600" />,
//     title: "Jeddah Office",
//     details: ["P.O. Box 9669", "Jeddah 21423, KSA"],
//     color: "bg-blue-50 border-blue-200",
//   },
//   {
//     icon: <MapPin className="w-6 h-6 text-orange-500" />,
//     title: "Riyadh Office",
//     details: ["P.O. Box: 3618, 7155 - 13312", "Riyadh, Nafl District, KSA"],
//     color: "bg-orange-50 border-orange-200",
//   },
//   {
//     icon: <Phone className="w-6 h-6 text-green-600" />,
//     title: "Contact Number",
//     details: ["UAN: 920017273"],
//     color: "bg-green-50 border-green-200",
//   },
//   {
//     icon: <Mail className="w-6 h-6 text-purple-600" />,
//     title: "Email",
//     details: ["nadeem@tracking.me"],
//     color: "bg-purple-50 border-purple-200",
//   },
//   {
//     icon: <Globe className="w-6 h-6 text-teal-600" />,
//     title: "Website",
//     details: ["www.tracking.me"],
//     color: "bg-teal-50 border-teal-200",
//   },
// ]

// export function Slide16ContactUs({ isActive }: SlideProps) {
//   return (
//     <SlideContainer background="bg-gradient-to-br from-gray-50 via-white to-gray-50" className="py-4 sm:py-6">
//       <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
//         <SlideHeader
//           title="Connect With Us"
//           subtitle="Ready to discuss your fleet management transformation? Get in touch."
//           className="mb-6 sm:mb-8"
//         />

//         <div className="flex-1 overflow-y-auto">
//           <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border mb-4 sm:mb-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
//               {CONTACT_INFO.map((contact, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-xl p-4 sm:p-6 border-2 ${contact.color} shadow-sm hover:shadow-md transition-all duration-300`}
//                 >
//                   <div className="flex items-start gap-3 sm:gap-4">
//                     <div className="p-2 sm:p-3 bg-white rounded-lg shadow-sm flex-shrink-0">{contact.icon}</div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
//                       {contact.details.map((detail, detailIndex) => (
//                         <p key={detailIndex} className="text-gray-700 text-sm leading-relaxed">
//                           {detail}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Call to Action */}
//             <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 border">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
//               <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
//                 Contact us today to schedule a consultation and revolutionize your fleet management operations.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
//                 <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
//                   <Phone className="w-4 h-4" />
//                   <span>Call: 920017273</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
//                   <Mail className="w-4 h-4" />
//                   <span>Email: nadeem@tracking.me</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full font-medium">
//                   <Globe className="w-4 h-4" />
//                   <span>Visit: www.tracking.me</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SlideContainer>
//   )
// }

"use client"

import { useState } from "react"
import { SlideContainer } from "../components/ui/slide-container"
import { SlideHeader } from "../components/ui/slide-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Globe, Clock, Users } from "lucide-react"
import type { SlideProps } from "../types/slide"

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+966-920017273", "Available 24/7 for technical support", "Emergency hotline for critical issues"],
  },
  {
    icon: Mail,
    title: "Email Contact",
    details: ["nadeem@tracking.me", "info@rtcc.com", "Response within 2 business hours"],
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      "P.O. Box: 3618, 7155 - Nafl District",
      "Riyadh 13312, Saudi Arabia",
      "Visit us for in-person consultations",
    ],
  },
  {
    icon: Globe,
    title: "Online Presence",
    details: ["https://www.rtcc.com.sa", "LinkedIn: RTCC", "Follow us for updates and insights"],
  },
]

const TEAM_MEMBERS = [
  {
    name: "Nadeem Ahmed",
    role: "Technical Director",
    email: "nadeem@tracking.me",
    specialization: "IoT & Fleet Management",
  },
  // {
  //   name: "Mohammed Faisal",
  //   role: "Business Development",
  //   email: "m.faisal@dayimtrucks.com",
  //   specialization: "Strategic Partnerships",
  // },
  // {
  //   name: "Ahmed Al-Rashid",
  //   role: "Implementation Lead",
  //   email: "ahmed@dayimtrucks.com",
  //   specialization: "System Integration",
  // },
]

export function Slide16ContactUs({ isActive }: SlideProps) {
  const [selectedContact, setSelectedContact] = useState<number | null>(null)
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null)

  return (
    <SlideContainer>
      <SlideHeader title="Connect With Us" subtitle="Ready to Transform Your Fleet Management?" />

      <div className="max-w-6xl mx-auto w-full overflow-y-auto h-full justify-center items-center">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Start Your Digital Transformation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with RTCC Trucks and Tracking KSA for innovative IoT and AI-enabled fleet management solutions
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTACT_INFO.map((contact, index) => {
            const IconComponent = contact.icon
            const isSelected = selectedContact === index

            return (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-500 hover:shadow-xl border-2 ${isSelected ? "border-blue-500 shadow-lg scale-105" : "border-gray-200 hover:border-blue-300"
                  } ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: isActive ? `${index * 150}ms` : "0ms",
                }}
                onClick={() => setSelectedContact(isSelected ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${isSelected ? "bg-blue-500 text-white scale-110" : "bg-blue-100 text-blue-600"
                        }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div
            className={`text-center mb-8 transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Expert Team</h3>
            <p className="text-gray-600">Dedicated professionals ready to support your fleet transformation</p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
          <div className="flex justify-center">
            {TEAM_MEMBERS.map((member, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-500 hover:shadow-lg border-2 ${hoveredTeam === index
                    ? "border-blue-500 shadow-md scale-105"
                    : "border-gray-200 hover:border-blue-300"
                  } ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: isActive ? `${(index + 4) * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredTeam(index)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${hoveredTeam === index ? "scale-110 shadow-lg" : ""
                      }`}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.specialization}</p>
                  <p className="text-gray-700 text-sm font-medium">{member.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: isActive ? "1050ms" : "0ms" }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a consultation today and discover how our IoT and AI-enabled solutions can transform your fleet
              operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}

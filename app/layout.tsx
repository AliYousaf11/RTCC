import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RTCC Fleet Management Proposal | IoT & AI-Enabled Solutions",
  description:
    "Strategic collaboration proposal for IoT-based and AI-enabled fleet management systems. Partnership between RTCC Trucks and Tracking KSA for innovative transportation solutions.",
  keywords: [
    "RTCC",
    "fleet management",
    "IoT",
    "AI",
    "tracking",
    "Saudi Arabia",
    "KSA",
    "transportation",
    "logistics",
    "vehicle tracking",
    "predictive maintenance",
    "route optimization",
  ],
  authors: [
    {
      name: "RTCC",
      url: "https://www.rtcc.com.sa/",
    },
    {
      name: "Tracking KSA",
      url: "https://tracking.me",
    },
  ],
  creator: "RTCC  & Tracking KSA Partnership",
  publisher: "RTCC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://RTCC.vercel.app",
    title: "RTCC Fleet Management Proposal | IoT & AI Solutions",
    description:
      "Strategic partnership proposal for revolutionary IoT-based and AI-enabled fleet management systems in Saudi Arabia.",
    siteName: "RTCC Fleet Management Proposal",
    images: [
      {
        url: "/images/RTcc.png",
        width: 1200,
        height: 630,
        alt: "RTCC - IoT & AI Fleet Management Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTCC Fleet Management Proposal | IoT & AI Solutions",
    description: "Strategic partnership for IoT-based and AI-enabled fleet management systems in Saudi Arabia.",
    images: ["/images/RTcc.png"],
    creator: "@RTCC",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563eb",
      },
    ],
  },
  category: "business",
  classification: "Fleet Management Solutions",
  referrer: "origin-when-cross-origin",
    generator: 'RTCC'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="RTCC Fleet Management Proposal" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RTCC Fleet Proposal" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Business/Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RTCC Trucks",
              description:
                "Leading fleet management solutions provider in Saudi Arabia specializing in IoT and AI-enabled transportation systems",
              url: "https://RTCC.vercel.app",
              logo: "https://RTCC.vercel.app/images/RTcc.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966-920017273",
                contactType: "Business",
                areaServed: "SA",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "Riyadh",
                postalCode: "13312",
                streetAddress: "P.O. Box: 3618, 7155 - Nafl District",
              },
              sameAs: ["https://tracking.me"],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

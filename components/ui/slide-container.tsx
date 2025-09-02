import type { ReactNode } from "react"

interface SlideContainerProps {
  children: ReactNode
  className?: string
  background?: string
}

export function SlideContainer({ children, className = "", background = "bg-white" }: SlideContainerProps) {
  return (
    <div
      className={`h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 ${background} ${className}`}
    >
      {children}
    </div>
  )
}

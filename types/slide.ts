import type React from "react"
export interface SlideProps {
  isActive?: boolean
}

export interface SlideConfig {
  id: number
  title: string
  component: React.ComponentType<SlideProps>
}

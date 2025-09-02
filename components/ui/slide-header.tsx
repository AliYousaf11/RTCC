interface SlideHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SlideHeader({ title, subtitle, className = "" }: SlideHeaderProps) {
  return (
    <div className={`text-center mb-6 sm:mb-8 md:mb-12 ${className}`}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight px-4">
        {title}
      </h1>
      {subtitle && <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">{subtitle}</p>}
    </div>
  )
}

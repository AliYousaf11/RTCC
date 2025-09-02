"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import type { ReactNode } from "react"

interface InteractiveCardProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  children: ReactNode
  expandableContent?: ReactNode
  color?: string
  iconBg?: string
  onClick?: () => void
  isSelected?: boolean
  className?: string
  forceExpand?: boolean
}

export function InteractiveCard({
  title,
  subtitle,
  icon,
  children,
  expandableContent,
  color = "bg-white border-gray-200",
  iconBg = "bg-gray-100",
  onClick,
  isSelected = false,
  className = "",
  forceExpand = false,
}: InteractiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(forceExpand)
  const [isHovered, setIsHovered] = useState(false)

  // ensure outside control keeps state in sync
  useEffect(() => setIsExpanded(forceExpand), [forceExpand])

  return (
    <div
      className={`rounded-xl m-4 sm:p-6 border-2 shadow-lg transition-all duration-500 cursor-pointer ${color} ${
        isSelected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      } ${isHovered ? "shadow-2xl scale-[1.02]" : ""} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {icon && (
          <div
            className={`p-2 sm:p-3 ${iconBg} rounded-xl shadow-sm transition-transform duration-300 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
          >
            {icon}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
                  isHovered ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {title}
              </h3>
              {subtitle && <p className="text-sm text-gray-600 mb-3">{subtitle}</p>}
            </div>

            {expandableContent && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
            )}
          </div>

          <div className="mb-3">{children}</div>

          {expandableContent && (
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-3 border-t border-gray-200">{expandableContent}</div>
            </div>
          )}
        </div>
      </div>

      {isSelected && (
        <div className="mt-3 flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Info className="w-4 h-4" />
          <span>Selected for detailed view</span>
        </div>
      )}
    </div>
  )
}

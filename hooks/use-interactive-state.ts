"use client"

import { useState, useCallback } from "react"

export function useInteractiveState() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({})
  const [hoveredElements, setHoveredElements] = useState<Record<string, boolean>>({})
  const [clickedElements, setClickedElements] = useState<Record<string, boolean>>({})

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }, [])

  const selectItem = useCallback((category: string, itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]: prev[category] === itemId ? "" : itemId,
    }))
  }, [])

  const setHovered = useCallback((elementId: string, isHovered: boolean) => {
    setHoveredElements((prev) => ({
      ...prev,
      [elementId]: isHovered,
    }))
  }, [])

  const toggleClicked = useCallback((elementId: string) => {
    setClickedElements((prev) => ({
      ...prev,
      [elementId]: !prev[elementId],
    }))
  }, [])

  const resetState = useCallback(() => {
    setExpandedSections({})
    setSelectedItems({})
    setHoveredElements({})
    setClickedElements({})
  }, [])

  return {
    expandedSections,
    selectedItems,
    hoveredElements,
    clickedElements,
    toggleSection,
    selectItem,
    setHovered,
    toggleClicked,
    resetState,
  }
}

/**
 * Accessibility utilities for components
 */

import { ref, onMounted } from 'vue'

/**
 * Provides accessibility features including reduced motion detection
 */
export function useAccessibility() {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReducedMotion.value = mediaQuery.matches

      // Listen for changes
      const listener = (e: MediaQueryListEvent) => {
        prefersReducedMotion.value = e.matches
      }

      // Use addEventListener if available, otherwise use deprecated addListener
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener)
      }
      else {
        // @ts-ignore - fallback for older browsers
        mediaQuery.addListener(listener)
      }
    }
  })

  return {
    prefersReducedMotion,
  }
}

/**
 * Provides keyboard navigation utilities
 */
export function useKeyboardNavigation() {
  /**
   * Creates arrow key navigation handlers
   */
  const createArrowNavigation = (options: {
    onLeft?: () => void
    onRight?: () => void
    onUp?: () => void
    onDown?: () => void
    onHome?: () => void
    onEnd?: () => void
    onEscape?: () => void
    onEnter?: () => void
    onSpace?: () => void
  }) => {
    return (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          options.onLeft?.()
          break
        case 'ArrowRight':
          event.preventDefault()
          options.onRight?.()
          break
        case 'ArrowUp':
          event.preventDefault()
          options.onUp?.()
          break
        case 'ArrowDown':
          event.preventDefault()
          options.onDown?.()
          break
        case 'Home':
          event.preventDefault()
          options.onHome?.()
          break
        case 'End':
          event.preventDefault()
          options.onEnd?.()
          break
        case 'Escape':
          event.preventDefault()
          options.onEscape?.()
          break
        case 'Enter':
          event.preventDefault()
          options.onEnter?.()
          break
        case ' ':
          event.preventDefault()
          options.onSpace?.()
          break
      }
    }
  }

  return {
    createArrowNavigation,
  }
}

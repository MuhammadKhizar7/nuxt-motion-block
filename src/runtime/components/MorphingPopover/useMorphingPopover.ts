import { ref, computed, reactive, watch, type Ref } from 'vue'
import { useEventListener } from '@vueuse/core'

// Enhanced type definitions with advanced features
interface PopoverState {
  isOpen: boolean
  uniqueId: string
  variants?: Variants
  position?: PopoverPosition
}

interface MorphingPopoverProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  transition?: Transition
  variants?: Variants
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
  positioning?: PositioningConfig
  morphingPath?: MorphingPath
  collisionDetection?: boolean
  arrowEnabled?: boolean
}

interface Variants {
  initial?: Record<string, any>
  animate?: Record<string, any>
  exit?: Record<string, any>
  hover?: Record<string, any>
  focus?: Record<string, any>
}

interface Transition {
  type?: 'spring' | 'tween' | 'ease' | 'custom'
  bounce?: number
  duration?: number
  ease?: number[] | string
  delay?: number
  staggerChildren?: number
}

interface PopoverPosition {
  x: number
  y: number
  side: 'top' | 'bottom' | 'left' | 'right'
  align: 'start' | 'center' | 'end'
}

interface PositioningConfig {
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  autoPositioning?: boolean
  sticky?: boolean
  boundary?: HTMLElement | string
}

interface MorphingPath {
  type: 'bezier' | 'arc' | 'wave' | 'elastic'
  intensity?: number
  steps?: number
  controlPoints?: Array<{ x: number, y: number }>
}

// Enhanced composable with advanced features
export const useMorphingPopover = (props: MorphingPopoverProps = {}) => {
  const uniqueId = Math.random().toString(36).substring(2, 9)

  // Enhanced state management
  const isOpen = ref(props.defaultOpen ?? false)
  const variants = ref(props.variants || getDefaultVariants())
  const transition = ref(props.transition || getDefaultTransition())
  const position = ref<PopoverPosition | null>(null)
  const isPositioning = ref(false)

  // Advanced positioning configuration
  const positioningConfig = ref<PositioningConfig>({
    side: 'bottom',
    align: 'center',
    sideOffset: 8,
    alignOffset: 0,
    autoPositioning: true,
    sticky: false,
    ...props.positioning,
  })

  // Control functions with enhanced features
  const open = async () => {
    if (!isOpen.value) {
      isPositioning.value = true
      isOpen.value = true

      // Calculate optimal position if auto-positioning is enabled
      if (positioningConfig.value.autoPositioning) {
        await calculateOptimalPosition()
      }

      isPositioning.value = false
      props.onOpenChange?.(true)
    }
  }

  const close = () => {
    if (isOpen.value) {
      isOpen.value = false
      position.value = null
      props.onOpenChange?.(false)
    }
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    }
    else {
      open()
    }
  }

  // Handle controlled state
  if (props.open !== undefined) {
    watch(() => props.open, (newOpen) => {
      if (newOpen !== isOpen.value) {
        isOpen.value = newOpen!
      }
    }, { immediate: true })
  }

  return {
    isOpen,
    uniqueId,
    open,
    close,
    toggle,
    variants,
    transition,
    position,
    positioningConfig,
    isPositioning,
    onOpenChange: props.onOpenChange,
  }
}

// Enhanced default variants
function getDefaultVariants(): Variants {
  return {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transformOrigin: 'center',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -5,
    },
    hover: {
      scale: 1.02,
    },
    focus: {
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
    },
  }
}

function getDefaultTransition(): Transition {
  return {
    type: 'spring',
    bounce: 0.1,
    duration: 0.4,
    ease: 'easeOut',
  }
}

// Enhanced positioning calculation
async function calculateOptimalPosition(): Promise<PopoverPosition | null> {
  // This would be implemented with collision detection logic
  return null
}

// Legacy support - global popover manager
interface LegacyPopoverState {
  isOpen: boolean
  triggerRect: DOMRect | null
  animationState: 'closed' | 'opening' | 'open' | 'closing'
}

export const useMorphingPopoverManager = () => {
  const activePopovers = ref(new Map<string, LegacyPopoverState>())

  const createPopover = (popoverId: string) => {
    if (activePopovers.value.has(popoverId)) {
      return activePopovers.value.get(popoverId)!
    }

    const popoverState: LegacyPopoverState = {
      isOpen: false,
      triggerRect: null,
      animationState: 'closed',
    }

    activePopovers.value.set(popoverId, popoverState)
    return popoverState
  }

  const calculatePosition = (
    triggerRect: DOMRect,
    side: 'top' | 'bottom' | 'left' | 'right' = 'bottom',
    align: 'start' | 'center' | 'end' = 'center',
  ): PopoverPosition => {
    const spacing = 8 // Gap between trigger and popover
    let x = triggerRect.x
    let y = triggerRect.y

    // Calculate position based on side
    switch (side) {
      case 'top':
        y = triggerRect.y - spacing
        break
      case 'bottom':
        y = triggerRect.y + triggerRect.height + spacing
        break
      case 'left':
        x = triggerRect.x - spacing
        break
      case 'right':
        x = triggerRect.x + triggerRect.width + spacing
        break
    }

    // Adjust for alignment
    if (side === 'top' || side === 'bottom') {
      switch (align) {
        case 'start':
          x = triggerRect.x
          break
        case 'center':
          x = triggerRect.x + triggerRect.width / 2
          break
        case 'end':
          x = triggerRect.x + triggerRect.width
          break
      }
    }

    return { x, y, side, align }
  }

  const openPopover = async (popoverId: string, triggerElement?: HTMLElement) => {
    if (!triggerElement) {
      console.error('Trigger element is undefined for popover:', popoverId)
      return
    }

    if (!(triggerElement instanceof HTMLElement)) {
      console.error('Trigger element is not a valid HTMLElement:', {
        element: triggerElement,
        nodeType: triggerElement?.nodeType,
        type: typeof triggerElement,
        constructor: triggerElement?.constructor?.name,
      })
      return
    }

    const popoverState = createPopover(popoverId)

    try {
      // Ensure we have a proper element with valid dimensions
      const computedStyle = window.getComputedStyle(triggerElement)
      if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
        console.warn('MorphingPopover: Trigger element is not visible')
      }

      const triggerRect = triggerElement.getBoundingClientRect()

      if (!triggerRect || triggerRect.width === 0 || triggerRect.height === 0) {
        console.warn('MorphingPopover: Invalid trigger dimensions:', triggerRect)
        return
      }

      popoverState.triggerRect = triggerRect
      popoverState.animationState = 'opening'
      popoverState.isOpen = true

      // Update animation state after a brief delay
      setTimeout(() => {
        if (popoverState.isOpen) {
          popoverState.animationState = 'open'
        }
      }, 50)
    }
    catch (error) {
      console.error('Failed to open popover:', error)
    }
  }

  const closePopover = (popoverId: string) => {
    const popoverState = activePopovers.value.get(popoverId)
    if (popoverState && popoverState.isOpen) {
      popoverState.animationState = 'closing'

      // Complete the close after animation
      setTimeout(() => {
        popoverState.isOpen = false
        popoverState.animationState = 'closed'
        popoverState.triggerRect = null
      }, 400) // Match animation duration
    }
  }

  const isPopoverOpen = (popoverId: string): boolean => {
    const popoverState = activePopovers.value.get(popoverId)
    return popoverState?.isOpen || false
  }

  const getPopoverState = (popoverId: string): LegacyPopoverState | null => {
    return activePopovers.value.get(popoverId) || null
  }

  return {
    createPopover,
    openPopover,
    closePopover,
    calculatePosition,
    isPopoverOpen,
    getPopoverState,
    activePopovers: computed(() => activePopovers.value),
  }
}

// Export the old name for backward compatibility
export const useMorphingOverlay = useMorphingPopoverManager

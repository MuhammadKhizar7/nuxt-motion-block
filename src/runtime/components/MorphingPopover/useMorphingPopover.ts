import { ref, type InjectionKey } from 'vue'

interface MorphingPopoverProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  transition?: any
  variants?: any
}

export type PopoverContextValue = ReturnType<typeof useMorphingPopover>

export const popoverContextKey = Symbol('popoverContext') as InjectionKey<PopoverContextValue>

// Simplified composable for morphing popover
export const useMorphingPopover = (props: MorphingPopoverProps = {}) => {
  const uniqueId = Math.random().toString(36).substring(2, 9)
  
  // State management
  const isOpen = ref(props.defaultOpen ?? false)
  const variants = ref(props.variants || getDefaultVariants())
  const transition = ref(props.transition || getDefaultTransition())

  // Control functions
  const open = () => {
    if (!isOpen.value) {
      isOpen.value = true
      props.onOpenChange?.(true)
    }
  }

  const close = () => {
    if (isOpen.value) {
      isOpen.value = false
      props.onOpenChange?.(false)
    }
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  // Handle controlled state
  if (props.open !== undefined) {
    // Watch would be needed here in a full implementation
  }

  return {
    isOpen,
    uniqueId,
    open,
    close,
    toggle,
    variants,
    transition
  }
}

// Default variants for morphing animations
function getDefaultVariants() {
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
    }
  }
}

function getDefaultTransition() {
  return {
    type: 'spring',
    bounce: 0.1,
    duration: 0.4,
  }
}
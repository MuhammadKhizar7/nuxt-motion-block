import { ref, type Ref } from 'vue'

interface UseMorphingPopoverOptions {
  defaultOpen?: boolean
}

interface UseMorphingPopoverReturn {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * A composable for managing MorphingPopover state
 *
 * @param options - Configuration options
 * @returns Object with popover state and control methods
 */
export const useMorphingPopover = (options: UseMorphingPopoverOptions = {}): UseMorphingPopoverReturn => {
  const isOpen = ref(options.defaultOpen ?? false)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

export default useMorphingPopover

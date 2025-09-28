<template>
  <div class="relative inline-block">
    <slot 
      :is-open="isOpen"
      :open="open"
      :close="close"
      :toggle="toggle"
      :unique-id="uniqueId"
    />
  </div>
</template>

<script setup lang="ts">
import { useMorphingPopover } from './useMorphingPopover'
import { useEventListener, onClickOutside } from '@vueuse/core'

// Props interface matching design documentation
interface Props {
  defaultOpen?: boolean
  open?: boolean  // controlled state
  transition?: {
    type?: string
    bounce?: number
    duration?: number
    ease?: number[] | string
  }
  variants?: {
    initial?: Record<string, any>
    animate?: Record<string, any>
    exit?: Record<string, any>
  }
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
  closeOnClickOutside: true,
  closeOnEscape: true
})

const emit = defineEmits<{
  'open-change': [open: boolean]
}>()

// Create popover instance using the new composable
const popover = useMorphingPopover({
  defaultOpen: props.defaultOpen,
  open: props.open,
  onOpenChange: (open: boolean) => emit('open-change', open),
  transition: props.transition,
  variants: props.variants,
  closeOnClickOutside: props.closeOnClickOutside,
  closeOnEscape: props.closeOnEscape
})

// Extract reactive properties
const { isOpen, uniqueId, open, close, toggle, variants, transition } = popover

// Provide context to child components
const popoverContext = {
  isOpen,
  uniqueId,
  open,
  close,
  toggle,
  variants,
  transition,
  closeOnClickOutside: props.closeOnClickOutside,
  closeOnEscape: props.closeOnEscape
}

provide('morphingPopoverContext', popoverContext)

// Handle keyboard escape when enabled
if (props.closeOnEscape) {
  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      close()
    }
  })
}
</script>

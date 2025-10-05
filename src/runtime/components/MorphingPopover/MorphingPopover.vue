<template>
  <div class="relative inline-block">
    <slot
      :is-open="popover.isOpen"
      :open="popover.open"
      :close="popover.close"
      :toggle="popover.toggle"
      :unique-id="popover.uniqueId"
    />
  </div>
</template>

<script setup lang="ts">
import { useMorphingPopover, popoverContextKey, type Variants, type Transition } from './useMorphingPopover'
import { useEventListener } from '@vueuse/core'
import { provide } from 'vue'

// Props interface matching design documentation
interface Props {
  defaultOpen?: boolean
  open?: boolean // controlled state
  transition?: Transition
  variants?: Variants
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
  closeOnClickOutside: true,
  closeOnEscape: true,
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
  closeOnEscape: props.closeOnEscape,
})

// Provide context to child components
const popoverContext = {
  ...popover,
  closeOnClickOutside: props.closeOnClickOutside,
  closeOnEscape: props.closeOnEscape,
}

provide(popoverContextKey, popoverContext)

// Handle keyboard escape when enabled
if (props.closeOnEscape) {
  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && popover.isOpen.value) {
      popover.close()
    }
  })
}
</script>

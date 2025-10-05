<template>
  <Motion
    ref="triggerRef"
    :layout-id="`popover-trigger-${uniqueId}`"
    :data-layout-id="`popover-trigger-${uniqueId}`"
    class="relative inline-flex items-center justify-center"
    :aria-expanded="isOpen"
    :aria-controls="`popover-content-${uniqueId}`"
    :aria-haspopup="true"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { Motion } from 'motion-v'
import { popoverContextKey } from './useMorphingPopover'

// No props needed - everything comes from context
const emit = defineEmits<{
  open: []
  close: []
}>()

// Inject context from parent MorphingPopover
const context = inject(popoverContextKey)
if (!context) {
  throw new Error('MorphingPopoverTrigger must be used within a MorphingPopover component')
}

const { isOpen, uniqueId, open, close } = context

const triggerRef = ref<HTMLElement>()

const handleClick = () => {
  if (isOpen.value) {
    close()
    emit('close')
  }
  else {
    open()
    emit('open')
  }
}

// Watch for state changes to emit events
watch(isOpen, (newOpen, oldOpen) => {
  if (newOpen && !oldOpen) {
    emit('open')
  }
  else if (!newOpen && oldOpen) {
    emit('close')
  }
})
</script>

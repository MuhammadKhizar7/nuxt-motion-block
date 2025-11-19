<template>
  <Motion
    :layout-id="`popover-trigger-${uniqueId}`"
    class="relative inline-flex items-center justify-center"
    :aria-expanded="isOpen"
    :aria-controls="`popover-content-${uniqueId}`"
    :aria-haspopup="true"
    v-bind="$attrs"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { Motion } from 'motion-v'
import { popoverContextKey } from './useMorphingPopover'

// Inject context from parent MorphingPopover
const context = inject(popoverContextKey)
if (!context) {
  throw new Error('MorphingPopoverTrigger must be used within a MorphingPopover component')
}

const { isOpen, uniqueId } = context
</script>
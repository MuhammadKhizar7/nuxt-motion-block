<template>
  <Transition
    enter-active-class="transition-all duration-200 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 translate-y-0 scale-95"
    enter-to-class="opacity-100 -translate-y-2 scale-100"
    leave-from-class="opacity-100 -translate-y-2 scale-100"
    leave-to-class="opacity-0 translate-y-0 scale-95"
  >
    <div
      v-if="isVisible"
      :class="labelClasses"
      class="absolute -top-10 left-1/2 -translate-x-1/2 
             w-fit whitespace-nowrap 
             rounded-lg border 
             border-gray-200 dark:border-neutral-700
             bg-gray-100 dark:bg-neutral-800 
             px-2 py-1 
             text-xs text-neutral-700 dark:text-white 
             z-50 shadow-lg 
             backdrop-blur-sm"
      role="tooltip"
      :aria-hidden="!isVisible"
    >
      <slot />
      <!-- Tooltip arrow -->
      <div class="absolute top-full left-1/2 -translate-x-1/2 
                  border-l-4 border-r-4 border-t-4 
                  border-l-transparent border-r-transparent 
                  border-t-gray-100 dark:border-t-neutral-800">
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DockLabelProps {
  class?: string
  isHovered?: boolean
}

const props = defineProps<DockLabelProps>()

const isVisible = computed(() => props.isHovered || false)

const labelClasses = computed(() => {
  return [
    props.class
  ].filter(Boolean).join(' ')
})
</script>

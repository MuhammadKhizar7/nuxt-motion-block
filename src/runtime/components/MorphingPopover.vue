<template>
  <!-- Simple wrapper component that directly uses UPopover without any interference -->
  <UPopover
    v-model:open="isOpen"
    :mode="mode"
    :content="contentProps"
    :arrow="arrow"
    :portal="portal"
    :dismissible="dismissible"
    :default-open="defaultOpen"
    :modal="modal"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :ui="ui"
    @update:open="handleOpenChange"
  >
    <template #default>
      <!-- Optimized motion-v animation for the trigger element -->
      <motion.div
        :animate="{ 
          scale: isOpen ? 1 : scale
        }"
        :transition="{
          type: 'spring',
          stiffness: 800,
          damping: 30,
          mass: 1
        }"
        class="inline-block will-change-transform"
      >
        <slot />
      </motion.div>
    </template>
    
    <template v-if="$slots.content" #content>
      <!-- Origin-aware animation for the content -->
      <div :class="contentClasses">
        <AnimatePresence>
          <motion.div
            v-if="isOpen"
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ 
              opacity: 1, 
              scale: 1
            }"
            :exit="{ 
              opacity: 0, 
              scale: 0.95
            }"
            :transition="{
              type: 'spring',
              stiffness: 600,
              damping: 25,
              mass: 1
            }"
            class="will-change-transform"
            :style="{
              transformOrigin: 'var(--reka-popover-content-transform-origin, center)'
            }"
          >
            <slot name="content" />
          </motion.div>
        </AnimatePresence>
      </div>
    </template>
    
    <template v-if="$slots.anchor" #anchor>
      <slot name="anchor" />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { motion, AnimatePresence } from 'motion-v'

interface Props {
  mode?: 'click' | 'hover'
  content?: object
  arrow?: boolean | object
  portal?: string | boolean | HTMLElement
  dismissible?: boolean
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  openDelay?: number
  closeDelay?: number
  ui?: object
  // Morphing effect props
  scale?: number
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'click',
  dismissible: true,
  defaultOpen: false,
  modal: false,
  openDelay: 0,
  closeDelay: 0,
  arrow: false,
  portal: true,
  scale: 0.95
})

const emit = defineEmits<{
  'update:open': [open: boolean]
}>()

// internal open state
const isOpen = ref(props.defaultOpen)

// sync with controlled `open` prop
watch(() => props.open, (newOpen) => {
  if (newOpen !== undefined) {
    isOpen.value = newOpen
  }
}, { immediate: true })

const handleOpenChange = (open: boolean) => {
  isOpen.value = open
  emit('update:open', open)
}

const contentClasses = computed(() => {
  return [
    'relative overflow-hidden',
    'backdrop-blur-sm',
    'outline-none focus:outline-none',
    'border-default',
    'bg-default',
    'text-default'
  ].join(' ')
})

const contentProps = computed(() => {
  return {
    side: 'bottom',
    sideOffset: 8,
    collisionPadding: 8,
    ...props.content
  }
})
</script>
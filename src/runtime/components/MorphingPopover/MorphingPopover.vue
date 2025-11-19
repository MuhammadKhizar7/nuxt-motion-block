<template>
  <UPopover
    v-model:open="isOpen"
    :mode="mode"
    :content="contentProps"
    :arrow="arrow"
    :portal="portal"
    :reference="reference"
    :dismissible="dismissible"
    :default-open="defaultOpen"
    :modal="modal"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :ui="ui"
    @update:open="handleOpenChange"
  >
    <template #default="{ open }">
      <!-- Pass through the open state and control functions to the default slot -->
      <slot 
        :is-open="open"
        :open="openPopover"
        :close="closePopover"
        :toggle="togglePopover"
      />
    </template>
    
    <template #content="{ close }">
      <!-- Apply morphing animations to the popover content -->
      <Motion
        :initial="computedInitialVariant"
        :animate="computedAnimateVariant"
        :exit="computedExitVariant"
        :transition="enhancedTransition"
        :class="contentClasses"
      >
        <slot 
          name="content" 
          :close="close"
          :is-open="isOpen"
        />
      </Motion>
    </template>
    
    <template #anchor>
      <slot name="anchor" />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { ref, computed, watch, provide } from 'vue'
import { Motion } from 'motion-v'
import { useMorphingPopover, popoverContextKey } from './useMorphingPopover'

// Props that match Nuxt UI Popover API
interface Props {
  mode?: 'click' | 'hover'
  content?: object
  arrow?: boolean | object
  portal?: string | boolean | HTMLElement
  reference?: any
  dismissible?: boolean
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  openDelay?: number
  closeDelay?: number
  ui?: object
  // Morphing specific props
  transition?: any
  variants?: any
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'click',
  dismissible: true,
  defaultOpen: false,
  modal: false,
  openDelay: 0,
  closeDelay: 0,
  arrow: false
})

const emit = defineEmits<{
  'update:open': [open: boolean]
}>()

// State management
const isOpen = ref(props.defaultOpen)
const popover = useMorphingPopover({
  defaultOpen: props.defaultOpen,
  open: props.open,
  transition: props.transition,
  variants: props.variants
})

// Provide context to child components
provide(popoverContextKey, {
  isOpen: popover.isOpen,
  uniqueId: popover.uniqueId,
  open: popover.open,
  close: popover.close,
  toggle: popover.toggle,
  variants: popover.variants,
  transition: popover.transition
})

// Sync controlled open state
if (props.open !== undefined) {
  watch(() => props.open, (newOpen) => {
    if (newOpen !== undefined) {
      isOpen.value = newOpen
    }
  }, { immediate: true })
}

// Event handlers
const handleOpenChange = (open: boolean) => {
  isOpen.value = open
  emit('update:open', open)
}

const openPopover = () => {
  isOpen.value = true
  emit('update:open', true)
}

const closePopover = () => {
  isOpen.value = false
  emit('update:open', false)
}

const togglePopover = () => {
  isOpen.value = !isOpen.value
  emit('update:open', isOpen.value)
}

// Computed properties for morphing animations
const computedInitialVariant = computed(() => {
  return popover.variants.value?.initial || {
    opacity: 0,
    scale: 0.8,
    y: -10
  }
})

const computedAnimateVariant = computed(() => {
  return popover.variants.value?.animate || {
    opacity: 1,
    scale: 1,
    y: 0
  }
})

const computedExitVariant = computed(() => {
  return popover.variants.value?.exit || {
    opacity: 0,
    scale: 0.8,
    y: -10
  }
})

const enhancedTransition = computed(() => {
  return popover.transition.value || {
    type: 'spring',
    bounce: 0.1,
    duration: 0.4
  }
})

const contentClasses = computed(() => {
  return [
    'relative overflow-hidden rounded-lg border',
    'border-zinc-200 bg-white text-zinc-950 shadow-xl',
    'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50',
    'backdrop-blur-sm',
    'outline-none focus:outline-none',
    'transition-all duration-200'
  ].join(' ')
})

// Pass through content props to UPopover
const contentProps = computed(() => {
  return {
    side: 'bottom',
    sideOffset: 8,
    collisionPadding: 8,
    ...props.content
  }
})
</script>
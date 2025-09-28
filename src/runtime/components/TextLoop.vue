<template>
  <div :class="['relative inline-block whitespace-nowrap', className]" :style="{ height: containerHeight }">
    <AnimatePresence exit-before-enter>
      <Motion
        :key="currentIndex"
        :initial="computedVariants.initial"
        :animate="computedVariants.animate"
        :exit="computedVariants.exit"
        :transition="transition"
        :style="{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }"
        @motionstart="onMotionStart"
      >
        {{ currentItem }}
      </Motion>
    </AnimatePresence>
    
    <!-- Hidden element to measure text height -->
    <div ref="measureRef" class="invisible absolute">
      <div v-for="(item, index) in items" :key="'measure-' + index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

interface TextLoopProps {
  items: any[]
  className?: string
  interval?: number
  transition?: any
  variants?: any
  onIndexChange?: (index: number) => void
  trigger?: boolean
}

const props = withDefaults(defineProps<TextLoopProps>(), {
  items: () => [],
  className: '',
  interval: 2,
  transition: () => ({ 
    type: 'spring',
    stiffness: 150,
    damping: 19,
    mass: 1.2
  }),
  trigger: true
})

const emit = defineEmits(['indexChange'])

const currentIndex = ref(0)
const direction = ref(1)
const containerHeight = ref('auto')
const measureRef = ref<HTMLElement | null>(null)
let intervalId: ReturnType<typeof setInterval> | null = null

const currentItem = computed(() => {
  return props.items[currentIndex.value]
})

// Compute variants with direction
const computedVariants = computed(() => {
  const dir = direction.value
  
  if (props.variants) {
    // Handle string-based direction expressions
    const processVariant = (variant: any) => {
      if (!variant || typeof variant !== 'object') return variant
      
      const processed = { ...variant }
      for (const key in processed) {
        if (typeof processed[key] === 'string') {
          processed[key] = processed[key].replace('direction', dir.toString())
        }
      }
      return processed
    }
    
    return {
      initial: processVariant(props.variants.initial),
      animate: processVariant(props.variants.animate),
      exit: processVariant(props.variants.exit)
    }
  }
  
  // Default variants
  return {
    initial: {
      y: -dir * 20,
      rotateX: -dir * 90,
      opacity: 0,
      filter: 'blur(4px)',
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: {
      y: -dir * 20,
      rotateX: -dir * 90,
      opacity: 0,
      filter: 'blur(4px)',
    },
  }
})

// Measure the height of the tallest text item
function measureTextHeight() {
  if (!measureRef.value) return
  
  let maxHeight = 0
  const children = measureRef.value.children
  
  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement
    maxHeight = Math.max(maxHeight, child.offsetHeight)
  }
  
  containerHeight.value = `${maxHeight}px`
}

// Set up the interval for cycling through items
function startInterval() {
  if (!props.trigger || props.items.length <= 1) return
  
  clearInterval(intervalId as ReturnType<typeof setInterval>)
  
  const intervalMs = props.interval * 1000
  intervalId = setInterval(() => {
    // Update direction
    direction.value = 1
    
    // Update index
    currentIndex.value = (currentIndex.value + 1) % props.items.length
    emit('indexChange', currentIndex.value)
    props.onIndexChange?.(currentIndex.value)
  }, intervalMs)
}

// Handle motion start event
function onMotionStart() {
  // Ensure container height is updated when motion starts
  nextTick(() => {
    measureTextHeight()
  })
}

// Clean up interval on unmount
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

// Initialize the interval on mount (client-side only)
onMounted(() => {
  // Measure text height after component is mounted
  nextTick(() => {
    measureTextHeight()
  })
  
  startInterval()
})

// Watch for changes to trigger or items
watch(() => [props.trigger, props.items], () => {
  // Re-measure text height when items change
  nextTick(() => {
    measureTextHeight()
  })
  
  startInterval()
})
</script>

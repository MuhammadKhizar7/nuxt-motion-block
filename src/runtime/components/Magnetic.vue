<template>
  <Motion
    ref="magneticRef"
    :style="{ x: springX, y: springY }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Motion, useMotionValue, useSpring } from 'motion-v'

// Types
interface SpringOptions {
  stiffness?: number
  damping?: number
  mass?: number
}

interface MagneticProps {
  intensity?: number
  range?: number
  actionArea?: 'self' | 'parent' | 'global'
  springOptions?: SpringOptions
}

const props = withDefaults(defineProps<MagneticProps>(), {
  intensity: 0.6,
  range: 100,
  actionArea: 'self',
  springOptions: () => ({ stiffness: 26.7, damping: 4.1, mass: 0.2 }),
})

// Refs
const magneticRef = ref<InstanceType<typeof Motion> | null>(null)
const domElement = ref<HTMLElement | null>(null)

// Motion values
const x = useMotionValue(0)
const y = useMotionValue(0)

// Spring values
const springX = useSpring(x, props.springOptions)
const springY = useSpring(y, props.springOptions)

// Get the actual DOM element from the Motion component
const getDomElement = () => {
  if (!magneticRef.value) return null

  // Try to get the DOM element from the Motion component
  // This might vary depending on the motion-v version
  if ('$el' in magneticRef.value) {
    return (magneticRef.value as any).$el as HTMLElement
  }

  // Fallback: try to get the first child element
  if (magneticRef.value && 'firstElementChild' in magneticRef.value) {
    return magneticRef.value.firstElementChild as HTMLElement
  }

  return null
}

// Calculate distance and update position
const calculateDistance = (e: MouseEvent) => {
  const element = getDomElement()
  if (!element) return

  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const distanceX = e.clientX - centerX
  const distanceY = e.clientY - centerY

  const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

  if (isHovered.value && absoluteDistance <= props.range) {
    const scale = 1 - absoluteDistance / props.range
    x.set(distanceX * props.intensity * scale)
    y.set(distanceY * props.intensity * scale)
  }
  else {
    x.set(0)
    y.set(0)
  }
}

const isHovered = ref(false)

// Event handlers
const handleMouseEnter = () => {
  if (props.actionArea === 'self') {
    isHovered.value = true
  }
}

const handleMouseLeave = () => {
  if (props.actionArea === 'self') {
    isHovered.value = false
    x.set(0)
    y.set(0)
  }
}

// Setup event listeners based on actionArea
onMounted(() => {
  // Always listen for mousemove on document
  document.addEventListener('mousemove', calculateDistance)

  // Setup parent event listeners if needed
  const element = getDomElement()
  if (props.actionArea === 'parent' && element?.parentElement) {
    const parent = element.parentElement

    const handleParentEnter = () => {
      isHovered.value = true
    }

    const handleParentLeave = () => {
      isHovered.value = false
      x.set(0)
      y.set(0)
    }

    parent.addEventListener('mouseenter', handleParentEnter)
    parent.addEventListener('mouseleave', handleParentLeave)

    // Cleanup function for parent events
    onUnmounted(() => {
      parent.removeEventListener('mouseenter', handleParentEnter)
      parent.removeEventListener('mouseleave', handleParentLeave)
    })
  }
  else if (props.actionArea === 'global') {
    isHovered.value = true
  }
})

// Cleanup document event listener
onUnmounted(() => {
  document.removeEventListener('mousemove', calculateDistance)
})

// Watch for changes in actionArea
watch(() => props.actionArea, (newValue) => {
  if (newValue === 'global') {
    isHovered.value = true
  }
  else {
    isHovered.value = false
    x.set(0)
    y.set(0)
  }
})
</script>

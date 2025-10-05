<template>
  <Motion
    ref="tiltRef"
    :class="className"
    :style="combinedStyles"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion-v'

// Types
interface SpringOptions {
  stiffness?: number
  damping?: number
  mass?: number
}

interface TiltProps {
  className?: string
  style?: Record<string, any>
  rotationFactor?: number
  isReverse?: boolean
  springOptions?: SpringOptions
}

const props = withDefaults(defineProps<TiltProps>(), {
  rotationFactor: 15,
  isReverse: false,
  springOptions: () => ({}),
})

// Refs
const tiltRef = ref<InstanceType<typeof Motion> | null>(null)
const domElement = ref<HTMLElement | null>(null)

// Motion values
const x = useMotionValue(0)
const y = useMotionValue(0)

// Spring values
const xSpring = useSpring(x, props.springOptions)
const ySpring = useSpring(y, props.springOptions)

// Transform values
const rotateX = useTransform(
  ySpring,
  [-0.5, 0.5],
  props.isReverse
    ? [props.rotationFactor, -props.rotationFactor]
    : [-props.rotationFactor, props.rotationFactor],
)

const rotateY = useTransform(
  xSpring,
  [-0.5, 0.5],
  props.isReverse
    ? [-props.rotationFactor, props.rotationFactor]
    : [props.rotationFactor, -props.rotationFactor],
)

// Template for transform
const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

// Computed styles
const combinedStyles = computed(() => ({
  transformStyle: 'preserve-3d',
  ...props.style,
  transform,
}))

// Get the actual DOM element from the Motion component
const getDomElement = () => {
  if (!tiltRef.value) return null

  // Try to get the DOM element from the Motion component
  // This might vary depending on the motion-v version
  if ('$el' in tiltRef.value) {
    return (tiltRef.value as any).$el as HTMLElement
  }

  // Fallback: try to get the first child element
  if (tiltRef.value && 'firstElementChild' in tiltRef.value) {
    return tiltRef.value.firstElementChild as HTMLElement
  }

  return null
}

// Event handlers
const handleMouseMove = (e: MouseEvent) => {
  const element = getDomElement()
  if (!element) return

  const rect = element.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const xPos = mouseX / width - 0.5
  const yPos = mouseY / height - 0.5

  x.set(xPos)
  y.set(yPos)
}

const handleMouseLeave = () => {
  x.set(0)
  y.set(0)
}
</script>

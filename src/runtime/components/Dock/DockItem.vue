<template>
  <div
    ref="dockRef"
    :style="{ 
      width: currentWidth + 'px', 
      height: currentWidth + 'px'
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
    :class="itemClasses"
    class="relative flex items-center justify-center cursor-pointer 
           rounded-full transition-all duration-200 ease-out
           focus:outline-none focus:ring-2 focus:ring-primary-500/50"
    tabindex="0"
    role="button"
    :aria-label="ariaLabel"
  >
    <slot 
      :width="currentWidth" 
      :is-hovered="localIsHovered"
      :scale="currentScale"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDockContext } from './useDock'

interface DockItemProps {
  class?: string
  ariaLabel?: string
}

const BASE_SIZE = 48
const MIN_SIZE = 40

const props = defineProps<DockItemProps>()
const emit = defineEmits<{
  click: []
}>()

const dockRef = ref<HTMLDivElement | null>(null)
const currentWidth = ref(BASE_SIZE)
const currentScale = ref(1)
const localIsHovered = ref(false)

const { distance, magnification, mouseX } = useDockContext()

let animationFrame: number | null = null

const updateSize = () => {
  if (!dockRef.value || !mouseX) return

  const currentMouseX = mouseX.get() as number
  if (currentMouseX === Infinity) {
    currentWidth.value = MIN_SIZE
    currentScale.value = MIN_SIZE / BASE_SIZE
    return
  }

  try {
    const rect = dockRef.value.getBoundingClientRect()
    const dockRect = dockRef.value.closest('[role="toolbar"]')?.getBoundingClientRect()
    
    if (!rect || !dockRect) return

    const itemCenter = rect.left - dockRect.left + rect.width / 2
    const mouseDistance = Math.abs(currentMouseX - itemCenter)
    
    // Calculate size based on distance with smooth curve
    let newWidth: number
    if (mouseDistance <= distance) {
      const factor = 1 - Math.pow(mouseDistance / distance, 2) // Quadratic easing
      newWidth = MIN_SIZE + (magnification - MIN_SIZE) * factor
    } else {
      newWidth = MIN_SIZE
    }
    
    currentWidth.value = Math.max(MIN_SIZE, Math.round(newWidth))
    currentScale.value = newWidth / BASE_SIZE
    
   } catch (error) {
    console.error('Error calculating size:', error)
  }
}

// Use requestAnimationFrame for smooth updates
const startAnimation = () => {
  if (animationFrame) return
  
  const animate = () => {
    updateSize()
    animationFrame = requestAnimationFrame(animate)
  }
  animationFrame = requestAnimationFrame(animate)
}

const stopAnimation = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
    animationFrame = null
  }
}

onMounted(() => {
  // Listen to mouseX changes if motion-v supports it
  try {
    if (mouseX && typeof mouseX.on === 'function') {
      const unsubscribe = mouseX.on('change', () => {
        if (!animationFrame) {
          startAnimation()
        }
      })
      
      onUnmounted(() => {
        stopAnimation()
        if (typeof unsubscribe === 'function') {
          unsubscribe()
        }
      })
    } else {
      // Fallback: continuous animation
      startAnimation()
      onUnmounted(() => {
        stopAnimation()
      })
    }
  } catch (error) {
    console.warn('Motion-v subscription failed, using fallback animation:', error)
    startAnimation()
    onUnmounted(() => {
      stopAnimation()
    })
  }
})

const itemClasses = computed(() => {
  return [
    props.class
  ].filter(Boolean).join(' ')
})

const handleClick = () => {
  emit('click')
}

const handleMouseEnter = () => {
  localIsHovered.value = true
  startAnimation()
}

const handleMouseLeave = () => {
  localIsHovered.value = false
  // Keep animation running for smooth transition
  setTimeout(() => {
    if (!localIsHovered.value) {
      // Don't stop immediately to allow for smooth transition
    }
  }, 100)
}

const handleFocus = () => {
  localIsHovered.value = true
  startAnimation()
}

const handleBlur = () => {
  localIsHovered.value = false
}
</script>

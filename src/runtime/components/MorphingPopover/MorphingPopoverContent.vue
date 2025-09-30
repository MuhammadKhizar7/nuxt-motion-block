<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40"
    >
      <!-- Enhanced motion component with advanced animations -->
      <Motion
        ref="contentRef"
        :layout-id="`popover-trigger-${uniqueId}`"
        :initial="computedInitialVariant"
        :animate="computedAnimateVariant"
        :exit="computedExitVariant"
        :whileHover="computedHoverVariant"
        :whileFocus="computedFocusVariant"
        :transition="enhancedTransition"
        :class="contentClasses"
        :style="enhancedContentStyles"
        :id="`popover-content-${uniqueId}`"
        role="dialog"
        :aria-modal="true"
        :aria-labelledby="`popover-trigger-${uniqueId}`"
        tabindex="-1"
        v-bind="filteredAttrs"
      >
        <!-- Arrow element if enabled -->
        <div 
          v-if="showArrow"
          :class="arrowClasses"
          :style="arrowStyles"
        />
        
        <!-- Content slot -->
        <div class="relative z-10">
          <slot />
        </div>
      </Motion>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import { onClickOutside } from '@vueuse/core'

interface Props {
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  arrowEnabled?: boolean
  collisionDetection?: boolean
  sticky?: boolean
  boundary?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  sideOffset: 8,
  alignOffset: 0,
  arrowEnabled: true,
  collisionDetection: true,
  sticky: false,
  boundary: 'viewport'
})

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
const filteredAttrs = computed(() => {
  const { class: _, ...rest } = attrs
  return rest
})

// Inject enhanced context
const context = inject('morphingPopoverContext')
if (!context) {
  throw new Error('MorphingPopoverContent must be used within a MorphingPopover component')
}

const {
  isOpen,
  uniqueId,
  close,
  variants,
  transition,
  positioningConfig,
  closeOnClickOutside
} = context

const contentRef = ref<HTMLElement>()
const currentSide = ref(props.side)
const currentAlign = ref(props.align)
const showArrow = computed(() => props.arrowEnabled)

// Enhanced positioning calculation with collision detection
const calculateAdvancedPosition = (triggerElement: HTMLElement) => {
  const triggerRect = triggerElement.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const estimatedWidth = 320
  const estimatedHeight = 200
  
  let bestSide = props.side
  let bestAlign = props.align
  let x = triggerRect.left
  let y = triggerRect.bottom + props.sideOffset
  
  // Collision detection logic
  if (props.collisionDetection) {
    const positions = [
      { side: 'bottom', space: viewportHeight - triggerRect.bottom },
      { side: 'top', space: triggerRect.top },
      { side: 'right', space: viewportWidth - triggerRect.right },
      { side: 'left', space: triggerRect.left }
    ]
    
    // Find the side with most space
    const requiredSpace = bestSide === 'top' || bestSide === 'bottom' ? estimatedHeight : estimatedWidth
    const currentSpace = positions.find(p => p.side === bestSide)?.space || 0
    
    if (currentSpace < requiredSpace + props.sideOffset) {
      const alternativeSide = positions
        .filter(p => p.space >= requiredSpace + props.sideOffset)
        .sort((a, b) => b.space - a.space)[0]
      
      if (alternativeSide) {
        bestSide = alternativeSide.side as typeof props.side
      }
    }
  }
  
  // Calculate position based on chosen side
  switch (bestSide) {
    case 'top':
      y = triggerRect.top - props.sideOffset
      break
    case 'bottom':
      y = triggerRect.bottom + props.sideOffset
      break
    case 'left':
      x = triggerRect.left - props.sideOffset
      y = triggerRect.top
      break
    case 'right':
      x = triggerRect.right + props.sideOffset
      y = triggerRect.top
      break
  }
  
  // Alignment adjustments
  if (bestSide === 'top' || bestSide === 'bottom') {
    switch (bestAlign) {
      case 'start':
        x = triggerRect.left + props.alignOffset
        break
      case 'center':
        x = triggerRect.left + triggerRect.width / 2 + props.alignOffset
        break
      case 'end':
        x = triggerRect.right + props.alignOffset
        break
    }
  }
  
  // Update current positioning for arrow
  currentSide.value = bestSide
  currentAlign.value = bestAlign
  
  return { x, y, side: bestSide, align: bestAlign }
}

// Enhanced content styles with improved positioning
const enhancedContentStyles = computed(() => {
  if (!isOpen.value) return {}
  
  const triggerElement = getTriggerElement()
  if (!triggerElement) {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90vw',
      maxHeight: '90vh'
    }
  }
  
  const position = calculateAdvancedPosition(triggerElement)
  
  let transformOrigin = 'center'
  switch (position.side) {
    case 'top': transformOrigin = 'bottom center'; break
    case 'bottom': transformOrigin = 'top center'; break
    case 'left': transformOrigin = 'right center'; break
    case 'right': transformOrigin = 'left center'; break
  }
  
  // Transform adjustment based on align
  let transform = ''
  if (position.side === 'top' || position.side === 'bottom') {
    switch (position.align) {
      case 'start': transform = 'translateX(0)'; break
      case 'center': transform = 'translateX(-50%)'; break
      case 'end': transform = 'translateX(-100%)'; break
    }
  }
  
  return {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform,
    transformOrigin,
    maxWidth: '90vw',
    maxHeight: '90vh',
    zIndex: 50
  }
})

// Arrow positioning
const arrowStyles = computed(() => {
  const size = 8
  const styles: any = {
    position: 'absolute',
    width: `${size * 2}px`,
    height: `${size * 2}px`,
    transform: 'rotate(45deg)',
    zIndex: -1
  }
  
  switch (currentSide.value) {
    case 'top':
      styles.bottom = `-${size}px`
      styles.left = '50%'
      styles.transform += ' translateX(-50%)'
      break
    case 'bottom':
      styles.top = `-${size}px`
      styles.left = '50%'
      styles.transform += ' translateX(-50%)'
      break
    case 'left':
      styles.right = `-${size}px`
      styles.top = '50%'
      styles.transform += ' translateY(-50%)'
      break
    case 'right':
      styles.left = `-${size}px`
      styles.top = '50%'
      styles.transform += ' translateY(-50%)'
      break
  }
  
  return styles
})

const arrowClasses = computed(() => {
  return [
    'bg-white dark:bg-zinc-700',
    'border border-zinc-950/10 dark:border-zinc-50/10'
  ].join(' ')
})

// Enhanced animation variants with morphing effects
const computedInitialVariant = computed(() => {
  const baseVariant = variants.value?.initial || {
    opacity: 0,
    scale: 0.8,
    y: currentSide.value === 'top' ? 10 : -10
  }
  
  // Add morphing path effects
  if (currentSide.value === 'bottom') {
    baseVariant.y = -20
    baseVariant.rotateX = -15
  } else if (currentSide.value === 'top') {
    baseVariant.y = 20
    baseVariant.rotateX = 15
  }
  
  return baseVariant
})

const computedAnimateVariant = computed(() => {
  return variants.value?.animate || {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0
  }
})

const computedExitVariant = computed(() => {
  return variants.value?.exit || {
    opacity: 0,
    scale: 0.8,
    y: currentSide.value === 'top' ? 10 : -10
  }
})

const computedHoverVariant = computed(() => {
  return variants.value?.hover || {
    scale: 1.02,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
  }
})

const computedFocusVariant = computed(() => {
  return variants.value?.focus || {
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
  }
})

// Enhanced transition with morphing effects
const enhancedTransition = computed(() => {
  const baseTransition = transition.value || {
    type: 'spring',
    bounce: 0.1,
    duration: 0.4
  }
  
  // Add stagger for morphing elements
  if (showArrow.value) {
    baseTransition.staggerChildren = 0.05
  }
  
  return baseTransition
})

// Get trigger element with enhanced detection
const getTriggerElement = () => {
  const triggerSelector = `[data-layout-id="popover-trigger-${uniqueId}"]`
  let triggerElement = document.querySelector(triggerSelector) as HTMLElement
  
  if (!triggerElement) {
    const fallbackSelector = `[aria-controls="popover-content-${uniqueId}"]`
    triggerElement = document.querySelector(fallbackSelector) as HTMLElement
  }
  
  if (!triggerElement) {
    const buttonSelector = `button[data-popover="${uniqueId}"]`
    triggerElement = document.querySelector(buttonSelector) as HTMLElement
  }
  
  return triggerElement
}

// Enhanced content classes with responsive design
const contentClasses = computed(() => {
  const baseClasses = [
    'absolute overflow-hidden rounded-lg border',
    'border-zinc-200 bg-white text-zinc-950 shadow-xl',
    'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50',
    'backdrop-blur-sm',
    'outline-none focus:outline-none',
    'transition-all duration-200'
  ]
  
  // Add size classes based on content
  baseClasses.push('min-w-[200px] max-w-[400px] p-4')
  
  // Add animation classes
  baseClasses.push('will-change-transform will-change-opacity')
  
  if (attrs.class) {
    if (typeof attrs.class === 'string') {
      baseClasses.push(attrs.class)
    } else if (Array.isArray(attrs.class)) {
      baseClasses.push(...attrs.class)
    }
  }
  
  return baseClasses.join(' ')
})

// Click outside handling
if (closeOnClickOutside) {
  onClickOutside(contentRef, () => {
    if (isOpen.value) {
      close()
    }
  })
}

// Enhanced focus management
watch(isOpen, async (open) => {
  if (open) {
    await nextTick()
    
    const element = contentRef.value?.$el || contentRef.value
    if (element && typeof element.focus === 'function') {
      element.focus()
    } else {
      const focusableElement = element?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElement && typeof focusableElement.focus === 'function') {
        focusableElement.focus()
      }
    }
  }
})
</script>

<template>
  <component
    :is="as"
    ref="itemRef"
    class="w-fit transition duration-200 ease-linear"
    :class="props.class"
    v-bind="rest"
  >
    <div :style="itemStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { ref, inject, computed, type Ref } from 'vue'

interface Props {
  as?: string
  class?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: any
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
})

const {
  as,
  translateX,
  translateY,
  translateZ,
  rotateX,
  rotateY,
  rotateZ,
  ...rest
} = props

// Get mouse enter context from parent
const mouseEnterContext = inject<{ isMouseEntered: Ref<boolean> }>('card3DMouseEnterContext')

const itemRef = ref<HTMLElement>()

// Computed style for the item
const itemStyle = computed(() => {
  if (mouseEnterContext?.isMouseEntered.value) {
    // Apply 3D transform with proper formatting
    const transforms = []

    // Translation transforms
    if (translateX !== 0) transforms.push('translateX(' + translateX + 'px)')
    if (translateY !== 0) transforms.push('translateY(' + translateY + 'px)')
    if (translateZ !== 0) transforms.push('translateZ(' + translateZ + 'px)')

    // Rotation transforms
    if (rotateX !== 0) transforms.push('rotateX(' + rotateX + 'deg)')
    if (rotateY !== 0) transforms.push('rotateY(' + rotateY + 'deg)')
    if (rotateZ !== 0) transforms.push('rotateZ(' + rotateZ + 'deg)')

    return {
      transform: transforms.join(' '),
      transformStyle: 'preserve-3d' as const,
      width: 'fit-content',
      height: 'fit-content',
    }
  }
  else {
    return {
      transform: 'none',
      transformStyle: 'preserve-3d' as const,
      width: 'fit-content',
      height: 'fit-content',
    }
  }
})
</script>

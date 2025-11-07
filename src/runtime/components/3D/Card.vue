<template>
  <div
    ref="containerRef"
    :class="containerClass"
    :style="{ perspective: '1000px' }"
  >
    <UCard
      class="relative transition-all duration-200 ease-linear"
      :class="props.class"
      :ui="ui"
      :style="cardStyle"
      v-bind="$attrs"
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <template
        v-for="(_, slotName) in $slots"
        #[slotName]="slotProps"
      >
        <slot
          :name="slotName"
          v-bind="slotProps"
        />
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, computed } from 'vue'

interface Props {
  class?: string
  containerClass?: string
  intensity?: number
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  intensity: 25,
  class: '',
  containerClass: '',
  ui: () => ({}),
})

const containerRef = ref<HTMLElement>()
const rotationX = ref(0)
const rotationY = ref(0)
const isMouseEntered = ref(false)

// Computed style for the card
const cardStyle = computed(() => ({
  transform: `rotateY(${rotationX.value}deg) rotateX(${rotationY.value}deg)`,
  transformStyle: 'preserve-3d',
}))

// Provide context to children
provide('card3DMouseEnterContext', {
  isMouseEntered: isMouseEntered,
  setIsMouseEntered: (value: boolean) => {
    isMouseEntered.value = value
  },
})

const handleMouseEnter = () => {
  isMouseEntered.value = true
}

const handleMouseLeave = () => {
  isMouseEntered.value = false
  rotationX.value = 0
  rotationY.value = 0
}

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return

  const { left, top, width, height } = containerRef.value.getBoundingClientRect()
  const x = (e.clientX - left - width / 2) / props.intensity
  const y = (e.clientY - top - height / 2) / props.intensity

  rotationX.value = x
  rotationY.value = -y
}
</script>

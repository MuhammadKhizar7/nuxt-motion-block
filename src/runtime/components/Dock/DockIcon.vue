<template>
  <UIcon
    :name="name"
    :style="{
      width: iconSize + 'px',
      height: iconSize + 'px',
      transform: `scale(${scale})`,
    }"
    class="flex items-center justify-center overflow-hidden
           transition-transform duration-200 ease-out"
    :class="iconClasses"
  >
    <slot />
  </UIcon>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DockIconProps {
  class?: string
  width?: number
  scale?: number
  name?: string
}

const props = withDefaults(defineProps<DockIconProps>(), {
  width: 48,
  scale: 1,
  name: 'i-lucide-home',
})

const iconClasses = computed(() => {
  return [
    props.class,
  ].filter(Boolean).join(' ')
})

const iconSize = computed(() => {
  const baseSize = Math.max(24, props.width * 0.6)
  return Math.round(baseSize)
})
</script>

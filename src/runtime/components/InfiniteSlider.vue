<template>
  <div class="w-full overflow-hidden">
    <div class="infinite-slider-content" :class="className" :style="style">
      <slot />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  className?: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 40,
})

const style = computed(() => ({
  animationDuration: `${props.duration}s`,
}))
</script>

<style scoped>
.infinite-slider-content {
  display: flex;
  width: fit-content;
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>


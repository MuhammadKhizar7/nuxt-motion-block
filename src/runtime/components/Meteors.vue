<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.5 }"
    class="relative w-full h-full"
  >
    <span
      v-for="(el, idx) in meteors"
      :key="`meteor-${idx}`"
      :class="[
        'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
        'before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-[\'\']',
        props.class,
      ]"
      :style="getMeteorStyle(idx)"
    />
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

interface Props {
  number?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  number: 20,
})

const meteors = Array.from({ length: props.number }, () => true)

const getMeteorStyle = (idx: number) => {
  const meteorCount = props.number
  const position = idx * (800 / meteorCount) - 400

  return {
    top: '-40px',
    left: `${position}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
  }
}
</script>

<style scoped>
@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}

.animate-meteor-effect {
  animation: meteor 5s linear infinite;
}
</style>

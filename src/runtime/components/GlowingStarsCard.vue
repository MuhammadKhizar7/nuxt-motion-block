<template>
  <UCard
    :ui="props.ui"
  >
    <!-- Card Header Slot -->
    <template #header>
      <slot name="header" />
    </template>
    <!-- Stars Animation Section -->
    <div
      class="flex-1 flex items-center justify-center"
      @mouseenter="mouseEnter = true"
      @mouseleave="mouseEnter = false"
    >
      <div class="h-48 w-full grid grid-cols-18 gap-px">
        <div
          v-for="starIdx in 108"
          :key="starIdx"
          class="relative flex items-center justify-center"
        >
          <motion.div
            :initial="{ scale: 1 }"
            :animate="{
              scale: mouseEnter || glowingStars.includes(starIdx-1) ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
              background: mouseEnter || glowingStars.includes(starIdx-1) ? '#fff' : '#666',
            }"
            :transition="{
              duration: 2,
              ease: 'easeInOut',
              delay: mouseEnter ? (starIdx-1) * 0.01 : ((starIdx-1) % 10) * 0.1,
            }"
            class="h-px w-px rounded-full relative z-20"
          />

          <motion.div
            v-if="mouseEnter || glowingStars.includes(starIdx-1)"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{
              duration: 2,
              ease: 'easeInOut',
              delay: mouseEnter ? (starIdx-1) * 0.01 : ((starIdx-1) % 10) * 0.1,
            }"
            :class="['absolute left-1/2 -translate-x-1/2 z-10 h-1 w-1 rounded-full blur-[1px] shadow-2xl', starBgClass]"
          />
        </div>
      </div>
    </div>
    <!-- Default Slot for Content -->
    <div>
      <slot />
    </div>
    <!-- Card Footer Slot -->
    <template #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  starBgClass?: string
  ui?: {
    root?: string
    body?: string
    header?: string
    footer?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  starBgClass: 'bg-primary-400 dark:bg-primary-500 shadow-primary-400/50 dark:shadow-primary-500/50',
  ui: () => ({
    root: '',
    body: '',
    header: '',
    footer: '',
  }),
})

const mouseEnter = ref(false)
const glowingStars = ref<number[]>([])

onMounted(() => {
  const interval = setInterval(() => {
    glowingStars.value = Array.from({ length: 5 }, () => Math.floor(Math.random() * 108))
  }, 3000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

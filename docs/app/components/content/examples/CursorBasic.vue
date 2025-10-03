<template>
  <div class="flex h-[400px] w-full items-center justify-center">
    <MCursor
      attach-to-parent
      :variants="{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 }
      }"
      :spring-config="{ bounce: 0.001 }"
      :transition="{ ease: 'easeInOut', duration: 0.15 }"
      :on-position-change="handlePositionChange"
    >
      <motion.div
        :animate="{
          width: isHovering ? 80 : 16,
          height: isHovering ? 32 : 16
        }"
        class="flex items-center justify-center rounded-[24px] bg-neutral-500/40 backdrop-blur-md dark:bg-neutral-300/40"
      >
        <AnimatePresence>
          <motion.div
            v-if="isHovering"
            :initial="{ opacity: 0, scale: 0.6 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.6 }"
            class="inline-flex w-full items-center justify-center"
          >
            <div class="inline-flex items-center text-sm text-white dark:text-black">
              More
              <UIcon
                name="i-lucide-plus"
                class="ml-1 h-4 w-4"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MCursor>

    <div ref="targetRef">
      <UCard>
        <template #header>
          <h1>custom cursor</h1>
        </template>

        Cursor with spring with custom variants and transition
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { motion, AnimatePresence } from 'motion-v'

const isHovering = ref(false)
const targetRef = ref<HTMLElement | null>(null)

function handlePositionChange(x: number, y: number) {
  if (targetRef.value) {
    const rect = targetRef.value.getBoundingClientRect()
    const inside
      = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    isHovering.value = inside
  }
}
</script>

<!-- components/WobbleCard.vue -->
<template>
  <motion.div
    ref="cardRef"
    :style="{
      transform: isHovering
        ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
        : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
      transition: 'transform 0.1s ease-out',
    }"
    class="w-full h-full"
    @mousemove="handleMouseMove"
    @mouseenter="setIsHovering(true)"
    @mouseleave="handleMouseLeave"
  >
    <!-- Nuxt UI Card as the main wrapper -->
    <UCard
      :ui="{
        ...ui,
        root: ['mx-auto w-full h-full relative rounded-2xl overflow-hidden', containerClass],
        body: 'relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] overflow-hidden',
        header: 'relative z-10',
        footer: 'relative z-10',
      }"
      :style="{
        boxShadow:
          '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
      }"
    >
      <!-- Noise background -->
      <div
        class="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)] pointer-events-none"
        :style="{
          backgroundImage: `url('/noise.webp')`,
          backgroundSize: '30%',
        }"
      />

      <!-- Content with inverse transform -->
      <motion.div
        :style="{
          transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
            : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
          transition: 'transform 0.1s ease-out',
        }"
        :class="['h-full px-4 py-8 sm:px-6 sm:py-12', props.class]"
      >
        <!-- Header Slot -->
        <template #header>
          <slot name="header" />
        </template>

        <!-- Default Slot -->
        <slot>
          <!-- Default content -->
          <div class="text-white space-y-4 text-center h-full flex flex-col items-center justify-center">
            <UIcon
              name="i-heroicons-sparkles"
              class="w-12 h-12"
            />
            <h3 class="text-2xl font-bold">
              Wobble Card
            </h3>
            <p class="text-white/80">
              Hover and move to see the effect
            </p>
          </div>
        </slot>

        <!-- Footer Slot -->
        <template #footer>
          <slot name="footer" />
        </template>
      </motion.div>
    </UCard>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { UCardProps } from '#ui/types'
import { ref } from 'vue'

interface Props {
  containerClass?: string
  class?: string
  ui?: UCardProps['ui']
}

const props = withDefaults(defineProps<Props>(), {
  containerClass: 'bg-primary w-full h-full',
  class: '',
})

// Reactive state
const cardRef = ref<HTMLElement>()
const mousePosition = ref({ x: 0, y: 0 })
const isHovering = ref(false)

const setIsHovering = (value: boolean) => {
  isHovering.value = value
}

const handleMouseMove = (event: MouseEvent) => {
  if (!cardRef.value) return

  const { clientX, clientY } = event
  // @ts-ignore
  const rect = cardRef.value.$el.getBoundingClientRect()
  const x = (clientX - (rect.left + rect.width / 2)) / 20
  const y = (clientY - (rect.top + rect.height / 2)) / 20

  mousePosition.value = { x, y }
}

const handleMouseLeave = () => {
  setIsHovering(false)
  mousePosition.value = { x: 0, y: 0 }
}
</script>

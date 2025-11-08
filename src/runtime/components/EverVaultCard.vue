<template>
  <UCard
    ref="cardRef"
    v-bind="$attrs"
    class="group/card relative overflow-hidden bg-transparent"
    :ui="{
      ...ui,
    }"
    :class="[props.class]"
    @mousemove="onMouseMove"
  >
    <template
      v-if="$slots.header"
      #header
    >
      <slot name="header" />
    </template>
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />

      <!-- Gradient layer -->
      <motion.div
        :class="['absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500', props.gradientColors]"
        :style="gradientStyle"
      />

      <!-- Text pattern layer -->
      <motion.div
        class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        :style="gradientStyle"
      >
        <p class="absolute inset-x-0 text-xs break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {{ randomString }}
        </p>
      </motion.div>
    </div>
    <template v-if="$slots.default">
      <slot />
    </template>

    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { motion } from 'motion-v'

interface UCardProps {
  ui?: {
    root?: string
    header?: string
    body?: string
    footer?: string
  }
}

interface Props {
  class?: string
  gradientColors?: string
  ui?: UCardProps['ui']
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  gradientColors: 'from-green-500 to-blue-700',
  ui: () => ({
    body: 'w-full h-full bg-default',
  }),
})

const cardRef = ref<HTMLElement>()
const mouseX = ref(0)
const mouseY = ref(0)
const randomString = ref('')

onMounted(() => {
  randomString.value = generateRandomString(1500)
})

const onMouseMove = (event: MouseEvent) => {
  if (!cardRef.value) return
  // @ts-ignore
  const { left, top } = cardRef.value.$el.getBoundingClientRect()
  mouseX.value = event.clientX - left
  mouseY.value = event.clientY - top

  randomString.value = generateRandomString(1500)
}

const gradientStyle = computed(() => {
  const maskImage = `radial-gradient(250px at ${mouseX.value}px ${mouseY.value}px, white, transparent)`
  return {
    maskImage,
    WebkitMaskImage: maskImage,
  }
})

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
</script>

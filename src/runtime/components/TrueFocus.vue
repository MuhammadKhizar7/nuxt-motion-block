<template>
  <div
    ref="containerRef"
    class="relative flex gap-4 justify-center items-center flex-wrap"
  >
    <span
      v-for="(word, index) in words"
      :key="index"
      :ref="el => { wordRefs[index] = el }"
      class="relative text-[3rem] font-black cursor-pointer"
      :style="{
        filter: manualMode
          ? (index === currentIndex ? 'blur(0px)' : `blur(${blurAmount}px)`)
          : (index === currentIndex ? 'blur(0px)' : `blur(${blurAmount}px)`),
        transition: `filter ${animationDuration}s ease`,
      }"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    >
      {{ word }}
    </span>

    <motion.div
      class="absolute top-0 left-0 pointer-events-none box-border border-0"
      :animate="{
        x: focusRect.x,
        y: focusRect.y,
        width: focusRect.width,
        height: focusRect.height,
        opacity: currentIndex >= 0 ? 1 : 0,
      }"
      :transition="{
        duration: animationDuration,
      }"
      :style="{
        '--border-color': borderColor,
        '--glow-color': glowColor,
      }"
    >
      <span
        class="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
        :style="{
          borderColor: 'var(--border-color)',
          filter: 'drop-shadow(0 0 4px var(--border-color))',
        }"
      />
      <span
        class="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
        :style="{
          borderColor: 'var(--border-color)',
          filter: 'drop-shadow(0 0 4px var(--border-color))',
        }"
      />
      <span
        class="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
        :style="{
          borderColor: 'var(--border-color)',
          filter: 'drop-shadow(0 0 4px var(--border-color))',
        }"
      />
      <span
        class="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
        :style="{
          borderColor: 'var(--border-color)',
          filter: 'drop-shadow(0 0 4px var(--border-color))',
        }"
      />
    </motion.div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { motion } from 'motion-v'

const props = defineProps({
  sentence: {
    type: String,
    default: 'True Focus',
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  blurAmount: {
    type: Number,
    default: 5,
  },
  borderColor: {
    type: String,
    default: 'green',
  },
  glowColor: {
    type: String,
    default: 'rgba(0, 255, 0, 0.6)',
  },
  animationDuration: {
    type: Number,
    default: 0.5,
  },
  pauseBetweenAnimations: {
    type: Number,
    default: 1,
  },
})

const words = computed(() => props.sentence.split(' '))
const currentIndex = ref(0)
const lastActiveIndex = ref(null)
const containerRef = ref(null)
const wordRefs = ref([])
const focusRect = ref({ x: 0, y: 0, width: 0, height: 0 })

let interval

const updateFocusRect = async () => {
  if (currentIndex.value === null || currentIndex.value === -1) return
  if (!wordRefs.value[currentIndex.value] || !containerRef.value) return

  await nextTick()

  const parentRect = containerRef.value.getBoundingClientRect()
  const activeRect = wordRefs.value[currentIndex.value].getBoundingClientRect()

  focusRect.value = {
    x: activeRect.left - parentRect.left,
    y: activeRect.top - parentRect.top,
    width: activeRect.width,
    height: activeRect.height,
  }
}

const handleMouseEnter = (index) => {
  if (props.manualMode) {
    lastActiveIndex.value = index
    currentIndex.value = index
  }
}

const handleMouseLeave = () => {
  if (props.manualMode) {
    currentIndex.value = lastActiveIndex.value
  }
}

watch(() => props.manualMode, (newVal) => {
  if (newVal) {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }
  else {
    startAutoAnimation()
  }
})

watch(currentIndex, updateFocusRect)

const startAutoAnimation = () => {
  if (props.manualMode) return

  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.value.length
  }, (props.animationDuration + props.pauseBetweenAnimations) * 1000)
}

onMounted(() => {
  if (!props.manualMode) {
    startAutoAnimation()
  }
  updateFocusRect()
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

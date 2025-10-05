<template>
  <div
    :class="className"
    :style="offsetStyle"
  >
    <!-- @vue-ignore -->
    <Motion
      v-for="(style, index) in layerStyles"
      :key="index"
      tag="div"
      class="pointer-events-none absolute inset-0 rounded-[inherit]"
      :style="style"
      :initial="initial"
      :animate="animate"
      :variants="variants"
      :transition="transition"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { Motion } from 'motion-v'

const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
}

export default defineComponent({
  name: 'ProgressiveBlur',
  components: { Motion },
  props: {
    direction: {
      type: String as PropType<keyof typeof GRADIENT_ANGLES>,
      default: 'bottom',
    },
    blurLayers: {
      type: Number,
      default: 8,
    },
    className: {
      type: String,
      default: '',
    },
    blurIntensity: {
      type: Number,
      default: 0.25,
    },
    animate: [String, Object] as PropType<string | object>,
    variants: Object as PropType<object>,
    transition: Object as PropType<object>,
    initial: [String, Object] as PropType<string | object>,
  },
  computed: {
    layers() {
      return Math.max(this.blurLayers, 2)
    },
    segmentSize() {
      return 1 / (this.blurLayers + 1)
    },
    layerStyles() {
      return Array.from({ length: this.layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[this.direction]
        const gradientStops = [
          index * this.segmentSize,
          (index + 1) * this.segmentSize,
          (index + 2) * this.segmentSize,
          (index + 3) * this.segmentSize,
        ].map(
          (pos, posIndex) =>
            `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`,
        )
        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`
        const blurValue = index * this.blurIntensity
        return {
          maskImage: gradient,
          WebkitMaskImage: gradient,
          backdropFilter: `blur(${blurValue}px)`,
          WebkitBackdropFilter: `blur(${blurValue}px)`,
        }
      })
    },
    offsetStyle() {
      const offset = `-${this.segmentSize * 100}%`
      switch (this.direction) {
        case 'bottom':
          return { bottom: offset }
        case 'top':
          return { top: offset }
        case 'left':
          return { left: offset }
        case 'right':
          return { right: offset }
        default:
          return {}
      }
    },
  },
})
</script>

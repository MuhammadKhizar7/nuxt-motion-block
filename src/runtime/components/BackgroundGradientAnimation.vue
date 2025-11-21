<template>
  <div
    ref="containerRef"
    :class="[
      'h-full w-full overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
      containerClass,
    ]"
    @mousemove="handleMouseMove"
  >
    <svg class="hidden">
      <defs>
        <filter id="blurMe">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend
            in="SourceGraphic"
            in2="goo"
          />
        </filter>
      </defs>
    </svg>

    <div :class="props.class">
      <slot />
    </div>

    <div
      :class="[
        'gradients-container h-full w-full blur-lg',
        isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]',
      ]"
    >
      <div
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
          '[transform-origin:center_center]',
          'animate-first',
          'opacity-100',
        ]"
      />
      <div
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
          '[transform-origin:calc(50%-400px)]',
          'animate-second',
          'opacity-100',
        ]"
      />
      <div
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
          '[transform-origin:calc(50%+400px)]',
          'animate-third',
          'opacity-100',
        ]"
      />
      <div
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
          '[transform-origin:calc(50%-200px)]',
          'animate-fourth',
          'opacity-70',
        ]"
      />
      <div
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
          '[transform-origin:calc(50%-800px)_calc(50%+800px)]',
          'animate-fifth',
          'opacity-100',
        ]"
      />

      <div
        v-if="interactive"
        ref="interactiveRef"
        :class="[
          'absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2',
          'opacity-70',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  class?: string
  interactive?: boolean
  containerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  gradientBackgroundStart: 'rgb(108, 0, 162)',
  gradientBackgroundEnd: 'rgb(0, 17, 82)',
  firstColor: '18, 113, 255',
  secondColor: '221, 74, 255',
  thirdColor: '100, 220, 255',
  fourthColor: '200, 50, 50',
  fifthColor: '180, 180, 50',
  pointerColor: '140, 100, 255',
  size: '80%',
  blendingValue: 'hard-light',
  interactive: true,
})

const interactiveRef = ref<HTMLDivElement>()
const containerRef = ref<HTMLDivElement>()

const curX = ref(0)
const curY = ref(0)
const tgX = ref(0)
const tgY = ref(0)
const isSafari = ref(false)

onMounted(() => {
  // Set CSS custom properties
  document.body.style.setProperty(
    '--gradient-background-start',
    props.gradientBackgroundStart,
  )
  document.body.style.setProperty(
    '--gradient-background-end',
    props.gradientBackgroundEnd,
  )
  document.body.style.setProperty('--first-color', props.firstColor)
  document.body.style.setProperty('--second-color', props.secondColor)
  document.body.style.setProperty('--third-color', props.thirdColor)
  document.body.style.setProperty('--fourth-color', props.fourthColor)
  document.body.style.setProperty('--fifth-color', props.fifthColor)
  document.body.style.setProperty('--pointer-color', props.pointerColor)
  document.body.style.setProperty('--size', props.size)
  document.body.style.setProperty('--blending-value', props.blendingValue)

  // Detect Safari
  isSafari.value = /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent)

  // Start animation loop
  let animationFrameId: number
  const move = () => {
    if (interactiveRef.value) {
      curX.value = curX.value + (tgX.value - curX.value) / 20
      curY.value = curY.value + (tgY.value - curY.value) / 20

      interactiveRef.value.style.transform = `translate(${Math.round(curX.value)}px, ${Math.round(curY.value)}px)`
    }
    animationFrameId = requestAnimationFrame(move)
  }

  move()

  // Cleanup
  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  })
})

const handleMouseMove = (event: MouseEvent) => {
  if (interactiveRef.value && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    tgX.value = event.clientX - rect.left
    tgY.value = event.clientY - rect.top
  }
}
</script>

<style>
@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}

.animate-first {
  animation: moveVertical 30s ease infinite;
}

.animate-second {
  animation: moveInCircle 20s reverse infinite;
}

.animate-third {
  animation: moveInCircle 40s linear infinite;
}

.animate-fourth {
  animation: moveHorizontal 40s ease infinite;
}

.animate-fifth {
  animation: moveInCircle 20s ease infinite;
}
</style>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

interface GlitchTextProps {
  text: string
  speed?: number
  enableShadows?: boolean
  enableOnHover?: boolean
  class?: string
}

const props = withDefaults(defineProps<GlitchTextProps>(), {
  speed: 0.5,
  enableShadows: true,
  enableOnHover: false,
  class: '',
})

interface CustomCSSProperties extends CSSProperties {
  // Custom properties for shadow offset (used in after/before styles)
  '--after-shadow': string
  '--before-shadow': string

  // Custom properties for the full animation string (applied in after/before styles)
  '--after-animation': string
  '--before-animation': string
}

// --- CORE FIX: Define the FULL animation string here ---
const inlineStyles = computed<CustomCSSProperties>(() => {
  // Calculate the speed-dependent animation strings
  const afterAnimationString = `glitch ${props.speed * 3}s infinite linear alternate-reverse`
  const beforeAnimationString = `glitch ${props.speed * 2}s infinite linear alternate-reverse`

  return {
    '--after-shadow': props.enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': props.enableShadows ? '5px 0 cyan' : 'none',

    // Store the full animation value in a CSS variable
    '--after-animation': afterAnimationString,
    '--before-animation': beforeAnimationString,
  }
})

const baseClasses = 'text-white text-[clamp(2rem,10vw,8rem)] font-black relative mx-auto select-none cursor-pointer'

const pseudoClasses = computed(() => {
  // The animation application is now embedded directly in the class strings

  if (!props.enableOnHover) {
    // Permanent Glitch Effect
    return (
      // Apply the full animation using a static property [animation:var(--after-animation)]
      'after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:[animation:var(--after-animation)] '
      + 'before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:[animation:var(--before-animation)]'
    )
  }
  else {
    // Glitch Effect on Hover
    return (
      // Initial state: hidden content
      'after:content-[\'\'] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-[#060010] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 '
      + 'before:content-[\'\'] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-[#060010] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 '
      // Hover state: show content, apply shadow, and start animation
      + 'hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:[animation:var(--after-animation)] '
      + 'hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:[animation:var(--before-animation)]'
    )
  }
})

const combinedClasses = computed(() => `${baseClasses} ${pseudoClasses.value} ${props.class}`)
</script>

<template>
  <div
    :style="inlineStyles"
    :data-text="text"
    :class="combinedClasses"
  >
    {{ text }}
  </div>
</template>

<style>
/* 1. Define your @keyframes (REQUIRED for the hover effect) */
@keyframes glitch {
  /* These keyframes define the clip-path movement for the glitch */
  0% { clip-path: inset(20% 0 50% 0); }
  5% { clip-path: inset(10% 0 60% 0); }
  10% { clip-path: inset(15% 0 55% 0); }
  15% { clip-path: inset(25% 0 35% 0); }
  20% { clip-path: inset(30% 0 40% 0); }
  25% { clip-path: inset(40% 0 20% 0); }
  30% { clip-path: inset(10% 0 60% 0); }
  35% { clip-path: inset(15% 0 55% 0); }
  40% { clip-path: inset(25% 0 35% 0); }
  45% { clip-path: inset(30% 0 40% 0); }
  50% { clip-path: inset(20% 0 50% 0); }
  55% { clip-path: inset(10% 0 60% 0); }
  60% { clip-path: inset(15% 0 55% 0); }
  65% { clip-path: inset(25% 0 35% 0); }
  70% { clip-path: inset(30% 0 40% 0); }
  75% { clip-path: inset(40% 0 20% 0); }
  80% { clip-path: inset(20% 0 50% 0); }
  85% { clip-path: inset(10% 0 60% 0); }
  90% { clip-path: inset(15% 0 55% 0); }
  95% { clip-path: inset(25% 0 35% 0); }
  100% { clip-path: inset(30% 0 40% 0); }
}

/* 2. Register the custom animation utilities (REQUIRED for the hover effect) */
  .animate-glitch-after {
    animation: glitch var(--after-duration) infinite linear alternate-reverse;
  }

  .animate-glitch-before {
    animation: glitch var(--before-duration) infinite linear alternate-reverse;
  }
</style>

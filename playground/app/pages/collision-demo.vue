<template>
  <div class="min-h-screen p-8">
    <h1 class="text-3xl font-bold mb-8">
      Collision Demo with Custom Colors
    </h1>

    <!-- Default colors -->
    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">
        Default Colors
      </h2>
      <MCollisionBackgroundBeams class="rounded-lg" />
    </div>

    <!-- Custom beam colors -->
    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-4">
        Custom Beam Colors
      </h2>
      <MCollisionBackgroundBeams
        class="rounded-lg"
        :beams="customBeams"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define custom beam configurations
const customBeams = [
  {
    initialX: 10,
    translateX: 10,
    duration: 7,
    repeatDelay: 3,
    delay: 2,
    fromColor: 'from-green-500',
    viaColor: 'via-teal-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 600,
    translateX: 600,
    duration: 3,
    repeatDelay: 3,
    delay: 4,
    fromColor: 'from-teal-500',
    viaColor: 'via-cyan-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 100,
    translateX: 100,
    duration: 7,
    repeatDelay: 7,
    className: 'h-6',
    fromColor: 'from-amber-500',
    viaColor: 'via-fuchsia-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 400,
    translateX: 400,
    duration: 5,
    repeatDelay: 14,
    delay: 4,
    fromColor: 'from-yellow-500',
    viaColor: 'via-orange-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 800,
    translateX: 800,
    duration: 11,
    repeatDelay: 2,
    className: 'h-20',
    fromColor: 'from-green-500',
    viaColor: 'via-pink-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 1000,
    translateX: 1000,
    duration: 4,
    repeatDelay: 2,
    className: 'h-12',
    fromColor: 'from-indigo-500',
    viaColor: 'via-violet-500',
    toColor: 'to-transparent',
  },
  {
    initialX: 1200,
    translateX: 1200,
    duration: 6,
    repeatDelay: 4,
    delay: 2,
    className: 'h-6',
    fromColor: 'from-emerald-500',
    viaColor: 'via-teal-500',
    toColor: 'to-transparent',
  },
]
</script>

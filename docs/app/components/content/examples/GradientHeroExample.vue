<template>
  <section class="relative w-full min-h-screen flex items-center overflow-hidden">
    <!-- Background with animated gradient -->
    <MBackgroundGradientAnimation 
      gradient-background-start="rgb(106, 182, 245)"
      gradient-background-end="rgb(139, 92, 246)"
      first-color="106, 182, 245"
      second-color="139, 92, 246"
      third-color="236, 72, 153"
      fourth-color="245, 140, 85"
      pointer-color="106, 182, 245"
      size="80%"
      blending-value="hard-light"
      children-class="h-full w-full blur-md"
      class="absolute inset-0 z-0"
    />
    
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="text-center">
        <!-- Badge -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm"
        >
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
          New Release
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
        </motion.div>

        <!-- Title -->
        <motion.h1
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
        >
          Build Amazing Websites with Motion
        </motion.h1>

        <!-- Description -->
        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
          class="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
        >
          Create stunning, animated interfaces with our collection of beautifully designed components. Just copy, paste, and build.
        </motion.p>

        <!-- CTA Buttons -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.4 }"
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <UButton
            to="#"
            color="primary"
            variant="solid"
            size="xl"
          >
            Get Started
          </UButton>
          <UButton
            to="#"
            color="neutral"
            variant="outline"
            size="xl"
          >
            View Components
          </UButton>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
</script>
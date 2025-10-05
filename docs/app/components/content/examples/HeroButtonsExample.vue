<template>
  <div class="flex flex-wrap gap-4">
    <UButton
      to="/getting-started"
      size="xl"
      trailing-icon="i-lucide-arrow-right"
      color="primary"
    >
      Get started
    </UButton>

    <div class="relative">
      <MGlowEffect 
        :colors="['#0d9488']" 
        mode="static" 
        blur="medium" 
        class="absolute inset-0 rounded-lg opacity-70 pointer-events-none"
      />
      <UButton
        to="https://github.com/your-org/nuxt-motion-block"
        target="_blank"
        icon="i-simple-icons-github"
        color="neutral"
        variant="outline"
        size="xl"
        class="relative"
      >
        View on GitHub
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component is used as an example for the homepage hero buttons
// The GitHub button has a subtle glow effect
</script>
<template>
  <h1 class="text-4xl md:text-6xl font-bold leading-tight text-white">
    <MTextShimmer 
      text="Enhance Your Nuxt UI with"
      class="inline text-4xl md:text-6xl"
      style="--base-color: #ffffff; --base-gradient-color: #0d9488;"
    />
    <MTextGradient 
      :colors="['#10b981', '#0d9488', '#14b8a6']" 
      animation="wave"
      :speed="1.5"
      class="inline text-4xl md:text-6xl"
    >
      Motion.
    </MTextGradient>
  </h1>
</template>

<script setup lang="ts">
// This component is used as an example for the homepage hero title
// Using teal shades that match the theme (primary: 'teal')
</script>
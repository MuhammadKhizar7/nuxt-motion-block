<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Variable Proximity</h3>
    <link
      rel="stylesheet"
      href="https://rsms.me/inter/inter.css"
    >
    <div
      ref="containerRef"
      class="relative"
      style="font-family: 'Inter var', 'Inter', sans-serif;"
    >
      <MVariableProximity
        label="Hover Text"
        class="text-3xl"
        :radius="80"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const containerRef = ref(null)
</script>
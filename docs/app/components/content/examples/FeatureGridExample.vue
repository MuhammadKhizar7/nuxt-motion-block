<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="(feature, index) in features" :key="index" class="h-full">
      <MInView
        :variants="{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }"
        :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }"
        :once="true"
        class="h-full"
      >
        <slot :name="`feature-${index}`"></slot>
      </MInView>
    </div>
  </div>
</template>

<script setup>
const features = Array(6).fill(null); // 6 features in the grid
</script>
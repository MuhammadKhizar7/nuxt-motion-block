<template>
  <div class="flex items-baseline justify-center flex-wrap">
    <MCountingNumber 
      :from="0" 
      :to="40" 
      :duration="2" 
      class="text-3xl md:text-4xl font-bold text-white"
      :format="(value) => Math.round(value).toString() + '+'"
    />
    <MInView
      :variants="{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }"
      :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.3 }"
      :once="true"
    >
      <span class="text-3xl md:text-4xl font-bold text-white ml-2">
        Motion-Enhanced Components
      </span>
    </MInView>
  </div>
</template>

<script setup lang="ts">
// This component combines counting and scramble effects for the section title
</script>
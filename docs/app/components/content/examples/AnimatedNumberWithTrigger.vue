<template>
  <div class="p-4 space-y-4">
    <div>
      <h3 class="text-lg font-medium mb-2">Button Triggered Animation</h3>
      <MAnimatedNumber 
        :value="targetValue" 
        class="text-2xl font-bold"
      />
    </div>
    <div class="flex gap-2 flex-wrap">
      <UButton @click="triggerAnimation(1000)">
        Animate to 1000
      </UButton>
      <UButton @click="triggerAnimation(5000)">
        Animate to 5000
      </UButton>
      <UButton @click="triggerAnimation(0)">
        Reset to 0
      </UButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const targetValue = ref(0)

const triggerAnimation = (value) => {
  targetValue.value = value
}
</script>
<template>
  <div class="space-y-4">
    <div class="flex space-x-2">
      <UButton @click="open = true">Open</UButton>
      <UButton @click="open = false">Close</UButton>
    </div>
    
    <MMorphingPopover v-model:open="open">
      <MMorphingPopoverTrigger>
        <UButton color="primary">Controlled Popover</UButton>
      </MMorphingPopoverTrigger>
      
      <MMorphingPopoverContent class="p-4 w-80">
        <h3 class="font-bold text-lg mb-2">Controlled Popover</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          This popover is controlled programmatically.
        </p>
        <UButton @click="open = false" color="primary" variant="solid" size="sm">Close</UButton>
      </MMorphingPopoverContent>
    </MMorphingPopover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
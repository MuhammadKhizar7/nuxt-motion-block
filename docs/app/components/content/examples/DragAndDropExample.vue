<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Drag and Drop List</h3>
    <MDragAndDrop
      v-model:items="items"
      layout="list"
      :animation-duration="0.3"
      @change="handleItemsChange"
    >
      <template #default="{ item }">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
          <UIcon name="i-lucide-grip-vertical" class="w-4 h-4 text-gray-400 mr-2" />
          <div>
            <div class="font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.description }}</div>
          </div>
        </div>
      </template>
    </MDragAndDrop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Task 1', description: 'First task to complete' },
  { id: 2, name: 'Task 2', description: 'Second task to complete' },
  { id: 3, name: 'Task 3', description: 'Third task to complete' },
  { id: 4, name: 'Task 4', description: 'Fourth task to complete' },
])

const handleItemsChange = (newItems) => {
  console.log('Items reordered:', newItems)
}
</script>
<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Infinite Slider</h3>
    <MInfiniteSlider class="gap-2">
      <div
        v-for="i in 5"
        :key="i"
        class="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
      >
        {{ i }}
      </div>
    </MInfiniteSlider>
  </div>
</template>
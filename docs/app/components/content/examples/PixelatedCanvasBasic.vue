<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Pixelated Canvas</h3>
    <MPixelatedCanvas
      src="https://picsum.photos/300/200"
      :width="300"
      :height="200"
      :cell-size="4"
      class="rounded-lg"
    />
  </div>
</template>
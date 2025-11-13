<template>
  <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Div Grid</h3>
    <MDivGrid
      :rows="3"
      :cols="6"
      :cell-size="30"
      class="mx-auto"
    />
  </div>
</template>
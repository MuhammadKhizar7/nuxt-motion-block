<template>
  <MMaskContainer class="bg-gray-100 dark:bg-gray-900">
    <template #content>
      <span class="text-black dark:text-white">Mask Container</span>
    </template>

    <template #reveal>
      <div class="text-center p-8">
        <h3 class="text-2xl font-bold text-black dark:text-white mb-2">
          Basic Mask
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          Move your cursor to reveal content
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>
<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <MBoxesCore
      class="h-full w-full"
      :rows="80"
      :cols="40"
      :colors="['var(--color-red-500)', 'var(--color-orange-500)', 'var(--color-yellow-500)']"
      :show-plus-signs="false"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Custom Boxes Core</h3>
    </div>
  </div>
</template>
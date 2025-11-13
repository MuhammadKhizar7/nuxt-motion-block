<template>
  <div class="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <MBackgroundBeams
      class="h-full w-full"
      :num-paths="15"
      :stroke-opacity="0.7"
    />
    <div class="relative z-10 h-full flex items-center justify-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Basic Background Beams</h3>
    </div>
  </div>
</template>
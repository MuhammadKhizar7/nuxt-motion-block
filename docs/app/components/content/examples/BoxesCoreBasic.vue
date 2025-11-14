<template>
  <div class="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <MBoxesCore
      class="h-full w-full opacity-20"
      :rows="30"
      :cols="20"
      :colors="['#93c5fd', '#a5b4fc', '#86efac']"
      :skew="false"
      :show-plus-signs="false"
    />
    <div class="flex items-center justify-center">
      <div class="text-center p-6 relative z-10">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          Content Section
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Subtle background animation enhances focus
        </p>
      </div>
    </div>
  </div>
</template>

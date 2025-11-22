<template>
  <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl max-w-2xl mx-auto">
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        Flowing Stroke
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        Animated stroke effects that flow along paths for dynamic visual elements
      </p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <MFlowingStroke
        :width="400"
        :height="120"
        class="mx-auto"
      />
    </div>

    <div class="mt-6 flex justify-center">
      <UButton
        color="primary"
        variant="solid"
        size="sm"
      >
        <UIcon
          name="i-lucide-play"
          class="w-4 h-4 mr-2"
        />
        Animate Stroke
      </UButton>
    </div>
  </div>
</template>

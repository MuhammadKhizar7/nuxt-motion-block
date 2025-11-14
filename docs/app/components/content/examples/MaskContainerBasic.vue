<template>
  <MMaskContainer class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden h-96">
    <template #content>
      <div class="flex items-center justify-center h-full">
        <span class="text-3xl font-bold text-black dark:text-white">Interactive Reveal</span>
      </div>
    </template>

    <template #reveal>
      <div class="flex flex-col items-center justify-center h-full p-8 text-center">
        <div class="mb-8">
          <div class="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-eye" class="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 class="text-3xl font-bold text-black dark:text-white mb-4">Mask Reveal</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-8 max-w-md">
          Move your cursor to reveal hidden content with this interactive mask effect that creates engaging user experiences
        </p>
        <UButton color="primary" variant="solid" size="lg">Explore Features</UButton>
      </div>
    </template>
  </MMaskContainer>
</template>
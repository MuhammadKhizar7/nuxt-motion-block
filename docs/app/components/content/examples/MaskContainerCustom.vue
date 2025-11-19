<template>
  <MMaskContainer
    :size="20"
    :reveal-size="1000"
    class="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-900 dark:to-slate-800 min-h-96"
  >
    <template #content>
      <span class="text-primary">Large Reveal Area</span>
    </template>

    <template #reveal>
      <div class="text-center p-8">
        <h3 class="text-3xl font-bold text-black dark:text-white mb-4">
          Custom Mask Size
        </h3>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Larger initial mask with bigger reveal area for more content visibility
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>

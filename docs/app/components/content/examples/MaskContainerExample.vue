<template>
  <MMaskContainer
    :size="5"
    :reveal-size="800"
    class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"
  >
    <template #content>
      <span class="text-blue-500">Hover to Reveal</span>
    </template>

    <template #reveal>
      <div class="text-center">
        <h2 class="text-5xl font-bold text-black dark:text-white mb-6">
          Mask Reveal Effect
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Move your cursor around to reveal the content behind the mask.
          The mask follows your cursor position with a smooth animation.
        </p>
      </div>
    </template>
  </MMaskContainer>
</template>

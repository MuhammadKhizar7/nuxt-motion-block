<template>
  <MAnimatedBackground
    background-class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg -z-1 p-1"
    :transition="{ duration: 500, ease: 'ease-in-out' }"
  >
    <div class="flex space-x-4 p-2">
      <button
        data-id="tab1"
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 1
      </button>
      <button
        data-id="tab2"
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 2
      </button>
      <button
        data-id="tab3"
        class="px-6 py-3 font-medium transition-colors"
      >
        Tab 3
      </button>
    </div>
  </MAnimatedBackground>
</template>

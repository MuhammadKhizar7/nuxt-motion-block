<template>
  <div class="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl max-w-4xl mx-auto">
    <div class="text-center mb-10">
      <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Infinite Slider</h3>
      <p class="text-gray-600 dark:text-gray-400 text-lg">
        Seamless continuous scrolling of content elements
      </p>
    </div>
    <MInfiniteSlider class="gap-5 py-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex-shrink-0 w-36 h-36 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        :class="item.bgClass"
      >
        <div class="text-center">
          <UIcon :name="item.icon" class="w-10 h-10 mx-auto mb-3" />
          <span class="text-sm font-medium">{{ item.label }}</span>
        </div>
      </div>
    </MInfiniteSlider>
    <div class="mt-10 text-center">
      <UButton color="primary" variant="solid" size="lg">
        <UIcon name="i-lucide-play" class="w-5 h-5 mr-2" />
        Start Scrolling
      </UButton>
    </div>
  </div>
</template>

<script setup>
const items = [
  { id: 1, label: 'Design', icon: 'i-lucide-pen-tool', bgClass: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { id: 2, label: 'Code', icon: 'i-lucide-code', bgClass: 'bg-gradient-to-br from-green-400 to-green-600' },
  { id: 3, label: 'Launch', icon: 'i-lucide-rocket', bgClass: 'bg-gradient-to-br from-purple-400 to-purple-600' },
  { id: 4, label: 'Grow', icon: 'i-lucide-trending-up', bgClass: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  { id: 5, label: 'Analyze', icon: 'i-lucide-bar-chart', bgClass: 'bg-gradient-to-br from-teal-400 to-teal-600' },
  { id: 6, label: 'Optimize', icon: 'i-lucide-sliders', bgClass: 'bg-gradient-to-br from-pink-400 to-pink-600' },
  { id: 7, label: 'Scale', icon: 'i-lucide-maximize', bgClass: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
  { id: 8, label: 'Secure', icon: 'i-lucide-shield', bgClass: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  { id: 9, label: 'Connect', icon: 'i-lucide-link', bgClass: 'bg-gradient-to-br from-rose-400 to-rose-600' },
  { id: 10, label: 'Innovate', icon: 'i-lucide-lightbulb', bgClass: 'bg-gradient-to-br from-emerald-400 to-emerald-600' }
]
</script>
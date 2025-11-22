<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">
      Diagonal Customization Test
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Default Diagonal -->
      <MGlareCard class="h-80 bg-gray-800">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Default Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Default diagonal colors
          </p>
        </div>
      </MGlareCard>

      <!-- Custom Red Diagonal -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :diagonal-colors="['#dc2626', '#f87171', '#dc2626']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Red Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Custom red diagonal pattern
          </p>
        </div>
      </MGlareCard>

      <!-- Custom Blue Diagonal -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :diagonal-colors="['#2563eb', '#60a5fa', '#2563eb']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Blue Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Custom blue diagonal pattern
          </p>
        </div>
      </MGlareCard>

      <!-- Custom Purple Diagonal -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :diagonal-colors="['#7e22ce', '#c084fc', '#7e22ce']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Purple Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Custom purple diagonal pattern
          </p>
        </div>
      </MGlareCard>
    </div>
  </div>
</template>

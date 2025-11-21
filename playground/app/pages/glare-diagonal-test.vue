<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">
      Glare Card Diagonal Pattern Test
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Default diagonal pattern -->
      <MGlareCard class="h-80 bg-gray-800">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Default Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Default diagonal pattern (should be subtle)
          </p>
        </div>
      </MGlareCard>

      <!-- Custom subtle diagonal pattern -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :diagonal-colors="['#1e293b', 'hsl(210, 10%, 30%)', '#1e293b']"
        :diagonal-angle="45"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Subtle Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Custom subtle diagonal pattern
          </p>
        </div>
      </MGlareCard>

      <!-- No diagonal pattern -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :show-diagonal="false"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            No Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Diagonal pattern disabled
          </p>
        </div>
      </MGlareCard>

      <!-- Custom aggressive diagonal pattern -->
      <MGlareCard
        class="h-80 bg-gray-800"
        :diagonal-colors="['#7e22ce', '#c084fc', '#7e22ce']"
        :diagonal-angle="128"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Custom Diagonal
          </h3>
          <p class="text-slate-400 text-center">
            Custom diagonal pattern (more visible)
          </p>
        </div>
      </MGlareCard>
    </div>
  </div>
</template>

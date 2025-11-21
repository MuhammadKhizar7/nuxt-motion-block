<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">
      Glare Card Customization Test
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Default Glare Card with all effects -->
      <MGlareCard class="h-80 bg-gray-800">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Default (All Effects)
          </h3>
          <p class="text-slate-400 text-center">
            White glare with all background effects
          </p>
        </div>
      </MGlareCard>

      <!-- Red Glare Card with all effects -->
      <MGlareCard
        class="h-80 bg-gray-800"
        glare-color="rgba(239,68,68,0.8)"
        glare-color-inner="rgba(239,68,68,0.65)"
        glare-color-outer="rgba(239,68,68,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Red Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom red glare with all background effects
          </p>
        </div>
      </MGlareCard>

      <!-- Blue Glare Card with no background effects -->
      <MGlareCard
        class="h-80 bg-gray-800"
        glare-color="rgba(59,130,246,0.8)"
        glare-color-inner="rgba(59,130,246,0.65)"
        glare-color-outer="rgba(59,130,246,0)"
        :show-rainbow="false"
        :show-diagonal="false"
        :show-shade="false"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Blue Glare (No BG)
          </h3>
          <p class="text-slate-400 text-center">
            Custom blue glare with no background effects
          </p>
        </div>
      </MGlareCard>

      <!-- Green Glare Card with only rainbow -->
      <MGlareCard
        class="h-80 bg-gray-800"
        glare-color="rgba(34,197,94,0.8)"
        glare-color-inner="rgba(34,197,94,0.65)"
        glare-color-outer="rgba(34,197,94,0)"
        :show-rainbow="true"
        :show-diagonal="false"
        :show-shade="false"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Green Glare (Rainbow)
          </h3>
          <p class="text-slate-400 text-center">
            Custom green glare with only rainbow effect
          </p>
        </div>
      </MGlareCard>

      <!-- Purple Glare Card with custom colors -->
      <MGlareCard
        class="h-80 bg-gray-800"
        glare-color="rgba(139,92,246,0.8)"
        glare-color-inner="rgba(139,92,246,0.65)"
        glare-color-outer="rgba(139,92,246,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Purple Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom purple glare effect
          </p>
        </div>
      </MGlareCard>

      <!-- Yellow Glare Card with custom colors -->
      <MGlareCard
        class="h-80 bg-gray-800"
        glare-color="rgba(254,226,62,0.8)"
        glare-color-inner="rgba(254,226,62,0.65)"
        glare-color-outer="rgba(254,226,62,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Yellow Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom yellow glare effect
          </p>
        </div>
      </MGlareCard>
    </div>
  </div>
</template>

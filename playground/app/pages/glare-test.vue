<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">
      Glare Card Test
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Default Glare Card -->
      <MGlareCard class="h-80">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Default Glare
          </h3>
          <p class="text-slate-400 text-center">
            Default white glare effect
          </p>
        </div>
      </MGlareCard>

      <!-- Custom Glare Color -->
      <MGlareCard
        class="h-80"
        glare-color="rgba(255,119,115,0.8)"
        glare-color-inner="rgba(255,119,115,0.65)"
        glare-color-outer="rgba(255,119,115,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Red Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom red glare effect
          </p>
        </div>
      </MGlareCard>

      <!-- Blue Glare -->
      <MGlareCard
        class="h-80"
        glare-color="rgba(120,148,255,0.8)"
        glare-color-inner="rgba(120,148,255,0.65)"
        glare-color-outer="rgba(120,148,255,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Blue Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom blue glare effect
          </p>
        </div>
      </MGlareCard>

      <!-- Green Glare -->
      <MGlareCard
        class="h-80"
        glare-color="rgba(168,255,95,0.8)"
        glare-color-inner="rgba(168,255,95,0.65)"
        glare-color-outer="rgba(168,255,95,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">
            Green Glare
          </h3>
          <p class="text-slate-400 text-center">
            Custom green glare effect
          </p>
        </div>
      </MGlareCard>
    </div>
  </div>
</template>

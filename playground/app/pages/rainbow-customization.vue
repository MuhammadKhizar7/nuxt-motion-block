<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">Rainbow Customization Test</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Default Rainbow -->
      <MGlareCard class="h-80 bg-gray-800">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Default Rainbow</h3>
          <p class="text-slate-400 text-center">
            Default rainbow colors
          </p>
        </div>
      </MGlareCard>
      
      <!-- Custom Warm Rainbow -->
      <MGlareCard 
        class="h-80 bg-gray-800"
        :rainbow-colors="['#ff6b6b', '#ff8e53', '#ff6b9d', '#ff8e53', '#ff6b6b']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Warm Rainbow</h3>
          <p class="text-slate-400 text-center">
            Custom warm colors
          </p>
        </div>
      </MGlareCard>
      
      <!-- Custom Cool Rainbow -->
      <MGlareCard 
        class="h-80 bg-gray-800"
        :rainbow-colors="['#4facfe', '#00f2fe', '#4facfe', '#00f2fe', '#4facfe']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Cool Rainbow</h3>
          <p class="text-slate-400 text-center">
            Custom cool colors
          </p>
        </div>
      </MGlareCard>
      
      <!-- Custom Monochrome -->
      <MGlareCard 
        class="h-80 bg-gray-800"
        :rainbow-colors="['#ffffff', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155']"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Monochrome</h3>
          <p class="text-slate-400 text-center">
            Custom grayscale colors
          </p>
        </div>
      </MGlareCard>
    </div>
  </div>
</template>
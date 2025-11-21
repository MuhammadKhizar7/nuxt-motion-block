<template>
  <div class="p-8 bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-white">Glare Card Layering Test</h1>
    
    <div class="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
      <!-- Test with dark background -->
      <MGlareCard class="h-64 bg-gray-800">
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Dark Background Test</h3>
          <p class="text-slate-300 text-center">
            Content should be clearly visible with glare effect
          </p>
        </div>
      </MGlareCard>
      
      <!-- Test with custom glare -->
      <MGlareCard 
        class="h-64 bg-blue-900"
        glare-color="rgba(255,255,255,0.6)"
        glare-color-inner="rgba(255,255,255,0.4)"
        glare-color-outer="rgba(255,255,255,0)"
      >
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Custom Glare Test</h3>
          <p class="text-slate-300 text-center">
            Custom white glare with blue background
          </p>
        </div>
      </MGlareCard>
      
      <!-- Test with content -->
      <MGlareCard class="h-64 bg-purple-900">
        <template #header>
          <div class="text-center py-4">
            <h2 class="text-xl font-bold text-white">Card Header</h2>
          </div>
        </template>
        
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <h3 class="text-2xl font-bold text-white">Content Test</h3>
          <p class="text-slate-300 text-center">
            This card has header and body content
          </p>
        </div>
        
        <template #footer>
          <div class="text-center py-4">
            <button class="px-4 py-2 bg-white text-purple-900 rounded font-bold">
              Action Button
            </button>
          </div>
        </template>
      </MGlareCard>
    </div>
  </div>
</template>
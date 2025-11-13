<template>
  <div class="flex justify-center">
    <MImageComparison class="h-64 w-96 rounded-lg overflow-hidden">
      <MImageComparisonImage 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        alt="Mountain before" 
        position="left" 
      />
      <MImageComparisonImage 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        alt="Mountain after" 
        position="right" 
      />
      <MImageComparisonSlider />
    </MImageComparison>
  </div>
</template>
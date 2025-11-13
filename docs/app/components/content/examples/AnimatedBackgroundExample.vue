<template>
  <div class="p-4">
    <MAnimatedBackground
      :transition="{ duration: 300 }"
      background-class="bg-blue-500 rounded-lg -z-1"
    >
      <div class="flex space-x-2">
        <button 
          data-id="home" 
          class="px-4 py-2 rounded-md"
        >
          Home
        </button>
        <button 
          data-id="about" 
          class="px-4 py-2 rounded-md"
        >
          About
        </button>
        <button 
          data-id="contact" 
          class="px-4 py-2 rounded-md"
        >
          Contact
        </button>
      </div>
    </MAnimatedBackground>
  </div>
</template>
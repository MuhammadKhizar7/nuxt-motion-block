<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">AnimatedGroup Stagger Test</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="stagger-tests">
      <!-- Test 1: Default stagger -->
      <div class="border rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Default Stagger (1s)</h2>
        <p class="text-gray-600 mb-4">Children should animate with 1s delay between each</p>
        <MAnimatedGroup :stagger-children="2" initial="hidden" animate="visible">
          <div
            v-for="i in 6"
            :key="i"
            class="h-12 w-12 bg-blue-500 rounded-lg inline-block m-1"
          >
            {{ i+1 }}
          </div>
        </MAnimatedGroup>
      </div>
      
      <!-- Test 2: Slow stagger -->
      <div class="border rounded-lg p-6" id="slow-stagger" >
        <h2 class="text-xl font-semibold mb-4">Slow Stagger (0.3s)</h2>
        <p class="text-gray-600 mb-4">Children should animate with 0.3s delay between each</p>
        <MAnimatedGroup :stagger-children="0.3" initial="hidden" animate="visible">
          <div
            v-for="i in 6"
            :key="i"
            class="h-12 w-12 bg-green-500 rounded-lg inline-block m-1"
          >
            {{ i+1 }}
          </div>
        </MAnimatedGroup>
      </div>
      
      <!-- Test 3: Custom variants -->
      <div class="border rounded-lg p-6" id="custom-variants">
        <h2 class="text-xl font-semibold mb-4">Custom Variants</h2>
        <p class="text-gray-600 mb-4">Children should animate with custom properties</p>
        <MAnimatedGroup 
          :stagger-children="0.15"
          :variants="{
            item: {
              hidden: { opacity: 0, scale: 0.5, rotate: -180 },
              visible: { opacity: 1, scale: 1, rotate: 0 }
            }
          }"
          initial="hidden"
          animate="visible"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold inline-block m-1"
          >
            {{ i }}
          </div>
        </MAnimatedGroup>
      </div>
      
      <!-- Test 4: Preset animation -->
      <div class="border rounded-lg p-6" id="preset-animation">
        <h2 class="text-xl font-semibold mb-4">Preset Animation (Bounce)</h2>
        <p class="text-gray-600 mb-4">Children should bounce in with stagger</p>
        <MAnimatedGroup 
          :stagger-children="0.1"
          preset="bounce"
          initial="hidden"
          animate="visible"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="h-12 w-12 bg-orange-500 rounded-lg inline-block m-1"
          >
            {{ i+1 }}
          </div>
        </MAnimatedGroup>
      </div>
      
      <!-- Test 5: Reverse stagger direction -->
      <div class="border rounded-lg p-6 md:col-span-2" id="reverse-stagger">
        <h2 class="text-xl font-semibold mb-4">Reverse Stagger Direction</h2>
        <p class="text-gray-600 mb-4">Children should animate from right to left</p>
        <MAnimatedGroup 
          :stagger-children="0.1"
          :stagger-direction="-1"
          preset="slide"
          initial="hidden"
          animate="visible"
        >
          <div
            v-for="i in 8"
            :key="i"
            class="h-12 w-12 bg-red-500 rounded-lg inline-block m-1"
          >
            {{ i+1 }}
          </div>
        </MAnimatedGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
// Comprehensive test for AnimatedGroup stagger functionality
</script>
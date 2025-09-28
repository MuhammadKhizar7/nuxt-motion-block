<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-2">
      Nuxt Motion Block Playground
    </h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      A collection of animated components powered by Motion-V
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Magnetic Demo -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Magnetic
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Elements that follow cursor movement
        </p>

        <div class="flex justify-center mb-4">
          <MMagnetic>
            <UButton color="primary">
              Magnetic Element
            </UButton>
          </MMagnetic>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
    &lt;MMagnetic&gt;
    &lt;UButton color="primary"&gt;Magnetic Element&lt;/UButton&gt;
    &lt;/MMagnetic&gt;</pre>
        </div>
      </UCard>

      <!-- Tilt Demo -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Tilt Effect
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          3D tilt effect on hover
        </p>

        <div class="flex justify-center mb-4">
          <MTilt
            class="w-48 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Tilt Me
          </MTilt>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTilt&gt;
      &lt;div class="w-48 h-32 bg-gradient-to-r from-blue-400 to-purple-500"&gt;
      Tilt Me
      &lt;/div&gt;
      &lt;/MTilt&gt;</pre>
        </div>
      </UCard>

      <!-- Text Shimmer Demo -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Text Shimmer
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated shimmering text effect
        </p>

        <div class="mb-4">
          <MTextShimmer
            children="Shimmering Text"
            :duration="2"
          />
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTextShimmer :duration="2"&gt;
      Shimmering Text
      &lt;/MTextShimmer&gt;</pre>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Text Typing
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated typing text effect
        </p>

        <div class="mb-4">
          <MTypingText
            :duration="2"
            children="text typing Text"
          />
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTypingText :duration="2"&gt;
      text typing Text
      &lt;/MTypingText&gt;</pre>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this page
</script>

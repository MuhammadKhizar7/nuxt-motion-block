<template>
  <div class="p-8 max-w-6xl mx-auto min-h-screen">
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
            text="Shimmering Text Effect"
            :duration="3"
            :spread="1.5"
            class="text-4xl font-bold"
          />
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTextShimmer text="Shimmering Text" :duration="2" /&gt;</pre>
        </div>
      </UCard>

      <!-- Animated Number Demo -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Animated Number
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated number counting effect
        </p>

        <div class="mb-4">
          <MAnimatedNumber
            :value="basicValue"
            :spring-options="{ stiffness: 100, damping: 10 }"
          />
        </div>
        <div class="mt-4">
          <UButton
            variant="outline"
            @click="updateBasicValue"
          >
            Update to {{ nextBasicValue }}
          </UButton>
        </div>
        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MAnimatedNumber :value="1234" :springOptions="{ stiffness: 100, damping: 10 }" /&gt;</pre>
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
            text="text typing Text"
            :duration="2"
          />
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTypingText text="text typing Text" :duration="2" /&gt;</pre>
        </div>
      </UCard>
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Text true focus
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated true focus text effect
        </p>

        <div class="mb-4">
          <MTrueFocus
            sentence="True Focus"
            :manual-mode="false"
            :blur-amount="5"
            border-color="red"
            :animation-duration="2"
            :pause-between-animations="1"
          />
        </div>
      </UCard>
      <!-- <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Text true focus
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated true focus text effect
        </p>

        <div class="mb-4">
          <MTextGlitchNew
            text="Nuxt Motion Block"
            :speed="1"
            :enable-shadows="true"
            :enable-on-hover="false"
          />
        </div>
      </UCard> -->
      <!-- <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Scroll Velocity
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated true focus text effect
        </p>
        <div class="mb-4">
          <MScrollVelocity
            :texts="['Nuxt Motion Block', 'Scroll Down']"
            :velocity="100"
            :damping="50"
            :stiffness="400"
            :num-copies="6"
          />
        </div>
      </UCard> -->
      <!-- <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Variable Proximity
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated variable proximity text effect (need a font with variable axes like Inter)
        </p>
        <div class="mb-4">
          <link
            rel="stylesheet"
            href="https://rsms.me/inter/inter.css"
          >
          <div
            ref="containerRef"
            class="relative"
            style="font-family: 'Inter var', 'Inter', sans-serif;"
          >
            <MVariableProximity
              label="Hover me! Nuxt Motion Block"
              class="text-4xl"
              from-font-variation-settings="'wght' 400, 'opsz' 9"
              to-font-variation-settings="'wght' 1000, 'opsz' 40"
              :radius="120"
              falloff="linear"
            />
          </div>
        </div>
      </UCard> -->

      <!-- <UContainer class="min-h-screen relative">
        <MDottedGlowBackground
          :gap="16"
          :radius="2"
          color-light-var="--color-gray-900"
          color-dark-var="--color-gray-100"
          glow-color-light-var="--color-primary-500"
          glow-color-dark-var="--color-primary-400"
          class="background"
        />

        <div class="relative z-10 py-12">
          <UCard class="max-w-2xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
            <template #header>
              <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome to Nuxt UI
                </h1>
                <UColorModeButton />
              </div>
            </template>
          </UCard>
        </div>
      </UContainer> -->
      <!-- <div class="min-h-screen relative">
        <MBackgroundRippleEffect
          :rows="10"
          :cols="20"
          :cell-size="44"
        />

        <div class="relative z-10 p-8">
          <UContainer>
            <UCard class="backdrop-blur-sm bg-white/85 dark:bg-gray-900/85 border">
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Tailwind CSS 4 Ripple
                  </h1>
                  <UColorModeButton />
                </div>
              </template>

              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Click the background to see the new Tailwind 4 ripple effect!
              </p>
            </UCard>
          </UContainer>
        </div>
      </div> -->
      <!-- <UCard>
        <MBackgroundGradientAnimation
          gradient-background-start="rgb(108, 0, 162)"
          gradient-background-end="rgb(0, 17, 82)"
          first-color="18, 113, 255"
          second-color="221, 74, 255"
          size="20%"
          :interactive="true"
          class="your-custom-class"
        >
          <div class="relative z-10">
            <h1 class="text-4xl font-bold text-white">
              Your Content Here
            </h1>
          </div>
        </MBackgroundGradientAnimation>
      </UCard> -->
      <!-- <UCard class="relative overflow-hidden">
        <template #header>
          <h2 class="text-xl font-semibold">
            Boxes Core
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated boxes core effect
        </p>
        <MBoxesCore
          class="h-64 w-full"
          :rows="50"
          :cols="30"
        />
      </UCard> -->
      <UCard class="relative overflow-hidden">
        <template #header>
          <h2 class="text-xl font-semibold">
            Background Beams
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated background beams effect
        </p>
        <MBackgroundBeams
          class="h-64 w-full"
          :num-paths="25"
          :stroke-opacity="1"
          :beam-count="20"
          :animation-duration="10"
        />
      </UCard>
      <UCard class="relative overflow-visible">
        <template #header>
          <h2 class="text-xl font-semibold">
            Background Beams with Collision
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated background beams with collision effect
        </p>
        <ClientOnly>
          <MCollisionBackgroundBeams
            class="h-64 w-full"
          />
        </ClientOnly>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this page
// Basic demo values
const basicValue = ref(0)
const nextBasicValue = ref(1234)

function updateBasicValue() {
  const temp = basicValue.value
  basicValue.value = nextBasicValue.value
  nextBasicValue.value = temp === 0 ? 1234 : temp + 567
}
</script>

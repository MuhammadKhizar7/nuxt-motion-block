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
      <!-- <UCard>
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
      </UCard> -->

      <!-- Tilt Demo -->
      <!-- <UCard>
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
      </UCard> -->

      <!-- Text Shimmer Demo -->
      <!-- <UCard>
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
      </UCard> -->

      <!-- Animated Number Demo -->
      <!-- <UCard>
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
      </UCard> -->

      <!-- <UCard>
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
      </UCard> -->
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
          <MTrueFocus
            sentence="True Focus"
            :manual-mode="false"
            :blur-amount="5"
            border-color="red"
            :animation-duration="2"
            :pause-between-animations="1"
          />
        </div>
      </UCard> -->
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
      <!-- <UCard class="relative overflow-hidden">
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
      </UCard> -->
      <!-- <UCard class="relative">
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
      </UCard> -->
      <!-- <UCard class="relative">
        <MBackgroundLines
          class="min-h-screen"
          :svg-options="{ duration: 8 }"
        >
          <UContainer class="relative z-10 pt-20">
            <UCard>
              <template #header>
                <h1>Your Animated Page</h1>
              </template>
              <p>This content appears over the animated background.</p>
            </UCard>
          </UContainer>
        </MBackgroundLines>
      </UCard> -->
      <!-- <MAuroraBackground class="min-h-screen">
        <UContainer class="relative z-10">
          <UCard class="max-w-2xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
            <template #header>
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
                  Aurora Background
                </h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  Beautiful animated background with Nuxt UI
                </p>
              </div>
            </template>

            <div class="space-y-4">
              <UButton
                icon="i-heroicons-home"
                size="lg"
              >
                Get Started
              </UButton>

              <UButton
                variant="outline"
                icon="i-heroicons-information-circle"
              >
                Learn More
              </UButton>
            </div>
          </UCard>
        </UContainer>
      </MAuroraBackground> -->
      <!-- <UCard class="relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Meteor Shower
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated meteor shower effect
        </p>
        <MMeteors
          :number="30"
        />
      </UCard> -->
      <!-- <MGlowingStarsCard>
        <template #header>
          <h2 class="font-bold text-2xl text-[#eaeaea]">
            ✨ Cosmic Dashboard
          </h2>
        </template>
        <div class="text-center space-y-3">
          <p class="text-white/80 text-sm">
            Interactive starfield visualization
          </p>
          <UBadge
            color="primary"
            variant="soft"
          >
            Active
          </UBadge>
        </div>
        <template #footer>
          <UButton
            icon="i-heroicons-rocket-launch"
            color="neutral"
            variant="solid"
            class="w-full"
          >
            Launch Experience
          </UButton>
        </template>
      </MGlowingStarsCard> -->

      <!-- <UCard class="relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Glowing Stars Card
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated glowing stars card effect
        </p>
        <MShootingStars />
        <MStarsBackground />
      </UCard> -->
      <!-- <UCard class="relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Vortex
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated vortex effect
        </p>
        <MVortex
          :particle-count="10"
          :base-hue="120"
          :base-speed="0.5"
          :range-speed="2.0"
          :base-radius="2"
          :range-radius="3"
          background-color="transparent"
          class="rounded-xl"
        />
      </UCard> -->
      <!-- <UCard class="relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Directional Light
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated directional light effect
        </p>
        <MDirectionalLight
          class="left-0 top-0"
          fill="#3B82F6"
        />
        <MDirectionalLight
          class="left-1/3 top-1/4"
          fill="#8B5CF6"
        />
        <MDirectionalLight
          class="left-2/3 top-1/2"
          fill="#EF4444"
        />
      </UCard> -->
      <!-- <UCard class="relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Animated spotlight effect
          </h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Animated spotlight effect
        </p>
        <MAnimatedSpotlight />
      </UCard> -->
      <!-- <UCard class="relative">
        <MMaskContainer
          :size="5"
          :reveal-size="800"
          class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"
        >
          <template #content>
            <span class="text-black">Large Reveal Area</span>
          </template>

          <template #reveal>
            <div class="text-center">
              <h2 class="text-5xl font-bold text-black dark:text-white mb-6">
                Expanded View
              </h2>
              <p class="text-lg text-slate-600 dark:text-slate-300">
                Larger reveal size for more content visibility
              </p>
            </div>
          </template>
        </MMaskContainer>
      </UCard> -->
      <!-- <UCard class="relative">
        <div class="min-h-screen py-20">
          <MTracingBeam>
            <div class="space-y-12 pl-8 md:pl-0">
              <div
                v-for="section in sections"
                :key="section.title"
                class="space-y-6"
              >
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white">
                  {{ section.title }}
                </h2>
                <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {{ section.content }}
                </p>
                <UButton
                  v-if="section.button"
                  :icon="section.button.icon"
                  :color="section.button.color"
                  variant="solid"
                >
                  {{ section.button.text }}
                </UButton>
              </div>
            </div>
          </MTracingBeam>
        </div>
      </UCard> -->
      <!-- <UCard>
        <MLampContainer>
          <motion.h1
            :initial="{ opacity: 0.5, y: 100 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeInOut',
            }"
            class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build lamps <br> the right way
          </motion.h1>
        </MLampContainer>
      </UCard> -->
      <!-- <div class="min-h-screen bg-slate-900 p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="relative rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 h-48">
            <MGlowingEffect
              :blur="0"
              :border-width="3"
              :spread="80"
              :glow="true"
              :disabled="false"
              :proximity="64"
              :inactive-zone="0.01"
              class="rounded-xl"
            />
            <div class="relative z-10 h-full flex flex-col justify-between">
              <h3 class="text-lg font-bold text-white">
                Default Glow
              </h3>
              <p class="text-slate-400 text-sm">
                Multi-color gradient effect
              </p>
            </div>
          </div>
          <div class="relative rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 h-48">
            <MGlowingEffect
              :blur="0"
              :border-width="3"
              :spread="80"
              :glow="true"
              :disabled="false"
              :proximity="64"
              :inactive-zone="0.01"
              class="rounded-xl"
            />
            <div class="relative z-10 h-full flex flex-col justify-between">
              <h3 class="text-lg font-bold text-white">
                White Glow
              </h3>
              <p class="text-slate-400 text-sm">
                Clean monochrome effect
              </p>
            </div>
          </div>
          <div class="relative rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 h-48">
            <MGlowingEffect
              :blur="0"
              :border-width="3"
              :spread="80"
              :glow="true"
              :disabled="false"
              :proximity="64"
              :inactive-zone="0.01"
              class="rounded-xl"
            />
            <div class="relative z-10 h-full flex flex-col justify-between">
              <h3 class="text-lg font-bold text-white">
                Wide Glow
              </h3>
              <p class="text-slate-400 text-sm">
                Larger spread area
              </p>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Pixelated Canvas
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400">
          Display images with a pixelated effect
        </p>

        <div class="mb-4">
          <MPixelatedCanvas
            src="https://picsum.photos/400/300"
            :width="400"
            :pixel-size="8"
            class="rounded-lg"
          />
        </div>
      </UCard> -->
      <!-- Link to 3D Demo Page -->
      <!-- 3D Card with Nuxt UI Components Example -->
      <M3DCard
        class="w-96"
        :intensity="15"
      >
        <template #header>
          <M3DItem :translate-z="40">
            <h2 class="text-xl font-semibold">
              3D Card with Nuxt UI
            </h2>
          </M3DItem>
        </template>

        <M3DItem
          :translate-z="20"
          class="space-y-4"
        >
          <p class="text-gray-600 dark:text-gray-400">
            This is a 3D card that integrates with Nuxt UI components.
          </p>

          <M3DItem :translate-z="30">
            <UButton
              color="primary"
              variant="solid"
            >
              3D Button
            </UButton>
          </M3DItem>

          <M3DItem
            :translate-z="70"
            :rotate-x="4"
            :rotate-y="5"
          >
            <UBadge
              color="success"
              variant="soft"
            >
              3D Badge
            </UBadge>
          </M3DItem>
        </M3DItem>

        <template #footer>
          <M3DItem
            :translate-z="35"
            class="flex justify-between"
          >
            <UButton
              color="neutral"
              variant="ghost"
            >
              Cancel
            </UButton>
            <UButton
              color="primary"
              variant="solid"
            >
              Confirm
            </UButton>
          </M3DItem>
        </template>
      </M3DCard>
      <MEverVaultCard
        class="w-96 h-64"
        gradient-colors="from-red-500 to-pink-700 via-rose-400"
      >
        <template #header>
          <h2 class="text-xl font-semibold">
            Evervault Card
          </h2>
        </template>

        <p class="z-50">
          This is an Evervault styled card with dynamic background effects.
        </p>
      </MEverVaultCard>
      <MCardStack
        :items="[
          { id: 1, title: 'Card One', content: 'This is the content of card one.', name: 'Alice Johnson', designation: 'Software Engineer' },
          { id: 2, title: 'Card Two', content: 'This is the content of card two.', name: 'Bob Smith', designation: 'Product Manager' },
          { id: 3, title: 'Card Three', content: 'This is the content of card three.', name: 'Charlie Brown', designation: 'UX Designer' },
        ]"
      />
      <MWobbleCard container-class="w-96 h-64 bg-indigo-800" />
      <MFocusCards :cards="imageCards" />
      <MDraggableCard class="mx-auto">
        <div class="space-y-4 text-center">
          <UIcon
            name="i-heroicons-cube"
            class="w-12 h-12 mx-auto text-blue-500"
          />
          <h3 class="text-xl font-bold">
            Draggable Card
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Drag me around! Also try moving your cursor over the card for 3D effects.
          </p>
        </div>
      </MDraggableCard>
      <MGlareCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
// No script needed for this page
// Basic demo values
const basicValue = ref(0)
const nextBasicValue = ref(1234)

function updateBasicValue() {
  const temp = basicValue.value
  basicValue.value = nextBasicValue.value
  nextBasicValue.value = temp === 0 ? 1234 : temp + 567
}

const sections = [
  {
    title: 'Introduction',
    content: 'This is the first section with a tracing beam that follows your scroll. The beam will animate along the content as you scroll through the page, creating a beautiful visual guide.',
    button: {
      icon: 'i-heroicons-information-circle',
      color: 'blue',
      text: 'Learn More',
    },
  },
  {
    title: 'Features',
    content: 'The tracing beam component provides visual feedback as users scroll through content. It features a gradient line that moves smoothly and a dot that changes color based on scroll position.',
    button: {
      icon: 'i-heroicons-sparkles',
      color: 'green',
      text: 'View Features',
    },
  },
  {
    title: 'Implementation',
    content: 'Built with Vue 3, Nuxt, and motion-v for smooth animations. The component is fully responsive and works seamlessly with dark mode.',
    button: {
      icon: 'i-heroicons-code-bracket',
      color: 'purple',
      text: 'See Code',
    },
  },
  {
    title: 'Customization',
    content: 'Easily customize the colors, sizes, and behavior of the tracing beam to match your design system and user experience requirements.',
    button: {
      icon: 'i-heroicons-cog',
      color: 'orange',
      text: 'Customize',
    },
  },
]

const imageCards = [
  {
    title: 'Mountain Landscape',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Beautiful mountain scenery with lakes',
  },
  {
    title: 'Ocean View',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Crystal clear ocean waters',
  },
  {
    title: 'Forest Path',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Peaceful forest walking path',
  },
]
</script>

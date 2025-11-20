<template>
  <div class="p-8 max-w-6xl mx-auto min-h-screen">
    <h1 class="text-3xl font-bold mb-2">
      Nuxt Motion Block Playground
    </h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      A collection of animated components powered by Motion-V
    </p>

    <!-- Navigation to Demo Pages -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <UCard>
        <UButton
          to="/morphing-popover-demo"
          color="primary"
          variant="soft"
          class="w-full"
        >
          Morphing Popover Demo
        </UButton>
      </UCard>

      <UCard>
        <UButton
          to="/comprehensive-stagger-test"
          color="secondary"
          variant="soft"
          class="w-full"
        >
          Comprehensive Stagger Test
        </UButton>
      </UCard>

      <UCard>
        <UButton
          to="/collision-demo"
          color="success"
          variant="soft"
          class="w-full"
        >
          Collision Demo
        </UButton>
      </UCard>

      <UCard>
        <UButton
          to="/animated-dialog-demo"
          color="info"
          variant="soft"
          class="w-full"
        >
          Animated Dialog Demo
        </UButton>
      </UCard>
    </div>

    <!-- Animated Group Examples -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Animated Group Demo -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Animated Group
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Staggered animation effect with configurable delay
        </p>

        <div class="mb-4">
          <MAnimatedGroup
            :stagger-children="0.2"
            preset="slide"
            initial="hidden"
            animate="visible"
          >
            <div
              v-for="i in 8"
              :key="i"
              class="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 inline-block m-1"
            />
          </MAnimatedGroup>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
&lt;MAnimatedGroup :stagger-children="0.2" preset="slide"&gt;
  &lt;div v-for="i in 8" :key="i" class="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" /&gt;
&lt;/MAnimatedGroup&gt;</pre>
        </div>
      </UCard>

      <!-- Animated Group with Custom Variants -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Animated Group (Custom)
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Custom animation variants with stagger effect
        </p>

        <div class="mb-4">
          <MAnimatedGroup
            :stagger-children="0.15"
            :variants="{
              item: {
                hidden: { opacity: 0, scale: 0.5, rotate: -180 },
                visible: { opacity: 1, scale: 1, rotate: 0 },
              },
            }"
            initial="hidden"
            animate="visible"
          >
            <div
              v-for="i in 8"
              :key="i"
              class="h-16 w-16 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold inline-block m-1"
            >
              {{ i }}
            </div>
          </MAnimatedGroup>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
&lt;MAnimatedGroup
  :stagger-children="0.15"
  :variants="{
    item: {
      hidden: { opacity: 0, scale: 0.5, rotate: -180 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    }
  }"&gt;
  &lt;div v-for="i in 8" :key="i" class="h-16 w-16 rounded-lg bg-gradient-to-br from-green-500 to-teal-600"&gt;
    &#123;&#123; i &#125;&#125;
  &lt;/div&gt;
&lt;/MAnimatedGroup&gt;</pre>
        </div>
      </UCard>

      <!-- Animated Group with Refresh -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Animated Group (Refresh)
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Refresh animation with key change
        </p>

        <div class="mb-4 space-y-4">
          <UButton @click="refreshKey++">
            Refresh Animation
          </UButton>
          <MAnimatedGroup
            :key="refreshKey"
            :stagger-children="0.1"
            preset="bounce"
            initial="hidden"
            animate="visible"
          >
            <div
              v-for="i in 6"
              :key="i"
              class="h-16 w-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 inline-block m-1"
            />
          </MAnimatedGroup>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
&lt;UButton @click="refreshKey++"&gt;Refresh Animation&lt;/UButton&gt;
&lt;MAnimatedGroup
  :key="refreshKey"
  :stagger-children="0.1"
  preset="bounce"&gt;
  &lt;div v-for="i in 6" :key="i" class="h-16 w-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-600" /&gt;
&lt;/MAnimatedGroup&gt;</pre>
        </div>
      </UCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      <MGlareCard class="w-96 h-96" />
      <MDirectionAwareHover
        image-url="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        class="mx-auto"
      >
        <template #content>
          <div class="space-y-3">
            <UIcon
              name="i-heroicons-computer-desktop"
              class="w-8 h-8 text-blue-400"
            />
            <h3 class="text-2xl font-bold">
              Web Development
            </h3>
            <p class="text-white/80">
              Modern responsive websites and applications
            </p>
            <UButton
              color="neutral"
              variant="solid"
              size="sm"
              class="mt-2"
            >
              View Project
            </UButton>
          </div>
        </template>
      </MDirectionAwareHover>
      <MDirectionAwareHoverNew
        image-url="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
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
const refreshKey = ref(0)

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

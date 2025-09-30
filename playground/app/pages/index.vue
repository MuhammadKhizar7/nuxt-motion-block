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
            children="Shimmering Text Effect"
            :duration="3"
            :spread="1.5"
            class="text-4xl font-bold"
          />
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MTextShimmer children="Shimmering Text" :duration="2" /&gt;</pre>
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

      <!-- Dock Demo -->
      <UCard class="lg:col-span-2 relative">
        <template #header>
          <h2 class="text-xl font-semibold">
            Dock
          </h2>
        </template>

        <p class="text-gray-600 dark:text-gray-400 mb-4">
          macOS-style dock with magnification effect
        </p>
        <div>
          <!-- Dock Component -->
          <MDock
            :magnification="dockSettings.magnification"
            :distance="dockSettings.distance"
            :panel-height="dockSettings.panelHeight"
            class="dock-custom"
            variant="bottom"
          >
            <MDockItem
              v-for="(app, index) in apps"
              :key="index"
              v-slot="{ width, isHovered, scale }"
              :aria-label="app.name"
              class="dock-item-custom"
              @click="handleAppClick(app)"
            >
              <MDockLabel :is-hovered="isHovered">
                {{ app.name }}
              </MDockLabel>
              <MDockIcon
                :width="width"
                :scale="scale"
                class="text-black dark:text-gray-50 aspect-square rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div
                  :class="[
                    'w-full h-full aspect-square rounded-full flex items-center justify-center text-2xl',
                  ]"
                  :style="{ fontSize: Math.max(16, width * 0.4) + 'px' }"
                >
                  <UIcon :name="app.icon" />
                </div>
              </MDockIcon>
            </MDockItem>
          </MDock>
        </div>

        <div class="mt-4">
          <pre class="bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-sm">
      &lt;MDock :magnification="100" :distance="150"&gt;
        &lt;MDockItem&gt;
          &lt;MDockIcon name="i-lucide-home" /&gt;
        &lt;/MDockItem&gt;
        &lt;MDockItem&gt;
          &lt;MDockIcon name="i-lucide-search" /&gt;
        &lt;/MDockItem&gt;
        &lt;MDockItem&gt;
          &lt;MDockIcon name="i-lucide-settings" /&gt;
        &lt;/MDockItem&gt;
        &lt;MDockItem&gt;
          &lt;MDockIcon name="i-lucide-user" /&gt;
        &lt;/MDockItem&gt;
        &lt;MDockItem&gt;
          &lt;MDockIcon name="i-lucide-mail" /&gt;
        &lt;/MDockItem&gt;
      &lt;/MDock&gt;</pre>
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

const apps = ref([
  { name: 'Home', icon: 'i-lucide-home' },
  { name: 'Products', icon: 'i-lucide-package' },
  { name: 'Messages', icon: 'i-lucide-message-circle' },
  { name: 'Mail', icon: 'i-lucide-mail' },
  { name: 'Photos', icon: 'i-lucide-image' },
  { name: 'Music', icon: 'i-lucide-music' },
  { name: 'Calendar', icon: 'i-lucide-calendar' },
  { name: 'Notes', icon: 'i-lucide-file' },
  { name: 'Settings', icon: 'i-lucide-settings' },
])

const dockSettings = reactive({
  magnification: 80,
  distance: 150,
  panelHeight: 64,
})

const handleAppClick = (app: typeof apps.value[0]) => {
  const title = `Opening ${app.name}`
  const description = `Launching ${app.name} application...`
  const toast = useToast()
  toast.add({
    title,
    description,
    duration: 2000,
  })
}
</script>

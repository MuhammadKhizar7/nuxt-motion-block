<template>
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
        :name="app.icon"
        class="text-black dark:text-gray-50 aspect-square rounded-full hover:bg-black/5 dark:hover:bg-white/5"
      >
        <div
          :class="[
            'w-full h-full aspect-square rounded-full flex items-center justify-center text-2xl'
          ]"
          :style="{ fontSize: Math.max(16, width * 0.4) + 'px' }"
        />
      </MDockIcon>
    </MDockItem>
  </MDock>
</template>

<script setup lang="ts">
const apps = ref([
  { name: 'Home', icon: 'i-lucide-home' },
  { name: 'Products', icon: 'i-lucide-package' },
  { name: 'Messages', icon: 'i-lucide-message-circle' },
  { name: 'Mail', icon: 'i-lucide-mail' },
  { name: 'Photos', icon: 'i-lucide-image' },
  { name: 'Music', icon: 'i-lucide-music' },
  { name: 'Calendar', icon: 'i-lucide-calendar' },
  { name: 'Notes', icon: 'i-lucide-file' },
  { name: 'Settings', icon: 'i-lucide-settings' }
])

const dockSettings = reactive({
  magnification: 80,
  distance: 150,
  panelHeight: 64
})

const handleAppClick = (app: typeof apps.value[0]) => {
  const title = `Opening ${app.name}`
  const description = `Launching ${app.name} application...`
  const toast = useToast()
  toast.add({
    title,
    description,
    duration: 2000
  })
}
</script>
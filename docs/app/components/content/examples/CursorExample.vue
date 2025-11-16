<template>
  <div class="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
    <div class="max-w-4xl mx-auto text-center mb-8">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
        <UIcon
          name="i-lucide-mouse-pointer"
          class="w-5 h-5 text-blue-600 dark:text-blue-400"
        />
        <span class="text-blue-700 dark:text-blue-300 font-medium">Interactive Experience</span>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Custom Cursor Effects
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Experience our custom cursor implementation that enhances user interaction with dynamic effects and contextual information
      </p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
      <div class="flex h-[500px] w-full items-center justify-center relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600">
        <MCursor
          attach-to-parent
          :variants="{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 }
          }"
          :spring-config="{ bounce: 0.001 }"
          :transition="{ ease: 'easeInOut', duration: 0.15 }"
          :on-position-change="handlePositionChange"
        >
          <motion.div
            :animate="{
              width: isHovering ? 100 : 20,
              height: isHovering ? 40 : 20
            }"
            class="flex items-center justify-center rounded-[24px] bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md shadow-lg"
          >
            <AnimatePresence>
              <motion.div
                v-if="isHovering"
                :initial="{ opacity: 0, scale: 0.6 }"
                :animate="{ opacity: 1, scale: 1 }"
                :exit="{ opacity: 0, scale: 0.6 }"
                class="inline-flex w-full items-center justify-center"
              >
                <div class="inline-flex items-center text-sm font-medium text-white">
                  <UIcon
                    name="i-lucide-info"
                    class="mr-1 h-4 w-4"
                  />
                  Details
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </MCursor>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-8">
          <div
            ref="targetRef1"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-zap"
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Experience blazing performance
            </p>
          </div>

          <div
            ref="targetRef2"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-sparkles"
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Beautiful Effects
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Stunning animations captivate users
            </p>
          </div>

          <div
            ref="targetRef3"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-code"
                class="w-6 h-6 text-green-600 dark:text-green-400"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Easy Integration
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Simple to implement with clean code
            </p>
          </div>
        </div>

        <div class="absolute bottom-4 left-4 right-4 text-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            Move your cursor over the cards to see the custom cursor effect
          </p>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <UCard class="text-center">
          <UIcon
            name="i-lucide-mouse-pointer-click"
            class="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3"
          />
          <h3 class="font-semibold mb-1">
            Interactive Elements
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Hover effects on interactive components
          </p>
        </UCard>

        <UCard class="text-center">
          <UIcon
            name="i-lucide-settings"
            class="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3"
          />
          <h3 class="font-semibold mb-1">
            Customizable
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Fully configurable cursor behavior
          </p>
        </UCard>

        <UCard class="text-center">
          <UIcon
            name="i-lucide-monitor"
            class="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3"
          />
          <h3 class="font-semibold mb-1">
            Cross-Platform
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Works seamlessly across devices
          </p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { motion, AnimatePresence } from 'motion-v'

const isHovering = ref(false)
const targetRef1 = ref<HTMLElement | null>(null)
const targetRef2 = ref<HTMLElement | null>(null)
const targetRef3 = ref<HTMLElement | null>(null)

function handlePositionChange(x: number, y: number) {
  if (targetRef1.value && targetRef2.value && targetRef3.value) {
    const rect1 = targetRef1.value.getBoundingClientRect()
    const rect2 = targetRef2.value.getBoundingClientRect()
    const rect3 = targetRef3.value.getBoundingClientRect()

    const inside1 = x >= rect1.left && x <= rect1.right && y >= rect1.top && y <= rect1.bottom
    const inside2 = x >= rect2.left && x <= rect2.right && y >= rect2.top && y <= rect2.bottom
    const inside3 = x >= rect3.left && x <= rect3.right && y >= rect3.top && y <= rect3.bottom

    isHovering.value = inside1 || inside2 || inside3
  }
}
</script>

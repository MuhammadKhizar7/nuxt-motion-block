<template>
  <div class="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <MAnimatedGroup class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
          <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span class="text-blue-700 dark:text-blue-300 font-medium">Product Showcase</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Premium Features</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover our cutting-edge solutions designed to transform your digital experience
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <UCard 
          v-for="(feature, index) in features" 
          :key="index"
          class="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
        >
          <div class="flex flex-col h-full">
            <div class="flex-shrink-0 mb-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <UIcon :name="feature.icon" class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ feature.description }}</p>
            </div>
            <div class="mt-auto">
              <UButton 
                color="primary" 
                variant="ghost" 
                size="sm" 
                class="px-0 font-medium"
                @click="viewFeature(feature)"
              >
                Learn more
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of satisfied customers who have transformed their business with our platform.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton size="lg" color="primary">
                Start Free Trial
              </UButton>
              <UButton size="lg" variant="outline">
                Schedule Demo
              </UButton>
            </div>
          </div>
          <div class="flex-1 w-full">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
              <div class="relative bg-gray-800 rounded-xl p-6 text-white">
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="space-y-3 font-mono text-sm">
                  <div class="flex">
                    <span class="text-blue-400">$</span>
                    <span class="ml-2">npm install nuxt-motion-block</span>
                  </div>
                  <div class="flex">
                    <span class="text-blue-400">$</span>
                    <span class="ml-2 text-gray-400"># Installation complete!</span>
                  </div>
                  <div class="flex">
                    <span class="text-blue-400">$</span>
                    <span class="ml-2">npx create-nuxt-app my-project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MAnimatedGroup>
  </div>
</template>

<script setup>
const features = [
  {
    icon: 'i-lucide-zap',
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal load times and instant rendering'
  },
  {
    icon: 'i-lucide-shield',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and compliance'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Mobile First',
    description: 'Fully responsive design that works flawlessly on any device'
  },
  {
    icon: 'i-lucide-globe',
    title: 'Global CDN',
    description: 'Lightning-fast content delivery from servers worldwide'
  },
  {
    icon: 'i-lucide-palette',
    title: 'Customizable',
    description: 'Fully customizable components to match your brand identity'
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Analytics',
    description: 'Real-time insights and comprehensive reporting dashboard'
  },
  {
    icon: 'i-lucide-users',
    title: 'Collaboration',
    description: 'Seamless team collaboration with real-time updates'
  },
  {
    icon: 'i-lucide-life-buoy',
    title: '24/7 Support',
    description: 'Round-the-clock support from our expert team'
  }
]

const viewFeature = (feature) => {
  // In a real implementation, this would open a modal or navigate to a feature page
  console.log('Viewing feature:', feature.title)
  alert(`Learn more about ${feature.title}`)
}
</script>
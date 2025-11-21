<template>
  <div>
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-xl font-bold text-gray-900 dark:text-white">MotionBlocks</span>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a 
              href="#" 
              class="text-gray-900 dark:text-white font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </a>
            <div class="relative group">
              <button class="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                Products
                <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
              </button>
              <div class="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                    <div class="font-medium">Web Components</div>
                    <div class="text-gray-500 dark:text-gray-400">Beautiful UI components with animations</div>
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                    <div class="font-medium">Templates</div>
                    <div class="text-gray-500 dark:text-gray-400">Pre-built website templates</div>
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="#" 
              class="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>
          <div class="hidden md:flex items-center space-x-2">
            <UButton 
              to="#" 
              variant="ghost" 
              color="neutral"
            >
              Sign in
            </UButton>
            <UButton 
              to="#" 
              variant="solid" 
              color="primary"
            >
              Sign up
            </UButton>
          </div>
          <div class="md:hidden flex items-center">
            <UButton 
              icon="i-heroicons-bars-3" 
              variant="ghost" 
              color="neutral" 
              size="sm"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center overflow-hidden">
      <MBackgroundGradientAnimation 
        gradient-background-start="rgb(106, 182, 245)"
        gradient-background-end="rgb(139, 92, 246)"
        first-color="106, 182, 245"
        second-color="139, 92, 246"
        third-color="236, 72, 153"
        fourth-color="245, 140, 85"
        pointer-color="106, 182, 245"
        size="80%"
        blending-value="hard-light"
        children-class="h-full w-full blur-md"
        class="absolute inset-0 z-0"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="text-center">
          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
            class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm"
          >
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
            New Release
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </motion.div>
          <motion.h1
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Build Amazing Websites with Motion
          </motion.h1>
          <motion.p
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
            class="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
          >
            Create stunning, animated interfaces with our collection of beautifully designed components. Just copy, paste, and build.
          </motion.p>
          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.4 }"
            class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <UButton
              to="#"
              color="primary"
              variant="solid"
              size="xl"
            >
              Get Started
            </UButton>
            <UButton
              to="#"
              color="neutral"
              variant="outline"
              size="xl"
            >
              View Components
            </UButton>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            <UIcon name="i-heroicons-light-bulb" class="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create beautiful, animated interfaces.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            v-for="(feature, index) in features"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
              <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
            Testimonials
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Developers
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's what some of our users have to say about our components.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
            class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center mb-4">
              <UAvatar
                :src="testimonial.author.avatar"
                :alt="testimonial.author.name"
                size="md"
                class="mr-3"
              />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.author.name }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ testimonial.author.role }}
                </p>
              </div>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ testimonial.content }}
            </p>
            <div class="flex">
              <UIcon
                v-for="i in 5"
                :key="i"
                :name="i <= testimonial.rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-500 to-indigo-600 text-white">
      <MBackgroundRippleEffect 
        class="absolute inset-0 z-0"
        :colors="['#93c5fd', '#60a5fa', '#a5b4fc']"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm">
            <UIcon name="i-heroicons-rocket-launch" class="w-4 h-4" />
            What are you waiting for?
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Join thousands of developers who are already building amazing interfaces with our components.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <UButton
              to="#"
              color="white"
              variant="solid"
              size="lg"
            >
              Start Building
            </UButton>
            <UButton
              to="#"
              color="white"
              variant="outline"
              size="lg"
            >
              View Documentation
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div class="lg:col-span-2">
            <h3 class="text-white text-xl font-bold mb-4">MotionBlocks</h3>
            <p class="mb-6 max-w-md">
              Creating beautiful, animated interfaces with Vue and Tailwind CSS.
            </p>
            <div class="flex space-x-4">
              <UButton
                v-for="(social, index) in socialLinks"
                :key="index"
                :icon="social.icon"
                :to="social.to"
                color="gray"
                variant="ghost"
                size="sm"
                square
              />
            </div>
          </div>
          <div v-for="(column, index) in linkColumns" :key="index">
            <h4 class="text-white font-semibold mb-4">{{ column.title }}</h4>
            <ul class="space-y-2">
              <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                <a 
                  :href="link.to" 
                  class="hover:text-white transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 MotionBlocks. All rights reserved.</p>
          <div class="mt-4 md:mt-0 flex space-x-6">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { motion } from 'motion-v'

const features = [
  {
    title: 'Beautiful Animations',
    description: 'Pre-built animations that bring your interface to life with smooth transitions and effects.',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'Easy to Customize',
    description: 'Fully customizable components that adapt to your brand and design requirements.',
    icon: 'i-heroicons-adjustments-horizontal'
  },
  {
    title: 'Nuxt UI Integration',
    description: 'Seamlessly integrates with Nuxt UI for a consistent design system.',
    icon: 'i-simple-icons-nuxtdotjs'
  },
  {
    title: 'Performance Optimized',
    description: 'Lightweight components that won\'t slow down your application.',
    icon: 'i-heroicons-bolt'
  },
  {
    title: 'Responsive Design',
    description: 'Looks great on all devices from mobile to desktop.',
    icon: 'i-heroicons-device-phone-mobile'
  },
  {
    title: 'Developer Friendly',
    description: 'Well-documented components with clear examples and TypeScript support.',
    icon: 'i-heroicons-code-bracket'
  }
]

const testimonials = [
  {
    content: 'These components have completely transformed how we build our UI. The animations are smooth and the customization options are endless.',
    author: {
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      avatar: 'https://picsum.photos/seed/alex/100/100'
    },
    rating: 5
  },
  {
    content: 'As a designer, I appreciate how these components balance aesthetics with functionality. They\'ve saved us countless hours of development time.',
    author: {
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    rating: 5
  },
  {
    content: 'The documentation is excellent and the components are easy to integrate into our existing Nuxt projects. Highly recommended!',
    author: {
      name: 'Michael Chen',
      role: 'Tech Lead',
      avatar: 'https://picsum.photos/seed/michael/100/100'
    },
    rating: 4
  }
]

const socialLinks = [
  { label: 'Twitter', to: '#', icon: 'i-simple-icons-x' },
  { label: 'GitHub', to: '#', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', to: '#', icon: 'i-simple-icons-linkedin' }
]

const linkColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Components', to: '#' },
      { label: 'Templates', to: '#' },
      { label: 'Pricing', to: '#' },
      { label: 'Changelog', to: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '#' },
      { label: 'Tutorials', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Support', to: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Contact', to: '#' },
      { label: 'Partners', to: '#' }
    ]
  }
]
</script>
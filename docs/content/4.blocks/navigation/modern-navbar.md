---
title: Modern Navbar
description: A responsive navigation bar with dropdown support and scroll effects.
navigation:
  icon: i-lucide-menu
---

# Modern Navbar

A responsive navigation bar with dropdown support and scroll effects. Features smooth animations, mobile-friendly design, and customizable styling.

## Usage

::code-preview
---
label: Preview
---
  :::div{class="flex justify-center w-full h-full"}
    <component-example name="modern-navbar-example" />
  :::
#code
```vue
<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-gray-900 dark:text-white">MotionBlocks</span>
        </div>

        <!-- Desktop Navigation -->
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
            <!-- Dropdown -->
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
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  <div class="font-medium">Icons</div>
                  <div class="text-gray-500 dark:text-gray-400">Animated icon library</div>
                </a>
              </div>
            </div>
          </div>
          <div class="relative group">
            <button class="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors">
              Resources
              <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
            </button>
            <!-- Dropdown -->
            <div class="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Documentation
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Tutorials
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Blog
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

        <!-- Auth Buttons -->
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

        <!-- Mobile menu button -->
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
</template>
```
::
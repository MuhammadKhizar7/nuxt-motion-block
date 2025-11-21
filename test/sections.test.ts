import { describe, it, expect } from 'vitest'
import { mount } from '@nuxt/test-utils'

describe('Section Components', () => {
  it('should register HeroSection component', async () => {
    const component = await import('../src/runtime/components/Sections/HeroSection.vue')
    expect(component).toBeDefined()
  })

  it('should register Navbar component', async () => {
    const component = await import('../src/runtime/components/Sections/Navbar.vue')
    expect(component).toBeDefined()
  })

  it('should register CTASection component', async () => {
    const component = await import('../src/runtime/components/Sections/CTASection.vue')
    expect(component).toBeDefined()
  })

  it('should register FeatureSection component', async () => {
    const component = await import('../src/runtime/components/Sections/FeatureSection.vue')
    expect(component).toBeDefined()
  })

  it('should register TestimonialSection component', async () => {
    const component = await import('../src/runtime/components/Sections/TestimonialSection.vue')
    expect(component).toBeDefined()
  })

  it('should register PricingSection component', async () => {
    const component = await import('../src/runtime/components/Sections/PricingSection.vue')
    expect(component).toBeDefined()
  })

  it('should register Footer component', async () => {
    const component = await import('../src/runtime/components/Sections/Footer.vue')
    expect(component).toBeDefined()
  })
})
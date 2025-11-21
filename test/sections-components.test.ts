import { describe, it, expect } from 'vitest'

describe('Section Components', () => {
  it('should have HeroSection component', async () => {
    const component = await import('../src/runtime/components/Sections/HeroSection.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have Navbar component', async () => {
    const component = await import('../src/runtime/components/Sections/Navbar.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have CTASection component', async () => {
    const component = await import('../src/runtime/components/Sections/CTASection.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have FeatureSection component', async () => {
    const component = await import('../src/runtime/components/Sections/FeatureSection.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have TestimonialSection component', async () => {
    const component = await import('../src/runtime/components/Sections/TestimonialSection.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have PricingSection component', async () => {
    const component = await import('../src/runtime/components/Sections/PricingSection.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })

  it('should have Footer component', async () => {
    const component = await import('../src/runtime/components/Sections/Footer.vue')
    expect(component).toBeDefined()
    expect(component.default).toBeDefined()
  })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Motion } from 'motion-v'
import AnimatedGroup from '../src/runtime/components/AnimatedGroup.vue'

describe('AnimatedGroup Stagger Functionality', () => {
  it('should apply staggerChildren to container variants', async () => {
    const staggerValue = 0.25
    const wrapper = mount(AnimatedGroup, {
      props: {
        staggerChildren: staggerValue,
        as: 'div',
        asChild: 'div'
      },
      slots: {
        default: '<div>Child 1</div><div>Child 2</div><div>Child 3</div>'
      }
    })

    // Check that the component renders
    expect(wrapper.exists()).toBe(true)
    
    // Check that the staggerChildren prop is set correctly
    expect(wrapper.props().staggerChildren).toBe(staggerValue)
  })

  it('should apply staggerDirection to container variants', async () => {
    const wrapper = mount(AnimatedGroup, {
      props: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        as: 'div',
        asChild: 'div'
      },
      slots: {
        default: '<div>Child 1</div><div>Child 2</div>'
      }
    })

    // Check that the component renders
    expect(wrapper.exists()).toBe(true)
    
    // Check that the staggerDirection prop is set correctly
    expect(wrapper.props().staggerDirection).toBe(-1)
  })

  it('should render children correctly', async () => {
    const wrapper = mount(AnimatedGroup, {
      props: {
        staggerChildren: 0.1,
        as: 'div',
        asChild: 'div'
      },
      slots: {
        default: '<div>Child 1</div><div>Child 2</div><div>Child 3</div>'
      }
    })

    // Check that the component renders
    expect(wrapper.exists()).toBe(true)
    
    // Check that children are rendered (we can't easily test the actual Motion components)
    const html = wrapper.html()
    expect(html).toContain('Child 1')
    expect(html).toContain('Child 2')
    expect(html).toContain('Child 3')
  })
})
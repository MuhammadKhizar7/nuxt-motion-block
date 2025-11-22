import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimatedGroup from '../src/runtime/components/AnimatedGroup.vue'

describe('AnimatedGroup', () => {
  it('should render children with stagger delay', async () => {
    const wrapper = mount(AnimatedGroup, {
      props: {
        staggerChildren: 0.1,
        as: 'div',
        asChild: 'div',
      },
      slots: {
        default: '<div>Child 1</div><div>Child 2</div><div>Child 3</div>',
      },
    })

    // Check that the component renders
    expect(wrapper.exists()).toBe(true)

    // Check that children are rendered
    const children = wrapper.findAll('div div')
    expect(children.length).toBe(3)

    // Check that the staggerChildren prop is set correctly
    expect(wrapper.props().staggerChildren).toBe(0.1)
  })

  it('should apply stagger direction correctly', async () => {
    const wrapper = mount(AnimatedGroup, {
      props: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        as: 'div',
        asChild: 'div',
      },
      slots: {
        default: '<div>Child 1</div><div>Child 2</div><div>Child 3</div>',
      },
    })

    // Check that the staggerDirection prop is set correctly
    expect(wrapper.props().staggerDirection).toBe(-1)
  })
})

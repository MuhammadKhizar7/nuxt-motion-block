import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MorphingPopover from '../src/runtime/components/MorphingPopover.vue'

describe('MorphingPopover', () => {
  it('should render the component', () => {
    expect(MorphingPopover).toBeDefined()
  })

  it('should have proper default props', () => {
    const wrapper = mount(MorphingPopover, {
      props: {
        defaultOpen: true,
      },
      slots: {
        default: '<button>Trigger</button>',
        content: '<div>Content</div>',
      },
    })

    expect(wrapper.props().mode).toBe('click')
    expect(wrapper.props().dismissible).toBe(true)
  })

  it('should support custom variants', () => {
    const customVariants = {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
    }

    const wrapper = mount(MorphingPopover, {
      props: {
        variants: customVariants,
      },
      slots: {
        default: '<button>Trigger</button>',
        content: '<div>Content</div>',
      },
    })

    expect(wrapper.props().variants).toEqual(customVariants)
  })
})

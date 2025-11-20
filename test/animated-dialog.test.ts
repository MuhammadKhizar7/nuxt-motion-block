import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import AnimatedDialog from '../src/runtime/components/AnimatedDialog.vue'

describe('AnimatedDialog', () => {
  it('should render the component', () => {
    expect(AnimatedDialog).toBeDefined()
  })

  it('should have proper default props', () => {
    const wrapper = mount(AnimatedDialog, {
      props: {
        defaultOpen: true
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>'
      }
    })
    
    expect(wrapper.props().overlay).toBe(true)
    expect(wrapper.props().dismissible).toBe(true)
    expect(wrapper.props().modal).toBe(true)
  })

  it('should support custom variants', () => {
    const customVariants = {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 }
    }

    const wrapper = mount(AnimatedDialog, {
      props: {
        variants: customVariants
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>'
      }
    })
    
    expect(wrapper.props().variants).toEqual(customVariants)
  })

  it('should support custom transition options', () => {
    const customTransition = {
      type: 'spring',
      bounce: 0.2,
      duration: 0.5
    }

    const wrapper = mount(AnimatedDialog, {
      props: {
        transitionOptions: customTransition
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>'
      }
    })
    
    expect(wrapper.props().transitionOptions).toEqual(customTransition)
  })

  it('should emit update:open event when open state changes', async () => {
    const wrapper = mount(AnimatedDialog, {
      props: {
        open: false
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>'
      }
    })

    await wrapper.setProps({ open: true })
    expect(wrapper.emitted('update:open')).toBeTruthy()
  })
})
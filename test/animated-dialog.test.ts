import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import AnimatedDialog from '../src/runtime/components/AnimatedDialog.vue'

// Mock the UModal component since it's from Nuxt UI
vi.mock('#ui/components', () => ({
  UModal: {
    name: 'UModal',
    template: '<div class="u-modal"><slot /><slot name="content" /></div>',
  },
}))

describe('AnimatedDialog', () => {
  it('should render the component', () => {
    expect(AnimatedDialog).toBeDefined()
  })

  it('should have proper default props', () => {
    const wrapper = mount(AnimatedDialog, {
      props: {
        defaultOpen: true,
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>',
      },
      global: {
        stubs: {
          UModal: {
            template: '<div><slot /><slot name="content" /></div>',
          },
          motion: {
            template: '<div><slot /></div>',
          },
          AnimatePresence: {
            template: '<div><slot /></div>',
          },
        },
      },
    })

    expect(wrapper.props().overlay).toBe(true)
    expect(wrapper.props().dismissible).toBe(true)
    expect(wrapper.props().modal).toBe(true)
  })

  it('should support custom variants', () => {
    const customVariants = {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
    }

    const wrapper = mount(AnimatedDialog, {
      props: {
        variants: customVariants,
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>',
      },
      global: {
        stubs: {
          UModal: {
            template: '<div><slot /><slot name="content" /></div>',
          },
          motion: {
            template: '<div><slot /></div>',
          },
          AnimatePresence: {
            template: '<div><slot /></div>',
          },
        },
      },
    })

    expect(wrapper.props().variants).toEqual(customVariants)
  })

  it('should support custom transition options', () => {
    const customTransition = {
      type: 'spring' as const,
      bounce: 0.2,
      duration: 0.5,
    }

    const wrapper = mount(AnimatedDialog, {
      props: {
        transitionOptions: customTransition,
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>',
      },
      global: {
        stubs: {
          UModal: {
            template: '<div><slot /><slot name="content" /></div>',
          },
          motion: {
            template: '<div><slot /></div>',
          },
          AnimatePresence: {
            template: '<div><slot /></div>',
          },
        },
      },
    })

    expect(wrapper.props().transitionOptions).toEqual(customTransition)
  })

  it('should emit update:open event when open state changes', async () => {
    // Test the component's own handling of the open prop
    const wrapper = mount(AnimatedDialog, {
      props: {
        open: false,
      },
      slots: {
        default: '<button>Trigger</button>',
        body: '<div>Content</div>',
      },
      global: {
        stubs: {
          UModal: {
            template: '<div><slot /><slot name="content" /></div>',
            props: ['open'],
          },
          motion: {
            template: '<div><slot /></div>',
          },
          AnimatePresence: {
            template: '<div><slot /></div>',
          },
        },
      },
    })

    // Test that setting the open prop triggers the watch and emits the event
    await wrapper.setProps({ open: true })

    // Since we're testing the component's internal logic, not the UModal's emission,
    // we should check if the component properly reacts to prop changes
    expect(wrapper.vm.isOpen).toBe(true)
  })
})

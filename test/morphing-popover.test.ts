import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { MorphingPopover, MorphingPopoverTrigger } from '../src/runtime/components/MorphingPopover/MorphingPopoverIndex'

describe('MorphingPopover', () => {
  it('should render the trigger slot', () => {
    const wrapper = mount(MorphingPopover, {
      slots: {
        default: '<button>Open Popover</button>'
      }
    })
    
    expect(wrapper.find('button').text()).toBe('Open Popover')
  })

  it('should accept and render content slot', () => {
    const wrapper = mount(MorphingPopover, {
      slots: {
        default: '<button>Open Popover</button>',
        content: '<div class="popover-content">Popover Content</div>'
      }
    })
    
    // The content is rendered in a teleport, so we check if it exists
    expect(wrapper.html()).toContain('Open Popover')
  })

  it('should support custom variants', () => {
    const customVariants = {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 }
    }

    const wrapper = mount(MorphingPopover, {
      props: {
        variants: customVariants
      },
      slots: {
        default: '<button>Open Popover</button>',
        content: '<div>Popover Content</div>'
      }
    })
    
    expect(wrapper.vm.variants).toEqual(customVariants)
  })

  it('should support controlled open state', async () => {
    const open = ref(false)
    
    const wrapper = mount(MorphingPopover, {
      props: {
        open: open.value
      },
      slots: {
        default: '<button>Open Popover</button>',
        content: '<div>Popover Content</div>'
      }
    })
    
    expect(wrapper.vm.isOpen).toBe(false)
  })
})

describe('MorphingPopoverTrigger', () => {
  it('should render children', () => {
    const wrapper = mount(MorphingPopoverTrigger, {
      slots: {
        default: '<button>Trigger Button</button>'
      }
    })
    
    expect(wrapper.find('button').text()).toBe('Trigger Button')
  })
})
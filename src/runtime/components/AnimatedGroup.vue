<script lang="ts">
import { defineComponent, h, useSlots, computed, type PropType, type VNode, Comment, Text, Fragment } from 'vue'
import { Motion } from 'motion-v'
import type { Variant, Transition } from 'motion-v'

// Defines a type for a variants object that holds multiple animation states.
type Variants = Record<string, Variant>

export type PresetType
  = | 'fade'
    | 'slide'
    | 'scale'
    | 'blur'
    | 'blur-slide'
    | 'zoom'
    | 'flip'
    | 'bounce'
    | 'rotate'
    | 'swing'

export default defineComponent({
  name: 'AnimatedGroup',
  props: {
    class: String,
    variants: Object as PropType<{ container?: Variants, item?: Variants }>,
    preset: String as PropType<PresetType>,
    as: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    asChild: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    initial: {
      type: String,
      default: 'hidden',
    },
    animate: {
      type: String,
      default: 'visible',
    },
    staggerChildren: {
      type: Number,
      default: 0.1,
    },
    staggerDirection: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const slots = useSlots()

    const defaultContainerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }

    const defaultItemVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    const presetVariants: Record<PresetType, Variants> = {
      'fade': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      'slide': {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
      'scale': {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      },
      'blur': {
        hidden: { filter: 'blur(4px)', opacity: 0 },
        visible: { filter: 'blur(0px)', opacity: 1 },
      },
      'blur-slide': {
        hidden: { filter: 'blur(4px)', y: 20, opacity: 0 },
        visible: { filter: 'blur(0px)', y: 0, opacity: 1 },
      },
      'zoom': {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      },
      'flip': {
        hidden: { rotateX: -90, opacity: 0 },
        visible: {
          rotateX: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      },
      'bounce': {
        hidden: { y: -50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 400, damping: 10 },
        },
      },
      'rotate': {
        hidden: { rotate: -180, opacity: 0 },
        visible: {
          rotate: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 200, damping: 15 },
        },
      },
      'swing': {
        hidden: { rotate: -10, opacity: 0 },
        visible: {
          rotate: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 8 },
        },
      },
    }

    const addDefaultVariants = (variants: Variants | undefined) => {
      if (!variants) return defaultItemVariants
      return {
        hidden: { ...defaultItemVariants.hidden, ...(variants.hidden || {}) },
        visible: { ...defaultItemVariants.visible, ...(variants.visible || {}) },
      }
    }

    const containerVariants = computed(() => {
      const baseVariants = props.variants?.container || defaultContainerVariants
      // Ensure both hidden and visible states exist with proper stagger in transition
      
      // Properly merge transition properties to preserve existing transitions while adding stagger
      const baseTransition: any = (baseVariants.visible && typeof baseVariants.visible === 'object' && (baseVariants.visible as any).transition) 
        ? (baseVariants.visible as any).transition 
        : {}
        
      const result: Variants = {
        // Always include hidden state
        hidden: baseVariants.hidden || {},
        visible: {
          ...(baseVariants.visible || {}),
          transition: {
            ...baseTransition,
            staggerChildren: props.staggerChildren,
            staggerDirection: props.staggerDirection,
          }
        },
      }
      
      return result
    })

    const itemVariants = computed(() => {
      if (props.variants?.item)
        return addDefaultVariants(props.variants.item)
      const preset = props.preset ? presetVariants[props.preset] : undefined
      return preset ? addDefaultVariants(preset) : defaultItemVariants
    })

    function getValidChildren(nodes: VNode[]): VNode[] {
      const validNodes: VNode[] = []
      for (const node of nodes) {
        if (node.type === Comment) {
          continue
        }
        if (node.type === Text && (node.children as string).trim() === '') {
          continue
        }
        if (node.type === Fragment) {
          validNodes.push(...getValidChildren(node.children as VNode[]))
        }
        else {
          validNodes.push(node)
        }
      }
      return validNodes
    }

    // Helper function to flatten children and extract only the actual items
    function flattenChildren(nodes: VNode[]): VNode[] {
      const flattened: VNode[] = []
      for (const node of nodes) {
        // Skip comments and empty text nodes
        if (node.type === Comment) {
          continue
        }
        if (node.type === Text && (node.children as string).trim() === '') {
          continue
        }
        
        // If it's a Fragment, flatten its children
        if (node.type === Fragment) {
          flattened.push(...flattenChildren(node.children as VNode[]))
        }
        // If it's a regular element with children that are arrays (like v-for), flatten them
        else if (node.children && Array.isArray(node.children)) {
          // Check if this is a wrapper element (like a div containing multiple items)
          // We'll assume that if a node has multiple children that aren't text/comments,
          // it's a wrapper and we should flatten its children
          const nonTextChildren = node.children.filter(child => 
            child && (typeof child !== 'string' || child.trim() !== '')
          )
          
          // If it has multiple non-text children, it's likely a wrapper
          if (nonTextChildren.length > 1) {
            // Flatten the children directly
            flattened.push(...flattenChildren(node.children as VNode[]))
          } else {
            // Otherwise, keep the node as is
            flattened.push(node)
          }
        }
        // Otherwise, keep the node as is
        else {
          flattened.push(node)
        }
      }
      return flattened
    }

    // Helper function to safely get variant by key
    function getVariantByKey(variants: Variants, key: string): Variant | undefined {
      return variants[key]
    }

    return () => {
      const children = flattenChildren(slots.default ? slots.default() : [])

      // Create motion children with proper stagger handling
      const motionChildren = children.map((child) => {
        return h(
          // @ts-ignore
          Motion,
          {
            as: props.asChild,
            variants: itemVariants.value,
          },
          () => [child],
        )
      })

      return h(
        // @ts-ignore
        Motion,
        {
          as: props.as,
          class: props.class,
          initial: props.initial,
          animate: props.animate,
          variants: containerVariants.value,
        },
        () => motionChildren,
      )
    }
  },
})
</script>

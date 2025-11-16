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
      visible: {},
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
      // Ensure both hidden and visible states exist
      return {
        hidden: baseVariants.hidden || {},
        visible: baseVariants.visible || {},
      }
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

    // Helper function to safely get variant by key
    function getVariantByKey(variants: Variants, key: string): Variant | undefined {
      return variants[key]
    }

    return () => {
      const children = getValidChildren(slots.default ? slots.default() : [])

      // Apply stagger delay through container transition
      const containerTransition: Transition = {
        staggerChildren: props.staggerChildren,
        staggerDirection: props.staggerDirection,
      }

      // Get container states
      const containerInitialState = getVariantByKey(containerVariants.value, props.initial) || containerVariants.value.hidden || {}
      const containerAnimateState = getVariantByKey(containerVariants.value, props.animate) || containerVariants.value.visible || {}

      // Create motion children with proper stagger handling
      const motionChildren = children.map((child, index) => {
        // Get the initial and animate states for each child
        const initialState = getVariantByKey(itemVariants.value, props.initial) || itemVariants.value.hidden || defaultItemVariants.hidden
        const animateState = getVariantByKey(itemVariants.value, props.animate) || itemVariants.value.visible || defaultItemVariants.visible

        // Calculate delay for this child based on stagger settings
        const delay = props.staggerDirection === 1 
          ? index * props.staggerChildren
          : (children.length - 1 - index) * props.staggerChildren

        return h(
          // @ts-ignore
          Motion,
          {
            as: props.asChild,
            initial: initialState,
            animate: animateState,
            transition: {
              delay,
              ...(animateState.transition || {})
            }
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
          initial: containerInitialState,
          animate: containerAnimateState,
          transition: containerTransition,
        },
        () => motionChildren,
      )
    }
  },
})
</script>
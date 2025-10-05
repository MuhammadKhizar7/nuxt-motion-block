<script lang="ts">
import { defineComponent, h, useSlots, computed, type PropType, type VNode, Comment, Text, Fragment } from 'vue'
import { Motion } from 'motion-v'
import type { Variant, Variants as MotionVariants } from 'motion-v'

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
    className: String,
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
      visible: {
        transition: {
          staggerChildren: props.staggerChildren,
          staggerDirection: props.staggerDirection,
        },
      },
    }

    const defaultItemVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    const presetVariants: Record<PresetType, Variants> = {
      'fade': {},
      'slide': {
        hidden: { y: 20 },
        visible: { y: 0 },
      },
      'scale': {
        hidden: { scale: 0.8 },
        visible: { scale: 1 },
      },
      'blur': {
        hidden: { filter: 'blur(4px)' },
        visible: { filter: 'blur(0px)' },
      },
      'blur-slide': {
        hidden: { filter: 'blur(4px)', y: 20 },
        visible: { filter: 'blur(0px)', y: 0 },
      },
      'zoom': {
        hidden: { scale: 0.5 },
        visible: {
          scale: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      },
      'flip': {
        hidden: { rotateX: -90 },
        visible: {
          rotateX: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      },
      'bounce': {
        hidden: { y: -50 },
        visible: {
          y: 0,
          transition: { type: 'spring', stiffness: 400, damping: 10 },
        },
      },
      'rotate': {
        hidden: { rotate: -180 },
        visible: {
          rotate: 0,
          transition: { type: 'spring', stiffness: 200, damping: 15 },
        },
      },
      'swing': {
        hidden: { rotate: -10 },
        visible: {
          rotate: 0,
          transition: { type: 'spring', stiffness: 300, damping: 8 },
        },
      },
    }

    const addDefaultVariants = (variants: Variants | undefined) => ({
      hidden: { ...defaultItemVariants.hidden, ...(variants?.hidden || {}) },
      visible: { ...defaultItemVariants.visible, ...(variants?.visible || {}) },
    })

    const containerVariants = computed(() => props.variants?.container || defaultContainerVariants)

    const itemVariants = computed(() => {
      if (props.variants?.item)
        return props.variants.item
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

    return () => {
      const children = getValidChildren(slots.default ? slots.default() : [])

      const motionChildren = children.map((child) => {
        return h(
          Motion,
          {
            as: props.asChild,
            variants: itemVariants.value as any,
          },
          () => [child],
        )
      })

      return h(
        Motion,
        {
          as: props.as,
          class: props.className,
          initial: props.initial,
          animate: props.animate,
          variants: containerVariants.value as any,
        },
        () => motionChildren,
      )
    }
  },
})
</script>

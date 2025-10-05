import MorphingPopover from './MorphingPopover.vue'
import MorphingPopoverTrigger from './MorphingPopoverTrigger.vue'
import MorphingPopoverContent from './MorphingPopoverContent.vue'
import { useMorphingPopover, useMorphingPopoverManager } from './useMorphingPopover'

export {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
  useMorphingPopover,
  useMorphingPopoverManager,
  // Legacy support
  useMorphingPopoverManager as useMorphingOverlay,
}

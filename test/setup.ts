import { vi, beforeEach } from 'vitest'

// Mock Vue's defineProps and defineEmits for testing
// @ts-ignore
global.defineProps = vi.fn()
// @ts-ignore
global.defineEmits = vi.fn()

// Mock window and document for JSDOM environment
if (typeof window === 'undefined') {
  // @ts-ignore
  global.window = {}
}

if (typeof document === 'undefined') {
  // @ts-ignore
  global.document = {}
}

// Mock window.matchMedia
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})

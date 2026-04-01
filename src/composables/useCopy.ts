import { ref } from 'vue'

export function useCopy() {
  const copied = ref<string | null>(null)
  let timeout: ReturnType<typeof setTimeout>

  function copy(text: string) {
    navigator.clipboard.writeText(text)
    copied.value = text
    clearTimeout(timeout)
    timeout = setTimeout(() => (copied.value = null), 1800)
  }

  return { copied, copy }
}

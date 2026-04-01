<script setup lang="ts">
import { ref, computed } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github-dark.min.css'

hljs.registerLanguage('xml', xml)

const props = withDefaults(
  defineProps<{
    code?: string
    defaultOpen?: boolean
  }>(),
  {
    defaultOpen: false,
  },
)

const showCode = ref(props.defaultOpen)
const copied = ref(false)
const highlighted = computed(() =>
  props.code ? hljs.highlight(props.code.trim(), { language: 'xml' }).value : '',
)
let timeout: ReturnType<typeof setTimeout>

function copyCode(code: string) {
  navigator.clipboard.writeText(code.trim())
  copied.value = true
  clearTimeout(timeout)
  timeout = setTimeout(() => (copied.value = false), 1800)
}
</script>

<template>
  <div class="demo-block">
    <div class="demo-preview">
      <slot />
    </div>
    <template v-if="code">
      <div class="demo-toolbar">
        <AppButton
          severity="ghost"
          variant="text"
          size="sm"
          :icon="showCode ? 'pi pi-eye-slash' : 'pi pi-code'"
          :aria-label="showCode ? 'Verberg code' : 'Toon code'"
          @click="showCode = !showCode"
        />
        <AppButton
          severity="ghost"
          variant="text"
          size="sm"
          :icon="copied ? 'pi pi-check' : 'pi pi-copy'"
          aria-label="Kopieer code"
          @click="copyCode(code)"
        />
      </div>
      <div v-if="showCode" class="demo-code">
        <pre class="demo-pre"><code v-html="highlighted" /></pre>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AutoComplete from 'primevue/autocomplete'

const DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com',
  'live.com',
  'protonmail.com',
  'proton.me',
  'msn.com',
  'me.com',
  'googlemail.com',
  'telenet.be',
  'skynet.be',
  'proximus.be',
]

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    disabled?: boolean
    invalid?: boolean
  }>(),
  {
    modelValue: '',
    placeholder: 'naam@voorbeeld.be',
  },
)

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const suggestions = ref<string[] | undefined>(undefined)

function onComplete({ query }: { query: string }) {
  const atIndex = query.lastIndexOf('@')
  if (atIndex === -1) {
    suggestions.value = undefined
    return
  }
  const local = query.slice(0, atIndex)
  const domainQuery = query.slice(atIndex + 1).toLowerCase()
  const matched = DOMAINS.filter((d) => d.startsWith(domainQuery)).map((d) => `${local}@${d}`)
  suggestions.value = matched.includes(query) ? matched : [query, ...matched]
}

const pt = {
  root: { class: 'w-full' },
  pcInputText: {
    root: { class: ['sw-input-field', { 'sw-input-field--invalid': props.invalid }] },
  },
  overlay: { class: 'sw-select-overlay' },
  listContainer: { class: 'sw-select-list-wrap' },
  list: { class: 'sw-select-list' },
  option: { class: 'sw-select-option' },
}
</script>

<template>
  <AutoComplete
    :model-value="modelValue"
    :suggestions="suggestions"
    :placeholder="placeholder"
    :disabled="disabled"
    :unstyled="true"
    :pt="pt"
    @complete="onComplete"
    @update:model-value="emit('update:modelValue', $event ?? '')"
  />
</template>

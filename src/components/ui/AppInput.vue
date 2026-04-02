<script setup lang="ts">
import InputText from 'primevue/inputtext'
import AppInputTel from './AppInputTel.vue'
import AppInputVat from './AppInputVat.vue'

const props = withDefaults(
  defineProps<{
    type?: 'text' | 'email' | 'tel' | 'vat'
    modelValue?: string
    country?: string
    label?: string
    placeholder?: string
    helpText?: string
    disabled?: boolean
    invalid?: boolean
  }>(),
  {
    type: 'text',
  },
)

const emit = defineEmits<{
  'update:modelValue': [string]
  'update:country': [string]
}>()
</script>

<template>
  <div class="app-input-wrap">
    <label v-if="label" class="app-input-label">{{ label }}</label>

    <AppInputTel
      v-if="type === 'tel'"
      :model-value="modelValue"
      :country="country"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      @update:model-value="emit('update:modelValue', $event)"
      @update:country="emit('update:country', $event)"
    />

    <AppInputVat
      v-else-if="type === 'vat'"
      :model-value="modelValue"
      :country="country"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      @update:model-value="emit('update:modelValue', $event)"
      @update:country="emit('update:country', $event)"
    />

    <InputText
      v-else
      :model-value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      :unstyled="true"
      :pt="{ root: { class: ['app-input-field', { 'app-input-field--invalid': invalid }] } }"
      @update:model-value="emit('update:modelValue', $event ?? '')"
    />

    <small v-if="helpText" class="app-input-help">{{ helpText }}</small>
  </div>
</template>

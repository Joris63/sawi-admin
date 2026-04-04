<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const props = withDefaults(
  defineProps<{
    modelValue?: any
    options?: any[]
    optionLabel?: string
    optionValue?: string
    placeholder?: string
    label?: string
    helpText?: string
    disabled?: boolean
    invalid?: boolean
  }>(),
  {
    options: () => [],
  },
)

const emit = defineEmits<{
  'update:modelValue': [any]
}>()

const isOpen = ref(false)

const pt = {
  root: { class: 'sw-select' },
  label: { class: 'sw-select-label' },
  dropdown: { class: 'sw-select-dropdown' },
  overlay: { class: 'sw-select-overlay' },
  listContainer: { class: 'sw-select-list-wrap' },
  list: { class: 'sw-select-list' },
  option: ({ context }: any) => ({
    class: ['sw-select-option', { 'sw-select-option--selected': context.selected }],
  }),
}
</script>

<template>
  <div class="sw-input-wrap">
    <label v-if="label" class="sw-input-label">{{ label }}</label>

    <Select
      :model-value="modelValue"
      :options="options"
      :option-label="optionLabel"
      :option-value="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      :unstyled="true"
      :pt="pt"
      @before-show="isOpen = true"
      @hide="isOpen = false"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #dropdownicon>
        <i :class="['pi', isOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'sw-select-chevron']" />
      </template>

      <template v-if="$slots.value" #value="slotProps">
        <slot name="value" v-bind="slotProps" />
      </template>

      <template v-if="$slots.option" #option="slotProps">
        <slot name="option" v-bind="slotProps" />
      </template>
    </Select>

    <small v-if="helpText" class="sw-input-help">{{ helpText }}</small>
  </div>
</template>

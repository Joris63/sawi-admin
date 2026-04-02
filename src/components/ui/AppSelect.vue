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
  root: { class: 'app-select' },
  label: { class: 'app-select-label' },
  dropdown: { class: 'app-select-dropdown' },
  overlay: { class: 'app-select-overlay' },
  listContainer: { class: 'app-select-list-wrap' },
  list: { class: 'app-select-list' },
  option: ({ context }: any) => ({
    class: ['app-select-option', { 'app-select-option--selected': context.selected }],
  }),
}
</script>

<template>
  <div class="app-input-wrap">
    <label v-if="label" class="app-input-label">{{ label }}</label>

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
        <i :class="['pi', isOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'app-select-chevron']" />
      </template>

      <template v-if="$slots.value" #value="slotProps">
        <slot name="value" v-bind="slotProps" />
      </template>

      <template v-if="$slots.option" #option="slotProps">
        <slot name="option" v-bind="slotProps" />
      </template>
    </Select>

    <small v-if="helpText" class="app-input-help">{{ helpText }}</small>
  </div>
</template>

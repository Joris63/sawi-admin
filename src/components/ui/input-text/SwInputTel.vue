<script setup lang="ts">
import { ref, computed } from 'vue'
import InputMask from 'primevue/inputmask'
import Select from 'primevue/select'
import { TEL_COUNTRIES } from '@/data/euCountries'
import type { TelCountry } from '@/data/euCountries'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    country?: string
    disabled?: boolean
    invalid?: boolean
    placeholder?: string
  }>(),
  {
    modelValue: '',
    country: 'BE',
  },
)

const emit = defineEmits<{
  'update:modelValue': [string]
  'update:country': [string]
}>()

const selectedCountry = ref<TelCountry>(
  TEL_COUNTRIES.find((c) => c.code === props.country) ?? TEL_COUNTRIES[0]!,
)

const isOpen = ref(false)
const currentMask = computed(() => selectedCountry.value.mask)
const currentPlaceholder = computed(() => selectedCountry.value.mask.replace(/9/g, '0'))

function onCountryChange(country: TelCountry) {
  selectedCountry.value = country
  emit('update:country', country.code)
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="sw-input-group">
    <Select
      :model-value="selectedCountry"
      :options="TEL_COUNTRIES"
      option-label="name"
      :disabled="disabled"
      :unstyled="true"
      :pt="{
        root: { class: 'sw-country-select' },
        label: { class: 'sw-country-select-label' },
        dropdown: { class: 'sw-country-select-arrow' },
        overlay: { class: 'sw-country-overlay' },
        listContainer: { class: 'sw-country-list-wrap' },
        list: { class: 'sw-country-list' },
        option: ({ context }: any) => ({
          class: ['sw-country-option', { 'sw-country-option--selected': context.selected }],
        }),
      }"
      @before-show="isOpen = true"
      @hide="isOpen = false"
      @update:model-value="onCountryChange"
    >
      <template #dropdownicon>
        <i
          :class="['pi', isOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'sw-country-select-arrow']"
        />
      </template>
      <template #value="{ value }">
        <span :class="`fi fi-${value.flag}`" class="sw-country-flag" />
        <span class="sw-country-code">{{ value.dialCode }}</span>
      </template>
      <template #option="{ option }">
        <span :class="`fi fi-${option.flag}`" class="sw-country-flag" />
        <span>{{ option.name }}</span>
        <span class="sw-country-option-code">{{ option.dialCode }}</span>
      </template>
    </Select>

    <InputMask
      :model-value="modelValue"
      :mask="currentMask"
      :disabled="disabled"
      :placeholder="currentPlaceholder"
      slot-char=" "
      :auto-clear="false"
      :unstyled="true"
      :pt="{
        root: {
          class: [
            'sw-input-field',
            'sw-input-field--grouped',
            { 'sw-input-field--invalid': invalid },
          ],
        },
      }"
      @update:model-value="emit('update:modelValue', $event ?? '')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InputMask from 'primevue/inputmask'
import Select from 'primevue/select'
import { VAT_COUNTRIES } from '@/data/euCountries'
import type { VatCountry } from '@/data/euCountries'

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

const selectedCountry = ref<VatCountry>(
  VAT_COUNTRIES.find((c) => c.code === props.country) ?? VAT_COUNTRIES[0]!,
)

const isOpen = ref(false)
const currentMask = computed(() => selectedCountry.value.mask)
const currentPlaceholder = computed(() => selectedCountry.value.mask.replace(/9/g, '0'))

function onCountryChange(country: VatCountry) {
  selectedCountry.value = country
  emit('update:country', country.code)
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="app-input-group">
    <Select
      :model-value="selectedCountry"
      :options="VAT_COUNTRIES"
      option-label="name"
      :disabled="disabled"
      :unstyled="true"
      :pt="{
        root: { class: 'app-country-select' },
        label: { class: 'app-country-select-label' },
        dropdown: { class: 'app-country-select-arrow' },
        overlay: { class: 'app-country-overlay' },
        listContainer: { class: 'app-country-list-wrap' },
        list: { class: 'app-country-list' },
        option: ({ context }: any) => ({
          class: ['app-country-option', { 'app-country-option--selected': context.selected }],
        }),
      }"
      @before-show="isOpen = true"
      @hide="isOpen = false"
      @update:model-value="onCountryChange"
    >
      <template #dropdownicon>
        <i
          :class="['pi', isOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'app-country-select-arrow']"
        />
      </template>
      <template #value="{ value }">
        <span :class="`fi fi-${value.flag}`" class="app-country-flag" />
        <span class="app-country-code">{{ value.vatPrefix }}</span>
      </template>
      <template #option="{ option }">
        <span :class="`fi fi-${option.flag}`" class="app-country-flag" />
        <span>{{ option.name }}</span>
        <span class="app-country-option-code">{{ option.vatPrefix }}</span>
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
            'app-input-field',
            'app-input-field--grouped',
            { 'app-input-field--invalid': invalid },
          ],
        },
      }"
      @update:model-value="emit('update:modelValue', $event ?? '')"
    />
  </div>
</template>

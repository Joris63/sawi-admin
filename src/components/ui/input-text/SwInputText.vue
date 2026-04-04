<script setup lang="ts">
import InputText from 'primevue/inputtext'
import SwInputTel from './SwInputTel.vue'
import SwInputVat from './SwInputVat.vue'
import SwInputEmail from './SwInputEmail.vue'

const props = withDefaults(
  defineProps<{
    type?: 'text' | 'email' | 'tel' | 'vat'
    modelValue?: string
    country?: string
    label?: string
    placeholder?: string
    helpText?: string
    iconLeft?: string
    iconRight?: string
    disabled?: boolean
    invalid?: boolean
  }>(),
  { type: 'text' },
)

const emit = defineEmits<{
  'update:modelValue': [string]
  'update:country': [string]
}>()
</script>

<template>
  <div class="sw-input-wrap">
    <label v-if="label" class="sw-input-label">{{ label }}</label>

    <SwInputEmail
      v-if="type === 'email'"
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <SwInputTel
      v-else-if="type === 'tel'"
      :model-value="modelValue"
      :country="country"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      @update:model-value="emit('update:modelValue', $event)"
      @update:country="emit('update:country', $event)"
    />

    <SwInputVat
      v-else-if="type === 'vat'"
      :model-value="modelValue"
      :country="country"
      :placeholder="placeholder"
      :disabled="disabled"
      :invalid="invalid"
      @update:model-value="emit('update:modelValue', $event)"
      @update:country="emit('update:country', $event)"
    />

    <template v-else>
      <div v-if="iconLeft || iconRight" class="sw-input-icon-wrap">
        <i v-if="iconLeft" :class="['pi', iconLeft, 'sw-input-icon', 'sw-input-icon--left']" />
        <InputText
          :model-value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :unstyled="true"
          :pt="{
            root: {
              class: [
                'sw-input-field',
                {
                  'sw-input-field--invalid': invalid,
                  'sw-input-field--icon-left': !!iconLeft,
                  'sw-input-field--icon-right': !!iconRight,
                },
              ],
            },
          }"
          @update:model-value="emit('update:modelValue', $event ?? '')"
        />
        <i v-if="iconRight" :class="['pi', iconRight, 'sw-input-icon', 'sw-input-icon--right']" />
      </div>

      <InputText
        v-else
        :model-value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :unstyled="true"
        :pt="{ root: { class: ['sw-input-field', { 'sw-input-field--invalid': invalid }] } }"
        @update:model-value="emit('update:modelValue', $event ?? '')"
      />
    </template>

    <small v-if="helpText" class="sw-input-help">{{ helpText }}</small>
  </div>
</template>

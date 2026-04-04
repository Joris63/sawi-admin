<script setup lang="ts">
import { computed } from 'vue'
import Button from 'primevue/button'
import SplitButton from 'primevue/splitbutton'
import type { MenuItem } from 'primevue/menuitem'

const props = withDefaults(
  defineProps<{
    severity?: 'primary' | 'secondary' | 'ghost' | 'danger'
    variant?: 'filled' | 'outlined' | 'text'
    size?: 'sm' | 'md' | 'lg'
    label?: string
    icon?: string
    iconPos?: 'left' | 'right'
    rounded?: boolean
    loading?: boolean
    disabled?: boolean
    menuItems?: MenuItem[]
  }>(),
  {
    severity: 'primary',
    variant: 'filled',
    size: 'md',
    iconPos: 'left',
  },
)

const pvSeverity = computed(() => (props.severity === 'ghost' ? 'secondary' : props.severity))
const isDisabled = computed(() => props.disabled || props.loading)
const iconOnly = computed(() => !!props.icon && !props.label)

const btnClasses = computed(() => [
  'sw-btn',
  `sw-btn--${props.severity}`,
  `sw-btn--${props.size}`,
  `sw-btn--${props.variant}`,
  props.rounded ? 'sw-btn--rounded' : '',
  iconOnly.value ? 'sw-btn--icon-only' : '',
])

const buttonPt = computed(() => ({
  root: { class: btnClasses.value },
  label: { class: 'sw-btn-label' },
  icon: { class: 'sw-btn-icon' },
  loadingIcon: { class: 'sw-btn-icon' },
}))

const splitButtonPt = computed(() => ({
  root: { class: 'sw-splitbtn' },
  pcButton: {
    root: { class: [...btnClasses.value, 'sw-splitbtn-main'] },
    label: { class: 'sw-btn-label' },
    icon: { class: 'sw-btn-icon' },
    loadingIcon: { class: 'sw-btn-icon' },
  },
  pcDropdown: {
    root: { class: [...btnClasses.value, 'sw-splitbtn-dropdown'] },
    icon: { class: 'sw-btn-icon' },
  },
  pcMenu: {
    root: { class: 'sw-splitbtn-menu' },
    rootList: { class: 'sw-splitbtn-list' },
    item: { class: 'sw-splitbtn-item' },
    itemContent: { class: 'sw-splitbtn-item-content' },
    itemLink: { class: 'sw-splitbtn-item-link' },
    itemIcon: { class: 'sw-splitbtn-item-icon' },
    itemLabel: { class: 'sw-splitbtn-item-label' },
    separator: { class: 'sw-splitbtn-separator' },
  },
}))
</script>

<template>
  <SplitButton
    v-if="menuItems"
    :model="menuItems"
    :label="label"
    :icon="icon"
    :severity="pvSeverity"
    :loading="loading"
    :disabled="isDisabled"
    :unstyled="true"
    :pt="splitButtonPt"
  />
  <Button
    v-else
    :severity="pvSeverity"
    :label="label"
    :icon="icon"
    :icon-pos="iconPos"
    :loading="loading"
    :disabled="isDisabled"
    :unstyled="true"
    :pt="buttonPt"
  />
</template>

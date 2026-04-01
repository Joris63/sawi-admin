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
  'app-btn',
  `app-btn--${props.severity}`,
  `app-btn--${props.size}`,
  `app-btn--${props.variant}`,
  props.rounded ? 'app-btn--rounded' : '',
  iconOnly.value ? 'app-btn--icon-only' : '',
])

const buttonPt = computed(() => ({
  root: { class: btnClasses.value },
  label: { class: 'app-btn-label' },
  icon: { class: 'app-btn-icon' },
  loadingIcon: { class: 'app-btn-icon' },
}))

const splitButtonPt = computed(() => ({
  root: { class: 'app-splitbtn' },
  pcButton: {
    root: { class: [...btnClasses.value, 'app-splitbtn-main'] },
    label: { class: 'app-btn-label' },
    icon: { class: 'app-btn-icon' },
    loadingIcon: { class: 'app-btn-icon' },
  },
  pcDropdown: {
    root: { class: [...btnClasses.value, 'app-splitbtn-dropdown'] },
    icon: { class: 'app-btn-icon' },
  },
  pcMenu: {
    root: { class: 'app-splitbtn-menu' },
    rootList: { class: 'app-splitbtn-list' },
    item: { class: 'app-splitbtn-item' },
    itemContent: { class: 'app-splitbtn-item-content' },
    itemLink: { class: 'app-splitbtn-item-link' },
    itemIcon: { class: 'app-splitbtn-item-icon' },
    itemLabel: { class: 'app-splitbtn-item-label' },
    separator: { class: 'app-splitbtn-separator' },
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

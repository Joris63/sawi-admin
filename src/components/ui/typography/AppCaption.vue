<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'span' })
</script>

<template>
  <component :is="as" class="app-caption" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

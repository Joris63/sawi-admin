<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'h4' })
</script>

<template>
  <component :is="as" class="app-h4" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'h2' })
</script>

<template>
  <component :is="as" class="app-h2" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

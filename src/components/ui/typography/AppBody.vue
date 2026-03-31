<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'p' })
</script>

<template>
  <component :is="as" class="app-body" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

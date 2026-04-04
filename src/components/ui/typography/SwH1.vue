<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'h1' })
</script>

<template>
  <component :is="as" class="sw-h1" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

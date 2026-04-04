<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'h2' })
</script>

<template>
  <component :is="as" class="sw-h2" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

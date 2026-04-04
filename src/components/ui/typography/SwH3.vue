<script setup lang="ts">
withDefaults(defineProps<{ as?: string; muted?: boolean }>(), { as: 'h3' })
</script>

<template>
  <component :is="as" class="sw-h3" :class="{ 'is-muted': muted }">
    <slot />
  </component>
</template>

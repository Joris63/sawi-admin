<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import logoRaw from '@/assets/images/logo.svg?raw'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <header class="sg-topbar">
    <span v-html="logoRaw" class="sg-topbar-logo" />

    <Button
      text
      severity="secondary"
      rounded
      :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      :aria-label="isDark ? 'Lichte modus' : 'Donkere modus'"
      @click="toggleDark"
    />
  </header>
</template>

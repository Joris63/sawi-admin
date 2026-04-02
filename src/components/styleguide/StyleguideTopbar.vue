<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
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

    <AppButton
      severity="ghost"
      variant="text"
      rounded
      :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      :aria-label="isDark ? 'Lichte modus' : 'Donkere modus'"
      class="sg-topbar-btn"
      @click="toggleDark"
    />
  </header>
</template>

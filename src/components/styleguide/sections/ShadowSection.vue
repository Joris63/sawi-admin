<script setup lang="ts">
import { AppH2, AppBody, AppSmall } from '@/components/ui/typography'

const shadowTokens = [
  { class: 'shadow-sm', usage: 'Subtiele lift — kaarten, inputs, chips' },
  { class: 'shadow-md', usage: 'Tooltips, dropdowns, kleine popovers' },
  { class: 'shadow-lg', usage: 'Modals, zijpanelen, toasts' },
  { class: 'shadow-xl', usage: 'Maximale elevatie — command palette, spotlight' },
]
</script>

<template>
  <section id="shadow">
    <AppH2>Schaduw</AppH2>
    <AppBody muted class="shadow-intro">
      Vier elevatieniveaus. Gebruik schaduw spaarzaam — alleen om drijvende of interactieve elementen te onderscheiden.
    </AppBody>

    <hr class="shadow-divider mt-lg mb-xl" />

    <AppSmall muted class="shadow-section-desc">
      Tokens zijn gedefinieerd in <code class="shadow-code">@theme</code> — gebruik de klasse direct.
    </AppSmall>

    <div class="shadow-grid">
      <div v-for="token in shadowTokens" :key="token.class" class="shadow-card">
        <div class="shadow-demo" :class="token.class" />
        <div class="shadow-card-meta">
          <code class="shadow-token">{{ token.class }}</code>
          <span class="shadow-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

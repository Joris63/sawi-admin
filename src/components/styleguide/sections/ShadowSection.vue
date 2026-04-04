<script setup lang="ts">
import { SwH2, SwBody } from '@/components/ui/typography'
import { useCopy } from '@/composables/useCopy'

const { copied, copy } = useCopy()

const shadowTokens = [
  { class: 'shadow-sm', usage: 'Subtiele lift — kaarten, inputs, chips' },
  { class: 'shadow-md', usage: 'Tooltips, dropdowns, kleine popovers' },
  { class: 'shadow-lg', usage: 'Modals, zijpanelen, toasts' },
  { class: 'shadow-xl', usage: 'Maximale elevatie — command palette, spotlight' },
]
</script>

<template>
  <section id="shadow">
    <SwH2>Schaduw</SwH2>
    <SwBody muted class="shadow-intro">
      Vier elevatieniveaus voor drijvende en interactieve elementen. Gebruik schaduw spaarzaam —
      niet voor decoratie.
    </SwBody>

    <hr class="shadow-divider mt-xl mb-xl" />

    <div class="shadow-grid">
      <div
        v-for="token in shadowTokens"
        :key="token.class"
        class="shadow-card sg-copyable"
        @click="copy(token.class)"
      >
        <div class="shadow-demo" :class="token.class" />
        <div class="shadow-card-meta">
          <code class="shadow-token">{{ token.class }}</code>
          <span class="shadow-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>

    <Transition name="fade-up">
      <div v-if="copied" class="sg-copy-toast">
        Gekopieerd: <span class="font-semibold">{{ copied }}</span>
      </div>
    </Transition>
  </section>
</template>

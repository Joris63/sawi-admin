<script setup lang="ts">
import { ref } from 'vue'
import { SwH2, SwH3, SwBody, SwSmall } from '@/components/ui/typography'
import SwButton from '@/components/ui/SwButton.vue'
import { useCopy } from '@/composables/useCopy'

const { copied, copy } = useCopy()

const prefixGroups = [
  ['p', 'px', 'py', 'pt', 'pb'],
  ['m', 'mx', 'my', 'mt', 'mb'],
  ['gap', 'gap-x', 'gap-y'],
  ['w', 'h', 'size'],
]

const selectedPrefix = ref('p')

const tokens = [
  { name: 'xs', rem: '0.25rem', px: 4 },
  { name: 'sm', rem: '0.5rem', px: 8 },
  { name: 'md', rem: '1rem', px: 16 },
  { name: 'lg', rem: '1.5rem', px: 24 },
  { name: 'xl', rem: '2rem', px: 32 },
  { name: '2xl', rem: '3rem', px: 48 },
  { name: '3xl', rem: '4rem', px: 64 },
]
</script>

<template>
  <section id="spacing">
    <SwH2>Spatiëring</SwH2>
    <SwBody muted class="spacing-intro">
      Zeven benoemde tokens voor alle witruimte in de interface. Gebruik altijd een token — geen
      arbitrary waarden zoals <code class="spacing-code">p-[18px]</code>.
    </SwBody>

    <!-- Prefix switcher -->
    <div class="spacing-prefix-switcher mt-lg">
      <template v-for="(group, i) in prefixGroups" :key="i">
        <div v-if="i > 0" class="spacing-prefix-divider" />
        <SwButton
          v-for="p in group"
          :key="p"
          :severity="selectedPrefix === p ? 'primary' : 'ghost'"
          :variant="selectedPrefix === p ? 'filled' : 'outlined'"
          size="sm"
          :label="`${p}-`"
          class="font-mono"
          @click="selectedPrefix = p"
        />
      </template>
    </div>

    <!-- Token scale -->
    <SwH3>Tokens</SwH3>
    <SwSmall muted class="spacing-section-desc">
      <code class="spacing-code">md</code> (16px) is de basiseenheid. Gebruik
      <code class="spacing-code">xs</code>–<code class="spacing-code">sm</code> voor compacte
      UI-elementen, <code class="spacing-code">lg</code>–<code class="spacing-code">3xl</code> voor
      layout en sectieafstand.
    </SwSmall>

    <div class="spacing-scale">
      <div
        v-for="token in tokens"
        :key="token.name"
        class="spacing-scale-row sg-copyable"
        :title="`Kopieer ${selectedPrefix}-${token.name}`"
        @click="copy(`${selectedPrefix}-${token.name}`)"
      >
        <div class="spacing-scale-meta">
          <code class="spacing-scale-token">{{ token.name }}</code>
          <span class="spacing-scale-detail">{{ token.rem }} · {{ token.px }}px</span>
        </div>
        <div class="spacing-scale-bar-wrap">
          <div class="spacing-scale-bar" :style="{ width: `${token.px}px` }" />
        </div>
        <code class="spacing-scale-example">{{ selectedPrefix }}-{{ token.name }}</code>
      </div>
    </div>

    <Transition name="fade-up">
      <div v-if="copied" class="sg-copy-toast">
        Gekopieerd: <span class="font-semibold">{{ copied }}</span>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { SwH2, SwH3, SwBody, SwSmall, SwCaption } from '@/components/ui/typography'
import { useCopy } from '@/composables/useCopy'

const { copied, copy } = useCopy()

const radiusTokens = [
  {
    name: 'sm',
    rem: '0.25rem',
    px: 4,
    class: 'rounded-sm',
    usage: 'Tags, tooltips, kleine elementen',
  },
  { name: 'md', rem: '0.5rem', px: 8, class: 'rounded-md', usage: 'Inputs, kleine knoppen' },
  { name: 'lg', rem: '0.75rem', px: 12, class: 'rounded-lg', usage: 'Knoppen, meldingen' },
  { name: 'xl', rem: '1rem', px: 16, class: 'rounded-xl', usage: 'Kaarten, panelen, tabellen' },
  { name: '2xl', rem: '1.5rem', px: 24, class: 'rounded-2xl', usage: 'Modals, grote oppervlakken' },
  {
    name: 'full',
    rem: '9999px',
    px: null,
    class: 'rounded-full',
    usage: 'Pills, avatars, statusdots',
  },
]

const widthTokens = [
  { class: 'border', px: 1, usage: 'Standaard randen, dividers, kaarten' },
  { class: 'border-md', px: 2, usage: 'Actieve states, focus ringen' },
  { class: 'border-lg', px: 4, usage: 'Nadruk, geselecteerde items' },
]

const colorTokens = [
  { class: 'border-border', desc: 'Standaard rand — kaarten, inputs, dividers' },
  { class: 'border-border-strong', desc: 'Nadrukrand — hover, actieve states' },
  { class: 'border-primary-800', desc: 'Merkrand licht — actieve selectie' },
  { class: 'border-primary-400', desc: 'Merkrand donker — actieve selectie' },
]
</script>

<template>
  <section id="borders">
    <SwH2>Randen</SwH2>
    <SwBody muted class="borders-intro">
      Consistente hoekradius, breedte en kleur houden de interface samenhangend. Gebruik de tokens —
      geen losse waarden of arbitrary radius.
    </SwBody>

    <hr class="borders-divider mt-2xl mb-2xl" />

    <!-- Radius -->
    <SwH3>Hoekradius</SwH3>
    <SwSmall muted class="borders-section-desc">
      Klein en functioneel (<code class="borders-code">sm</code>–<code class="borders-code">md</code
      >) voor tags en inputs, container-niveau (<code class="borders-code">xl</code>–<code
        class="borders-code"
        >2xl</code
      >) voor kaarten en modals, <code class="borders-code">full</code> voor pills en avatars.
    </SwSmall>

    <div class="radius-grid">
      <div
        v-for="token in radiusTokens"
        :key="token.name"
        class="radius-card sg-copyable"
        @click="copy(token.class)"
      >
        <div class="radius-demo" :class="token.class" />
        <div class="radius-card-meta">
          <code class="radius-token">{{ token.class }}</code>
          <span class="radius-detail">{{ token.rem }}{{ token.px ? ` · ${token.px}px` : '' }}</span>
          <span class="radius-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>

    <hr class="borders-divider mt-3xl mb-2xl" />

    <!-- Width -->
    <SwH3>Breedte</SwH3>
    <SwSmall muted class="borders-section-desc">
      <code class="borders-code">border</code> (1px) voor structuur en dividers,
      <code class="borders-code">border-md</code> voor focus en actieve states,
      <code class="borders-code">border-lg</code> voor geselecteerde items met nadruk.
    </SwSmall>

    <div class="width-grid">
      <div
        v-for="token in widthTokens"
        :key="token.class"
        class="width-card sg-copyable"
        @click="copy(token.class)"
      >
        <div class="width-demo" :class="token.class" />
        <div class="width-card-meta">
          <code class="width-token">{{ token.class }}</code>
          <span class="width-detail">{{ token.px }}px</span>
          <span class="width-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>

    <hr class="borders-divider mt-3xl mb-2xl" />

    <!-- Color -->
    <SwH3>Kleur</SwH3>
    <SwSmall muted class="borders-section-desc">
      Gebruik <code class="borders-code">border-border</code> als standaard en
      <code class="borders-code">border-border-strong</code> voor hover en focus. Alleen voor
      merkacties een directe paletkleur zoals <code class="borders-code">border-primary-800</code>.
    </SwSmall>

    <div class="border-color-grid">
      <div
        v-for="token in colorTokens"
        :key="token.class"
        class="border-color-row sg-copyable"
        @click="copy(token.class)"
      >
        <div class="border-color-demo border-md" :class="token.class" />
        <div class="border-color-meta">
          <code class="border-color-name">{{ token.class }}</code>
          <SwCaption class="border-color-desc">{{ token.desc }}</SwCaption>
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

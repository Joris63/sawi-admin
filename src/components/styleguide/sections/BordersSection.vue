<script setup lang="ts">
import { AppH2, AppH3, AppBody, AppSmall, AppCaption } from '@/components/ui/typography'

const radiusTokens = [
  { name: 'sm',   rem: '0.25rem', px: 4,    class: 'rounded-sm',   usage: 'Tags, tooltips, kleine elementen' },
  { name: 'md',   rem: '0.5rem',  px: 8,    class: 'rounded-md',   usage: 'Inputs, kleine knoppen' },
  { name: 'lg',   rem: '0.75rem', px: 12,   class: 'rounded-lg',   usage: 'Knoppen, meldingen' },
  { name: 'xl',   rem: '1rem',    px: 16,   class: 'rounded-xl',   usage: 'Kaarten, panelen, tabellen' },
  { name: '2xl',  rem: '1.5rem',  px: 24,   class: 'rounded-2xl',  usage: 'Modals, grote oppervlakken' },
  { name: 'full', rem: '9999px',  px: null, class: 'rounded-full', usage: 'Pills, avatars, statusdots' },
]

const widthTokens = [
  { class: 'border',    px: 1, usage: 'Standaard randen, dividers, kaarten' },
  { class: 'border-md', px: 2, usage: 'Actieve states, focus ringen' },
  { class: 'border-lg', px: 4, usage: 'Nadruk, geselecteerde items' },
]

const colorTokens = [
  { class: 'border-border',        desc: 'Standaard rand — kaarten, inputs, dividers' },
  { class: 'border-border-strong', desc: 'Nadrukrand — hover, actieve states' },
  { class: 'border-primary-900',   desc: 'Merkrand licht — actieve selectie' },
  { class: 'border-primary-400',   desc: 'Merkrand donker — actieve selectie' },
]
</script>

<template>
  <section id="borders">
    <AppH2>Randen</AppH2>
    <AppBody muted class="borders-intro">
      Gebruik de benoemde radius-tokens als Tailwind-klassen. Breedte en kleur via standaard Tailwind-utilities.
    </AppBody>

    <hr class="borders-divider mt-lg mb-xl" />

    <!-- Radius -->
    <AppH3>Hoekradius</AppH3>
    <AppSmall muted class="borders-section-desc">
      Zes tokens van <code class="borders-code">rounded-sm</code> tot <code class="borders-code">rounded-full</code>.
      Gedefinieerd in <code class="borders-code">@theme</code> — gebruik de klasse direct.
    </AppSmall>

    <div class="radius-grid">
      <div v-for="token in radiusTokens" :key="token.name" class="radius-card">
        <div class="radius-demo" :class="token.class" />
        <div class="radius-card-meta">
          <code class="radius-token">{{ token.class }}</code>
          <span class="radius-detail">{{ token.rem }}{{ token.px ? ` · ${token.px}px` : '' }}</span>
          <span class="radius-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>

    <hr class="borders-divider mt-2xl mb-xl" />

    <!-- Width -->
    <AppH3>Breedte</AppH3>
    <AppSmall muted class="borders-section-desc">
      Gebruik standaard Tailwind border-width utilities. Drie breedtes zijn voldoende voor de interface.
    </AppSmall>

    <div class="width-grid">
      <div v-for="token in widthTokens" :key="token.class" class="width-card">
        <div class="width-demo" :class="token.class" />
        <div class="width-card-meta">
          <code class="width-token">{{ token.class }}</code>
          <span class="width-detail">{{ token.px }}px</span>
          <span class="width-usage">{{ token.usage }}</span>
        </div>
      </div>
    </div>

    <hr class="borders-divider mt-2xl mb-xl" />

    <!-- Color -->
    <AppH3>Kleur</AppH3>
    <AppSmall muted class="borders-section-desc">
      Gebruik altijd semantische tokens voor randkleur — nooit een paletkleur rechtstreeks.
    </AppSmall>

    <div class="border-color-grid">
      <div v-for="token in colorTokens" :key="token.class" class="border-color-row">
        <div class="border-color-demo border-md" :class="token.class" />
        <div class="border-color-meta">
          <code class="border-color-name">{{ token.class }}</code>
          <AppCaption class="border-color-desc">{{ token.desc }}</AppCaption>
        </div>
      </div>
    </div>
  </section>
</template>

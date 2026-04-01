<script setup lang="ts">
import {
  AppH1,
  AppH2,
  AppH3,
  AppH4,
  AppBody,
  AppSmall,
  AppCaption,
} from '@/components/ui/typography'
import { useCopy } from '@/composables/useCopy'

const { copied, copy } = useCopy()

const scale = [
  {
    component: AppH1,
    label: 'AppH1',
    tag: 'h1',
    size: '28px',
    weight: 'Bold',
    sample: 'Klantbeheer',
  },
  {
    component: AppH2,
    label: 'AppH2',
    tag: 'h2',
    size: '24px',
    weight: 'Bold',
    sample: 'Verkoopoverzicht',
  },
  {
    component: AppH3,
    label: 'AppH3',
    tag: 'h3',
    size: '20px',
    weight: 'Semibold',
    sample: 'Factuurgegevens',
  },
  {
    component: AppH4,
    label: 'AppH4',
    tag: 'h4',
    size: '16px',
    weight: 'Semibold',
    sample: 'Verzendadres',
  },
  {
    component: AppBody,
    label: 'AppBody',
    tag: 'p',
    size: '16px',
    weight: 'Regular',
    sample: 'De klant heeft drie openstaande bestellingen die nog verwerkt moeten worden.',
  },
  {
    component: AppSmall,
    label: 'AppSmall',
    tag: 'p',
    size: '14px',
    weight: 'Regular',
    sample: 'Laatste wijziging op 14 maart 2025 door Joris Kamminga.',
  },
  {
    component: AppCaption,
    label: 'AppCaption',
    tag: 'span',
    size: '12px',
    weight: 'Medium',
    sample: 'Aangemaakt op 1 jan 2025',
  },
]

const weights = [
  { label: 'Light', class: 'font-light', value: '300' },
  { label: 'Regular', class: 'font-normal', value: '400' },
  { label: 'Medium', class: 'font-medium', value: '500' },
  { label: 'Semibold', class: 'font-semibold', value: '600' },
  { label: 'Bold', class: 'font-bold', value: '700' },
]
</script>

<template>
  <section id="typography">
    <AppH2>Typografie</AppH2>
    <AppBody muted class="typo-intro">
      Geist voor interface-tekst, Geist Mono voor code en waarden. Gebruik altijd de geleverde
      componenten — nooit losse font-klassen.
    </AppBody>

    <hr class="typo-divider mt-xl mb-xl" />

    <!-- Type scale -->
    <AppH3 class="typo-section-title">Schaal</AppH3>
    <AppSmall muted class="typo-section-desc">
      Elk niveau heeft een vaste rol — wissel niet van niveau voor visueel effect. Gebruik het
      <code class="typo-code">as</code>-prop om het HTML-element te overschrijven zonder de stijl te
      veranderen.
    </AppSmall>

    <div class="typo-scale">
      <div
        v-for="item in scale"
        :key="item.label"
        class="typo-scale-row sg-copyable"
        @click="copy(`<${item.label}></${item.label}>`)"
      >
        <div class="typo-scale-meta">
          <code class="typo-scale-component">{{ item.label }}</code>
          <span class="typo-scale-detail"
            >{{ item.tag }} · {{ item.size }} · {{ item.weight }}</span
          >
        </div>
        <div class="typo-scale-sample">
          <component :is="item.component">{{ item.sample }}</component>
        </div>
      </div>
    </div>

    <hr class="typo-divider mt-2xl mb-xl" />

    <!-- Muted variant -->
    <AppH3 class="typo-section-title">Muted variant</AppH3>
    <AppSmall muted class="typo-section-desc">
      Voeg <code class="typo-code">muted</code> toe voor ondersteunende tekst: labels,
      omschrijvingen en tijdstempels. Gebruik het niet voor primaire inhoud.
    </AppSmall>

    <div class="typo-muted-demo">
      <div>
        <AppH3>Standaard kleur</AppH3>
        <AppBody>Primaire tekst voor hoofdinhoud en titels.</AppBody>
      </div>
      <div>
        <AppH3 muted>Muted kleur</AppH3>
        <AppBody muted>Secundaire tekst voor omschrijvingen en labels.</AppBody>
      </div>
    </div>

    <hr class="typo-divider mt-2xl mb-xl" />

    <!-- Font weights -->
    <AppH3 class="typo-section-title">Gewichten</AppH3>
    <AppSmall muted class="typo-section-desc">
      Regular voor lopende tekst, Medium voor labels, Semibold voor koppen, Bold voor paginatitels.
      Vermijd Light in de interface — te weinig contrast op kleine formaten.
    </AppSmall>

    <div class="typo-weights">
      <div v-for="w in weights" :key="w.label" class="typo-weight-row">
        <AppCaption class="typo-weight-label">{{ w.label }} · {{ w.value }}</AppCaption>
        <span class="typo-weight-sample" :class="w.class">Sawiday Admin Interface</span>
      </div>
    </div>

    <hr class="typo-divider mt-2xl mb-xl" />

    <!-- Monospace -->
    <AppH3 class="typo-section-title">Monospace</AppH3>
    <AppSmall muted class="typo-section-desc">
      Gebruik <code class="typo-code">&lt;code&gt;</code> of
      <code class="typo-code">font-mono</code> voor ID's, orderreferenties, kleurwaarden en
      technische data in tabellen.
    </AppSmall>

    <div class="typo-mono-demo">
      <div class="typo-mono-row">
        <AppCaption>Kleurwaarde</AppCaption>
        <code class="typo-mono-value">#004050</code>
      </div>
      <div class="typo-mono-row">
        <AppCaption>Bestel-ID</AppCaption>
        <code class="typo-mono-value">ORD-20250314-0042</code>
      </div>
      <div class="typo-mono-row">
        <AppCaption>CSS klasse</AppCaption>
        <code class="typo-mono-value">bg-primary-800</code>
      </div>
    </div>
    <Transition name="fade-up">
      <div v-if="copied" class="sg-copy-toast">
        Gekopieerd: <span class="font-semibold">{{ copied }}</span>
      </div>
    </Transition>
  </section>
</template>

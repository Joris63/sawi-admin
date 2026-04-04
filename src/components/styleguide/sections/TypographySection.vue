<script setup lang="ts">
import { SwH1, SwH2, SwH3, SwH4, SwBody, SwSmall, SwCaption } from '@/components/ui/typography'
import { useCopy } from '@/composables/useCopy'

const { copied, copy } = useCopy()

const scale = [
  {
    component: SwH1,
    label: 'SwH1',
    tag: 'h1',
    size: '28px',
    weight: 'Bold',
    sample: 'Klantbeheer',
  },
  {
    component: SwH2,
    label: 'SwH2',
    tag: 'h2',
    size: '24px',
    weight: 'Bold',
    sample: 'Verkoopoverzicht',
  },
  {
    component: SwH3,
    label: 'SwH3',
    tag: 'h3',
    size: '20px',
    weight: 'Semibold',
    sample: 'Factuurgegevens',
  },
  {
    component: SwH4,
    label: 'SwH4',
    tag: 'h4',
    size: '16px',
    weight: 'Semibold',
    sample: 'Verzendadres',
  },
  {
    component: SwBody,
    label: 'SwBody',
    tag: 'p',
    size: '14px',
    weight: 'Regular',
    sample: 'De klant heeft drie openstaande bestellingen die nog verwerkt moeten worden.',
  },
  {
    component: SwSmall,
    label: 'SwSmall',
    tag: 'p',
    size: '12px',
    weight: 'Regular',
    sample: 'Laatste wijziging op 14 maart 2025 door Joris Kamminga.',
  },
  {
    component: SwCaption,
    label: 'SwCaption',
    tag: 'span',
    size: '11px',
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
    <SwH2>Typografie</SwH2>
    <SwBody muted class="typo-intro">
      Geist voor interface-tekst, Geist Mono voor code en waarden. Gebruik altijd de geleverde
      componenten — nooit losse font-klassen.
    </SwBody>

    <hr class="typo-divider mt-2xl mb-2xl" />

    <!-- Type scale -->
    <SwH3 class="typo-section-title">Schaal</SwH3>
    <SwSmall muted class="typo-section-desc">
      Elk niveau heeft een vaste rol — wissel niet van niveau voor visueel effect. Gebruik het
      <code class="typo-code">as</code>-prop om het HTML-element te overschrijven zonder de stijl te
      veranderen.
    </SwSmall>

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

    <hr class="typo-divider mt-3xl mb-2xl" />

    <!-- Muted variant -->
    <SwH3 class="typo-section-title">Muted variant</SwH3>
    <SwSmall muted class="typo-section-desc">
      Voeg <code class="typo-code">muted</code> toe voor ondersteunende tekst: labels,
      omschrijvingen en tijdstempels. Gebruik het niet voor primaire inhoud.
    </SwSmall>

    <div class="typo-muted-demo">
      <div>
        <SwH3>Standaard kleur</SwH3>
        <SwBody>Primaire tekst voor hoofdinhoud en titels.</SwBody>
      </div>
      <div>
        <SwH3 muted>Muted kleur</SwH3>
        <SwBody muted>Secundaire tekst voor omschrijvingen en labels.</SwBody>
      </div>
    </div>

    <hr class="typo-divider mt-3xl mb-2xl" />

    <!-- Font weights -->
    <SwH3 class="typo-section-title">Gewichten</SwH3>
    <SwSmall muted class="typo-section-desc">
      Regular voor lopende tekst, Medium voor labels, Semibold voor koppen, Bold voor paginatitels.
      Vermijd Light in de interface — te weinig contrast op kleine formaten.
    </SwSmall>

    <div class="typo-weights">
      <div v-for="w in weights" :key="w.label" class="typo-weight-row">
        <SwCaption class="typo-weight-label">{{ w.label }} · {{ w.value }}</SwCaption>
        <span class="typo-weight-sample" :class="w.class">Sawiday Admin Interface</span>
      </div>
    </div>

    <hr class="typo-divider mt-3xl mb-2xl" />

    <!-- Monospace -->
    <SwH3 class="typo-section-title">Monospace</SwH3>
    <SwSmall muted class="typo-section-desc">
      Gebruik <code class="typo-code">&lt;code&gt;</code> of
      <code class="typo-code">font-mono</code> voor ID's, orderreferenties, kleurwaarden en
      technische data in tabellen.
    </SwSmall>

    <div class="typo-mono-demo">
      <div class="typo-mono-row">
        <SwCaption>Kleurwaarde</SwCaption>
        <code class="typo-mono-value">#004050</code>
      </div>
      <div class="typo-mono-row">
        <SwCaption>Bestel-ID</SwCaption>
        <code class="typo-mono-value">ORD-20250314-0042</code>
      </div>
      <div class="typo-mono-row">
        <SwCaption>CSS klasse</SwCaption>
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

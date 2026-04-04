<script setup lang="ts">
import { ref } from 'vue'
import { SwH2, SwH3, SwBody, SwSmall } from '@/components/ui/typography'
import SwInputText from '@/components/ui/input-text/SwInputText.vue'
import DemoBlock from '@/components/styleguide/DemoBlock.vue'
import PropsTable from '@/components/styleguide/PropsTable.vue'
import type { PropRow } from '@/components/styleguide/PropsTable.vue'

const text = ref('')
const email = ref('')
const tel = ref('')
const vat = ref('')
const country = ref('BE')

const basicExample = `<SwInputText label="Naam" placeholder="Jan Janssen" />`

const props: PropRow[] = [
  {
    name: 'type',
    type: "'text' | 'email' | 'tel' | 'vat'",
    default: "'text'",
    description: 'Type van het veld. tel en vat tonen een landkiezer met masker.',
  },
  {
    name: 'modelValue',
    type: 'string',
    description: 'Waarde van het invoerveld (gebruik v-model).',
  },
  {
    name: 'country',
    type: 'string',
    default: "'BE'",
    description: 'Geselecteerde landcode voor tel/vat velden (gebruik v-model:country).',
  },
  { name: 'label', type: 'string', description: 'Label boven het veld.' },
  { name: 'placeholder', type: 'string', description: 'Placeholder tekst.' },
  { name: 'helpText', type: 'string', description: 'Hulptekst onder het veld.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Schakelt het veld uit.' },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Markeert het veld als ongeldig (rode rand).',
  },
]
</script>

<template>
  <section id="input-text">
    <SwH2>Tekstveld</SwH2>
    <SwBody muted class="input-section-intro">
      Één component voor alle tekstinvoer. Het type bepaalt de weergave — eenvoudig tekstveld voor
      text en email, gegroepeerde landkiezer met masker voor tel en vat.
    </SwBody>

    <hr class="input-section-divider mt-xl mb-xl" />

    <!-- Basic example + props -->
    <SwH3>Gebruik</SwH3>
    <SwSmall muted class="input-section-desc">
      Importeer <code class="input-code">SwInputText</code> en geef minimaal een
      <code class="input-code">label</code> of <code class="input-code">placeholder</code> mee.
    </SwSmall>

    <DemoBlock :code="basicExample" default-open class="mb-xl">
      <SwInputText label="Naam" placeholder="Jan Janssen" />
    </DemoBlock>

    <PropsTable :rows="props" />

    <hr class="input-section-divider mt-2xl mb-xl" />

    <!-- Types -->
    <SwH3>Types</SwH3>
    <SwSmall muted class="input-section-desc">
      Text en email zijn eenvoudige invoervelden. Tel en vat hebben een landkiezer met automatisch
      masker.
    </SwSmall>

    <DemoBlock>
      <div class="input-section-grid">
        <SwInputText
          v-model="text"
          type="text"
          label="Tekstveld"
          placeholder="Vrije tekst"
          help-text="Gebruik voor namen, adressen, etc."
        />
        <SwInputText
          v-model="email"
          type="email"
          label="E-mailadres"
          placeholder="jan@sawiday.be"
          help-text="Wordt gevalideerd als e-mailadres."
        />
        <SwInputText v-model="tel" v-model:country="country" type="tel" label="Telefoonnummer" />
        <SwInputText v-model="vat" type="vat" label="BTW-nummer" />
      </div>
    </DemoBlock>

    <hr class="input-section-divider mt-2xl mb-xl" />

    <!-- States -->
    <SwH3>Staten</SwH3>
    <SwSmall muted class="input-section-desc">
      Gebruik <code class="input-code">:disabled="true"</code> om het veld uit te schakelen en
      <code class="input-code">:invalid="true"</code> om een foutmelding aan te geven.
    </SwSmall>

    <DemoBlock>
      <div class="input-section-grid">
        <SwInputText label="Standaard" placeholder="Vul iets in" />
        <SwInputText label="Uitgeschakeld" placeholder="Niet bewerkbaar" :disabled="true" />
        <SwInputText
          label="Ongeldig"
          placeholder="Foutieve waarde"
          :invalid="true"
          help-text="Dit veld is verplicht."
        />
      </div>
    </DemoBlock>
  </section>
</template>

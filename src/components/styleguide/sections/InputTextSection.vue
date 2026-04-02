<script setup lang="ts">
import { ref } from 'vue'
import { AppH2, AppH3, AppBody, AppSmall } from '@/components/ui/typography'
import AppInput from '@/components/ui/AppInput.vue'
import DemoBlock from '@/components/styleguide/DemoBlock.vue'
import PropsTable from '@/components/styleguide/PropsTable.vue'
import type { PropRow } from '@/components/styleguide/PropsTable.vue'

const text = ref('')
const email = ref('')
const tel = ref('')
const vat = ref('')
const country = ref('BE')

const basicExample = `<AppInput label="Naam" placeholder="Jan Janssen" />`

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
    <AppH2>Tekstveld</AppH2>
    <AppBody muted class="input-section-intro">
      Één component voor alle tekstinvoer. Het type bepaalt de weergave — eenvoudig tekstveld voor
      text en email, gegroepeerde landkiezer met masker voor tel en vat.
    </AppBody>

    <hr class="input-section-divider mt-xl mb-xl" />

    <!-- Basic example + props -->
    <AppH3>Gebruik</AppH3>
    <AppSmall muted class="input-section-desc">
      Importeer <code class="input-code">AppInput</code> en geef minimaal een
      <code class="input-code">label</code> of <code class="input-code">placeholder</code> mee.
    </AppSmall>

    <DemoBlock :code="basicExample" default-open class="mb-xl">
      <AppInput label="Naam" placeholder="Jan Janssen" />
    </DemoBlock>

    <PropsTable :rows="props" />

    <hr class="input-section-divider mt-2xl mb-xl" />

    <!-- Types -->
    <AppH3>Types</AppH3>
    <AppSmall muted class="input-section-desc">
      Text en email zijn eenvoudige invoervelden. Tel en vat hebben een landkiezer met automatisch
      masker.
    </AppSmall>

    <DemoBlock>
      <div class="input-section-grid">
        <AppInput
          v-model="text"
          type="text"
          label="Tekstveld"
          placeholder="Vrije tekst"
          help-text="Gebruik voor namen, adressen, etc."
        />
        <AppInput
          v-model="email"
          type="email"
          label="E-mailadres"
          placeholder="jan@sawiday.be"
          help-text="Wordt gevalideerd als e-mailadres."
        />
        <AppInput v-model="tel" v-model:country="country" type="tel" label="Telefoonnummer" />
        <AppInput v-model="vat" type="vat" label="BTW-nummer" />
      </div>
    </DemoBlock>

    <hr class="input-section-divider mt-2xl mb-xl" />

    <!-- States -->
    <AppH3>Staten</AppH3>
    <AppSmall muted class="input-section-desc">
      Gebruik <code class="input-code">:disabled="true"</code> om het veld uit te schakelen en
      <code class="input-code">:invalid="true"</code> om een foutmelding aan te geven.
    </AppSmall>

    <DemoBlock>
      <div class="input-section-grid">
        <AppInput label="Standaard" placeholder="Vul iets in" />
        <AppInput label="Uitgeschakeld" placeholder="Niet bewerkbaar" :disabled="true" />
        <AppInput
          label="Ongeldig"
          placeholder="Foutieve waarde"
          :invalid="true"
          help-text="Dit veld is verplicht."
        />
      </div>
    </DemoBlock>
  </section>
</template>

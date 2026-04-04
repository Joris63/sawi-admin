<script setup lang="ts">
import { ref } from 'vue'
import { SwH2, SwH3, SwH4, SwBody, SwSmall } from '@/components/ui/typography'
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

const textExample = `<SwInputText
  v-model="value"
  type="text"
  label="Naam"
  placeholder="Jan Janssen"
  help-text="Gebruik voor namen, adressen, etc."
/>`

const emailExample = `<SwInputText
  v-model="value"
  type="email"
  label="E-mailadres"
  placeholder="jan@sawiday.be"
/>`

const telExample = `<SwInputText
  v-model="value"
  v-model:country="country"
  type="tel"
  label="Telefoonnummer"
/>`

const vatExample = `<SwInputText
  v-model="value"
  type="vat"
  label="BTW-nummer"
/>`

const iconExample = `<SwInputText label="Zoeken" placeholder="Zoek op naam..." icon-left="pi-search" />
<SwInputText label="Gebruiker" placeholder="Gebruikersnaam" icon-right="pi-user" />`

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
  {
    name: 'iconLeft',
    type: 'string',
    description: 'PrimeIcon naam links in het veld (bv. pi-search). Alleen voor type text.',
  },
  {
    name: 'iconRight',
    type: 'string',
    description: 'PrimeIcon naam rechts in het veld (bv. pi-eye). Alleen voor type text.',
  },
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

    <hr class="input-section-divider mt-2xl mb-2xl" />

    <!-- Basic example + props -->
    <SwH3>Gebruik</SwH3>
    <SwSmall muted class="input-section-desc">
      Importeer <code class="input-code">SwInputText</code> en geef minimaal een
      <code class="input-code">label</code> of <code class="input-code">placeholder</code> mee.
    </SwSmall>

    <DemoBlock :code="basicExample" default-open class="mb-2xl">
      <SwInputText label="Naam" placeholder="Jan Janssen" />
    </DemoBlock>

    <PropsTable :rows="props" collapsible />

    <hr class="input-section-divider mt-3xl mb-2xl" />

    <!-- Types -->
    <SwH3>Types</SwH3>
    <SwSmall muted class="input-section-desc">
      Text en email zijn eenvoudige invoervelden. Tel en vat hebben een landkiezer met automatisch
      masker per land.
    </SwSmall>

    <!-- Text -->
    <SwH4 class="input-section-type-label">Tekst</SwH4>
    <DemoBlock :code="textExample">
      <SwInputText
        v-model="text"
        type="text"
        label="Naam"
        placeholder="Jan Janssen"
        help-text="Gebruik voor namen, adressen, etc."
      />
    </DemoBlock>

    <!-- Email -->
    <SwH4 class="input-section-type-label">E-mail</SwH4>
    <DemoBlock :code="emailExample">
      <SwInputText v-model="email" type="email" label="E-mailadres" placeholder="jan@sawiday.be" />
    </DemoBlock>

    <!-- Tel -->
    <SwH4 class="input-section-type-label">Telefoonnummer</SwH4>
    <DemoBlock :code="telExample">
      <SwInputText v-model="tel" v-model:country="country" type="tel" label="Telefoonnummer" />
    </DemoBlock>

    <!-- VAT -->
    <SwH4 class="input-section-type-label">BTW-nummer</SwH4>
    <DemoBlock :code="vatExample">
      <SwInputText v-model="vat" type="vat" label="BTW-nummer" />
    </DemoBlock>

    <hr class="input-section-divider mt-3xl mb-2xl" />

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
        <SwInputText label="Ongeldig" placeholder="Foutieve waarde" :invalid="true" />
      </div>
    </DemoBlock>

    <hr class="input-section-divider mt-3xl mb-2xl" />

    <!-- Icons -->
    <SwH3>Iconen</SwH3>
    <SwSmall muted class="input-section-desc">
      Gebruik <code class="input-code">icon-left</code> of
      <code class="input-code">icon-right</code>
      om een PrimeIcon toe te voegen. Enkel beschikbaar voor het standaard tekstveld.
    </SwSmall>

    <DemoBlock :code="iconExample">
      <div class="input-section-grid">
        <SwInputText label="Zoeken" placeholder="Zoek op naam..." icon-left="pi-search" />
        <SwInputText label="Gebruiker" placeholder="Gebruikersnaam" icon-right="pi-user" />
      </div>
    </DemoBlock>
  </section>
</template>

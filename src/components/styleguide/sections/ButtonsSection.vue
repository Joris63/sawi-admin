<script setup lang="ts">
import { SwH2, SwH3, SwH4, SwBody, SwSmall } from '@/components/ui/typography'
import SwButton from '@/components/ui/SwButton.vue'
import DemoBlock from '@/components/styleguide/DemoBlock.vue'
import PropsTable from '@/components/styleguide/PropsTable.vue'
import type { PropRow } from '@/components/styleguide/PropsTable.vue'

const splitItems = [
  { label: 'Opslaan als concept', icon: 'pi pi-file' },
  {
    label: 'Exporteren',
    icon: 'pi pi-upload',
    items: [
      {
        label: 'Als PDF',
        icon: 'pi pi-file-pdf',
        items: [
          { label: 'Standaard', icon: 'pi pi-check' },
          { label: 'Gecomprimeerd', icon: 'pi pi-compress' },
        ],
      },
      { label: 'Als Excel', icon: 'pi pi-file-excel' },
      { label: 'Als CSV', icon: 'pi pi-table' },
    ],
  },
  { separator: true },
  { label: 'Verwijderen', icon: 'pi pi-trash' },
]

const severities = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'ghost', label: 'Ghost' },
  { value: 'danger', label: 'Danger' },
] as const

const variants = ['filled', 'outlined', 'text'] as const

const basicExample = `<SwButton label="Opslaan" />`

const splitExample = `<SwButton
  label="Opslaan"
  icon="pi pi-save"
  :menu-items="[
    { label: 'Opslaan als concept', icon: 'pi pi-file' },
    {
      label: 'Exporteren',
      icon: 'pi pi-upload',
      items: [
        {
          label: 'Als PDF',
          icon: 'pi pi-file-pdf',
          items: [
            { label: 'Standaard', icon: 'pi pi-check' },
            { label: 'Gecomprimeerd', icon: 'pi pi-compress' },
          ],
        },
        { label: 'Als Excel', icon: 'pi pi-file-excel' },
        { label: 'Als CSV', icon: 'pi pi-table' },
      ],
    },
    { separator: true },
    { label: 'Verwijderen', icon: 'pi pi-trash' },
  ]"
/>`

const props: PropRow[] = [
  {
    name: 'severity',
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
    default: "'primary'",
    description:
      'Kleurintentie van de knop — primary voor hoofdactie, secondary voor ondersteunend, ghost voor tertiair, danger voor onomkeerbaar.',
  },
  {
    name: 'variant',
    type: "'filled' | 'outlined' | 'text'",
    default: "'filled'",
    description:
      'Visueel gewicht. Filled voor nadruk, outlined voor alternatief, text voor subtiel.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description:
      'Afmeting van de knop. sm voor compacte UI (tabellen, toolbars), lg voor prominente call-to-actions.',
  },
  { name: 'label', type: 'string', description: 'Knoptekst. Weglaten voor icon-only knoppen.' },
  {
    name: 'icon',
    type: 'string',
    description:
      "PrimeIcons klasse, bijv. 'pi pi-plus'. Bij alleen icon altijd een aria-label meegeven.",
  },
  {
    name: 'iconPos',
    type: "'left' | 'right'",
    default: "'left'",
    description: 'Positie van het icoon ten opzichte van het label.',
  },
  {
    name: 'rounded',
    type: 'boolean',
    default: 'false',
    description: 'Maakt de knop circulair. Bedoeld voor icon-only knoppen.',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Toont een laadspinner en schakelt de knop automatisch uit.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description:
      'Schakelt de knop uit. Gebruik alleen als de reden duidelijk is voor de gebruiker.',
  },
  {
    name: 'menuItems',
    type: 'MenuItem[]',
    description:
      'PrimeVue MenuItem array. Indien aanwezig wordt automatisch een split knop gerenderd.',
  },
]
</script>

<template>
  <section id="buttons">
    <SwH2>Knoppen</SwH2>
    <SwBody muted class="buttons-intro">
      Vier severities, elk beschikbaar als filled, outlined en text. Kies severity op basis van
      intentie, variant op basis van nadruk.
    </SwBody>

    <hr class="buttons-divider mt-2xl mb-2xl" />

    <!-- Basic example + props -->
    <SwH3>Gebruik</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Importeer <code class="buttons-code">SwButton</code> en geef minimaal een
      <code class="buttons-code">label</code> of <code class="buttons-code">icon</code> mee.
    </SwSmall>

    <DemoBlock :code="basicExample" default-open class="mb-2xl">
      <SwButton label="Opslaan" />
    </DemoBlock>

    <PropsTable :rows="props" collapsible />

    <hr class="buttons-divider mt-3xl mb-2xl" />

    <!-- Matrix -->
    <SwH3>Overzicht</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Primary voor de hoofdactie per pagina. Secondary voor ondersteunende merkacties. Ghost voor
      tertiaire acties. Danger voor onomkeerbare acties.
    </SwSmall>

    <div class="buttons-matrix">
      <div class="buttons-matrix-header">
        <span />
        <SwSmall v-for="v in variants" :key="v" muted class="buttons-matrix-col-label">{{
          v
        }}</SwSmall>
      </div>
      <div v-for="s in severities" :key="s.value" class="buttons-matrix-row">
        <SwSmall muted class="buttons-matrix-row-label">{{ s.label }}</SwSmall>
        <div v-for="v in variants" :key="v" class="buttons-matrix-cell">
          <SwButton :severity="s.value" :variant="v" :label="s.label" />
        </div>
      </div>
    </div>

    <hr class="buttons-divider mt-3xl mb-2xl" />

    <!-- Sizes -->
    <SwH3>Formaten</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">md</code> als standaard.
      <code class="buttons-code">sm</code> voor compacte UI zoals tabellen en toolbars,
      <code class="buttons-code">lg</code> voor prominente call-to-actions.
    </SwSmall>

    <DemoBlock>
      <div class="buttons-row buttons-row--baseline">
        <SwButton size="sm" label="Small" />
        <SwButton size="md" label="Medium" />
        <SwButton size="lg" label="Large" />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-3xl mb-2xl" />

    <!-- Icons -->
    <SwH3>Met icoon</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">icon</code> +
      <code class="buttons-code">icon-pos</code> voor iconen. Geef een icon-only knop altijd een
      <code class="buttons-code">aria-label</code> voor toegankelijkheid. Gebruik
      <code class="buttons-code">rounded</code> voor circulaire icon-only knoppen.
    </SwSmall>

    <DemoBlock>
      <div class="buttons-row">
        <SwButton icon="pi pi-plus" icon-pos="left" label="Toevoegen" />
        <SwButton icon="pi pi-arrow-right" icon-pos="right" severity="secondary" label="Volgende" />
        <SwButton icon="pi pi-download" severity="ghost" label="Exporteren" />
        <SwButton icon="pi pi-trash" severity="danger" label="Verwijderen" />
      </div>
      <div class="buttons-row">
        <SwButton severity="ghost" variant="outlined" icon="pi pi-filter" aria-label="Filteren" />
        <SwButton
          severity="ghost"
          variant="text"
          icon="pi pi-ellipsis-h"
          aria-label="Meer opties"
        />
      </div>
      <div class="buttons-row items-end">
        <SwButton rounded size="sm" icon="pi pi-plus" aria-label="Toevoegen" />
        <SwButton rounded size="md" icon="pi pi-plus" aria-label="Toevoegen" />
        <SwButton rounded size="lg" icon="pi pi-plus" aria-label="Toevoegen" />
        <SwButton rounded severity="secondary" icon="pi pi-pencil" aria-label="Bewerken" />
        <SwButton
          rounded
          severity="ghost"
          variant="outlined"
          icon="pi pi-filter"
          aria-label="Filteren"
        />
        <SwButton rounded severity="danger" icon="pi pi-trash" aria-label="Verwijderen" />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-3xl mb-2xl" />

    <!-- Split button -->
    <SwH3>Split knop</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Geef <code class="buttons-code">menu-items</code> mee om automatisch een split knop te
      renderen — de hoofdactie staat links, gerelateerde acties in het dropdown menu.
    </SwSmall>

    <DemoBlock :code="splitExample">
      <div class="buttons-row">
        <SwButton
          v-for="s in severities"
          :key="s.value"
          :severity="s.value"
          label="Opslaan"
          icon="pi pi-save"
          :menu-items="splitItems"
        />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-3xl mb-2xl" />

    <!-- States -->
    <SwH3>Staten</SwH3>
    <SwSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">:loading="true"</code> bij asynchrone acties — de knop
      wordt automatisch uitgeschakeld en toont een spinner. Gebruik
      <code class="buttons-code">:disabled="true"</code> alleen als de reden duidelijk is voor de
      gebruiker.
    </SwSmall>

    <DemoBlock>
      <div class="buttons-row">
        <SwButton :loading="true" label="Opslaan" />
        <SwButton :loading="true" severity="secondary" label="Laden" />
        <SwButton :disabled="true" label="Uitgeschakeld" />
        <SwButton :disabled="true" severity="ghost" variant="outlined" label="Uitgeschakeld" />
      </div>
    </DemoBlock>
  </section>
</template>

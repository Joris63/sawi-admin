<script setup lang="ts">
import { AppH2, AppH3, AppBody, AppSmall } from '@/components/ui/typography'
import AppButton from '@/components/ui/AppButton.vue'
import DemoBlock from '@/components/styleguide/DemoBlock.vue'
import PropsTable from '@/components/styleguide/PropsTable.vue'
import type { PropRow } from '@/components/styleguide/PropsTable.vue'

const splitItems = [
  { label: 'Opslaan als concept', icon: 'pi pi-file' },
  { label: 'Exporteren', icon: 'pi pi-upload' },
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

const basicExample = `<AppButton label="Opslaan" />`

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
    <AppH2>Knoppen</AppH2>
    <AppBody muted class="buttons-intro">
      Vier severities, elk beschikbaar als filled, outlined en text. Kies severity op basis van
      intentie, variant op basis van nadruk.
    </AppBody>

    <hr class="buttons-divider mt-xl mb-xl" />

    <!-- Basic example + props -->
    <AppH3>Gebruik</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Importeer <code class="buttons-code">AppButton</code> en geef minimaal een
      <code class="buttons-code">label</code> of <code class="buttons-code">icon</code> mee.
    </AppSmall>

    <DemoBlock :code="basicExample" default-open class="mb-xl">
      <AppButton label="Opslaan" />
    </DemoBlock>

    <PropsTable :rows="props" />

    <hr class="buttons-divider mt-2xl mb-xl" />

    <!-- Matrix -->
    <AppH3>Overzicht</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Primary voor de hoofdactie per pagina. Secondary voor ondersteunende merkacties. Ghost voor
      tertiaire acties. Danger voor onomkeerbare acties.
    </AppSmall>

    <div class="buttons-matrix">
      <div class="buttons-matrix-header">
        <span />
        <AppSmall v-for="v in variants" :key="v" muted class="buttons-matrix-col-label">{{
          v
        }}</AppSmall>
      </div>
      <div v-for="s in severities" :key="s.value" class="buttons-matrix-row">
        <AppSmall muted class="buttons-matrix-row-label">{{ s.label }}</AppSmall>
        <div v-for="v in variants" :key="v" class="buttons-matrix-cell">
          <AppButton :severity="s.value" :variant="v" :label="s.label" />
        </div>
      </div>
    </div>

    <hr class="buttons-divider mt-2xl mb-xl" />

    <!-- Sizes -->
    <AppH3>Formaten</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">md</code> als standaard.
      <code class="buttons-code">sm</code> voor compacte UI zoals tabellen en toolbars,
      <code class="buttons-code">lg</code> voor prominente call-to-actions.
    </AppSmall>

    <DemoBlock>
      <div class="buttons-row buttons-row--baseline">
        <AppButton size="sm" label="Small" />
        <AppButton size="md" label="Medium" />
        <AppButton size="lg" label="Large" />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-2xl mb-xl" />

    <!-- Icons -->
    <AppH3>Met icoon</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">icon</code> +
      <code class="buttons-code">icon-pos</code> voor iconen. Geef een icon-only knop altijd een
      <code class="buttons-code">aria-label</code> voor toegankelijkheid. Gebruik
      <code class="buttons-code">rounded</code> voor circulaire icon-only knoppen.
    </AppSmall>

    <DemoBlock>
      <div class="buttons-row">
        <AppButton icon="pi pi-plus" icon-pos="left" label="Toevoegen" />
        <AppButton
          icon="pi pi-arrow-right"
          icon-pos="right"
          severity="secondary"
          label="Volgende"
        />
        <AppButton icon="pi pi-download" severity="ghost" label="Exporteren" />
        <AppButton icon="pi pi-trash" severity="danger" label="Verwijderen" />
      </div>
      <div class="buttons-row">
        <AppButton severity="ghost" variant="outlined" icon="pi pi-filter" aria-label="Filteren" />
        <AppButton
          severity="ghost"
          variant="text"
          icon="pi pi-ellipsis-h"
          aria-label="Meer opties"
        />
      </div>
      <div class="buttons-row items-end">
        <AppButton rounded size="sm" icon="pi pi-plus" aria-label="Toevoegen" />
        <AppButton rounded size="md" icon="pi pi-plus" aria-label="Toevoegen" />
        <AppButton rounded size="lg" icon="pi pi-plus" aria-label="Toevoegen" />
        <AppButton rounded severity="secondary" icon="pi pi-pencil" aria-label="Bewerken" />
        <AppButton
          rounded
          severity="ghost"
          variant="outlined"
          icon="pi pi-filter"
          aria-label="Filteren"
        />
        <AppButton rounded severity="danger" icon="pi pi-trash" aria-label="Verwijderen" />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-2xl mb-xl" />

    <!-- Split button -->
    <AppH3>Split knop</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Geef <code class="buttons-code">menu-items</code> mee om automatisch een split knop te
      renderen — de hoofdactie staat links, gerelateerde acties in het dropdown menu.
    </AppSmall>

    <DemoBlock>
      <div class="buttons-row">
        <AppButton
          v-for="s in severities"
          :key="s.value"
          :severity="s.value"
          label="Opslaan"
          icon="pi pi-save"
          :menu-items="splitItems"
        />
      </div>
    </DemoBlock>

    <hr class="buttons-divider mt-2xl mb-xl" />

    <!-- States -->
    <AppH3>Staten</AppH3>
    <AppSmall muted class="buttons-section-desc">
      Gebruik <code class="buttons-code">:loading="true"</code> bij asynchrone acties — de knop
      wordt automatisch uitgeschakeld en toont een spinner. Gebruik
      <code class="buttons-code">:disabled="true"</code> alleen als de reden duidelijk is voor de
      gebruiker.
    </AppSmall>

    <DemoBlock>
      <div class="buttons-row">
        <AppButton :loading="true" label="Opslaan" />
        <AppButton :loading="true" severity="secondary" label="Laden" />
        <AppButton :disabled="true" label="Uitgeschakeld" />
        <AppButton :disabled="true" severity="ghost" variant="outlined" label="Uitgeschakeld" />
      </div>
    </DemoBlock>
  </section>
</template>

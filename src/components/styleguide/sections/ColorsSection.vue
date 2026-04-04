<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SwH2, SwH3, SwSmall, SwBody } from '@/components/ui/typography'
import SwButton from '@/components/ui/SwButton.vue'
import { useCopy } from '@/composables/useCopy'

const isDark = ref(document.documentElement.classList.contains('dark'))
const observer = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
onMounted(() => observer.observe(document.documentElement, { attributeFilter: ['class'] }))
onUnmounted(() => observer.disconnect())

const { copied: copiedClass, copy } = useCopy()

const prefixes = ['bg', 'text', 'border', 'ring', 'outline', 'shadow', 'fill', 'stroke'] as const
type Prefix = (typeof prefixes)[number]
const selectedPrefix = ref<Prefix>('bg')

interface Shade {
  shade: number
  hex: string
}

interface Palette {
  name: string
  key: string
  heroShade: number
  heroHex: string
  shades: Shade[]
  lightBase?: number
  darkBase?: number
}

interface PaletteGroup {
  label: string
  description: string
  cols: 2 | 3 | 4
  items: Palette[]
}

const groups: PaletteGroup[] = [
  {
    label: 'Merkpalet',
    description:
      'Merkbasis voor acties, links en actieve staten. Primair voor de hoofdactie, Secundair voor ondersteunende acties, Aanbieding voor promotionele highlights.',
    cols: 3,
    items: [
      {
        name: 'Primair',
        key: 'primary',
        heroShade: 800,
        heroHex: '#004050',
        lightBase: 800,
        darkBase: 400,
        shades: [
          { shade: 50, hex: '#f3fafc' },
          { shade: 100, hex: '#e1f5fa' },
          { shade: 200, hex: '#bceaf5' },
          { shade: 300, hex: '#7edaf1' },
          { shade: 400, hex: '#34c9ef' },
          { shade: 500, hex: '#0ba5cc' },
          { shade: 600, hex: '#047c9a' },
          { shade: 700, hex: '#055f76' },
          { shade: 800, hex: '#054b5c' },
          { shade: 900, hex: '#004050' },
          { shade: 950, hex: '#002933' },
        ],
      },
      {
        name: 'Secundair',
        key: 'secondary',
        heroShade: 400,
        heroHex: '#53c0cb',
        lightBase: 400,
        darkBase: 300,
        shades: [
          { shade: 50, hex: '#f0f9fa' },
          { shade: 100, hex: '#e1f3f5' },
          { shade: 200, hex: '#b9e4e9' },
          { shade: 300, hex: '#8ad3db' },
          { shade: 400, hex: '#53c0cb' },
          { shade: 500, hex: '#30a3b0' },
          { shade: 600, hex: '#217d87' },
          { shade: 700, hex: '#1b5d65' },
          { shade: 800, hex: '#143e43' },
          { shade: 900, hex: '#0d282b' },
          { shade: 950, hex: '#09191b' },
        ],
      },
      {
        name: 'Aanbieding',
        key: 'offer',
        heroShade: 500,
        heroHex: '#e94b57',
        lightBase: 500,
        darkBase: 400,
        shades: [
          { shade: 50, hex: '#fdf1f2' },
          { shade: 100, hex: '#fbdadd' },
          { shade: 200, hex: '#f8aab0' },
          { shade: 300, hex: '#f57a84' },
          { shade: 400, hex: '#f4626e' },
          { shade: 500, hex: '#e94b57' },
          { shade: 600, hex: '#d91c2c' },
          { shade: 700, hex: '#a41924' },
          { shade: 800, hex: '#75151d' },
          { shade: 900, hex: '#4c1015' },
          { shade: 950, hex: '#2d0b0e' },
        ],
      },
    ],
  },
  {
    label: 'Oppervlaktepalet',
    description:
      'Primaire tint voor achtergronden, tekst, randen en structurele UI-elementen. Gebruik de lichte tinten voor achtergronden en de donkere voor tekst.',
    cols: 2,
    items: [
      {
        name: 'Oppervlak',
        key: 'surface',
        heroShade: 700,
        heroHex: '#26393b',
        lightBase: 700,
        darkBase: 300,
        shades: [
          { shade: 50, hex: '#f6f8f9' },
          { shade: 100, hex: '#edf2f2' },
          { shade: 200, hex: '#dbe5e6' },
          { shade: 300, hex: '#bcd0d2' },
          { shade: 400, hex: '#85a9ad' },
          { shade: 500, hex: '#578489' },
          { shade: 600, hex: '#3c5a5d' },
          { shade: 700, hex: '#26393b' },
          { shade: 800, hex: '#182425' },
          { shade: 900, hex: '#101819' },
          { shade: 950, hex: '#0a0f10' },
        ],
      },
    ],
  },
  {
    label: 'Statuspalet',
    description:
      'Semantische kleuren voor feedback en toestand. Gebruik altijd de bijbehorende statuskleur — nooit een merkkleur als vervanging.',
    cols: 4,
    items: [
      {
        name: 'Gevaar',
        key: 'danger',
        heroShade: 500,
        heroHex: '#f83535',
        lightBase: 500,
        darkBase: 500,
        shades: [
          { shade: 50, hex: '#fff1f1' },
          { shade: 100, hex: '#ffe0e0' },
          { shade: 200, hex: '#ffc5c5' },
          { shade: 300, hex: '#ff9d9d' },
          { shade: 400, hex: '#ff6464' },
          { shade: 500, hex: '#f83535' },
          { shade: 600, hex: '#e51414' },
          { shade: 700, hex: '#c10d0d' },
          { shade: 800, hex: '#a00f0f' },
          { shade: 900, hex: '#841414' },
          { shade: 950, hex: '#480505' },
        ],
      },
      {
        name: 'Waarschuwing',
        key: 'warning',
        heroShade: 500,
        heroHex: '#f59e0b',
        lightBase: 500,
        darkBase: 500,
        shades: [
          { shade: 50, hex: '#fffbeb' },
          { shade: 100, hex: '#fef3c7' },
          { shade: 200, hex: '#fde68a' },
          { shade: 300, hex: '#fcd34d' },
          { shade: 400, hex: '#fbbf24' },
          { shade: 500, hex: '#f59e0b' },
          { shade: 600, hex: '#d97706' },
          { shade: 700, hex: '#b45309' },
          { shade: 800, hex: '#92400e' },
          { shade: 900, hex: '#78350f' },
          { shade: 950, hex: '#451a03' },
        ],
      },
      {
        name: 'Info',
        key: 'info',
        heroShade: 500,
        heroHex: '#3b82f6',
        lightBase: 500,
        darkBase: 500,
        shades: [
          { shade: 50, hex: '#eff6ff' },
          { shade: 100, hex: '#dbeafe' },
          { shade: 200, hex: '#bfdbfe' },
          { shade: 300, hex: '#93c5fd' },
          { shade: 400, hex: '#60a5fa' },
          { shade: 500, hex: '#3b82f6' },
          { shade: 600, hex: '#2563eb' },
          { shade: 700, hex: '#1d4ed8' },
          { shade: 800, hex: '#1e40af' },
          { shade: 900, hex: '#1e3a8a' },
          { shade: 950, hex: '#172554' },
        ],
      },
      {
        name: 'Succes',
        key: 'success',
        heroShade: 500,
        heroHex: '#22c55e',
        lightBase: 500,
        darkBase: 500,
        shades: [
          { shade: 50, hex: '#f0fdf4' },
          { shade: 100, hex: '#dcfce7' },
          { shade: 200, hex: '#bbf7d0' },
          { shade: 300, hex: '#86efac' },
          { shade: 400, hex: '#4ade80' },
          { shade: 500, hex: '#22c55e' },
          { shade: 600, hex: '#16a34a' },
          { shade: 700, hex: '#15803d' },
          { shade: 800, hex: '#166534' },
          { shade: 900, hex: '#14532d' },
          { shade: 950, hex: '#052e16' },
        ],
      },
    ],
  },
]

const colsClass: Record<number, string> = {
  2: 'grid--2',
  3: 'grid--3',
  4: 'grid--4',
}
</script>

<template>
  <section id="colors">
    <SwH2>Kleuren</SwH2>
    <SwBody muted class="colors-intro">
      Tonale kleurenschalen gebouwd op merkbasis. Selecteer een prefix en klik op een swatch om de
      klasse te kopiëren.
    </SwBody>

    <!-- Prefix switcher -->
    <div class="prefix-switcher mt-xl">
      <SwButton
        v-for="p in prefixes"
        :key="p"
        :severity="selectedPrefix === p ? 'primary' : 'ghost'"
        :variant="selectedPrefix === p ? 'filled' : 'outlined'"
        size="sm"
        :label="`${p}-`"
        class="font-mono"
        @click="selectedPrefix = p"
      />
    </div>

    <div class="palette-groups">
      <div v-for="group in groups" :key="group.label">
        <SwH3>{{ group.label }}</SwH3>
        <SwSmall muted class="palette-group-desc">{{ group.description }}</SwSmall>

        <div class="palette-grid" :class="colsClass[group.cols]">
          <div v-for="palette in group.items" :key="palette.key">
            <!-- Hero swatch -->
            <div
              class="palette-hero sg-copyable"
              :class="group.cols === 4 ? 'palette-hero-sm' : 'palette-hero-lg'"
              :style="{ backgroundColor: `var(--color-${palette.key}-${palette.heroShade})` }"
              :title="`Kopieer ${selectedPrefix}-${palette.key}-${palette.heroShade}`"
              @click="copy(`${selectedPrefix}-${palette.key}-${palette.heroShade}`)"
            />

            <!-- Tonal strip -->
            <div class="palette-strip">
              <div
                v-for="{ shade, hex } in palette.shades"
                :key="shade"
                class="palette-strip-swatch"
                :class="
                  shade === (isDark ? palette.darkBase : palette.lightBase)
                    ? 'palette-strip-swatch--base'
                    : ''
                "
                :style="{ backgroundColor: `var(--color-${palette.key}-${shade})` }"
                :title="`Kopieer ${selectedPrefix}-${palette.key}-${shade}`"
                @click.stop="copy(`${selectedPrefix}-${palette.key}-${shade}`)"
              >
                <div class="palette-tooltip">
                  <div class="palette-tooltip-label">{{ shade }} · {{ hex }}</div>
                  <div class="palette-tooltip-arrow" />
                </div>
              </div>
            </div>

            <!-- Label -->
            <div class="palette-label">
              <span class="palette-label-name">{{ palette.name }}</span>
              <div class="palette-label-right">
                <span v-if="palette.lightBase" class="palette-base-badge">
                  base · {{ isDark ? palette.darkBase : palette.lightBase }}
                </span>
                <span class="palette-label-hex">{{ palette.heroHex }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="colors-divider mt-3xl mb-2xl" />

    <!-- ── Usage ─────────────────────────────────────────────────────────── -->
    <div>
      <SwH3>Kleuren gebruiken</SwH3>
      <SwSmall muted class="usage-intro">
        Elke paletkleur is bruikbaar met de onderstaande prefixen. Kies een prefix en klik op een
        rij om de klasse te kopiëren.
      </SwSmall>

      <!-- Class pattern -->
      <div class="class-pattern">
        <div class="class-pattern-header">
          <span class="class-pattern-label">Klasse-patroon</span>
        </div>
        <div class="class-pattern-body">
          <div
            v-for="prefix in [
              'bg',
              'text',
              'border',
              'ring',
              'outline',
              'shadow',
              'fill',
              'stroke',
            ]"
            :key="prefix"
            class="class-pattern-row"
          >
            <code class="class-pattern-code">{{ prefix }}-</code>
            <span class="class-pattern-placeholder">{palette}-{shade}</span>
          </div>
        </div>
        <div class="class-pattern-footer">
          <p class="class-pattern-footer-text">
            Waarbij <code>palette</code> is <code>primary</code> · <code>secondary</code> ·
            <code>offer</code> · <code>surface</code> · <code>danger</code> · <code>warning</code> ·
            <code>info</code> · <code>success</code> — en <code>shade</code> is
            <code>50 · 100 · 200 · … · 900 · 950</code>
          </p>
        </div>
      </div>

      <!-- Class reference per palette -->
      <div class="class-ref-groups">
        <div v-for="group in groups" :key="group.label">
          <p class="class-ref-group-label">{{ group.label }}</p>
          <div class="class-ref-grid" :class="colsClass[group.cols]">
            <div v-for="palette in group.items" :key="palette.key" class="class-ref-card">
              <div class="class-ref-card-header">
                <div
                  class="class-ref-card-dot"
                  :style="{ backgroundColor: `var(--color-${palette.key}-${palette.heroShade})` }"
                />
                <span class="class-ref-card-name">{{ palette.name }}</span>
              </div>
              <div class="class-ref-rows">
                <div
                  v-for="{ shade, hex } in palette.shades"
                  :key="shade"
                  class="class-ref-row"
                  :title="`Klik om ${selectedPrefix}-${palette.key}-${shade} te kopiëren`"
                  @click="copy(`${selectedPrefix}-${palette.key}-${shade}`)"
                >
                  <div
                    class="class-ref-swatch"
                    :style="{ backgroundColor: `var(--color-${palette.key}-${shade})` }"
                  />
                  <span class="class-ref-shade">{{ shade }}</span>
                  <code class="class-ref-name"
                    >{{ selectedPrefix }}-{{ palette.key }}-{{ shade }}</code
                  >
                  <span class="class-ref-hex">{{ hex }}</span>
                  <svg
                    class="class-ref-copy-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy toast -->
      <Transition name="fade-up">
        <div v-if="copiedClass" class="sg-copy-toast">
          Gekopieerd: <span class="font-semibold">{{ copiedClass }}</span>
        </div>
      </Transition>
    </div>
  </section>
</template>

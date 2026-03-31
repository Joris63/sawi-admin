<script setup lang="ts">
import { AppH2, AppH3, AppBody, AppSmall, AppCaption } from '@/components/ui/typography'

const tokens = [
  { name: 'xs',  rem: '0.25rem', px:  4, example: 'p-xs'  },
  { name: 'sm',  rem: '0.5rem',  px:  8, example: 'p-sm'  },
  { name: 'md',  rem: '1rem',    px: 16, example: 'p-md'  },
  { name: 'lg',  rem: '1.5rem',  px: 24, example: 'p-lg'  },
  { name: 'xl',  rem: '2rem',    px: 32, example: 'p-xl'  },
  { name: '2xl', rem: '3rem',    px: 48, example: 'p-2xl' },
  { name: '3xl', rem: '4rem',    px: 64, example: 'p-3xl' },
]

const prefixExamples: { prefix: string; label: string }[] = [
  { prefix: 'p',     label: 'Padding' },
  { prefix: 'px',    label: 'Padding X' },
  { prefix: 'py',    label: 'Padding Y' },
  { prefix: 'mt',    label: 'Margin top' },
  { prefix: 'mb',    label: 'Margin bottom' },
  { prefix: 'gap',   label: 'Gap' },
  { prefix: 'gap-x', label: 'Gap X' },
  { prefix: 'gap-y', label: 'Gap Y' },
]
</script>

<template>
  <section id="spacing">
    <AppH2>Spatiëring</AppH2>
    <AppBody muted class="spacing-intro">
      Gebruik de benoemde spacing-tokens als Tailwind-klassen.
      De tokens zijn gedefinieerd in <code class="spacing-code">@theme</code> — geen custom functie nodig.
    </AppBody>

    <hr class="spacing-divider mt-lg mb-xl" />

    <!-- Token scale -->
    <AppH3>Tokens</AppH3>
    <AppSmall muted class="spacing-section-desc">
      Zeven tokens van <code class="spacing-code">xs</code> tot <code class="spacing-code">3xl</code>.
      <code class="spacing-code">md</code> (16px) is de basiseenheid.
    </AppSmall>

    <div class="spacing-scale">
      <div v-for="token in tokens" :key="token.name" class="spacing-scale-row">
        <!-- Meta -->
        <div class="spacing-scale-meta">
          <code class="spacing-scale-token">{{ token.name }}</code>
          <span class="spacing-scale-detail">{{ token.rem }} · {{ token.px }}px</span>
        </div>

        <!-- Visual bar -->
        <div class="spacing-scale-bar-wrap">
          <div class="spacing-scale-bar" :style="{ width: `${token.px}px` }" />
        </div>

        <!-- Example class -->
        <code class="spacing-scale-example">{{ token.example }}</code>
      </div>
    </div>

    <hr class="spacing-divider mt-2xl mb-xl" />

    <!-- Usage -->
    <AppH3>Gebruik</AppH3>
    <AppSmall muted class="spacing-section-desc">
      Gebruik de tokens als gewone Tailwind-klassen. Alle beschikbare prefixen:
    </AppSmall>

    <!-- Code example -->
    <div class="spacing-code-block">
      <pre class="spacing-pre"><code>&lt;div class="p-md"&gt;          → 1rem   (16px)
&lt;div class="gap-lg"&gt;        → 1.5rem (24px)
&lt;div class="px-lg py-sm"&gt;   → 1.5rem / 0.5rem

&lt;!-- Alle Tailwind spacing-prefixen werken: --&gt;
p-xs  px-sm  py-md  mt-lg  mb-xl  gap-2xl  gap-x-sm  ...</code></pre>
    </div>

    <!-- Prefix table -->
    <div class="spacing-prefix-table">
      <div class="spacing-prefix-header">
        <AppCaption>Prefix</AppCaption>
        <AppCaption>Omschrijving</AppCaption>
        <AppCaption v-for="token in tokens" :key="token.name">{{ token.name }}</AppCaption>
      </div>
      <div v-for="{ prefix, label } in prefixExamples" :key="prefix" class="spacing-prefix-row">
        <code class="spacing-prefix-name">{{ prefix }}</code>
        <AppCaption>{{ label }}</AppCaption>
        <AppCaption
          v-for="token in tokens"
          :key="token.name"
          class="spacing-prefix-cell"
        >
          {{ prefix }}-{{ token.name }}
        </AppCaption>
      </div>
    </div>
  </section>
</template>

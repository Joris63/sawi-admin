<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import StyleguideTopbar from '@/components/styleguide/StyleguideTopbar.vue'
import AppVerticalNav from '@/components/ui/AppVerticalNav.vue'
import type { NavGroup } from '@/components/ui/AppVerticalNav.vue'
import ColorsSection from '@/components/styleguide/sections/ColorsSection.vue'
import TypographySection from '@/components/styleguide/sections/TypographySection.vue'
import SpacingSection from '@/components/styleguide/sections/SpacingSection.vue'
import BordersSection from '@/components/styleguide/sections/BordersSection.vue'
import ShadowSection from '@/components/styleguide/sections/ShadowSection.vue'
import ButtonsSection from '@/components/styleguide/sections/ButtonsSection.vue'

const route = useRoute()
const router = useRouter()

const sections: Record<string, object> = {
  colors: ColorsSection,
  typography: TypographySection,
  spacing: SpacingSection,
  borders: BordersSection,
  shadow: ShadowSection,
  buttons: ButtonsSection,
}

const navGroups: NavGroup[] = [
  {
    label: 'Stijl',
    items: [
      { id: 'colors', label: 'Kleuren', icon: 'pi pi-palette' },
      { id: 'typography', label: 'Typografie', icon: 'pi pi-align-left' },
      { id: 'spacing', label: 'Spatiëring', icon: 'pi pi-arrows-h' },
      { id: 'borders', label: 'Randen', icon: 'pi pi-stop' },
      { id: 'shadow', label: 'Schaduw', icon: 'pi pi-clone' },
    ],
  },
  {
    label: 'Componenten',
    items: [{ id: 'buttons', label: 'Knoppen', icon: 'pi pi-stop-circle' }],
  },
]

const activeId = computed(() => {
  const tab = route.query.tab
  return typeof tab === 'string' && tab in sections ? tab : 'colors'
})

const activeSection = computed(() => sections[activeId.value])

function onSelect(id: string) {
  router.replace({ query: { ...route.query, tab: id } })
}
</script>

<template>
  <div class="sg-root">
    <StyleguideTopbar />

    <div class="sg-body">
      <div class="sg-nav-pane">
        <AppVerticalNav :groups="navGroups" :active-id="activeId" @select="onSelect" />
      </div>

      <main class="sg-content">
        <div class="sg-section">
          <component :is="activeSection" />
        </div>
      </main>
    </div>
  </div>
</template>

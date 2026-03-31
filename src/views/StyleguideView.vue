<script setup lang="ts">
import { ref, computed } from 'vue'
import StyleguideTopbar from '@/components/styleguide/StyleguideTopbar.vue'
import AppVerticalNav from '@/components/ui/AppVerticalNav.vue'
import type { NavGroup } from '@/components/ui/AppVerticalNav.vue'
import ColorsSection from '@/components/styleguide/sections/ColorsSection.vue'
import TypographySection from '@/components/styleguide/sections/TypographySection.vue'
import SpacingSection from '@/components/styleguide/sections/SpacingSection.vue'
import BordersSection from '@/components/styleguide/sections/BordersSection.vue'
import ShadowSection from '@/components/styleguide/sections/ShadowSection.vue'

const sections: Record<string, object> = {
  colors: ColorsSection,
  typography: TypographySection,
  spacing: SpacingSection,
  borders: BordersSection,
  shadow: ShadowSection,
}

const navGroups: NavGroup[] = [
  {
    label: 'Stijl',
    items: [
      { id: 'colors',     label: 'Kleuren',    icon: 'pi pi-palette' },
      { id: 'typography', label: 'Typografie', icon: 'pi pi-align-left' },
      { id: 'spacing',    label: 'Spatiëring', icon: 'pi pi-arrows-h' },
      { id: 'borders',    label: 'Randen',     icon: 'pi pi-stop' },
      { id: 'shadow',     label: 'Schaduw',    icon: 'pi pi-clone' },
    ],
  }
]

const activeId = ref<string>('colors')
const activeSection = computed(() => sections[activeId.value])
</script>

<template>
  <div class="sg-root">
    <StyleguideTopbar />

    <div class="sg-body">
      <div class="sg-nav-pane">
        <AppVerticalNav :groups="navGroups" :active-id="activeId" @select="activeId = $event" />
      </div>

      <main class="sg-content">
        <div class="sg-section">
          <component :is="activeSection" />
        </div>
      </main>
    </div>
  </div>
</template>

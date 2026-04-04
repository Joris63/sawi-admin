<script setup lang="ts">
import { ref } from 'vue'
import SwButton from '@/components/ui/SwButton.vue'

export interface NavItem {
  id: string
  label: string
  icon?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
  collapsible?: boolean
  defaultOpen?: boolean
}

const props = defineProps<{
  groups: NavGroup[]
  activeId: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const openGroups = ref<Record<string, boolean>>(
  Object.fromEntries(props.groups.map((g) => [g.label, g.defaultOpen ?? true])),
)

function toggleGroup(label: string) {
  openGroups.value[label] = !openGroups.value[label]
}
</script>

<template>
  <nav class="sw-nav">
    <div v-for="group in groups" :key="group.label">
      <!-- Collapsible group header -->
      <button
        v-if="group.collapsible"
        class="sw-nav-group-toggle"
        @click="toggleGroup(group.label)"
      >
        <span>{{ group.label }}</span>
        <i
          class="pi pi-chevron-down sw-nav-group-chevron"
          :class="{ 'sw-nav-group-chevron--open': openGroups[group.label] }"
        />
      </button>

      <!-- Static group header -->
      <p v-else class="sw-nav-group-label">{{ group.label }}</p>

      <!-- Items -->
      <ul v-show="!group.collapsible || openGroups[group.label]">
        <li v-for="item in group.items" :key="item.id">
          <SwButton
            severity="ghost"
            variant="text"
            size="sm"
            :icon="item.icon"
            :label="item.label"
            class="sw-nav-btn"
            :class="activeId === item.id ? 'sw-nav-btn--active' : ''"
            @click="emit('select', item.id)"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

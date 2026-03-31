<script setup lang="ts">
import Button from 'primevue/button'

export interface NavItem {
  id: string
  label: string
  icon?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

defineProps<{
  groups: NavGroup[]
  activeId: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>

<template>
  <nav class="app-nav">
    <div v-for="group in groups" :key="group.label">
      <p class="app-nav-group-label">{{ group.label }}</p>

      <ul>
        <li v-for="item in group.items" :key="item.id">
          <Button
            text
            fluid
            size="small"
            severity="secondary"
            class="app-nav-btn"
            :class="activeId === item.id ? 'app-nav-btn--active' : ''"
            @click="emit('select', item.id)"
          >
            <i
              v-if="item.icon"
              :class="[item.icon, 'app-nav-icon', activeId === item.id ? 'app-nav-icon--active' : '']"
            />
            <span class="app-nav-item-label">{{ item.label }}</span>
          </Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

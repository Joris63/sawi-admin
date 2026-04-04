<script setup lang="ts">
import { ref } from 'vue'

export interface PropRow {
  name: string
  type: string
  default?: string
  description: string
}

const props = withDefaults(
  defineProps<{
    rows: PropRow[]
    collapsible?: boolean
  }>(),
  {
    collapsible: false,
  },
)

const open = ref(false)
</script>

<template>
  <div class="props-table-wrap">
    <button v-if="collapsible" class="props-toggle" @click="open = !open">
      <span>Props</span>
      <i :class="['pi', open ? 'pi-chevron-up' : 'pi-chevron-down', 'props-toggle-icon']" />
    </button>

    <table v-if="!collapsible || open" class="props-table">
      <thead>
        <tr>
          <th class="props-th">Prop</th>
          <th class="props-th">Type</th>
          <th class="props-th">Standaard</th>
          <th class="props-th">Beschrijving</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name" class="props-tr">
          <td class="props-td">
            <code class="props-name">{{ row.name }}</code>
          </td>
          <td class="props-td">
            <code class="props-type">{{ row.type }}</code>
          </td>
          <td class="props-td">
            <code v-if="row.default" class="props-default">{{ row.default }}</code>
            <span v-else class="props-empty">—</span>
          </td>
          <td class="props-td props-desc">{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

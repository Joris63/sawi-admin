<script setup lang="ts">
export interface PropRow {
  name: string
  type: string
  default?: string
  description: string
}

defineProps<{ rows: PropRow[] }>()
</script>

<template>
  <div class="props-table-wrap">
    <table class="props-table">
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

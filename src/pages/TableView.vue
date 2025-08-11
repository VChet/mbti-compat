<template>
  <section class="table-view">
    <div class="table-view__wrapper">
      <table>
        <thead>
          <tr>
            <th />
            <th v-for="type in tableItems.header" :key="type">
              {{ type }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableItems.rows" :key="row.type">
            <td>{{ row.type }}</td>
            <td v-for="cell in row.cells" :key="cell.type" :style="{ backgroundColor: cell.color }">
              {{ $t(cell.text) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { COMPATIBILITY_MAP } from "@/constants/compatibility";
import { MBTI_TYPES } from "@/constants/mbti-types";
import { getWeight } from "@/helpers/compatibility";

const tableItems = computed(() => {
  const header = MBTI_TYPES.map(({ value }) => value);
  const rows = MBTI_TYPES.map((rowType) => {
    const cells = MBTI_TYPES.map((colType) => {
      const weight = getWeight(rowType.value, colType.value);
      const { color, text } = COMPATIBILITY_MAP[weight];
      return { type: colType.value, color, text };
    });
    return { type: rowType.value, cells };
  });

  return { header, rows };
});
</script>
<style lang="scss">
.table-view {
  overflow: hidden;
  &__wrapper {
    overflow: auto;
  }
  table {
    width: 100%;
    overflow: auto;
    text-align: center;
    border-collapse: collapse;
    th, td {
      padding-block: .5rem;
    }
    td:not(:first-child) {
      font-size: .75rem;
      color: var(--background);
    }
  }
}
</style>

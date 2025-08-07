<template>
  <section ref="graphElement" class="compatibility-graph" />
</template>
<script setup lang="ts">
import { useTemplateRef } from "vue";
import { useGraph } from "@/composables/use-graph";

useGraph(useTemplateRef("graphElement"));
</script>
<style lang="scss">
.compatibility-graph {
  width: 100%;
  height: 80vh;
  border: 0.125rem solid var(--base-dimmed);
  border-radius: var(--radius);
}
</style>

<template>
  <main class="container main-container">
    <tab-selector v-model="selectedTab" :items="tabs" />
    <router-view />
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRouter } from "vue-router";
import TabSelector from "@/components/tab-selector.vue";

type Tab = "List" | "Graph";

const router = useRouter();
const pages = computed(() => router.currentRoute.value.matched[0].children.map(({ name }) => name));
const isTabRoute = (name: string): name is Tab => pages.value.includes(name);

const tabs: { value: Tab, text: string }[] = [
  { value: "List", text: "List" },
  { value: "Graph", text: "Graph" }
];

const selectedTab = computed<Tab>({
  get: () => {
    const name = router.currentRoute.value.name!.toString();
    return isTabRoute(name) ? name : tabs[0].value;
  },
  set: (name) => { router.push({ name }); }
});
</script>
<style lang="scss">
.main-container {
  display: grid;
  gap: 1.5rem;
}
</style>

<template>
  <main class="container main-container">
    <main-header />
    <tab-selector v-model="selectedTab" :items="tabs" />
    <router-view />
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView, useRouter } from "vue-router";
import MainHeader from "@/components/main-header.vue";
import TabSelector from "@/components/tab-selector.vue";

type Tab = "List" | "Graph" | "Table";

const { t } = useI18n();
const router = useRouter();
const pages = computed(() => router.currentRoute.value.matched[0].children.map(({ name }) => name));
const isTabRoute = (name: string): name is Tab => pages.value.includes(name);

const tabs = computed<{ value: Tab, text: string }[]>(() => [
  { value: "List", text: t("router.list") },
  { value: "Graph", text: t("router.graph") },
  { value: "Table", text: t("router.table") }
]);

const selectedTab = computed<Tab>({
  get: () => {
    const name = router.currentRoute.value.name!.toString();
    return isTabRoute(name) ? name : tabs.value[0].value;
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

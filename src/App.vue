<template>
  <router-view />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useSettingsStore } from "./store/settings";

useSettingsStore().initLocale();
</script>

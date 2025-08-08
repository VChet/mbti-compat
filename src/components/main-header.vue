<template>
  <header class="main-header">
    <button class="main-header__block-button" title="change locale" type="button" @click="changeLocale">
      <ph-translate />
      {{ locale }}
    </button>
  </header>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { PhTranslate } from "@phosphor-icons/vue";
import { useSettingsStore } from "@/store/settings";

const { LOCALES, settings, changeLocale } = useSettingsStore();
const locale = computed(() => LOCALES[settings.value.locale].label);
</script>
<style lang="scss">
.main-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: inherit;
    align-items: center;
    @media (width <= 600px) {
    flex-basis: 100%;
      > * {
        flex-grow: 1;
      }
    }
  }
  &__block-button {
    @media (width <= 600px) {
      flex-basis: 100%;
    }
  }
}
</style>

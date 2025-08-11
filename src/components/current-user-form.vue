<template>
  <fieldset class="current-user-form">
    <legend>{{ $t("currentUser.legend") }}</legend>
    <input v-model="currentUser.name" :placeholder="$t('currentUser.namePlaceholder')">
    <input-select
      v-model="currentUser.type"
      :items
      name="type"
      :placeholder="$t('currentUser.typePlaceholder')"
    />
  </fieldset>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { MBTI_TYPES } from "@/constants/mbti-types";
import { useUsersStore } from "@/store/users";
import InputSelect from "@/components/input-select.vue";

const { currentUser } = useUsersStore();

const { t } = useI18n();
const items = computed(() => MBTI_TYPES.map(({ value }) => ({ value, name: t(`MBTI.${value}`) })));
</script>
<style lang="scss">
.current-user-form {
  display: grid;
  grid-template-columns: 3fr auto;
  gap: 1.5rem;
  @media (width < 600px) {
    grid-template-columns: 1fr;
  }
}
</style>

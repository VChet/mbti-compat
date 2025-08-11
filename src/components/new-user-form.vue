<template>
  <fieldset class="new-user-form">
    <legend>{{ $t("newUser.legend") }}</legend>
    <form @submit.prevent="createNewUser">
      <input v-model="form.name" :placeholder="$t('newUser.namePlaceholder')">
      <input-select
        v-model="form.type"
        :items
        name="type"
        :placeholder="$t('newUser.typePlaceholder')"
      />
      <button type="submit" :disabled="!form.name || !form.type">
        <ph-plus />
      </button>
    </form>
  </fieldset>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { PhPlus } from "@phosphor-icons/vue";
import { nanoid } from "nanoid";
import { MBTI_TYPES } from "@/constants/mbti-types";
import { deepCopy } from "@/helpers/object";
import { useUsersStore, type User } from "@/store/users";
import InputSelect from "./input-select.vue";

const DEFAULT_FIELDS = { id: "", name: "", type: null } as const;
const form = reactive<User>(deepCopy(DEFAULT_FIELDS));

const { addUser } = useUsersStore();
function createNewUser(): void {
  addUser({ ...form, id: nanoid() });
  Object.assign(form, DEFAULT_FIELDS);
}

const { t } = useI18n();
const items = computed(() => MBTI_TYPES.map(({ value }) => ({ value, name: t(`MBTI.${value}`) })));
</script>
<style lang="scss">
.new-user-form > form {
  display: grid;
  grid-template-columns: 3fr auto auto;
  gap: 1.5rem;
  @media (width < 600px) {
    grid-template-columns: 1fr;
  }
}
</style>

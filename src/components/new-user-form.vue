<template>
  <fieldset class="new-user-form">
    <legend>Add new user</legend>
    <form @submit.prevent="createNewUser">
      <input v-model="form.name" placeholder="Name">
      <input-select v-model="form.type" :items="MBTI_TYPES" name="type" placeholder="Select MBTI type" />
      <button type="submit" :disabled="!form.name || !form.type">
        <ph-plus />
      </button>
    </form>
  </fieldset>
</template>
<script setup lang="ts">
import { reactive } from "vue";
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

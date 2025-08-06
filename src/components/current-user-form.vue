<template>
  <fieldset class="current-user-form">
    <legend>Enter your data</legend>
    <input v-model="currentUser.name" placeholder="Name">
    <input-select v-model="currentUser.type" :items="MBTI_TYPES" name="type" placeholder="Select MBTI type" />
  </fieldset>
</template>
<script setup lang="ts">
import { MBTI_TYPES } from "@/constants/mbti-types";
import { useUsersStore } from "@/store/users";
import InputSelect from "@/components/input-select.vue";

const { currentUser } = useUsersStore();
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

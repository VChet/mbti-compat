<template>
  <main>
    <div class="forms">
      <current-user-form />
      <new-user-form />
    </div>
    <compatibility-list />
  </main>
</template>
<script setup lang="ts">
import CompatibilityList from "@/components/compatibility-list.vue";
import CurrentUserForm from "@/components/current-user-form.vue";
import NewUserForm from "@/components/new-user-form.vue";
</script>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem;
}
.forms {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (width < 1000px) {
    grid-template-columns: 1fr;
  }
}
</style>

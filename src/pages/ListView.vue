<template>
  <section class="list-view">
    <div class="list-view__forms">
      <current-user-form />
      <new-user-form />
    </div>
    <compatibility-list />
  </section>
</template>
<script setup lang="ts">
import CompatibilityList from "@/components/compatibility-list.vue";
import CurrentUserForm from "@/components/current-user-form.vue";
import NewUserForm from "@/components/new-user-form.vue";
</script>
<style lang="scss">
.list-view {
  display: grid;
  gap: 1.5rem;
  &__forms {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    @media (width < 1000px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>

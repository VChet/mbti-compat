<template>
  <header class="main-header">
    <div />
  </header>
</template>
<script setup lang="ts">
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

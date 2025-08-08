<template>
  <ul class="compatibility-list">
    <li v-for="[weight, userData] in data.entries()" :key="weight" class="compatibility-list__group">
      <div class="compatibility-list__group-title" :style="{ backgroundColor: COMPATIBILITY_MAP[weight].color }">
        {{ $t(COMPATIBILITY_MAP[weight].text) }}
      </div>
      <ul>
        <li v-for="user in userData" :key="user.id" class="compatibility-list__user">
          <div class="compatibility-list__user-type" :style="{ backgroundColor: getColor(user.type) }">
            {{ user.type }}
          </div>
          <div>
            {{ user.name }}
          </div>
          <button type="button" @click="deleteUser(user.id)">
            <ph-trash />
          </button>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { PhTrash } from "@phosphor-icons/vue";
import { COMPATIBILITY_MAP, CompatibilityWeight } from "@/constants/compatibility";
import { getColor, getWeight } from "@/helpers/compatibility";
import { useUsersStore, type User } from "@/store/users";

const { BAD, OKAY, GOOD, IDEAL } = CompatibilityWeight;

const { currentUser, users, deleteUser } = useUsersStore();
const data = computed(() => users.value.reduce((acc: Map<CompatibilityWeight, User[]>, user) => {
  const weight = getWeight(currentUser.value.type, user.type);
  const entries = acc.get(weight) ?? [];
  acc.set(weight, [...entries, user]);
  return acc;
}, new Map([[BAD, []], [OKAY, []], [GOOD, []], [IDEAL, []]])));
</script>
<style lang="scss">
.compatibility-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: start;
  &__group {
    display: grid;
    flex: 1 1 25rem;
    grid-template-rows: auto 1fr;
    overflow: hidden;
    border: 1px solid var(--base-dimmed);
    border-radius: var(--radius);
    &-title {
      padding: .5rem;
      color: var(--background);
      text-align: center;
    }
    > ul {
      display: grid;
      flex: 1;
    }
  }
  &__user {
    display: grid;
    grid-template-columns: auto 1fr auto;
    place-items: center center;
    border-top: 1px solid var(--base-dimmed);
    &-type {
      font-family: 'Cascadia Code', monospace;
      color: var(--background);
    }
    > div {
      padding: .75rem 1rem;
    }
  }
}
</style>

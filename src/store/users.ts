import { computed } from "vue";
import { createSharedComposable, useLocalStorage } from "@vueuse/core";
import { nanoid } from "nanoid";
import type { MBTIType } from "@/types";

export interface User {
  id: string
  name: string
  type: MBTIType | null
}
interface UsersStore {
  currentUser: User
  users: User[]
};

const DEFAULT_STORE: UsersStore = {
  currentUser: { id: nanoid(), name: "", type: null },
  users: []
};

export const useUsersStore = createSharedComposable(() => {
  const storage = useLocalStorage<UsersStore>("users", DEFAULT_STORE, { mergeDefaults: true });
  const currentUser = computed({
    get: () => storage.value.currentUser,
    set: (value) => { storage.value.currentUser = value; }
  });
  const users = computed({
    get: () => storage.value.users,
    set: (value) => { storage.value.users = value; }
  });

  function addUser(user: User): void {
    users.value.push({ ...user, id: nanoid() });
  }
  function deleteUser(idToDelete: User["id"]): void {
    users.value = users.value.filter(({ id }) => id !== idToDelete);
  }

  return {
    currentUser,
    users,
    addUser,
    deleteUser
  };
});

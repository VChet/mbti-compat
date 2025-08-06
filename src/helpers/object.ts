import type { WritableDeep } from "type-fest";

export function deepCopy<T>(object: T): WritableDeep<T> {
  return JSON.parse(JSON.stringify(object)) as WritableDeep<T>;
}

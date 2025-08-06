<template>
  <label class="input-select">
    <div v-if="label" class="input-select__label">{{ label }}:</div>
    <select v-model="model" :name>
      <option :value="null">{{ placeholder }}</option>
      <option v-for="(item, index) in items" :key="index" :value="item[itemValue]">
        {{ item[itemText] }}
      </option>
    </select>
  </label>
</template>
<script setup lang="ts">
import type { SelectHTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";

interface Props {
  modelValue: SelectHTMLAttributes["value"]
  name: SelectHTMLAttributes["name"]
  items: readonly Record<string, unknown>[]
  itemValue?: string
  itemText?: string
  label?: string | null
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  itemValue: "value",
  itemText: "name",
  label: null,
  placeholder: "N/A"
});
const emit = defineEmits<{ "update:modelValue": [value: Props["modelValue"]] }>();
const model = useVModel(props, "modelValue", emit, { defaultValue: "" });
</script>
<style lang="scss">
.input-select {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  select {
    flex: 1;
    padding: 0.5rem;
    color: var(--base);
    appearance: none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--base-dimmed);
    &:hover,
    &:focus-visible {
      outline: 1px solid var(--highlight);
    }
    option {
      background: var(--background);
    }
  }
}
</style>

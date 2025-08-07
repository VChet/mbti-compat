import { COMPATIBILITY_WEIGHTS, type CompatibilityWeight } from "@/constants/compatibility";
import { MBTI_TYPES } from "@/constants/mbti-types";
import type { MBTIType } from "@/types";

export function getWeight(typeA: MBTIType | null, typeB: MBTIType | null): CompatibilityWeight {
  return COMPATIBILITY_WEIGHTS[`${typeA}-${typeB}`];
}
export function getColor(type: MBTIType | null): string {
  const data = MBTI_TYPES.find(({ value }) => value === type);
  return data?.color ?? "#272727";
}

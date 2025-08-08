import type { MBTIType } from "@/types";

type MBTITypeColor = "#88619a" | "#33a474" | "#4298b4" | "#e4ae3a";

export const MBTI_TYPES: { value: MBTIType, name: string, color: MBTITypeColor }[] = [
  { value: "ENFJ", name: "MBTI.ENFJ", color: "#33a474" },
  { value: "ENFP", name: "MBTI.ENFP", color: "#33a474" },
  { value: "ENTJ", name: "MBTI.ENTJ", color: "#88619a" },
  { value: "ENTP", name: "MBTI.ENTP", color: "#88619a" },
  { value: "ESFJ", name: "MBTI.ESFJ", color: "#4298b4" },
  { value: "ESFP", name: "MBTI.ESFP", color: "#e4ae3a" },
  { value: "ESTJ", name: "MBTI.ESTJ", color: "#4298b4" },
  { value: "ESTP", name: "MBTI.ESTP", color: "#e4ae3a" },
  { value: "INFJ", name: "MBTI.INFJ", color: "#33a474" },
  { value: "INFP", name: "MBTI.INFP", color: "#33a474" },
  { value: "INTJ", name: "MBTI.INTJ", color: "#88619a" },
  { value: "INTP", name: "MBTI.INTP", color: "#88619a" },
  { value: "ISFJ", name: "MBTI.ISFJ", color: "#4298b4" },
  { value: "ISFP", name: "MBTI.ISFP", color: "#e4ae3a" },
  { value: "ISTJ", name: "MBTI.ISTJ", color: "#4298b4" },
  { value: "ISTP", name: "MBTI.ISTP", color: "#e4ae3a" }
];

export const MBTI_TYPE_COLORS: Map<MBTIType, MBTITypeColor> = new Map(
  MBTI_TYPES.map(({ value, color }) => [value, color])
);

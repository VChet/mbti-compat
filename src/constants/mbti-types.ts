import type { MBTIType } from "@/types";

enum MBTITypeColor {
  ANALYST = "#88619a",
  DIPLOMAT = "#33a474",
  SENTINEL = "#4298b4",
  EXPLORER = "#e4ae3a"
}

export const MBTI_TYPES: { value: MBTIType, color: MBTITypeColor }[] = [
  { value: "INTJ", color: MBTITypeColor.ANALYST },
  { value: "INTP", color: MBTITypeColor.ANALYST },
  { value: "ENTJ", color: MBTITypeColor.ANALYST },
  { value: "ENTP", color: MBTITypeColor.ANALYST },
  { value: "INFJ", color: MBTITypeColor.DIPLOMAT },
  { value: "INFP", color: MBTITypeColor.DIPLOMAT },
  { value: "ENFJ", color: MBTITypeColor.DIPLOMAT },
  { value: "ENFP", color: MBTITypeColor.DIPLOMAT },
  { value: "ISTJ", color: MBTITypeColor.SENTINEL },
  { value: "ISFJ", color: MBTITypeColor.SENTINEL },
  { value: "ESTJ", color: MBTITypeColor.SENTINEL },
  { value: "ESFJ", color: MBTITypeColor.SENTINEL },
  { value: "ISTP", color: MBTITypeColor.EXPLORER },
  { value: "ISFP", color: MBTITypeColor.EXPLORER },
  { value: "ESTP", color: MBTITypeColor.EXPLORER },
  { value: "ESFP", color: MBTITypeColor.EXPLORER }
];

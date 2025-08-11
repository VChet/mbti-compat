import type { MBTIType } from "@/types";

enum MBTITypeColor {
  ANALYST = "#88619a",
  DIPLOMAT = "#33a474",
  SENTINEL = "#4298b4",
  EXPLORER = "#e4ae3a"
}

export const MBTI_TYPES: { value: MBTIType, color: MBTITypeColor }[] = [
  { value: "ENFJ", color: MBTITypeColor.DIPLOMAT },
  { value: "ENFP", color: MBTITypeColor.DIPLOMAT },
  { value: "ENTJ", color: MBTITypeColor.ANALYST },
  { value: "ENTP", color: MBTITypeColor.ANALYST },
  { value: "ESFJ", color: MBTITypeColor.SENTINEL },
  { value: "ESFP", color: MBTITypeColor.EXPLORER },
  { value: "ESTJ", color: MBTITypeColor.SENTINEL },
  { value: "ESTP", color: MBTITypeColor.EXPLORER },
  { value: "INFJ", color: MBTITypeColor.DIPLOMAT },
  { value: "INFP", color: MBTITypeColor.DIPLOMAT },
  { value: "INTJ", color: MBTITypeColor.ANALYST },
  { value: "INTP", color: MBTITypeColor.ANALYST },
  { value: "ISFJ", color: MBTITypeColor.SENTINEL },
  { value: "ISFP", color: MBTITypeColor.EXPLORER },
  { value: "ISTJ", color: MBTITypeColor.SENTINEL },
  { value: "ISTP", color: MBTITypeColor.EXPLORER }
];

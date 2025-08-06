import type { MBTIType } from "@/types";

type MBTITypeColor = "#88619a" | "#33a474" | "#4298b4" | "#e4ae3a";

export const MBTI_TYPES: { value: MBTIType, name: string, color: MBTITypeColor }[] = [
  { value: "ENFJ", name: "ENFJ (Protagonist)", color: "#33a474" },
  { value: "ENFP", name: "ENFP (Campaigner)", color: "#33a474" },
  { value: "ENTJ", name: "ENTJ (Commander)", color: "#88619a" },
  { value: "ENTP", name: "ENTP (Debater)", color: "#88619a" },
  { value: "ESFJ", name: "ESFJ (Consul)", color: "#4298b4" },
  { value: "ESFP", name: "ESFP (Entertainer)", color: "#e4ae3a" },
  { value: "ESTJ", name: "ESTJ (Executive)", color: "#4298b4" },
  { value: "ESTP", name: "ESTP (Enterpreneur)", color: "#e4ae3a" },
  { value: "INFJ", name: "INFJ (Advocate)", color: "#33a474" },
  { value: "INFP", name: "INFP (Mediator)", color: "#33a474" },
  { value: "INTJ", name: "INTJ (Architect)", color: "#88619a" },
  { value: "INTP", name: "INTP (Logician)", color: "#88619a" },
  { value: "ISFJ", name: "ISFJ (Defender)", color: "#4298b4" },
  { value: "ISFP", name: "ISFP (Adventurer)", color: "#e4ae3a" },
  { value: "ISTJ", name: "ISTJ (Logistician)", color: "#4298b4" },
  { value: "ISTP", name: "ISTP (Virtuoso)", color: "#e4ae3a" }
];

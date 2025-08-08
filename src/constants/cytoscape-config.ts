import type { LayoutOptions, StylesheetJson, StylesheetJsonBlock } from "cytoscape";
import { getTypedKeys } from "@/helpers/object";
import { COMPATIBILITY_MAP, CompatibilityWeight } from "./compatibility";
import { MBTI_TYPES } from "./mbti-types";

const nodeBorders: StylesheetJsonBlock[] = MBTI_TYPES.map(({ value, color }) => ({
  selector: `node.${value.toLowerCase()}`,
  style: { "border-color": color }
}));

const edgeLineColors: StylesheetJsonBlock[] = getTypedKeys(COMPATIBILITY_MAP).map((weight) => ({
  selector: `edge.${CompatibilityWeight[weight].toLowerCase()}`,
  style: { "line-color": COMPATIBILITY_MAP[weight].color }
}));

export const CYTOSCAPE_STYLE: StylesheetJson = [
  ...edgeLineColors,
  ...nodeBorders,
  {
    selector: "node",
    style: {
      "label": "data(label)",
      "width": 60,
      "height": 60,
      "background-color": "#35352f",
      "border-width": 4,
      "text-valign": "center",
      "color": "#c0c0c0",
      "font-size": 14,
      "font-weight": "bold"
    }
  }
];

export const CYTOSCAPE_LAYOUT: LayoutOptions = {
  name: "circle",
  animate: false
};

import { computed, onMounted, ref, watch, type ShallowRef } from "vue";
import cytoscape, { type Core, type EdgeDefinition, type NodeDefinition } from "cytoscape";
import { CompatibilityWeight } from "@/constants/compatibility";
import { CYTOSCAPE_LAYOUT, CYTOSCAPE_STYLE } from "@/constants/cytoscape-config";
import { getWeight } from "@/helpers/compatibility";
import { useUsersStore } from "@/store/users";

export function useGraph(elementRef: ShallowRef<HTMLElement | null>) {
  const instance = ref<Core | null>(null);
  const { currentUser, users } = useUsersStore();
  const people = computed(() => [currentUser.value, ...users.value]);

  const elements = computed(() => {
    const nodes: NodeDefinition[] = people.value.map((friend) => ({
      data: { id: friend.id, label: friend.name },
      classes: [friend.type?.toLowerCase() ?? ""]
    }));

    const edgeSet = new Set<string>();
    const edges: EdgeDefinition[] = [];
    for (const userA of people.value) {
      for (const userB of people.value) {
        if (userA.id === userB.id) continue;
        const keyForward = `${userA.id}-${userB.id}`;
        const keyBackward = `${userB.id}-${userA.id}`;
        if (edgeSet.has(keyForward) || edgeSet.has(keyBackward)) continue;

        const weight = getWeight(userA.type, userB.type);
        const payload: EdgeDefinition = {
          data: {
            id: `${userA.id}-${userB.id}`,
            source: userA.id,
            target: userB.id
          },
          classes: CompatibilityWeight[weight].toLowerCase()
        };
        edgeSet.add(keyForward);
        edges.push(payload);
      }
    }

    return [...nodes, ...edges];
  });

  function renderGraph(): void {
    if (!elementRef.value) return;

    if (instance.value) { instance.value.destroy(); }

    instance.value = cytoscape({
      container: elementRef.value,
      elements: elements.value,
      style: CYTOSCAPE_STYLE,
      layout: CYTOSCAPE_LAYOUT
    });

    instance.value.on("mouseover", "node", () => {
      if (elementRef.value) elementRef.value.style.cursor = "move";
    });
    instance.value.on("mouseout", "node", () => {
      if (elementRef.value) elementRef.value.style.cursor = "default";
    });
  }

  onMounted(renderGraph);
  watch(elements, renderGraph);
}

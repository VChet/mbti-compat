import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/pages/HomeView.vue");
const ListView = () => import("@/pages/ListView.vue");
const GraphView = () => import("@/pages/GraphView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      redirect: { name: "List" },
      children: [
        { name: "List", path: "/list", component: ListView },
        { name: "Graph", path: "/graph", component: GraphView }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home", params: {} }
    }
  ]
});

router.afterEach((to) => {
  const name = to.name?.toString();
  document.title = `${name} | MBTI Compatibility`;
});

export default router;

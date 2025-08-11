import { createRouter, createWebHistory } from "vue-router";
import { composeTitle } from "@/helpers/router";
import { i18n } from "./i18n";

const HomeView = () => import("@/pages/HomeView.vue");
const ListView = () => import("@/pages/ListView.vue");
const GraphView = () => import("@/pages/GraphView.vue");
const TableView = () => import("@/pages/TableView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      redirect: { name: "List" },
      children: [
        { name: "List", path: "/list", component: ListView, meta: { titleToken: "router.list" } },
        { name: "Graph", path: "/graph", component: GraphView, meta: { titleToken: "router.graph" } },
        { name: "Table", path: "/table", component: TableView, meta: { titleToken: "router.table" } }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home", params: {} }
    }
  ]
});

router.afterEach((to) => {
  const token = to.meta.titleToken;
  if (token) document.title = composeTitle(i18n.global.t(token));
});

export default router;

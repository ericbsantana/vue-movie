import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import Search from "../components/views/Search.vue";
import Checkout from "../components/views/Checkout.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/search",
    name: "search",
    component: Search,
    props: (route) => ({ query: route.query.q }),
  },
  { path: "/checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;

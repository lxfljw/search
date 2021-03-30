import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/home.vue"),
  },
];

export default createRouter({ routes, history: createWebHistory() });

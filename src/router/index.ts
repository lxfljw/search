import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../page/home.vue"),
  },
];

export default createRouter({ routes, history: createWebHistory() });
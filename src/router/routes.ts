import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/demo",
    name: "demo",
    component: () => import("@domain/demo")
  },
];

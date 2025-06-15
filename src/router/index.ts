// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import type { Route } from "../constants/types/route";
import { appRoutes } from "../constants/app-routes";

function mapToVueRoutes(routes: typeof appRoutes): Route[] {
  return routes.map((route: Route) => {
    const mapped: Route = {
      path: route.path,
      name: route.name,
      component: route.component,
    };

    if (route.children) {
      mapped.children = mapToVueRoutes(route.children);
    }

    return mapped;
  });
}

const vueRoutes = mapToVueRoutes(appRoutes);
console.log(vueRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes: vueRoutes,
});

export default router;

import { appRoutes } from "@/constants/app-routes";
import type { Route } from "../constants/types/route";

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

function resolveFullPath(parentPath: string, childPath: string): string {
  return childPath.startsWith("/") ? childPath : `${parentPath}/${childPath}`;
}

function buildMenu(routes: Route[], parentPath = ""): MenuItem[] {
  const menu: MenuItem[] = [];

  for (const route of routes) {
    const fullPath = resolveFullPath(parentPath, route.path);

    // Recurse nos filhos antes, se existirem
    const children = route.children
      ? buildMenu(route.children, fullPath)
      : undefined;

    if (route.showInMenu) {
      // Se a rota deve ser exibida no menu
      menu.push({
        name: route.name,
        path: fullPath,
        children,
      });
    } else if (children && children.length > 0) {
      // Se a rota não deve ser exibida, mas seus filhos sim
      menu.push(...children);
    }
  }

  return menu;
}

export function useMenu(): MenuItem[] {
  return buildMenu(appRoutes);
}

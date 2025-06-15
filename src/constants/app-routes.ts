import Administration from "@/pages/administration/Administration.vue";
import Dashboard from "@/pages/administration/components/dashboard/Dashboard.vue";
import ManagementView from "@/pages/administration/components/management-view/ManagementView.vue";
import Events from "@/pages/administration/components/events/Events.vue";
import EventTemplate from "@/pages/administration/components/events/components/event-template/EventTemplate.vue";
import EventType from "@/pages/administration/components/events/components/event-type/EventType.vue";
import GeneralRecords from "@/pages/administration/components/general-records/GeneralRecords.vue";
import Brand from "@/pages/administration/components/general-records/components/brands/Brands.vue";
import Unit from "@/pages/administration/components/general-records/components/brands/components/units/Units.vue";
import Supplier from "@/pages/administration/components/general-records/components/suppliers/Suppliers.vue";
import Login from "@/pages/login/Login.vue";
import type { Route } from "./types/route";

export const appRoutes: Route[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    showInMenu: false,
  },
  {
    path: "/administracao",
    name: "administration",
    component: Administration,
    headRoute: true,
    showInMenu: false,
    children: [
      {
        path: "/eventos",
        name: "Eventos",
        component: Events,
        showInMenu: true,
        children: [
          {
            path: "calendario",
            name: "Calendário de eventos",
            component: ManagementView,
            showInMenu: true,
          },
          {
            path: "propostas-enviadas",
            name: "Propostas enviadas",
            component: ManagementView,
            showInMenu: true,
          },
        ],
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        showInMenu: true,
        children: [
          {
            path: "visao-gerencial",
            name: "Visão Gerencial",
            component: ManagementView,
            showInMenu: true,
          },
        ],
      },
      {
        path: "cadastros-gerais",
        name: "Cadastros gerais",
        component: GeneralRecords,
        showInMenu: true,
        children: [
          {
            path: "marca",
            name: "Marca",
            component: Brand,
            showInMenu: true,
            children: [
              {
                path: "unidade",
                name: "Unidade",
                component: Unit,
                showInMenu: false,
              },
            ],
          },
          {
            path: "fornecedor",
            name: "Fornecedores",
            component: Supplier,
            showInMenu: true,
          },
          {
            path: "tipos-de-evento",
            name: "Tipos de evento",
            component: EventType,
            showInMenu: true,
          },
          {
            path: "modelos-de-evento",
            name: "Modelos de evento",
            component: EventTemplate,
            showInMenu: true,
          },
        ],
      },
    ],
  },
];

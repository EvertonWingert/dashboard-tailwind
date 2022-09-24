import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("../views/CustomersView.vue"),
      meta: {
        title: "Clientes",
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("../views/OrdersView.vue"),
      meta: {
        title: "Pedidos",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
      meta: {
        title: "Produtos",
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
      meta: {
        title: "Configurações",
      },
    },
  ],
});

export default router;

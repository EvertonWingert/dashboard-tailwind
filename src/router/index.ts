import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "splash",
      component: () => import("../views/SplashView.vue"),
      meta: {
        title: "Splash",
        layout: "guest",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        title: "Login",
        layout: "guest",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        title: "Dashboard",
        layout: "main",
      },
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("../views/CustomersView.vue"),
      meta: {
        title: "Clientes",
        layout: "main",
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("../views/OrdersView.vue"),
      meta: {
        title: "Pedidos",
        layout: "main",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
      meta: {
        title: "Produtos",
        layout: "main",
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
      meta: {
        title: "Configurações",
        layout: "main",
      },
    },
  ],
});

export default router;

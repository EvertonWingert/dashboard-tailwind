<template>
  <component :is="currentLayout" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import GuestLayout from "./layouts/GuestLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

const route = useRoute();

const layouts = {
  guest: GuestLayout,
  main: MainLayout,
};

const currentLayout = computed(() => {
  return layouts[route.meta?.layout] ?? layouts["GuestLayout"];
});
</script>

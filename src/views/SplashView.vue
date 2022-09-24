<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

setTimeout(() => {
  router.push("/dashboard");
}, 2000);
</script>
<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-100 animate-pulse"
  >
    <img
      class="w-auto h-8"
      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
      alt="Your Company"
    />
  </div>
</template>

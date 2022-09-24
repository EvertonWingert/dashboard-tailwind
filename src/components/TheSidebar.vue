<script setup lang="ts">
import { navigation } from "@/constants/navigation";
</script>
<template>
  <div class="fixed hidden md:inset-y-0 md:flex md:flex-col">
    <div class="flex flex-col flex-1 min-h-0 p-12">
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="w-auto h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
            alt="Your Company"
          />
        </div>
        <nav class="flex-1 px-2 mt-5 space-y-1">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              $router.currentRoute.value.name === item.href
                ? 'text-blue-500'
                : 'text-gray-600  hover:text-blue-500',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

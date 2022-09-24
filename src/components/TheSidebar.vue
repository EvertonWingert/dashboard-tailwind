<script setup lang="ts">
import { navigation } from "@/constants/navigation";
import { ref, watch } from "vue";
import { Switch } from "@headlessui/vue";

const isDarkMode = ref(false);

watch(isDarkMode, (value) => {
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
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
                ? 'text-blue-500 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-400  hover:text-blue-500 dark:hover:text-blue-300',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <div class="flex items-center justify-center">
          <Switch
            v-model="isDarkMode"
            :class="[
              isDarkMode
                ? 'bg-blue-600 dark:bg-blue-300'
                : 'bg-gray-200 dark:bg-gray-700',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            ]"
          >
            <span class="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              :class="[
                isDarkMode ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-900 shadow ring-0 transition duration-200 ease-in-out',
              ]"
            />
          </Switch>
        </div>
      </div>
    </div>
  </div>
</template>

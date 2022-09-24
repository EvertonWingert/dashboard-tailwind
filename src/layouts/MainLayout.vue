<script setup lang="ts">
import { RouterView } from "vue-router";

import TheSidebar from "@/components/TheSidebar.vue";
import TheTopbar from "@/components/TheTopbar.vue";
</script>
<template>
  <div class="flex flex-col">
    <TheSidebar />
    <TheTopbar />

    <div
      class="flex flex-col flex-1 h-full px-2 bg-gray-100 dark:bg-gray-900 md:pl-64"
    >
      <main class="flex-1 md:pt-12">
        <div class="py-6">
          <div
            class="min-h-screen mx-auto bg-white rounded-lg shadow dark:bg-gray-800 max-w-7xl"
          >
            <div>
              <RouterView />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

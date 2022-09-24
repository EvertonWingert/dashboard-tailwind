<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="flex justify-between px-5 py-6 border-b border-gray-200 dark:border-gray-600"
  >
    <h1 class="text-lg font-semibold text-gray-900 dark:text-gray-50">
      {{ title }}
    </h1>
    <slot name="actions" />
  </div>
</template>

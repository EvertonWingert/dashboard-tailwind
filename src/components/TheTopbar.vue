<script setup lang="ts">
import { navigation } from "@/constants/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <Disclosure
    as="nav"
    class="block bg-gray-100 dark:bg-gray-900 md:hidden"
    v-slot="{ open }"
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center flex-shrink-0">
          <img
            class="w-auto h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
            alt="Your Company"
          />
        </div>

        <div class="flex items-center -mr-2">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 focus:ring-offset-2"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel>
      <div class="pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          class="block"
        >
          <RouterLink
            as=""
            :to="item.href"
            :class="[
              $router.currentRoute.value.name === item.href
                ? '  text-blue-500 dark:text-blue-300'
                : 'border-transparent text-gray-600   hover:text-gray-800',
              'block pl-3 pr-4 py-2  text-base font-medium cursor-pointer',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <span
              class="inline-block w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800"
            >
              <svg
                class="w-full h-full text-gray-300 dark:text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800 dark:text-gray-100">
              Everton
            </div>
            <div class="text-sm font-medium text-gray-500">
              Everton.w@hotmail.com
            </div>
          </div>
          <button
            type="button"
            class="flex-shrink-0 p-1 ml-auto text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

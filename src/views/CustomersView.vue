<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import AppButton from "@/components/AppButton.vue";
const people = [
  {
    id: 1,
    name: "José",
    document: "000.000.000-00",
    email: "jose@example.com",
    phone: "(00) 00000-0000",
  },
  {
    id: 2,
    name: "José",
    document: "000.000.000-00",
    email: "jose@example.com",
    phone: "(00) 00000-0000",
  },
  {
    id: 3,
    name: "José",
    document: "000.000.000-00",
    email: "jose@example.com",
    phone: "(00) 00000-0000",
  },
];
</script>
<template>
  <div>
    <PageHeading title="Clientes">
      <template #actions>
        <AppButton> Adicionar </AppButton>
      </template>
    </PageHeading>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <div
              class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Documento
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Telefone
                    </th>
                    <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="person in people" :key="person.email">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 lg:pl-8"
                    >
                      {{ person.id }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ person.name }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ person.phone }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ person.email }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ person.phone }}
                    </td>
                    <td
                      class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6 lg:pr-8"
                    >
                      <a href="#" class="text-blue-600 hover:text-blue-900"
                        >Edit<span class="sr-only">, {{ person.name }}</span></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

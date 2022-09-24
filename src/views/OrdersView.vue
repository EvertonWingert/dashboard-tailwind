<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
const orders = [
  {
    id: 1,
    createdAt: new Date(),
    status: "Pendente",
    paymentType: "Pix",
    value: "R$ 100",
    customer: {
      id: 1,
    },
  },
  {
    id: 2,
    createdAt: new Date(),
    status: "Pendente",
    paymentType: "Pix",
    value: "R$ 100",
    customer: {
      id: 2,
    },
  },
  {
    id: 3,
    createdAt: new Date(),
    status: "Pendente",
    paymentType: "Pix",
    value: "R$ 100",
    customer: {
      id: 3,
    },
  },
];
</script>
<template>
  <div>
    <PageHeading title="Pedido" />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <div
              class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5"
            >
              <table
                class="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8 dark:text-gray-50"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                    >
                      Método de pagamento
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
                    >
                      Cliente
                    </th>
                    <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600"
                >
                  <tr v-for="order in orders" :key="order.id">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 lg:pl-8 dark:text-gray-50"
                    >
                      {{ order.id }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ order.createdAt.toLocaleDateString() }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                        >{{ order.status }}</span
                      >
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ order.paymentType }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ order.value }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ order.customer.id }}
                    </td>
                    <td
                      class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6 lg:pr-8"
                    >
                      <a
                        href="#"
                        class="text-blue-600 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-400"
                        >Edit<span class="sr-only">, {{ order.id }}</span></a
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

<script setup>
import pageWrapper from "../components/UI/pageWrapper.vue";
import pageLoader from "../components/UI/pageLoader.vue";
import pageError from '../components/UI/pageError.vue'
import pageButton from '../components/UI/pageButton.vue'
import { onMounted, reactive, ref, watch } from "vue";

const trStyle = "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
const pageOptions = reactive({page: 1, pageCount: 6})
const users = ref([]);
const isLoading = ref(true);
const errorLog = ref(null);

async function fetchData() {
  isLoading.value = true;
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${pageOptions.page}&per_page=${pageOptions.pageCount}`)
    const { data } = await response.json()
    users.value = data
  } catch (error) {
    console.error(error);
  } finally {isLoading.value = false}
}

onMounted(() => {
  fetchData();
});

watch(pageOptions, () => {
  fetchData();
});
</script>

<template>
  <pageWrapper>

  <pageError v-if="errorLog" :error="errorLog" />
  <pageLoader v-if="isLoading" />

  <div class="h-screen flex flex-col justify-center items-center">
    <table v-if="users" class="min-w-full divide-y divide-gray-200 mt-8">
      <thead class="bg-dev-100">
        <tr>
          <th scope="col" :class="trStyle">ID</th>
          <th scope="col" :class="trStyle">Имя</th>
          <th scope="col" :class="trStyle">Фамилия</th>
          <th scope="col" :class="trStyle">Email</th>
          <th scope="col" :class="trStyle">Фото</th>
        </tr>
      </thead>
      <tbody class="bg-dev-500 text-dev-100 divide-y divide-gray-200">
        <tr v-for="user in users" :key="user.id" class="hover:bg-dev-100 hover:text-gray-900">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium">
              {{ user.id }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium">
              {{ user.first_name }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium">
              {{ user.last_name }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium">
              {{ user.email }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium">
              <img :src="user.avatar" alt="" class="w-10 h-10 rounded-full">
            </div>
          </td>
        </tr>
        <tr v-if="users.length === 0 && !isLoading" class="hover:bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap" colspan="4">
            <div class="text-sm font-medium">
              No users
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-row items-center gap-2">
      <button @click="pageOptions.page--" :disabled="pageOptions.page <= 1" class="px-3 cursor-pointer py-2 text-center rounded-xl border border-white hover:bg-dev-500 hover:text-white transition-all duration-300 ease-in-out">
        -
      </button>
      <p class="text-xl font-semibold">{{ pageOptions.page }}</p>
      <button @click="pageOptions.page++" :disabled="users.length < 1" class="px-3 cursor-pointer py-2 text-center rounded-xl border border-white hover:bg-dev-500 hover:text-white transition-all duration-300 ease-in-out">
        +
      </button>
      
      <select v-model="pageOptions.pageCount" name="pageCount" class="bg-gray-800 text-white py-2 px-4 rounded-md">
        <option :value="Number(3)" class="text-white">3</option>
        <option :value="Number(4)" class="text-white">4</option>
        <option :value="Number(6)" class="text-white">6</option>
      </select>
    </div>
  </div>

  </pageWrapper>
</template>
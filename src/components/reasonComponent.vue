<template>
   <div class="flex flex-col mx-2 w-11/12 h-full rounded-3xl p-4 shadow-lg bg-dev-500 border-2 border-dev-100 hover:shadow-dev-100 transition-shadow duration-300 ease-in-out">
      <h3 class="uppercase text-dev-100 font-medium text-xl sm:text-2xl text-center my-4">{{ title }}</h3>
      <p class="text-gray-500 text-center text-[15px]">{{ description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
   title: {type: String}, description: {type: String}
})
</script>
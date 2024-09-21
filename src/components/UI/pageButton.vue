<template>
   <button @click="$router.push(`${link}`)" class="px-3 cursor-pointer py-2 text-center rounded-xl border border-white hover:bg-dev-500 hover:text-white transition-all duration-300 ease-in-out">
      <slot></slot>
   </button>
</template>
<script setup>
const props = defineProps({link: {type: String}})
</script>
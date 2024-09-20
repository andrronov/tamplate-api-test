<template>
<header class="fixed w-full py-6 px-4 sm:py-4 backdrop-blur-xl z-40" :class="mobileMenuOpen ? 'bg-white text-black' : 'bg-gray-700/30 text-white'">
   <nav class="mx-auto max-w-7xl flex items-center justify-between sm:px-8" aria-label="Global">
     <div class="flex sm:flex-0">
       <router-link :to="'/'">
         <span>Best _API_</span>
       </router-link>
     </div>
     <ul class="flex gap-4">
        <router-link :to="'/'" :class="$route.path === '/' ? 'underline font-semibold' : ''">Главная</router-link>
        <router-link :to="'/api'" :class="$route.path === '/api' ? 'underline font-semibold' : ''">API</router-link>
     </ul>
     <pageButton @click="$router.push('/api')">Попробовать</pageButton>
   </nav>
 </header>
</template>

<script setup>
import pageButton from './UI/pageButton.vue';
import { ref } from 'vue'

// function toSection(el){
// mobileMenuOpen.value = false
// const section = document.getElementById(el)
// section.scrollIntoView({
//   behavior: 'smooth',
//       block: 'start',
// })
// }
const mobileMenuOpen = ref(false)
</script>
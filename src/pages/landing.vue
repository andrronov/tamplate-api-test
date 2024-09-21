<template>
   <pageWrapper>
      <div class="flex flex-col justify-center items-center">
         <div class="absolute flex flex-col justify-between items-center gap-10"> 
           <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-exclusion font-medium text-white text-center">Тестирование API</h1>
           <pageButton :link="'/api'" class="text-xl tracking-wide text-white bg-blue-950/80">Перейти</pageButton>
         </div>
         <img src="/img/neon.jpeg" class="w-full min-h-screen object-cover" alt="">
       </div>
 
       <!-- 5 REASONS -->
         <pageElement>
            <h2 class="text-dev-100 text-3xl font-medium text-center my-10">4 причины попробовать это API</h2>
            <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 place-items-center gap-4">
               <reason v-for="(reason, index) in reasons" :key="index" :title="reason.title" :description="reason.description" />
            </div>
         </pageElement>
 
         <pageElement>
            <h2 class="text-dev-100 text-3xl font-medium text-center my-10">Работать с нашим API - легко!</h2>
            <p class="text-txt-100 text-xl sm:text-2xl text-center">Наше API разработано с учетом простоты использования, что позволяет вам быстро начать работу и достичь своих целей. Примеры взаимодействия:</p>
            <div class="my-10 flex flex-row items-center gap-4">
                <button @click="selectedButtonId = index" v-for="(item, index) in exampleButtons" :key="index" class="text-lg transition-all duration-300 ease-in-out" :class="selectedButtonId === index ? 'underline text-cyan-600' : ''">
                    {{ item.title }}
                </button>
            </div>
            <div class="flex flex-col items-center gap-4">
                <h3 class="text-dev-100 text-xl font-bold">Method: {{ exampleButtons[selectedButtonId].type }}</h3>
                <pre><code>{{ exampleButtons[selectedButtonId].request }}</code></pre>
                <h3 class="text-dev-100 text-xl font-bold">Ответ:</h3>
                <pre class="w-72 xs:w-auto overflow-x-auto"><code>{{ exampleButtons[selectedButtonId].answer }}</code></pre>
            </div>
         </pageElement>

         <pageElement>
            <h2 class="text-dev-100 text-3xl font-medium text-center my-10">Сколько же это стоит?</h2>
            <p class="text-txt-100 text-xl sm:text-2xl text-center">Хорошая новость: наше API абсолютно бесплатно для использования! Мы хотим, чтобы каждый мог воспользоваться нашими возможностями, не беспокоясь о дополнительных расходах. Начните использовать наше API сегодня и увидите, как это может помочь вашему проекту.</p>
            <p class="mt-8 text-xl sm:text-2xl">Стоимость: <span class="font-bold text-2xl sm:text-3xl">0₽</span></p>
            <pageButton :link="'/api'" class="mt-4 bg-dev-100 text-black">Приступить</pageButton>
         </pageElement>
   </pageWrapper>
</template>

<script setup>
import pageWrapper from '../components/UI/pageWrapper.vue';
import pageElement from '../components/UI/pageElement.vue'
import reason from '../components/reasonComponent.vue'
import pageButton from '../components/UI/pageButton.vue'
import { ref } from 'vue';

const reasons = [
    {
        title: "Легкость интеграции",
        description: "Наше API разработано с учетом простоты использования, что позволяет вам быстро интегрировать его в ваши приложения без лишних усилий. Мы предоставляем подробную документацию и примеры кода, чтобы вы могли начать работу в кратчайшие сроки."
    },
    {
        title: "Высокая скорость",
        description: "API обеспечивает быструю обработку запросов и минимальное время отклика, что позволяет вам создавать высокопроизводительные приложения. Мы оптимизировали все процессы, чтобы гарантировать максимальную эффективность работы."
    },
    {
        title: "Гибкость и масштаб",
        description: "Наша платформа поддерживает различные сценарии использования и может легко масштабироваться в зависимости от ваших потребностей. Вы можете адаптировать API под свои требования и быть уверенными в его надежности."
    },
    {
        title: "Поддержка и сообщество",
        description: "Мы предлагаем активную поддержку и обширное сообщество разработчиков, готовых помочь вам в решении любых вопросов. Вы можете рассчитывать на нашу команду, которая всегда готова ответить на ваши запросы и предоставить необходимую помощь."
    }
]
const exampleButtons = [
{
    title: 'Все юзеры',
    type: 'GET',
    request: 'https://reqres.in/api/users',
    answer: `'data': [
        {
            'id': 7,
            'email': 'michael.lawson@reqres.in',
            'first_name': 'Michael',
            'last_name': 'Lawson',
            'avatar': 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
            'id': 8,
            'email': 'lindsay.ferguson@reqres.in',
            'first_name': 'Lindsay',
            'last_name': 'Ferguson',
            'avatar': 'https://reqres.in/img/faces/8-image.jpg'
        },`
},
{
    title: 'Один юзер',
    type: 'GET',
    request: 'https://reqres.in/api/users/2',
    answer: `"data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },`
},
{
    title: 'Удаление юзера',
    type: 'DELETE',
    request: 'https://reqres.in/api/users/2',
    answer: `status: {'code': 204}`
},
]
const selectedButtonId = ref(0)

// fetch('https://reqres.in/api/users?page=2&per_page=3').then(data => data.json()).then(data => console.log(data))
</script>

<style>

</style>
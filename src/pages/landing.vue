<template>
   <pageWrapper>
      <div class="flex flex-col justify-center items-center">
         <div class="absolute flex flex-col justify-between items-center gap-10"> 
           <h1 class="font-kyiv text-4xl xs:text-7xl mix-blend-exclusion font-medium text-white text-center">Тестирование API</h1>
           <pageButton @click="isCalculatorModalOpen = true" class="text-xl tracking-wide text-white bg-blue-950/80">Перейти</pageButton>
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
 
         <!-- Сделать пример работы API -->
         <!-- <pageElement></pageElement> -->
   </pageWrapper>
</template>

<script setup>
import pageWrapper from '../components/UI/pageWrapper.vue';
import pageElement from '../components/UI/pageElement.vue'
import reason from '../components/reasonComponent.vue'
import pageButton from '../components/UI/pageButton.vue'

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
</script>

<style>

</style>
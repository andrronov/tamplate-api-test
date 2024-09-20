<template>
   <div class="h-screen flex flex-col items-center justify-between">
      <headerComponent />
      <slot />
      <footerComponent />
    </div>
</template>

<script setup>
import headerComponent from '../headerComponent.vue'
import footerComponent from '../footerComponent.vue'
</script>
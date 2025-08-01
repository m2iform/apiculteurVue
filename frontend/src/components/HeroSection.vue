<template>
  <link rel="preload" as="image" :href="backgroundImage" />
  <div class="relative hero-section bg-fixed bg-cover bg-center flex items-center justify-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative text-center text-natural-white p-8 z-10">
      <h1 class="text-6xl font-extrabold mb-4 leading-tight tracking-tight">
        L'Apiculteur Lillois
      </h1>
      <p class="text-2xl mb-8 font-light">
        Le trésor de nos ruches, récolté avec passion.
      </p>
      <router-link to="/miels" class="inline-block bg-amber-500 text-dark-green text-lg font-bold px-10 py-4 rounded-full hover:bg-amber-400 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
        Découvrir nos Miels
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Remplacez par une image de votre choix.
// Pour un meilleur effet, utilisez une image de haute qualité (par ex. 1920x1080).
import backgroundImage from '@/assets/hero-background.webp'; 

</script>

<style scoped>
.hero-section {
  height: 75vh;
}
</style>

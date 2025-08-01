<template>
  <link rel="preload" as="image" :href="backgroundImage" />
  <div class="relative hero-section bg-fixed  bg-center flex items-center justify-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative text-center text-natural-white p-8 z-10">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight animate-fade-in animate-fade-in-1">
        L'Apiculteur Lillois
      </h1>
      <p class="text-xl sm:text-2xl md:text-3xl mb-8 text-natural-white font-light animate-fade-in animate-fade-in-2">
        Le trésor de nos ruches, récolté avec passion.
      </p>
      <router-link to="/miels" class="inline-block bg-amber-500 text-natural-white text-xl font-bold tracking-wider px-10 py-4 rounded-full hover:bg-amber-400 transition duration-300 ease-in-out shadow-lg transform hover:scale-105 animate-fade-in animate-fade-in-3">
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
  height: 80vh;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-1 {
  animation-delay: 0.3s;
}

.animate-fade-in-2 {
  animation-delay: 0.6s;
}

.animate-fade-in-3 {
  animation-delay: 0.9s;
}
</style>

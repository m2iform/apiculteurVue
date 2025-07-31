<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import AppFooter from './components/AppFooter.vue'
import MobileMenu from './components/MobileMenu.vue'

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:1337/api/bonheurs'); // Assurez-vous que 'bonheurs' est un type de contenu existant dans Strapi
    const data = await response.json();
    console.log('Données de l\'API Strapi:', data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'API:', error);
  }
});
</script>

<template>
  <header class="bg-dark-green p-4 shadow-md text-natural-white">
    <div class="flex justify-between items-center px-5 flex-col md:flex-row md:text-left">
      <h1 class="text-2xl font-bold">L'Apiculteur Lillois</h1>
      
      <!-- Bouton Hamburger pour mobile -->
      <button @click="toggleMobileMenu" class="md:hidden text-natural-white text-3xl focus:outline-none">
        &#9776;
      </button>

      <!-- Navigation Desktop -->
      <nav class="space-x-4 mt-4 md:mt-0 hidden md:flex">
        <RouterLink to="/" class="text-natural-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md transition-colors duration-300">Accueil</RouterLink>
        <RouterLink to="/miels" class="text-natural-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md transition-colors duration-300">Nos Miels</RouterLink>
        <RouterLink to="/ruches" class="text-natural-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md transition-colors duration-300">Nos Ruches</RouterLink>
        <RouterLink to="/apiculteur" class="text-natural-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md transition-colors duration-300">L'Apiculteur</RouterLink>
        <RouterLink to="/contact" class="text-natural-white hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md transition-colors duration-300">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <main class="p-5 bg-soft-beige">
    <RouterView />
  </main>

  <AppFooter />
  <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
</template>

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
  <div class="flex flex-col min-h-screen bg-soft-beige">
    <header class="bg-dark-green p-4 shadow-md text-natural-white sticky top-0 z-30">
      <div class="container mx-auto flex justify-between items-center">
        <RouterLink to="/" class="text-2xl font-bold hover:text-soft-beige transition-colors duration-300">L'Apiculteur Lillois</RouterLink>
        
        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center space-x-1">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/miels" class="nav-link">Nos Miels</RouterLink>
          <RouterLink to="/ruches" class="nav-link">Nos Ruches</RouterLink>
          <RouterLink to="/apiculteur" class="nav-link">L'Apiculteur</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </nav>

        <!-- Bouton Hamburger pour mobile -->
        <button @click="toggleMobileMenu" class="md:hidden text-natural-white text-3xl focus:outline-none">
          &#9776;
        </button>
      </div>
    </header>

    <main class="flex-grow p-5">
      <RouterView />
    </main>

    <AppFooter />
  </div>
  <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
</template>

<style scoped>
.nav-link {
  @apply relative text-natural-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 tracking-wider;
}

.nav-link:hover {
  @apply text-soft-beige;
}

.nav-link::after {
  @apply content-[''] absolute w-0 h-0.5 bg-soft-beige bottom-1.5 left-1/2 -translate-x-1/2 transition-all duration-300 rounded-full;
}

.nav-link:hover::after,
.router-link-exact-active::after {
  @apply w-3/5;
}

.router-link-exact-active {
  @apply text-soft-beige;
}
</style>

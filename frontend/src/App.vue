<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'
import AppFooter from './components/AppFooter.vue'
import MobileMenu from './components/MobileMenu.vue'

const isMobileMenuOpen = ref(false);
const showScrollToTop = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:1337/api/bonheurs'); // Assurez-vous que 'bonheurs' est un type de contenu existant dans Strapi
    const data = await response.json();
    console.log('Données de l\'API Strapi:', data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'API:', error);
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
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

    <main class="flex-grow bg-soft-beige">
      <RouterView />
    </main>

    <AppFooter />
  </div>
  <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />

  <transition name="fade">
    <button
      v-if="showScrollToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-amber-500 text-dark-green p-4 rounded-full shadow-xl border-2 border-amber-500 hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 ease-in-out z-50 transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

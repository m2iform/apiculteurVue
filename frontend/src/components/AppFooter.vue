<template>
  <footer class="bg-dark-green text-natural-white py-8">
    <div class="px-4 text-center">
      <div class="flex flex-col md:flex-row justify-center items-center mb-4">
        <router-link to="/" class="text-lg font-semibold hover:text-soft-beige mx-4 my-2">Accueil</router-link>
        <router-link to="/miels" class="text-lg font-semibold hover:text-soft-beige mx-4 my-2">Nos Miels</router-link>
        <router-link to="/ruches" class="text-lg font-semibold hover:text-soft-beige mx-4 my-2">Nos Ruches</router-link>
        <router-link to="/apiculteur" class="text-lg font-semibold hover:text-soft-beige mx-4 my-2">L'Apiculteur</router-link>
        <router-link to="/contact" class="text-lg font-semibold hover:text-soft-beige mx-4 my-2">Contact</router-link>
      </div>
      <p class="text-sm">&copy; {{ currentYear }} L'Apiculteur Lillois. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Styles spécifiques au footer si nécessaire */
</style>
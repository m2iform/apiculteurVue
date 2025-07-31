<template>
  <transition name="slide">
    <div v-if="isOpen" class="fixed inset-0 bg-dark-green z-50 flex flex-col items-center justify-center md:hidden">
      <button @click="closeMenu" class="absolute top-4 right-4 text-natural-white text-4xl focus:outline-none">
        &times;
      </button>
      <nav class="flex flex-col space-y-6 text-center">
        <router-link @click="closeMenu" to="/" class="text-natural-white text-3xl font-bold hover:text-soft-beige transition-colors duration-300">Accueil</router-link>
        <router-link @click="closeMenu" to="/miels" class="text-natural-white text-3xl font-bold hover:text-soft-beige transition-colors duration-300">Nos Miels</router-link>
        <router-link @click="closeMenu" to="/ruches" class="text-natural-white text-3xl font-bold hover:text-soft-beige transition-colors duration-300">Nos Ruches</router-link>
        <router-link @click="closeMenu" to="/apiculteur" class="text-natural-white text-3xl font-bold hover:text-soft-beige transition-colors duration-300">L'Apiculteur</router-link>
        <router-link @click="closeMenu" to="/contact" class="text-natural-white text-3xl font-bold hover:text-soft-beige transition-colors duration-300">Contact</router-link>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const closeMenu = () => {
  emit('close');
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
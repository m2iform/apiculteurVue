<template>
  <div v-if="isOpen" class="fixed inset-0 z-40 md:hidden" @click="closeMenu">
    <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </transition>
    <transition
      name="slide"
      enter-active-class="transition-transform ease-in-out duration-300"
      enter-from-class="transform translate-x-full opacity-0"
      enter-to-class="transform translate-x-0 opacity-100"
      leave-active-class="transition-transform ease-in-out duration-300"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <div class="fixed top-4 right-4 w-3/4 max-w-xs bg-dark-green z-50 flex flex-col py-6 px-4 shadow-2xl rounded-xl" @click.stop>
        <button @click="closeMenu" class="absolute top-3 right-3 text-natural-white text-3xl focus:outline-none hover:text-soft-beige transition-colors duration-300">
          &times;
        </button>
        <nav class="flex flex-col space-y-2 text-center w-full mt-8">
          <router-link
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            @click="closeMenu"
            class="mobile-nav-link"
            :style="{ transitionDelay: `${index * 75}ms` }"
          >
            {{ link.text }}
          </router-link>
        </nav>
      </div>
    </transition>
  </div>
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

const navLinks = [
  { to: '/', text: 'Accueil' },
  { to: '/miels', text: 'Nos Miels' },
  { to: '/ruches', text: 'Nos Ruches' },
  { to: '/apiculteur', text: 'L\'Apiculteur' },
  { to: '/contact', text: 'Contact' },
];
</script>

<style scoped>
.mobile-nav-link {
  @apply text-natural-white text-lg font-semibold tracking-wider py-2.5 px-4 rounded-lg transition-all duration-300;
}

.mobile-nav-link:hover {
  @apply bg-white bg-opacity-10 text-soft-beige;
}

.router-link-exact-active {
   @apply bg-white bg-opacity-20 text-soft-beige;
}
</style>
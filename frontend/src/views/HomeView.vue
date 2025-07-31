<template>
  <div class="relative h-screen flex items-center justify-center bg-soft-beige">
    <div class="text-center p-8 bg-natural-white bg-opacity-90 rounded-lg shadow-xl">
      <h1 class="text-5xl font-extrabold text-dark-green mb-4 leading-tight">
        L'Apiculteur Lillois
      </h1>
      <p class="text-xl text-gray-700 mb-8">
        Le miel de nos ruches, directement chez vous. Apiculteur passionné dans la métropole lilloise, je vous propose une gamme de miels purs et naturels, récoltés avec soin et respect des abeilles.
      </p>
      <router-link to="/miels" class="inline-block bg-dark-green text-natural-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out shadow-lg">
        Découvrir nos miels
      </router-link>
    </div>
  </div>
  <AboutUsSection />
  <HoneyProductsSection />
  <OurHivesSection />
  <TestimonialsSection />
  <ContactSection />
</template>

<script setup>
import AboutUsSection from '../components/AboutUsSection.vue';
import HoneyProductsSection from '../components/HoneyProductsSection.vue';
import OurHivesSection from '../components/OurHivesSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<style scoped>
/* Styles spécifiques à cette vue si nécessaire */
</style>

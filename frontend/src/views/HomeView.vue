<template>
  <HeroSection />
  <div class="p-5 space-y-5">
    <AboutUsSection class="scroll-section" />
    <HoneyProductsSection class="scroll-section" />
    <OurHivesSection class="scroll-section" />
    <TestimonialsSection class="scroll-section" />
    <ContactSection class="scroll-section" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutUsSection from '../components/AboutUsSection.vue';
import HoneyProductsSection from '../components/HoneyProductsSection.vue';
import OurHivesSection from '../components/OurHivesSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import ContactSection from '../components/ContactSection.vue';

onMounted(() => {
  const sections = document.querySelectorAll('.scroll-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Déclenche l'animation quand 10% de la section est visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
</script>

<style scoped>
.scroll-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Ajoute un décalage pour chaque section pour un effet plus dynamique */
.scroll-section:nth-child(2) { transition-delay: 0.1s; }
.scroll-section:nth-child(3) { transition-delay: 0.2s; }
.scroll-section:nth-child(4) { transition-delay: 0.3s; }
.scroll-section:nth-child(5) { transition-delay: 0.4s; }
</style>

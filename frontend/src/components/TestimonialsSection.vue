<template>
  <section class="bg-dark-green py-20 text-natural-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-sm font-bold uppercase text-amber-500 tracking-widest mb-3">Témoignages</h2>
      <h3 class="text-4xl font-extrabold mb-16">Ce que nos clients disent de nous</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="bg-natural-white text-dark-green p-8 rounded-lg shadow-xl flex flex-col"
        >
          <div class="flex items-center mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-16 h-16 rounded-full mr-4 object-cover">
            <div>
              <h4 class="font-bold text-lg text-left">{{ testimonial.name }}</h4>
              <div class="flex text-amber-500">
                <span v-for="n in 5" :key="n">&#9733;</span>
              </div>
            </div>
          </div>
          <p class="italic text-gray-700 text-left flex-grow">"{{ testimonial.text }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Remplacez les avatars par les vôtres dans le dossier assets
import avatar1 from '@/assets/avatar1.jpg';
import avatar2 from '@/assets/avatar2.jpg';
import avatar3 from '@/assets/avatar3.jpg';

const testimonials = ref([
  {
    id: 1,
    name: 'Marie D.',
    text: 'Le miel de L\'Apiculteur Lillois est tout simplement délicieux ! Une qualité exceptionnelle et un goût authentique. Je ne peux plus m\'en passer.',
    avatar: avatar1
  },
  {
    id: 2,
    name: 'Jean L.',
    text: 'Je suis impressionné par l\'engagement de cet apiculteur pour le bien-être des abeilles. Leurs produits sont le reflet de leur passion.',
    avatar: avatar2
  },
  {
    id: 3,
    name: 'Sophie M.',
    text: 'Enfin du miel local et de qualité ! L\'Apiculteur Lillois est ma nouvelle référence pour tous les produits de la ruche.',
    avatar: avatar3
  }
]);
</script>

<style scoped>
/* Aucun style spécifique n'est plus nécessaire ici */
</style>
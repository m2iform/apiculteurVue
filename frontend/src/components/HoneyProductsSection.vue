<template>
  <section class="py-20 bg-soft-beige shadow-md">
    <div class="px-6 text-center">
      <h2 class="text-3xl font-bold uppercase text-amber-600 tracking-widest mb-3">Nos Trésors</h2>
      <h3 class="text-3xl font-extrabold text-dark-green mb-16">Miels & Produits de la Ruche</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="product-card bg-natural-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <div class="relative">
            <img :src="product.image" :alt="product.name" class="w-full h-56 object-cover">
            <div class="absolute top-0 right-0 bg-amber-500 text-dark-green font-bold text-xs uppercase px-3 py-1 m-3 rounded-full">{{ product.tag }}</div>
          </div>
          <div class="p-6 text-left">
            <h4 class="text-xl font-bold text-dark-green mb-2">{{ product.name }}</h4>
            <p class="text-base text-gray-700 leading-normal mb-4 h-20">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-extrabold text-dark-green">{{ product.price }}</span>
              <button class="bg-amber-500 text-dark-green text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-400 transition-colors duration-300">Ajouter</button>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/miels" class="mt-16 inline-block bg-amber-500 border-2 border-amber-500 text-natural-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 ease-in-out">
        Voir tous nos produits
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Remplacez les images par les vôtres dans le dossier assets
import mielFleurs from '@/assets/miel-fleurs.webp';
import mielForet from '@/assets/miel-foret.webp';
import propolis from '@/assets/propolis.webp';
import geleeRoyale from '@/assets/gelee-royale.webp';

const products = ref([
  {
    id: 1,
    name: 'Miel de Fleurs',
    description: 'Un miel doux et polyvalent, issu de la diversité florale de nos régions. Idéal pour toutes les occasions.',
    price: '9,50€',
    image: mielFleurs,
    tag: 'Classique'
  },
  {
    id: 2,
    name: 'Miel de Forêt',
    description: 'Un miel corsé et boisé, récolté dans les forêts environnantes. Parfait pour les amateurs de saveurs intenses.',
    price: '11,00€',
    image: mielForet,
    tag: 'Caractère'
  },
  {
    id: 3,
    name: 'Propolis Pure',
    description: 'La propolis, trésor de la ruche, reconnue pour ses propriétés bienfaisantes. Disponible sous diverses formes.',
    price: '15,00€',
    image: propolis,
    tag: 'Bien-être'
  },
  {
    id: 4,
    name: 'Gelée Royale',
    description: 'Un concentré de vitalité, la nourriture exclusive de la reine des abeilles. Un véritable super-aliment.',
    price: '25,00€',
    image: geleeRoyale,
    tag: 'Premium'
  }
]);
</script>

<style scoped>
.product-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.1);
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
</style>
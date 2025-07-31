<template>
  <section class="py-16 bg-natural-white text-gray-800 px-4">
    <div class="text-center">
      <h2 class="text-4xl font-bold text-dark-green mb-12">Nos Miels & Produits de la Ruche</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <!-- Exemple de produit -->
        <div class="bg-soft-beige p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://via.placeholder.com/300x200?text=Miel+de+Fleurs" alt="Miel de Fleurs" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold text-dark-green mb-2">Miel de Fleurs</h3>
          <p class="text-gray-700">Un miel doux et polyvalent, issu de la diversité florale de nos régions. Idéal pour toutes les occasions.</p>
        </div>
        <!-- Ajoutez d'autres produits ici -->
        <div class="bg-soft-beige p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://via.placeholder.com/300x200?text=Miel+de+Forêt" alt="Miel de Forêt" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold text-dark-green mb-2">Miel de Forêt</h3>
          <p class="text-gray-700">Un miel corsé et boisé, récolté dans les forêts environnantes. Parfait pour les amateurs de saveurs intenses.</p>
        </div>
        <div class="bg-soft-beige p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src="https://via.placeholder.com/300x200?text=Propolis" alt="Propolis" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold text-dark-green mb-2">Propolis</h3>
          <p class="text-gray-700">La propolis, trésor de la ruche, reconnue pour ses propriétés bienfaisantes. Disponible sous diverses formes.</p>
        </div>
      </div>
      <router-link to="/miels" class="mt-12 inline-block bg-dark-green text-natural-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out shadow-lg">
        Voir tous nos produits
      </router-link>
    </div>
  </section>
</template>

<script setup>
// Pas de script spécifique nécessaire pour ce composant
</script>

<style scoped>
/* Styles spécifiques à ce composant si nécessaire */
</style>
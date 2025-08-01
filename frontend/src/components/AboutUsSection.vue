<template>
  <section class="bg-natural-white py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Image Column -->
        <div class="md:w-1/2">
          <img 
            src="@/assets/about-us-image.webp" 
            alt="Apiculteur travaillant avec ses ruches" 
            class="rounded-lg shadow-2xl w-full h-auto object-cover"
            style="max-height: 450px;"
          >
        </div>
        
        <!-- Text Column -->
        <div class="md:w-1/2 text-left">
          <h2 class="text-sm font-bold uppercase text-amber-600 tracking-widest mb-2">Notre Histoire</h2>
          <h3 class="text-4xl font-extrabold text-dark-green mb-6">
            Passion & Respect de la Nature
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            L'Apiculteur Lillois est une aventure née d'un amour profond pour les abeilles et la nature. Mon engagement est de produire un miel d'exception, tout en respectant le cycle de vie de ces pollinisatrices essentielles et l'environnement qui les entoure.
          </p>
          <p class="text-gray-700 leading-relaxed mb-8">
            Installées dans des lieux privilégiés de la métropole lilloise, loin de la pollution, nos ruches garantissent la pureté et la qualité de nos miels. Chaque pot est le fruit d'un travail minutieux et d'une passion inébranlable.
          </p>
          <router-link 
            to="/ruches" 
            class="inline-block bg-dark-green text-natural-white text-base font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out shadow-lg"
          >
            Découvrir nos ruches
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de script spécifique nécessaire pour ce composant
</script>

<style scoped>
/* Styles spécifiques à ce composant si nécessaire */
</style>
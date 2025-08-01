<template>
  <section class="bg-soft-beige py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Text Column -->
        <div class="md:w-1/2 text-left md:order-1">
          <h2 class="text-sm font-bold uppercase text-amber-600 tracking-widest mb-2">Nos Ruches</h2>
          <h3 class="text-4xl font-extrabold text-dark-green mb-6">
            Un Engagement pour la Biodiversité
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Nos ruches sont implantées dans des environnements préservés de la métropole lilloise, riches en biodiversité florale. Cela garantit un nectar varié et un miel aux saveurs uniques, tout en offrant un habitat sain à nos colonies.
          </p>
          <p class="text-gray-700 leading-relaxed mb-8">
            Nous pratiquons une apiculture durable et respectueuse, sans aucun traitement chimique. En soutenant L'Apiculteur Lillois, vous contribuez à la préservation des abeilles et à la richesse de notre écosystème local.
          </p>
          <router-link 
            to="/apiculteur" 
            class="inline-block bg-dark-green text-natural-white text-base font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out shadow-lg"
          >
            Rencontrer l'apiculteur
          </router-link>
        </div>

        <!-- Image Column -->
        <div class="md:w-1/2 md:order-2">
          <img 
            src="@/assets/our-hives-image.webp" 
            alt="Ruches dans un champ fleuri" 
            class="rounded-lg shadow-2xl w-full h-auto object-cover"
            style="max-height: 450px;"
          >
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
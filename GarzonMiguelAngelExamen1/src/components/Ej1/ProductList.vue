<script setup>
import { RouterLink } from 'vue-router';
//Definimos array de productos con campos: id, nombre y descripción
const productes = [
  { id: 1, nom: 'Producte 1', descripció: 'Descripció del producte 1' },
  { id: 2, nom: 'Producte 2', descripció: 'Descripció del producte 2' },
  { id: 3, nom: 'Producte 3', descripció: 'Descripció del producte 3' }
];
</script>

<template>
  <div>
    <h1>Llistat de Productes</h1>
      <!-- Listamos los productos con RouterLink para dar paso de ver los hijos -->
      <li v-for="producte in productes" :key="producte.id">
        <RouterLink :to="`/exercici1/${producte.id}`">
          <h3>{{ producte.nom }}</h3>
        </RouterLink>
      </li>
    <!-- Damos paso al hijo -->
    <router-view :productes="productes"></router-view>
  </div>
</template> 
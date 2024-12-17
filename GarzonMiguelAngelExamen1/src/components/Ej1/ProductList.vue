<script setup>
import { RouterLink, useRouter } from 'vue-router';

const productes = [
  { id: 1, nom: 'Producte 1', descripció: 'Descripció del producte 1' },
  { id: 2, nom: 'Producte 2', descripció: 'Descripció del producte 2' },
  { id: 3, nom: 'Producte 3', descripció: 'Descripció del producte 3' }
];

const router = useRouter();
</script>

<template>
  <div>
    <h1>Llistat de Productes</h1>
    <ul>
      <li v-for="producte in productes" :key="producte.id">
        <RouterLink :to="`/exercici1/${producte.id}`">
          <h3>{{ producte.nom }}</h3>
        </RouterLink>
      </li>
    </ul>
    <router-view :productes="productes"></router-view>
  </div>
</template> 
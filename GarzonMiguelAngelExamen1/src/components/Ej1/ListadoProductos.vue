<script setup>
const productes = [
  { id: 1, nom: 'Producte 1', descripció: 'Descripció del producte 1' },
  { id: 2, nom: 'Producte 2', descripció: 'Descripció del producte 2' },
  { id: 3, nom: 'Producte 3', descripció: 'Descripció del producte 3' }
];
</script>

<template>
  <div>
    <h1>Llistat de Productes</h1>
    <RouterLink :to="'/'">
        Tornar a exercicis
    </RouterLink>
    <ul>
      <li v-for="producte in productes" :key="producte.id">
        <h2>{{ producte.nom }}</h2>
        <p>{{ producte.descripció }}</p>
      </li>
    </ul>
  </div>
</template>
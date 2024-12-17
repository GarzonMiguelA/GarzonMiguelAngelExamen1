<script setup>
import { ref, computed, watch } from 'vue';

//Creamos lista de usuarios que se guarda en un array con id y nom:
const users = ref([
  { id: 1, nom: 'Frances' },
  { id: 2, nom: 'Marta' },
  { id: 3, nom: 'Pere' },
  { id: 4, nom: 'Manolo' },
  { id: 5, nom: 'Eva' }
]);

const textoFiltrado = ref('');

/* Implementamos funcion computed que nos devuelve las coincidencias */
const usuariosFiltrados = computed(() =>
  users.value.filter(user =>
  // Conviertiendo la busqueda en lowercase para que no sea case sensitive  
    user.nom.toLowerCase().includes(textoFiltrado.value.toLowerCase())
  )
);

// Creamos el watch y trabajamos sobre la var textoFiltrado para ver los cambios
watch(textoFiltrado, (newVal) => {
  console.log('Cambios:', newVal);
});
</script>

<template>
  <div>
    <h1>Llistat d'Usuaris</h1>
    <!-- Añadimos input con v-model para capturar texto del usuario -->
    <input v-model="textoFiltrado" />
    <ul>
      <!-- Mostramos los nombres de los users en una lista con directiva v-for -->
      <li v-for="user in usuariosFiltrados" :key="user.id"><!-- Con key unica basada en id de user -->
        {{ user.nom }}
      </li>
    </ul>
  </div>
</template>
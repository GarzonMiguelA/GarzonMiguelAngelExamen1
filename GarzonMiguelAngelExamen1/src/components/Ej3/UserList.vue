<script setup>
import { ref, computed, watch } from 'vue';

const users = ref([
  { id: 1, nom: 'Manolo' },
  { id: 2, nom: 'Crisitan' },
  { id: 3, nom: 'Ramon' },
  { id: 4, nom: 'David' },
  { id: 5, nom: 'Miguel' }
]);

const filterText = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.nom.toLowerCase().includes(filterText.value.toLowerCase())
  );
});

watch(filterText, (newVal) => {
  console.log('Filter text changed:', newVal);
});
</script>

<template>
  <div>
    <h1>Llistat d'Usuaris</h1>
    <input v-model="filterText" placeholder="Filtra usuaris..." />
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.nom }}
      </li>
    </ul>
  </div>
</template>
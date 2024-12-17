<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

/*Declaramos las props */
const props = defineProps({
  productId: parseInt,
  productes: Array
}); 

// Hacemos uso de computed para buscar el producto por productId
const producte = computed(() =>
  props.productes.find(producte => producte.id === props.productId)
);
</script>

<template>
  <!-- Mostramos los detalles de los productos: -->
  <h4>Detall de producte</h4>
  <p>ID: {{ producte.id }}</p>
  <p>Nom del producte: {{ producte.nom }}</p>
  <p>Descripció: {{ producte.descripció }}</p>
</template>
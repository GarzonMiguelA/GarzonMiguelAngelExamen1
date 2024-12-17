<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav>
        <!-- Usando routerLink llamamos a los ejercicios -->
        <RouterLink to="/">
            <p>Home</p>
        </RouterLink>
        <RouterLink to="/exercici1">
            <p>Exercici1: Productes</p>
        </RouterLink>
        <RouterLink to="/exercici2">
            <p>Exercici2: Contador</p>
        </RouterLink>
        <RouterLink to="/exercici3">
            <p>Exercici3: Filtrat d'usuari</p>
        </RouterLink>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav>
        <RouterLink to="/">
            <p>Home</p>
        </RouterLink>
        <RouterLink to="/exercici1">
            <p>Exercici1: Productes</p>
        </RouterLink>
        <RouterLink to="/exercici2">
            <p>Exercici2: Contador</p>
        </RouterLink>
    </nav>
</template>
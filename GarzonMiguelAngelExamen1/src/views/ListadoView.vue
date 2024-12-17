<script setup>
import ListadoComponente from '@/components/ListadoComponente.vue';
import { RouterView } from 'vue-router';
</script>


<template>
   <div>
        <ListadoComponente/>
        <RouterView/>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';



const route = useRoute()
const router = useRouter()

const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

</script>

<template>
    <h1 class="mb-5">Pokémon</h1>
    <div>
        <h4>Nombre del Pokémon: {{ formatName(route.params.pokemon) }}</h4>
    </div>
</template>

<style scoped>

</style>
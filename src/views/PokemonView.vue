<script setup>
import { useRoute, useRouter } from 'vue-router';



const route = useRoute()
const router = useRouter()

</script>

<template>
    <h1 class="mb-5">Pokémon</h1>
    <div>
        <h4>Nombre del Pokémon: {{ route.params.pokemon }}</h4>
    </div>
</template>

<style scoped>

</style>
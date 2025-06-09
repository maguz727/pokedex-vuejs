<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { onMounted, ref } from 'vue';

const pokemons = ref([])

const getData = async () => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results
    } catch (error) {
        console.log("Error al obtener la información", error)
    }
}

onMounted(getData);

</script>
<template>
    <h1 class="mb-5">Pokemons</h1>
    <div>
        <ul>
            <li v-for="(pokemon, index) in pokemons" :key="index">
                <RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>

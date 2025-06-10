<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

const pokemons = ref([]);

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = data.results;
    } catch (error) {
        console.log("Error al obtener la información", error);
    }
};

const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

onMounted(getData);
</script>
<template>
    <h1 class="mb-5">Pokémons</h1>
    <div class="d-flex flex-wrap justify-content-center">
        <div
            class="list-group m-1"
            v-for="(pokemon, index) in pokemons"
            :key="index"
        >
            <RouterLink
                class="list-group-item list-group-item-action list-group-item-warning"
                :to="`/pokemons/${pokemon.name}`"
                >{{ formatName(pokemon.name) }}</RouterLink
            >
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3 gap-2">
        <button type="button" class="btn btn-outline-primary">Prev</button>
        <button type="button" class="btn btn-outline-primary">Next</button>
    </div>
</template>

<style scoped></style>

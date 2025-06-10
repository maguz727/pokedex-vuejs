<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import { onMounted, ref, watch } from "vue";

const pokemons = ref([]);
const response = ref(null);
const route = useRoute();
const router = useRouter()
const start = ref(Number(route.query.offset) || 0);
const limit = ref(Number(route.query.limit) || 20);


const getData = async () => {
    try {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${start.value}&limit=${limit.value}`
        );
        response.value = data;
        pokemons.value = data.results;
    } catch (error) {
        console.log("Error al obtener la información", error);
    }
};

const next = () => {
    if (response.value?.next) {
        start.value += limit.value;
    }
};
const prev = () => {
    if (response.value?.previous) {
        start.value -= limit.value;
    }
};

watch(start, getData);

watch(start, () => {
    getData();
    router.replace({
        path: "/pokemons",
        query: { offset: start.value, limit: limit.value },
    });
    sessionStorage.setItem(
        "lastUrl",
        `/pokemons?offset=${start.value}&limit=${limit.value}`
    );
});

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
                :to="{
                    path: `/pokemons/${pokemon.name}`,
                    state: { from: route.fullPath },
                }"
                >{{ formatName(pokemon.name) }}</RouterLink
            >
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3 gap-2">
        <button
            type="button"
            class="btn btn-outline-primary"
            @click="prev"
            :disabled="!response?.previous"
        >
            Prev
        </button>
        <button
            type="button"
            class="btn btn-outline-primary"
            @click="next"
            :disabled="!response?.next"
        >
            Next
        </button>
    </div>
</template>

<style scoped></style>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { usePokemons } from '../composables/usePokemons'

const route = useRoute();
const router = useRouter()
const start = ref(Number(route.query.offset) || 0);
const limit = ref(Number(route.query.limit) || 20);

const {pokemons, response, getData, error, isLoading} = usePokemons()

onMounted(() => getData(start.value, limit.value));

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

watch(start, () => {
    getData(start.value, limit.value);
    
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

</script>

<template>
    <h1 class="mb-5">Pokémons</h1>
    <div class="text-center" v-if="isLoading">
        <div class="spinner-border text-primary loading" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>
    <div v-else class="d-flex flex-wrap justify-content-center">
        <div
            class="list-group m-1"
            v-for="(pokemon, index) in pokemons"
            :key="index"
        >
            <RouterLink
                class="list-group-item list-group-item-action list-group-item-warning"
                :to="`/pokemons/${pokemon.name}`"
            >
                {{ formatName(pokemon.name) }}
            </RouterLink>
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

<style scoped>
.loading {
    width: 5rem;
    height: 5rem;
}
</style>

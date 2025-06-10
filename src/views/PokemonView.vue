<template>
    <h1 class="mb-5">Pokémon Details</h1>
    <LoadingSpinner v-if="isLoading" />
    <ErrorAlert v-else-if="error" :error="error" />
    <CardPokemon v-else :pokemon="pokemon" />
    <div class="d-flex justify-content-center mt-3 gap-2">
        <RouterLink :to="lastUrl" class="btn btn-outline-primary"
            >Back</RouterLink
        >
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePokemons } from "@/composables/usePokemons";
import CardPokemon from "@/components/CardPokemon.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";

const route = useRoute();
const lastUrl = sessionStorage.getItem("lastUrl") || "/pokemons";

const { pokemon, getPokemon, error, isLoading } = usePokemons();

onMounted(() => {
    getPokemon(route.params.pokemon);
});
</script>

<style scoped>
.loading {
    width: 5rem;
    height: 5rem;
}
</style>

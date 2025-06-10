<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePokemons } from "@/composables/usePokemons";

const route = useRoute();
const lastUrl = sessionStorage.getItem("lastUrl") || '/pokemons';

const {pokemon, getPokemon} = usePokemons();

onMounted(() => {
    getPokemon(route.params.pokemon);
});

const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

</script>

<template>
    <h1 class="mb-5">Pokémon Details</h1>
    <div class="card d-flex m-auto" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4 align-content-start">
                <img
                    :src="pokemon.sprites?.other?.home?.front_default"
                    class="img-fluid rounded-start"
                    :alt="pokemon.name"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div
                        class="d-float justify-content-center align-items-center"
                    >
                        <h3 class="card-title mb-2">
                            {{ formatName(route.params.pokemon) }}
                        </h3>
                        <div class="d-flex gap-2">
                            <span
                                class="mb-3 badge text-bg-warning"
                                v-for="(t, index) in pokemon.types"
                                :key="index"
                            >
                                {{ formatName(t.type.name) }}
                            </span>
                        </div>
                    </div>
                    <p class="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                    <div class="d-flex gap-2">
                        <span
                            class="badge text-bg-primary"
                            v-for="(a, index) in pokemon.abilities"
                            :key="index"
                            >{{ a.ability.name }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3 gap-2">
        <RouterLink :to="lastUrl" class="btn btn-outline-primary">Back</RouterLink>
    </div>
</template>

<style scoped></style>

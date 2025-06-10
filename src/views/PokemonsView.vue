<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { usePokemons } from "../composables/usePokemons";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";
import PokemonList from "@/components/PokemonList.vue";
import PaginationButtons from "@/components/PaginationButtons.vue";

const route = useRoute();
const router = useRouter();
const start = ref(Number(route.query.offset) || 0);
const limit = ref(Number(route.query.limit) || 20);

const { pokemons, response, getData, error, isLoading } = usePokemons();

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
</script>

<template>
    <h1 class="mb-5">Pokémons</h1>
    <LoadingSpinner v-if="isLoading" />
    <ErrorAlert v-else-if="error" :error="error" />
    <PokemonList v-else :pokemons="pokemons" />
    <PaginationButtons
        @prev="prev"
        @next="next"
        :has-prev="response?.previous"
        :has-next="response?.next"
    />
</template>

<style scoped>
.loading {
    width: 5rem;
    height: 5rem;
}
</style>

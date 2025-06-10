<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { usePokemons } from "../composables/usePokemons";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";
import PokemonList from "@/components/PokemonList.vue";
import PaginationNavigator from "@/components/PaginationNavigator.vue";

const route = useRoute();
const router = useRouter();
const start = ref(Number(route.query.offset) || 0);
const limit = ref(Number(route.query.limit) || 20);

const { pokemons, response, getData, error, isLoading } = usePokemons();
const totalPages = computed(() => {
    const count = response.value?.count;
    return count && limit.value ? Math.ceil(count / limit.value) : 0;
});
const currentPage = computed(() => Math.floor(start.value / limit.value) + 1);

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

const goToPage = (page) => {
    start.value = (page - 1) * limit.value;
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

const onLimitChange = () => {
    start.value = 0;
    getData(start.value, limit.value);
    router.replace({
        path: "/pokemons",
        query: { offset: start.value, limit: limit.value },
    });
};
</script>

<template>
    <h1 class="mb-5">Pokémons</h1>
    <div class="mb-4">
        <label for="limit" class="mr-2 font-semibold"
            >Pokémons por página:</label
        >
        <select
            id="limit"
            v-model.number="limit"
            @change="onLimitChange"
            class="border rounded px-2 py-1"
        >
            <option :value="20">20</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
        </select>
    </div>
    <LoadingSpinner v-if="isLoading" />
    <ErrorAlert v-else-if="error" :error="error" />
    <PokemonList v-else :pokemons="pokemons" />
    <PaginationNavigator
        :total-pages="totalPages"
        :current-page="currentPage"
        @go-to-page="goToPage"
    />
</template>

<style scoped>
.loading {
    width: 5rem;
    height: 5rem;
}
</style>

<template>
    <div class="d-flex flex-wrap justify-content-center">
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
</template>

<script setup>
const props = defineProps({
    pokemons: Object
})

const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
</script>

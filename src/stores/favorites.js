import { Alert } from "bootstrap";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoriteStore = defineStore("favorites", () => {
	const favorites = ref([]);

    if (localStorage.getItem('favoritos')) {
        favorites.value = JSON.parse(localStorage.getItem('favoritos'))
    }

	const addFavorites = (pokemon) => {
        // const exists = favorites.value.some((poke) => poke.id === pokemon.id)
        favorites.value.push(pokemon)
        localStorage.setItem('favoritos', JSON.stringify(favorites.value))
        // if (!exists) {
        //     favorites.value.push(pokemon)
        // } else {
        //     alert(`El Pokémon ${pokemon.name} ya está en la lista de favoritos`);
            
        // }
	};

	const deleteFavorite = (id) => {
		favorites.value = favorites.value.filter((poke) => poke.id != id);
        localStorage.setItem('favoritos', JSON.stringify(favorites.value))
	};

    const isFavorite = (pokemon) => {
        const exists = favorites.value.some((poke) => poke.id === pokemon.id)
        return exists
    }

    const toggleFavorite = (pokemon) => {
        const exists = isFavorite(pokemon)
        if (exists) {
            deleteFavorite(pokemon.id)
        } else {
            addFavorites(pokemon)
        }
    }

    const favoriteCount = computed(() => favorites.value.length)

	return {
		favorites,
		addFavorites,
		deleteFavorite,
        isFavorite,
        toggleFavorite,
        favoriteCount
	};
});

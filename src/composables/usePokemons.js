import { ref } from "vue";
import axios from "axios";

export function usePokemons() {
    const pokemons = ref([]);
    const response = ref(null);
    const pokemon = ref([]);
    const error = ref(null)
    const isLoading = ref(false)

    const getData = async (start, limit) => {
        isLoading.value = true;
        error.value = null;
        pokemons.value = null;
        response.value = null;
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${limit}`
            );
            pokemons.value = data.results;
            response.value = data;
        } catch (err) {
            console.error("Error al obtener el pokémon", err);
            error.value = "Error al obtener los pokémons"
        } finally {
            isLoading.value = false;
        }
    };

    const getPokemon = async (name) => {
        isLoading.value = true;
        error.value = null;
        pokemon.value = null;
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            pokemon.value = data;
            
        } catch (err) {
            console.error("Error al obtener el pokémon", err);
            error.value = "Pokémon no encontrado";
        } finally {
            isLoading.value = false;
        }
    };

    return {
        pokemons,
        response,
        getData,
        pokemon,
        getPokemon,
        error,
        isLoading,
    };
}

import { ref } from "vue";
import axios from "axios";

export function usePokemons() {
    const pokemons = ref([]);
    const response = ref(null);

    const getData = async (start, limit) => {
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${limit}`
            );
            pokemons.value = data.results;
            response.value = data;
        } catch (error) {
            console.error("Error al obtener los pokémons", error);
        }
    };

    const pokemon = ref([])

    const getPokemon = async (name) => {
        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            pokemon.value = data;
            
        } catch (error) {
            console.error("Error al obtener el pokémon", error);
        }
    };

    return {
        pokemons,
        response,
        getData,
        pokemon,
        getPokemon,
    };
}

<template>
	<div>
		<h1 class="mb-5">Favorites</h1>
		<div
			v-if="useFavorite.favorites.length === 0"
			class="alert alert-warning"
			role="alert"
		>
			No tienes aún Pokemon favoritos! ve por uno
			<RouterLink to="/pokemons">aquí</RouterLink>
		</div>
		<div v-else>
			<ul class="list-group mb-5">
				<li
					class="list-group-item d-flex justify-content-between"
					v-for="pokemon in useFavorite.favorites"
				>
					<div>{{ formatName(pokemon.name) }}</div>
					<div class="d-flex gap-2">
						<RouterLink
							class="btn btn-sm btn-primary"
							:to="`/pokemons/${pokemon.name}`"
							>Details</RouterLink
						>
						<button
							class="btn btn-sm btn-danger"
							@click="useFavorite.deleteFavorite(pokemon.id)"
						>
							Delete
						</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useFavoriteStore } from "@/stores/favorites";

	const useFavorite = useFavoriteStore();

	const formatName = (name) => {
		return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	};
</script>

<style scoped></style>

<template>
	<nav class="navbar bg-body-tertiary mb-3 px-4 py-3">
		<div class="container">
			<RouterLink class="navbar-brand" to="/">
				<img
					src="@/assets/logo-pokeapi.png"
					alt="Logo"
					width="80"
					height="auto"
					class="d-inline-block align-text-top"
				/>
			</RouterLink>
			<ul
				class="nav nav-underline d-flex justify-content-center align-items-center"
			>
				<li class="nav-item">
					<RouterLink
						class="nav-link p-2"
						aria-current="page"
						to="/"
						active-class="active"
						>Home</RouterLink
					>
				</li>
				<li class="nav-item">
					<RouterLink
						class="nav-link p-2"
						to="/pokemons"
						active-class="active"
						>Pokemons</RouterLink
					>
				</li>
				<li class="nav-item">
					<RouterLink
						class="nav-link p-2 position-relative"
						to="/favorites"
						active-class="active"
					>
						Favorites
						<span
							class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
						>
							{{ favoriteCount }}
							<span class="visually-hidden">unread messages</span>
						</span>
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script setup>
	import { RouterLink } from "vue-router";
	import { useFavoriteStore } from "@/stores/favorites";
import { toRef } from "vue";
import { storeToRefs } from "pinia";

	const useFavorite = useFavoriteStore();
	const { favoriteCount } = storeToRefs(useFavorite)
</script>

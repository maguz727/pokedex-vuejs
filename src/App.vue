<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
    <header>
        <nav class="navbar bg-body-tertiary mb-3">
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
                            >Inicio</RouterLink
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
                </ul>
            </div>
        </nav>
    </header>
    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped></style>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main class="container px-4">
        <RouterView />
    </main>
</template>

<style scoped></style>

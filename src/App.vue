<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import 'primeicons/primeicons.css'
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <header>
            <NavBar />
        </header>
        <main class="container px-4">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>

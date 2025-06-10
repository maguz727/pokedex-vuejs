<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <div
        class="not-found d-flex flex-column justify-content-center align-items-center"
    >
        <h1>404 Not Found</h1>
        <button class="btn btn-outline-primary" @click="router.back()">
            Back
        </button>
    </div>
</template>

<style scoped>
.not-found {
    min-height: 500px;
}
.not-found > h1 {
    font-size: 8rem;
}
</style>

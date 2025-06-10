<template>
    <div class="alert alert-danger text-center">{{ error }}</div>
</template>

<script setup>
const props = defineProps({
    error: String
})
</script>
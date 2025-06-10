<template>
    <div class="d-flex justify-content-center mt-3 gap-2">
        <button
            type="button"
            class="btn btn-outline-primary"
            @click="emit('prev')"
            :disabled="!hasPrev"
        >
            Prev
        </button>
        <button
            type="button"
            class="btn btn-outline-primary"
            @click="emit('next')"
            :disabled="!hasNext"
        >
            Next
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    hasPrev: Boolean,
    hasNext: Boolean
})

const emit = defineEmits([
    'prev', 
    'next'
])
</script>
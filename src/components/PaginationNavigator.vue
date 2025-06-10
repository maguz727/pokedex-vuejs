<template>
    <div class="d-flex justify-content-center gap-2 flex-wrap mt-4 mb-5">
        <!-- Botón para página anterior -->
        <button
            class="btn btn-outline-primary"
            :disabled="currentPage === 1"
            @click="emit('go-to-page', currentPage - 1)"
        >
            « Prev
        </button>

        <!-- Botón para retroceder un bloque de 10 páginas -->
        <button
            class="btn btn-outline-primary"
            :disabled="blockStart <= 1"
            @click="emit('go-to-page', blockStart - 1)"
        >
            «
        </button>

        <!-- Botones de página visibles -->
        <button
            v-for="page in visiblePages"
            :key="page"
            class="btn"
            :class="
                page === currentPage ? 'btn-primary' : 'btn-outline-primary'
            "
            @click="emit('go-to-page', page)"
        >
            {{ page }}
        </button>

        <!-- Botón para avanzar un bloque de 10 páginas -->
        <button
            class="btn btn-outline-primary"
            :disabled="blockEnd >= totalPages"
            @click="emit('go-to-page', blockEnd + 1)"
        >
            »
        </button>

        <!-- Botón para página siguiente -->
        <button
            class="btn btn-outline-primary"
            :disabled="currentPage === totalPages"
            @click="emit('go-to-page', currentPage + 1)"
        >
            Next »
        </button>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    totalPages: Number,
    currentPage: Number,
});
const emit = defineEmits(["go-to-page"]);

const pagesPerBlock = 10;

const currentBlock = computed(() =>
    Math.floor((props.currentPage - 1) / pagesPerBlock)
);

const blockStart = computed(() => currentBlock.value * pagesPerBlock + 1);
const blockEnd = computed(() =>
    Math.min(blockStart.value + pagesPerBlock - 1, props.totalPages)
);

const visiblePages = computed(() =>
    Array.from(
        { length: blockEnd.value - blockStart.value + 1 },
        (_, i) => blockStart.value + i
    )
);
</script>

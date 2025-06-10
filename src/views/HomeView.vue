<template>
    <div class="container my-5">
        <h1 class="text-center mb-4">📘 Resumen del Proyecto</h1>

        <p>
            Este proyecto fue desarrollado por
            <strong>Manuel Guzmán</strong> como una práctica integral para
            afianzar conocimientos clave del ecosistema <strong>Vue 3</strong>.
            Puedes ver el repositorio en GitHub aquí:
            <a href="https://github.com/maguz727" target="_blank">maguz727</a>.
        </p>

        <h2 class="mt-4">🎯 Objetivo</h2>
        <p>
            El objetivo principal es practicar el desarrollo de una SPA (Single
            Page Application) con Vue 3, consumiendo datos desde la PokéAPI y
            mostrando un listado de Pokémons con paginación, navegación entre
            vistas, manejo de errores y carga, y presentación de datos
            detallados.
        </p>

        <h2 class="mt-4">🛠️ Tecnologías y Herramientas</h2>
        <ul>
            <li>
                Vue 3 con Composition API y <code>&lt;script setup&gt;</code>
            </li>
            <li>Vue Router (para navegación entre vistas)</li>
            <li>Bootstrap 5 para el diseño responsivo y estilización</li>
            <li>PokéAPI (https://pokeapi.co) como fuente de datos</li>
        </ul>

        <h2 class="mt-4">📚 Conceptos de Vue Practicados</h2>
        <ul>
            <li><code>ref</code> para referencias reactivas</li>
            <li>
                <code>onMounted</code> para ejecutar lógica al montar el
                componente
            </li>
            <li>
                <code>watch</code> para observar cambios en propiedades o
                variables reactivas
            </li>
            <li><code>computed</code> para valores derivados y reactivos</li>
            <li>
                <code>defineProps</code> y <code>defineEmits</code> para
                comunicación entre componentes
            </li>
            <li>
                <code>RouterLink</code> y <code>useRoute</code> de Vue Router
            </li>
            <li>
                Directivas: <code>v-for</code>, <code>v-if</code>,
                <code>v-bind</code>, <code>v-model</code>, <code>v-on</code>
            </li>
        </ul>

        <h2 class="mt-4">🧩 Componentes Desarrollados</h2>
        <ul>
            <li><strong>NavBar</strong>: navegación superior</li>
            <li><strong>PokemonList</strong>: lista de Pokémons</li>
            <li>
                <strong>PaginationNavigator</strong>: paginación por bloques
            </li>
            <li>
                <strong>CardPokemon</strong>: tarjeta con detalles del Pokémon
            </li>
            <li><strong>LoadingSpinner</strong>: indicador de carga</li>
            <li>
                <strong>ErrorAlert</strong>: alerta en caso de error al obtener
                datos
            </li>
        </ul>
    </div>
</template>
<script setup></script>

# PokeDex Navigator

**Autor:** [Manuel Guzmán](https://github.com/maguz727)

## 🧾 Descripción del Proyecto

**PokeDex Navigator** es una aplicación web construida con **Vue 3** y la **Composition API**, que permite a los usuarios explorar Pokémon mediante el consumo de datos desde la [PokeAPI](https://pokeapi.co/).  

La aplicación incluye:

- Vista principal con navegación.
- Listado de Pokémon con paginación por bloques de 10 páginas.
- Visualización de detalles individuales de cada Pokémon (imagen, tipos, habilidades).
- Componentes reutilizables para mejorar la estructura del código.
- Indicadores visuales de carga y errores para una mejor experiencia de usuario.


## 🧰 Tecnologías y Herramientas Utilizadas

- **Vue 3** (Composition API con `<script setup>`)
- **Vue Router** para navegación entre vistas
- **Bootstrap 5** para estilos responsivos
- **PokeAPI** como fuente de datos
- **Componentes reutilizables**:
  - `NavBar.vue`
  - `PokemonList.vue`
  - `PaginationNavigator.vue`
  - `CardPokemon.vue`
  - `LoadingSpinner.vue`
  - `ErrorAlert.vue`

## 🗂 Estructura del Proyecto (parcial)

- /components
    - NavBar.vue
    - PokemonList.vue
    - PaginationNavigator.vue
    - CardPokemon.vue
    - LoadingSpinner.vue
    - ErrorAlert.vue
- /assets
    - logo-pokeapi.png
- /views (sugerido)
    - Home.vue
    - Pokemons.vue
    - PokemonDetail.vue

## 🎓 Propósito Educativo

Este proyecto fue desarrollado como una práctica integral para afianzar conocimientos clave del ecosistema **Vue 3**. A través de su implementación, se ejercitan y aplican conceptos fundamentales y herramientas del framework, incluyendo:

- **Composition API** con `script setup`
- **`ref`** para referencias reactivas
- **`onMounted`** para ejecutar lógica al montar el componente
- **`watch`** para observar cambios en propiedades o variables reactivas
- **`computed`** para valores derivados y reactivos
- **`defineProps`** y **`defineEmits`** para comunicación entre componentes
- **`RouterLink`** y **`useRoute`** de `vue-router` para navegación y acceso a parámetros dinámicos
- **`v-for`**, **`v-if`**, **`v-bind`**, **`v-model`**, **`v-on`** para el manejo del DOM y eventos
- **Slots** implícitos a través de estructura de componentes reutilizables
- **Diseño responsive** con clases de **Bootstrap 5**
- **Manejo de errores y carga** con componentes `ErrorAlert` y `LoadingSpinner`
- **Paginación** y navegación por bloques para una mejor experiencia de usuario

Esta práctica sirve como base sólida para desarrollar aplicaciones Vue modernas, modulares y escalables, utilizando buenas prácticas y separación de responsabilidades por componentes.

## 🔗 Enlace a GitHub

[https://github.com/maguz727](https://github.com/maguz727)

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue"
</script>

<template>
  <div class="app">
    <header>
      <NavbarComponent />
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
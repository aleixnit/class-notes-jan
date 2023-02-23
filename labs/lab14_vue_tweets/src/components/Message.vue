<template>
    <p class="message">
        {{props.message}}
    </p>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["message"]);
</script>
<style scoped>
</style>
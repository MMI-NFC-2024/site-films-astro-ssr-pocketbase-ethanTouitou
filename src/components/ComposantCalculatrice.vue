<script setup lang="ts">
import { ref } from 'vue';
import BtnCalc from './BtnCalc.vue';

const nombre = ref(0);
const modeDecimal = ref(false);
const rang = ref(0);
</script>

<template>
    <h1>calculatrice</h1>
    <p>affiche : {{ nombre }}</p>
    <div class="grid grid-cols-3 grid-rows-4 gap-2">
    <BtnCalc  v-for="chiffre in 9" v-model="nombre" :chiffre="chiffre" :modeDecimal="modeDecimal" :rang="rang"/>
    <button @click="nombre = 0">clear</button>
    <BtnCalc v-model="nombre" :chiffre="0" :modeDecimal="modeDecimal" :rang="rang"/>
    <button @click="modeDecimal = !modeDecimal">.</button>
    <button @click="nombre = Math.floor(nombre / 10)">←</button>
</div>
</template>
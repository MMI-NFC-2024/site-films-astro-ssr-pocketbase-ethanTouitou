<script setup lang="ts">
const props = defineProps<{
    modeDecimal: boolean;
    rang: number;
    chiffre: number;
}>();
const nombre = defineModel<number>();
</script>

<template>
    <button @click="nombre = (nombre! * 10 + chiffre) ">
{{ chiffre }}
    </button>
</template>
<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import type { PersonneResponse } from '../pocketbase-types';
import { ref } from 'vue';
const props = defineProps<{
    personnes: PersonneResponse[];
}>();
const personneId = ref()
</script>

<template>
      <Multiselect
                v-model="personneId"
                :options="personnes"
                label="nom"
                value-prop="id"
              />

</template>

<style src="@vueform/multiselect/themes/default.css"></style>

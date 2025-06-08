<template>
    <NuxtLink :to="to" custom v-slot="{ navigate, href, isActive}">
        <!-- styling bei isActive noch updaten bzw. themen -->
        <v-btn
            :href="href"
            @click="navigate"
            :variant=" isActive ? 'text' : 'plain'"
            :color=" isActive ? 'white' : 'default'"> 
            {{ label }}
        </v-btn>
    </NuxtLink>
</template>

<script setup>
// vue 3 / nuxt 3: funktion zum Deklarieren von Props für Komponenten,, ersetzt props: {...} aus klassischer Options API; nimmt js object literal
    defineProps(
        {
            to: { type: [String, Object], required: true },
            label: { type: String, required: true },
        }
    )
</script>
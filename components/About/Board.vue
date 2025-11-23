<template>
    <v-container class="d-flex flex-column flex-md-row ga-md-8 pl-0 pr-0">

        <v-carousel hide-delimiters>
            <v-carousel-item cover src="/images/webp/wevorstand.webp" />
            <v-carousel-item cover src="/images/webp/katja.webp" />
            <v-carousel-item cover src="/images/webp/hilde.webp" />
            <v-carousel-item cover src="/images/webp/mone.webp" />
            <v-carousel-item cover src="/images/webp/steffi.webp" />
            <v-carousel-item cover src="/images/webp/gaby.webp" />
            <v-carousel-item cover src="/images/webp/moni.webp" />
            <v-carousel-item cover src="/images/webp/kristina.webp" />
            <v-carousel-item cover src="/images/webp/vorstand-2.webp" />
        </v-carousel>            
                
        <v-container class="pa-0 pb-16">
            <p class="pb-md-4"> Von links nach rechts: </p>
            <p v-for="person in data"
                :key="person.id">
    
                - {{ person.name }} ({{ person.role }})
            </p>
        </v-container> 
            
    </v-container>
</template>

<script setup>

    const { data, error } = useFetch("data/people.json")

</script>
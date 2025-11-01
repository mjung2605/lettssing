<template>
    <v-container class="d-flex flex-column flex-md-row ga-md-8 pl-0 pr-0">

        <v-carousel hide-delimiters>
            <v-carousel-item cover src="/images/vorstand.jpeg" />
            <v-carousel-item cover src="/images/katja.png" />
            <v-carousel-item cover src="/images/hilde.png" />
            <v-carousel-item cover src="/images/mone.png" />
            <v-carousel-item cover src="/images/steffi.png" />
            <v-carousel-item cover src="/images/gaby.png" />
            <v-carousel-item cover src="/images/moni.png" />
            <v-carousel-item cover src="/images/kristina.png" />
            <v-carousel-item cover src="/images/vorstand-2.jpg" />
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
    const { data, error } = await(useFetch("data/people.json"))

</script>
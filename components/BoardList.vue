<template>
    <v-container class="d-flex ga-8 pl-0 pr-0">

        <v-carousel hide-delimiters>
            <v-carousel-item src="/images/vorstand.jpeg" />
            <v-carousel-item src="/images/katja.jpg" />
            <v-carousel-item src="/images/hilde.jpg" />
            <v-carousel-item src="/images/mone.jpg" />
            <v-carousel-item src="/images/steffi.jpg" />
            <v-carousel-item src="/images/gaby.jpg" />
            <v-carousel-item src="/images/moni.jpg" />
            <v-carousel-item src="/images/kristina.jpg" />
            <v-carousel-item src="/images/vorstand-2.jpg" />
        </v-carousel>            
                
        <v-container class="pa-0">
            <p class="pb-4"> Von links nach rechts: </p>
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
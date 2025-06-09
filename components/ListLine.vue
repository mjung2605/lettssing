<template>
    <v-container class="d-flex ga-8 pl-0 pr-0">
            <v-img src="/vorstand.jpeg" width="400px" max-width="400px"/>
            
                
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
<template>
    <v-container class="d-flex ga-8 pl-0 pr-0">
            <v-img src="/vorstand.jpeg" width="300px" max-width="300px"/>
            <p> Von links nach rechts:
                <ul>
                    
                    <li v-for="person in data"
                        :key="person.id">
                
                        {{ person.name }} ({{ person.role }})
                
                    </li>

                </ul>

            </p>
        </v-container>
</template>

<script setup>
    const { data, error } = await(useFetch("/data/people.json"))

</script>
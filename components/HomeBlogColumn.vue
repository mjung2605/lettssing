<template>
     <!-- color="light-green-lighten-5" -->
        
            <v-container class=" pl-0 pr-0 pb-16">
                <v-row>
                    <v-col v-for="post in data"
                    :key="post.id"
                    cols="12"
                    sm="12">
                        <v-sheet class="d-flex ga-4 justify-center ">
                            <v-img cover src="/images/placeholder.png" aspect-ratio="1/1" width="400px"></v-img>
                            <v-container class="d-flex flex-column ga-4 align-start">
                                <h2>{{ post.title }}</h2>
                                <p> {{ post.text.length > 400 ? post.text.slice(0, 400) + "..." : post.text }} </p>
                                <Button text="Mehr Lesen" />
                            </v-container>
                            
                        </v-sheet>
                        
                    </v-col>
                </v-row>
            </v-container>

</template>

<script setup>
    const { data, error } = await useFetch("data/blog.json");
</script>
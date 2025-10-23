<template>   
    <v-container class=" pl-0 pr-0 pb-16 pt-16">
        <v-row>
            <v-col v-for="post in posts"
            :key="post.id"
            cols="12">
                <v-sheet class="d-flex ga-4 justify-center ">
                    <v-img cover :src="post.teaser_img" aspect-ratio="1/1" width="400px"></v-img>
                    <v-container class="d-flex flex-column ga-4 align-start">
                        <h2>{{ post.title }}</h2>
                        <p> {{ post.text.length > 400 ? post.text.slice(0, 400) + "..." : post.text }} </p>
                        <Button text="Mehr Lesen" :to="`/artikel/${post.id}`" />
                    </v-container>
                    
                </v-sheet>
                
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>

    const { data: posts } = await useFetch('/api/posts');

</script>
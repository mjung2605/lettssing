<template>   
    <v-container class="pl-0 pr-0 pb-16 pt-16">
        <v-row>
            <v-col v-for="post in posts"
            :key="post.id"
            cols="12" class="pb-8">
                <v-sheet class="d-flex flex-column flex-md-row ga-md-4 justify-center pa-4" color="transparent">
                    <v-img cover :src="post.teaser_img" aspect-ratio="1/1" width="400px" alt="Bild von Veranstaltungs-Poster"></v-img>
                    <v-container class="d-flex flex-column ga-4 align-start pa-0 pa-md-4">
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
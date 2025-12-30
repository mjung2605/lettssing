<template>   
    <v-container class="pl-0 pr-0 pb-16 pt-16">
        <v-row>
            <v-col v-for="post in posts"
            :key="post.id"
            cols="12" class="pb-8">
                <v-lazy>
                    <v-sheet class="d-flex flex-column flex-md-row ga-md-4 justify-center pa-4" color="transparent">
                        <v-img cover :src="post.teaser_img" class="article-teaser-img" alt="Bild von Veranstaltungs-Poster"></v-img>
                        <v-container class="d-flex flex-column ga-4 align-start pa-0 pa-md-4">
                            <h2>{{ post.title }}</h2>
                            <p> {{ post.text.length > 700 ? post.text.slice(0, 700) + "..." : post.text }} </p>
                            <Button v-if="post.img" text="Mehr Lesen" :to="`/artikel/${post.id}`" />
                        </v-container>
                        
                    </v-sheet>
                </v-lazy>
            </v-col>
        </v-row>
    </v-container>

</template>

<style>

    .article-teaser-img {
        max-width: 400px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

</style>

<script setup>

    const { data: posts } = await useFetch('/api/posts'); // id, created_at, title, text, teaser_img, img[]


</script>
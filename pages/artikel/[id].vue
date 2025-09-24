<template>
    <v-container class="pt-16" v-if="post">
        <h1>{{ post?.title }}</h1>
        <p>{{ post?.text }}</p>
        <v-carousel v-if="img_array!=null" class="pt-8 pb-16" hide-delimiters>
            <v-carousel-item v-for="(i, index) in img_array" :key="index">
                <v-img cover :src="i"/>
            </v-carousel-item>
        </v-carousel>
    </v-container>

    <v-container class="pt-16" v-else>
        <h1>Lade Artikel...</h1>
    </v-container>

</template>

<script setup>
    const route = useRoute();
    console.log(route.params.id)

    const img_array = ref(null)

    const { data: post, pending, error } = useFetch(`/api/posts/${route.params.id}`)
    if(pending) console.log("Lädt noch:", pending.value)
    if(error) console.log("Error beim Laden eines einzelnen Artikels:", error.value)

    console.log("test")
    watch(post, (newPost) => {
        console.log('Post geladen:', newPost.img.value)
        img_array.value = newPost.img

    })

</script>
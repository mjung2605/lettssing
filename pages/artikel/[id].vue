<template>
    <v-container class="pt-16" v-if="post">
        <h1>{{ post?.title }}</h1>
        <p>{{ post?.text }}</p>
    </v-container>

    <v-container class="pt-16" v-else>
        <h1>Lade Artikel...</h1>
    </v-container>

</template>

<script setup>
    const route = useRoute();
    console.log(route.params.id)


    const { data: post, pending, error } = useFetch(`/api/posts/${route.params.id}`)
    if(pending) console.log("Lädt noch:", pending.value)
    if(error) console.log("Error beim Laden eines einzelnen Artikels:", error.value)

    watch(post, (val) => {
        console.log('Post geladen:', val)
    })

</script>
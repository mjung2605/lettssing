<template>
    <v-app>
   
        <NavBar />

        <v-main>

            <NuxtPage />

        </v-main> 

        <Footer />
    
    </v-app>

</template>

<script setup lang="ts">

    useSeoMeta({
        title: "Lett's Sing e.V.",
        ogTitle: "Lett's Sing e.V.",
        description: "Lett's Sing e.V.: der Frauenchor aus Lette im Herzen Westfalens",
        ogDescription: "Lett's Sing e.V.: der Frauenchor aus Lette im Herzen Westfalens",
        ogImage: '/images/lettssing-logo.jpg'
    })

    // für LCP/Performance: preload des ersten carousel bildes + der font
    useHead({
        link: [
            {
              rel: 'preload',
              href: '/fonts/MaiandraGDRegular.woff2',
              as: 'font',
              type: 'font/woff2',
              crossorigin: 'anonymous'
            },
            {
              rel: 'preload',
              as: 'image',
              href: '/images/webp/banner2-1.webp',
              fetchpriority: 'high'
            }
        ]
    })
    
</script>
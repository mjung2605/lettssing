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
        ogImage: 'https://www.letts-sing.de/images/lettssing-logo.jpg'
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
        ], 
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MusicGroup",
                    "name": "Lett's Sing e.V.",
                    "url": "https://www.letts-sing.de",
                    "logo": "https://www.letts-sing.de/images/lettssing-logo.jpg",
                    "description": "Lett's Sing e.V.: der Frauenchor aus Lette im Herzen Westfalens",
                    "foundingDate": "2024",
                    "sameAs": [
                        "https://www.instagram.com/letts_sing",
                        "https://www.youtube.com/channel/UCOABxYdq-XZAmkVqPe_DXYQ"
                    ]
                })
            }
        ]
    })
    
</script>
<template>
        <v-carousel hide-delimiters show-arrows="hover" height="430" cycle>
            <v-carousel-item src="/images/banner1.jpg" cover />
            <v-carousel-item src="/images/banner2-1.jpg" cover />
            <v-carousel-item src="/images/banner3-1.jpg" cover />
            <v-carousel-item src="/images/banner4-1.jpg" cover />
            <v-carousel-item src="/images/banner5-1.jpg" cover />
            <v-carousel-item src="/images/banner6-1.jpg" cover />
        </v-carousel>
        
        <ArticleOverview />
        
</template>

<!-- GLOBAL STYLES -->
<style>
    body {
        background-color: #00617813;
        font-family: 'Maiandra GD', sans-serif;
    }
    h2 {
        padding-top: 32px;
        color: #e50051;
    }

    h3, h4, p {
        padding-top: 16px;
    }

    a:visited {
        color: #005e4b;
    }
    a{
        color: #008066
    }


</style>

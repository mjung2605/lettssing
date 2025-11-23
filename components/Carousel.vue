<template>
    <div>
        <ClientOnly>
            <!-- carousel wird nur im Client ersetzt -->
            <v-carousel @vue:mounted="isHydrated=true" hide-delimiters show-arrows="hover" height="430" cycle>
                  <v-carousel-item src="/images/webp/banner2-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
                  <v-carousel-item src="/images/webp/banner3-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
                  <v-carousel-item src="/images/webp/banner4-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
                  <v-carousel-item src="/images/webp/banner5-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
                  <v-carousel-item src="/images/webp/banner6-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
            </v-carousel>
        </ClientOnly>
      
        <!-- Fallback (server-rendered LCP) -->
        <img v-if="!isHydrated"
          src="/images/webp/banner2-1.webp"
          alt="Karussell-Foto, welches den Chor abbildet"
          fetchpriority="high"
          class="hero-lcp"
        />
    </div>
</template>

<style>
    .hero-lcp {
        width: 100%;
        height: 430px;
        object-fit: cover;
        display: block;
    }
</style>

<script setup>
    const isHydrated = ref(false)
</script>

<!-- Original Code before Edit:
<template>
        <v-carousel hide-delimiters show-arrows="hover" height="430" cycle>
            <v-carousel-item src="/images/webp/banner2-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
            <v-carousel-item src="/images/webp/banner3-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
            <v-carousel-item src="/images/webp/banner4-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
            <v-carousel-item src="/images/webp/banner5-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
            <v-carousel-item src="/images/webp/banner6-1.webp" alt="Karussell-Foto, welches den Chor abbildet" cover />
        </v-carousel>
</template> 

-->
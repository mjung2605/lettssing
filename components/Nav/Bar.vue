<template>
    <v-app-bar
        color="white"
        :elevation="1"
        height="100"
        class="px-4 md:px-16 py-4"
    >
        <v-app-bar-title>
            <NuxtLink to="/">
                <v-img src="/images/webp/lettssing-logo.webp" alt="Letts-Sing-Logo" width="200" height="auto" class="mx-md-4 object-contain" />
            </NuxtLink>
        </v-app-bar-title>

        <!-- desktop nav -->
        <template v-slot:append>
            <div class="d-none d-md-flex items-center space-x-4">

                <!-- Navigation -->
                <NavButton to="/" label="Home" />
                <NavButton to="/ueber_uns" label="Über uns" />
                <NavButton to="/foerderung" label="Förderung" />
                <NavButton to="/kontakt" label="Kontakt" />
                
                <!-- Social Media -->
                <v-btn
                    href="https://www.instagram.com/letts_sing"
                    target="_blank"
                    variant="plain"
                    color="primary" class="font-weight-bold" style="font-size: large;">
                    <svg-icon :path="mdiInstagram" width="24" height="24" class="mr-2" viewBox="0 0 24 24" />
                    Instagram
                </v-btn>
                <v-btn
                    href="https://www.youtube.com/channel/UCOABxYdq-XZAmkVqPe_DXYQ"
                    target="_blank"
                    variant="plain"
                    color="primary" class="font-weight-bold" style="font-size: large;">
                    <svg-icon :path="mdiYoutube" width="24" height="24" class="mr-2" viewBox="0 0 24 24" />
                    Youtube
                </v-btn>
            </div>

            <!-- mobile nav -->
            <v-btn
                variant="plain"
                color="primary"
                class="d-md-none"
                @click="drawer = !drawer"
            ><svg-icon :path="mdiMenu" width="24" height="24" viewBox="0 0 24 24" /></v-btn>
        </template>

    </v-app-bar>

    <ClientOnly> <!-- Client Only um Hydration Mismatch durch Breakpoints zu vermeiden: Screen mit echten breakpoints erst auf client gerendert, weil server assumed einf irgendwas -->
        <!-- öffnet sich bei mobile nav // außerhalb navbar, um clipping zu vermeiden -->
        <v-navigation-drawer
            v-model="drawer"
            temporary
            location="right"
            class="pt-4 d-md-none h-full w-full pt-16" 
        >
            
            <v-list density="comfortable" nav>
            <!-- Navigation -->
                <v-list-item
                    v-for="(item, i) in navItems"
                    :key="i"
                    :to="item.to"
                    link
                    @click="drawer = false"
                    :aria-label="`Link zu ${item.label}`"
                >
                    <v-list-item-title class="pa-8" style="font-size: large; font-weight: bold;">{{ item.label }}</v-list-item-title>
                </v-list-item>
            <!-- Social Media (externer Link) -->
                <v-list-item 
                    v-for="(item, i) in socialItems"
                    :key="i"
                    link
                    @click="drawer = false"
                    :aria-label="`Link zu ${item.label}`"
                >
                    <v-list-item-title class="pa-8" style="font-size: large; font-weight: bold;">{{ item.label }}</v-list-item-title>
                    <svg-icon :path="item.path" width="24" height="24" class="mr-2" viewBox="0 0 24 24" />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>    
    </ClientOnly>

</template>

<script setup>
    // svg icon renderer
    import SvgIcon from '@jamescoyle/vue-icon';
    // benötigte icons
    import { mdiMenu, mdiInstagram, mdiYoutube } from '@mdi/js'

    const drawer = ref(false)

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Über uns', to: '/ueber_uns' },
        { label: 'Förderung', to: '/foerderung' },
        { label: 'Kontakt', to: '/kontakt' },
    ]

    const socialItems = [
        { href: 'https://www.instagram.com/letts_sing', path: 'mdiInstagram', label: 'Instagram' },
        { href: 'https://www.youtube.com/channel/UCOABxYdq-XZAmkVqPe_DXYQ', path: 'mdiYoutube', label: 'YouTube' },
    ]
</script>


<style scoped>
    .v-navigation-drawer {
        transition: transform 0.25s ease-in-out;
    }
</style>

<template>
    <v-app-bar
        color="white"
        :elevation="1"
        height="100"
        class="px-4 md:px-16 py-4"
    >
        <v-app-bar-title>
            <a href="/">
                <v-img src="/images/lettssing-logo.jpg" width="200 " class="mx-md-4" />
            </a>
        </v-app-bar-title>

        <!-- desktop nav -->
        <template v-slot:append>
            <div class="d-none d-md-flex items-center space-x-4">
                <NavButton to="/" label="Home" />
                <NavButton to="/ueber_uns" label="Über uns" />
                <NavButton to="/foerderung" label="Förderung" />
                <NavButton to="/kontakt" label="Kontakt" />
            </div>

            <!-- mobile nav -->
            <v-btn
                icon="mdi-menu"
                variant="text"
                color="primary"
                class="d-md-none"
                @click="drawer = true"
            />
        </template>

    </v-app-bar>

    <!-- öffnet sich bei mobile nav // außerhalb navbar, um clipping zu vermeiden -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        class="pt-4 d-md-none h-full pt-16" 
    >
        <v-list density="comfortable" nav>
            <v-list-item
                v-for="(item, i) in navItems"
                :key="i"
                :to="item.to"
                link
                @click="drawer = false"
            >
                <v-list-item-title class="pa-8" style="font-size: large, ; font-weight: bold;">{{ item.label }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>    
</template>

<script setup>

const drawer = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Über uns', to: '/ueber_uns' },
  { label: 'Förderung', to: '/foerderung' },
  { label: 'Kontakt', to: '/kontakt' },
]
</script>

<style scoped>
    .v-navigation-drawer {
        transition: transform 0.25s ease-in-out;
    }
</style>

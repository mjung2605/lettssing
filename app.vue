<template>
  <v-app>
    
    <v-app-bar color="primary" :elevation="0" class="w-64">
      <v-app-bar-title>Lett's Sing</v-app-bar-title>
        <template v-slot:append>
          <v-btn 
            v-for="link in links_header"
            @click="navigateTo(link.route)"
            :key="link.name"
            :text="link.name"
            variant="text"
          ></v-btn>
        </template>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main> 

    <v-footer app color="surface-light" class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3">
      <v-btn 
          v-for="link in links_footer"
          @click="navigateTo(link.route)"
          :key="link.name"
          :text="link.name"
          variant="text"
        ></v-btn>
        <div class="flex-1-0-100 text-center">Credits</div>
    </v-footer>
  </v-app>
</template>


<!-- auslagern! -->
<script setup>
  const links_header = [ {"name": "Home", "route": "/"}, {"name": "Archiv", "route": "/archiv"}, {"name": "Unser Team", "route": "/unser_team"}]
  const links_footer = [ {"name": "Impressum", "route": "/impressum"}, {"name": "Datenschutz", "route": "/datenschutz"}]
</script>
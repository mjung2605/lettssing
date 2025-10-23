<template>
    <v-app-bar color="white" :elevation="1" class="px-16 py-8" height="72">
      <v-app-bar-title>
        <v-img src="/images/lettssing-logo.jpg" width="164px" class="mx-8"></v-img>
      </v-app-bar-title>
        <template v-slot:append>
          <NavButton to="/" label="Home"/>
          <NavButton to="/ueber_uns" label="Über uns"/>
          <NavButton to="/foerderung" label="Förderung"/>
          <NavButton to="/kontakt" label="Kontakt" />
        </template>
    </v-app-bar>
</template>
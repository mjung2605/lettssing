<template>
    <v-app-bar color="primary" :elevation="0" class="px-16">
      <v-app-bar-title>Lett's Sing</v-app-bar-title>
        <template v-slot:append>
          <NavButton to="/" label="Home"/>
          <NavButton to="/ueber_uns" label="Über uns"/>
          <NavButton to="/foerderung" label="Förderung"/>
          <NavButton to="/kontakt" label="Kontakt" />
        </template>
    </v-app-bar>
</template>
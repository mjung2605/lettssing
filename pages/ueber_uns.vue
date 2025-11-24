

<template>
    <v-container class="pt-16">

        <h1 class="pt-8">Über uns</h1>

        <p class="pt-8 pb-2">Im November 2024 wurde unser Frauenchor offiziell als eingetragener Verein gegründet. Doch unsere Geschichte begann schon im August 2022 als Projektchor. Was als lockere Musikinitiative startete, hat sich als Gruppe motivierter Sängerinnen entwickelt, die sich leidenschaftlich der Musik widmet. <br><br>

            Wir treffen uns wöchentlich zur Probe, um unsere Stimmen zu schulen, unser Repertoire zu erweitern und vor allem gemeinsam die Freude am Singen zu teilen. Unsere Sängerinnen kommen aus verschiedenen Altersgruppen, was uns zu einer vielfältigen und dynamischen Gemeinschaft macht. <br><br>

            Unser Ziel ist es, nicht nur die Musik zu leben, sondern auch mit unseren Auftritten einen positiven Beitrag zur lokalen Kultur zu leisten. Wir freuen uns darauf, mit neuen Projekten und Konzerten die Begeisterung für Musik weiterzugeben.<br><br>

            Schaut auch gerne bei unseren befreundeten Chören vorbei:
        </p>


        <a class="d-flex" href="https://www.lyra-lette.de"><svg-icon :path="mdiOpenInNew" width="24" height="24" class="mr-2" viewBox="0 0 24 24" />Lyra Lette-Webseite</a><br>
        <a class="d-flex" href="https://www.v8ices.de"><svg-icon :path="mdiOpenInNew" width="24" height="24" class="mr-2" viewBox="0 0 24 24" />v8ices-Webseite</a>        



        <h2 class="pt-12">Chorleitung</h2>

        <v-lazy><AboutLeader /></v-lazy>
        


        <h2 class="pt-8">Vorstand</h2>

        <v-lazy><AboutBoard /></v-lazy>


        
    </v-container>
</template>

<script setup>
    // svg icon renderer
    import SvgIcon from '@jamescoyle/vue-icon';
    // benötigte icons
    import { mdiOpenInNew } from '@mdi/js'
</script>


<template>

    <div class="p-0 m-0" :style="{backgroundColor: backgroundComputed}">
        <v-carousel hide-delimiters show-arrows="hover" height="430" cycle>
            <v-carousel-item src="/images/ls-1.jpeg" cover />
            <v-carousel-item src="/images/ls-4.jpeg" cover />
            <v-carousel-item src="/images/ls-9.jpg" cover />
            <v-carousel-item src="/images/ls-10.jpg" cover />
            <v-carousel-item src="/images/ls-11.jpg" cover />
            <v-carousel-item src="/images/ls-12.jpg" cover />
            <v-carousel-item src="/images/ls-13.jpg" cover />

        </v-carousel>

        <v-container class="d-flex flex-column ga-4 pl-0 pr-0 pb-16 pt-16">
            <p>Diese Seite dient dem <b>Ausprobieren verschiedener Styling-Optionen für die Webseite</b> (am Beispiel der Homepage). Auswählbar sind verschiedene Farben, Hinntergründe und Schriftarten. </p>
            <p>Die verfügbaren Schriftarten sind nur eine Auswahl der Systemschriftarten. Systemschriftarten sind auf jedem Gerät schon vorinstalliert und sehr leicht zu implementieren. Weitere Schriftarten können aber leicht hinzugefügt werden, falls ihr eigene Favoriten habt. Systemschriftarten sind über die Einstellungen des eigenen Computers (Windows 11: Einstellungen -> Personalisieren -> Schriftarten) zu finden, externe Schriftarten zum Beispiel über <a href="https://fonts.google.com">https://fonts.google.com</a>.</p>
            <p>Ein Tipp: Die Schriftart des Textes sollte vor allem gut lesbar (also eher schlicht) sein, da so ein Text tendenziell etwas kleiner ist. Die Überschriften können aber ruhig etwas ausgefallener aussehen! ;) </p>
            <p>Viel Spaß beim Ausprobieren!</p>
            <v-container class="pl-0 m-0">
                <v-switch v-model="changeFontTogether" color="primary" label="Gleiche Schriftart für Überschriften und Texte"></v-switch>
                <v-row>
                    <v-col cols="4">
                        <v-select v-model="backgroundSelect" label="Hintergrundfarbe"
                            :items="['Weiss', 'Pastellpink', 'Pastellpetrol']">
                        </v-select>

                    </v-col>
                    <v-col cols="4">
                        <v-select v-model="hColorSelect" label="Überschrift-Farbe"
                            :items="['Schwarz', 'Weiss', 'Pink', 'Petrol']">

                        </v-select>                        
                    </v-col>
                    <v-col cols="4">
                        <v-select v-model="textColorSelect" label="Text-Farbe"
                            :items="['Schwarz', 'Weiß', 'Grau', 'Pink', 'Petrol']">
                        </v-select>

                    </v-col>


                    <v-col v-if=changeFontTogether cols="4">
                        <v-select v-model="fontSelect" label="Schriftart"
                            :items="['Roboto', 'ArialRoundedMT', 'BerlinSansMT', 'BradleyHandITC', 'Gabriola', 'Harrington',  'HarlowSolid', 'LucidaCalligraphy', 'LucidaHandwriting', 'MicrosoftNewTaiLue', 'MaiandraGD', 'Qilka', 'TempusSansITC']">

                        </v-select>                        
                    </v-col>
                    
                    <v-col v-if=!changeFontTogether cols="4">
                        <v-select v-model="hFontSelect" label="Überschrift-Schriftart"
                            :items="['Roboto', 'ArialRoundedMT', 'BerlinSansMT', 'BradleyHandITC', 'Gabriola', 'Harrington',  'HarlowSolid', 'LucidaCalligraphy', 'LucidaHandwriting', 'MicrosoftNewTaiLue', 'MaiandraGD', 'Qilka', 'TempusSansITC']">

                        </v-select>                        
                    </v-col>

                    <v-col v-if=!changeFontTogether cols="4">
                        <v-select v-model="textFontSelect" label="Text-Schriftart"
                            :items="['Roboto', 'ArialRoundedMT', 'BerlinSansMT', 'BradleyHandITC', 'Gabriola', 'Harrington',  'HarlowSolid', 'LucidaCalligraphy', 'LucidaHandwriting', 'MicrosoftNewTaiLue', 'MaiandraGD', 'Qilka', 'TempusSansITC']">

                        </v-select>                        
                    </v-col>
                </v-row>

                

            </v-container>

        </v-container>

        <v-container class="pl-0 pr-0 pb-16">
            <v-row>
                <v-col v-for="post in posts"
                :key="post.id"
                cols="12">
                    <v-sheet elevation="0" color="transparent" class="d-flex ga-4 justify-center" >
                        <v-img cover :src="post.teaser_img" aspect-ratio="1/1" width="400px"></v-img>
                        <v-container class="d-flex flex-column ga-4 align-start">
                            <h2 :style="{color: hColorComputed, fontFamily: changeFontTogether? fontComputed : hFontComputed}">{{ post.title }}</h2>
                            <p :style="{color: textColorComputed, fontFamily: changeFontTogether? fontComputed : textFontComputed}"> {{ post.text.length > 400 ? post.text.slice(0, 400) + "..." : post.text }} </p>
                            <Button text="Mehr Lesen" :to="`/artikel/${post.id}`" />
                        </v-container>

                    </v-sheet>

                </v-col>
            </v-row>
        </v-container>
    </div>
        
</template>

<script setup>

    
    const { data: posts } = await useFetch('/api/posts');

    const backgroundSelect = ref('Weiss')
    const backgroundMap = {
        Pastellpetrol: '#00617813',
        Pastellpink: '#e5005109',
        Weiss: '#ffffff'
    }
    const backgroundComputed = computed(() => backgroundMap[backgroundSelect.value] || '#ffffff')

    const hColorSelect = ref('Schwarz')
    const hColorMap = {
        Schwarz: '#000000', 
        Weiss: '#ffffff',
        Petrol: '#006178',
        Pink: '#e50051'
    }
    const hColorComputed = computed(() => hColorMap[hColorSelect.value] || '#000000')

    const textColorSelect = ref('Schwarz')
    const textColorMap = {
        Schwarz: '#000000', 
        Weiss: '#ffffff',
        Grau: '#676767',
        Petrol: '#006178',
        Pink: '#e50051'
    }
    const textColorComputed = computed(() => textColorMap[textColorSelect.value] || '#000000')


    const changeFontTogether = ref(true)
    // -----
    // if changeFontTogether true
    const fontSelect = ref('Roboto')
    const fontMap = {
        Roboto: "'Roboto', sans-serif",
        ArialRoundedMT: "'Arial Rounded MT', sans-serif", 
        BerlinSansMT: "'Berlin Sans MT', sans-serif",
        BradleyHandITC: "'Bradley Hand ITC', sans-serif",
        Gabriola: "'Gabriola', sans-serif",
        Harrington: "'Harrington', sans-serif", 
        HarlowSolid: "'Harlow Solid', sans-serif",
        LucidaCalligraphy: "'Lucida Calligraphy', sans-serif",
        LucidaHandwriting: "'Lucida Handwriting', sans-serif",
        MicrosoftNewTaiLue: "'Gabriola', sans-serif",
        MaiandraGD: "'Maiandra GD', sans-serif",
        Qilka: "'Qilka', sans-serif",
        TempusSansITC: "'Tempus Sans ITC', sans-serif"

    }
    const fontComputed = computed(() => fontMap[fontSelect.value] || "'Roboto', sans-serif")

    // if changeFontTogether false
    const hFontSelect = ref('Roboto')
    const hFontComputed = computed(() => fontMap[hFontSelect.value] || "'Roboto', sans-serif")

    const textFontSelect = ref('Roboto')
    const textFontComputed = computed(() => fontMap[textFontSelect.value] || "'Roboto', sans-serif")
    // -----

</script>
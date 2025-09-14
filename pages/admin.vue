<template>
    <v-container class="pt-16">
        <h1>Admin-Seite</h1>
        <p>Hi! Das hier ist das "Kontrollzentrum" der Lett's Sing-Webseite. Hier kannst du neue Blog-Artikel erstellen oder alte Artikel aktualisieren oder löschen.</p>
 


        <h2 class="pt-12">Neuen Blog-Artikel erstellen</h2>
        <p class="pt-4">Hier wählst du zunächst einen passenden <b>Titel</b> für den Artikel und schreibst dann in der <b>Beschreibung</b> auf, was passiert ist, was ihr gemacht habt, wie viel Spaß es gemacht hat...
            Du solltest außerdem für jeden Artikel ein <b>Vorschaubild</b> auswählen, welches dann auf der Homepage als Erstes (neben dem Titel) angezeigt wird. Wähle etwas, was das Event gut repräsentiert! 
            Im Anschluss können in der <b>Bildergalerie</b> noch weitere Fotos oder Videos des Events hinzugefügt werden.</p>


            <!-- @submit.prevent verhindert das automatische handling bei click auf submit (senden an /post (bzw. /action, was wir hier eh nicht angegeben haben)
                sowie neuladen des Browsers). Stattdessen wird unsere Funktion unten aufgerufen und so über JS mit der Api kommuniziert-->
        <v-form class="pt-8" v-model="valid" @submit.prevent="uploadPost">
            <v-container class="pr-0 pl-0">
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        variant="solo"
                        v-model="title"
                        :rules="textRules"
                        label="Titel"
                        required>       
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                        variant="solo"
                        v-model="description"
                        :rules="textRules"
                        label="Beschreibung"
                        required>       
                        </v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-file-input
                        prepend-icon="mdi-camera"
                        variant="solo"
                        v-model="teaser_img"
                        label="Vorschaubild"
                        required>       
                        </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-file-input
                        prepend-icon="mdi-camera"
                        variant="solo"
                        v-model="img"
                        multiple
                        label="Bildergalerie">       
                        </v-file-input>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn color="primary" type="submit">Hochladen</v-btn>
                    </v-col>
                </v-row>
            </v-container>

        </v-form>


        <h2 class="pt-12">Blog-Artikel bearbeiten oder löschen</h2>
        <v-container class=" pl-0 pr-0 pb-16">
            <v-row>
                <v-col v-for="post in posts"
                :key="post.id"
                cols="12"
                sm="12">
                    <v-sheet class="d-flex ga-4 justify-center ">
                        <v-img cover src="/images/placeholder.png" aspect-ratio="1/1" width="400px"></v-img>
                        <v-container class="d-flex flex-column ga-4 align-start">
                            <h2>{{ post.title }}</h2>
                            <p> {{ post.text.length > 400 ? post.text.slice(0, 400) + "..." : post.text }} </p>


                            <!-- : (short for v-bind) ist nicht nur für dynamische werte, sondern auch, um vue zu sagen, dass es sich um einen
                                    JS-Ausdruck und nicht um einen String handelt!! -->
                            <Button color="primary" text="Bearbeiten" :onClicking="openDialogDelete=true" />
                            <Button color="error" text="Löschen" />

                            <DialogDeletePost v-model="openDialogDelete" :post-title="post.title"/>
                        </v-container>
                        
                    </v-sheet>
                    
                </v-col>
            </v-row>

            <!-- post-title anstatt postTitle: HTML Syntax (kebab case anstatt camel case) -->
            <DialogDeletePost v-model="openDialogDelete" post-title="{{  }}"/>


        </v-container>


    </v-container>

</template>


<script setup>


    // upload logic
    const valid = ref(false)

    const title = ref(null)
    const description = ref(null)
    const teaser_img = ref(null) // noch nicht verwendet
    const img = ref([]) // noch nicht verwendet

    const textRules = [
        value => !!value || 'Bitte fülle dieses Feld aus.'
    ]

    async function uploadPost() {

        try {
            await $fetch('/api/posts', {
                method: 'POST',
                body: { title: title.value, description: description.value }
            })
        }
        catch(e) {
            console.error('Fehler beim Hochladen des Posts: ', e)
        }
    }


    // fetch logic
    const { data: posts } = await useFetch('/api/posts');

    // update logic

    // delete logic
    const openDialogDelete = ref(false);



</script>
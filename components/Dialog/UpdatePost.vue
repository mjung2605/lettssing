<template>
    <!-- $event ist platzhalter für was auch immer der hoschschickt, hier false, wird getriggert bei z.B. klicken von esc oder klicken außerhalb-->
    <v-dialog :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" width="500px">
        <v-card class="p-8" max-width="500" :title="postTitle" text="Hier kannst du den Artikel nach Belieben bearbeiten.">
        

            <v-form class="p-8"> <!-- TODO: fix// onchange? -->
                <v-text-field label="Titel" :placeholder="postTitle" :v-model="newTitle" />
                <v-text-field label="Beschreibung" :placeholder="postDesc" :v-model="newDesc"  />

            </v-form>

            <v-card-actions>
                <!-- das ist eine von mir selbst implementierte änderung im model, deswegen braucht es einen zusätzlichen emit-->
                <v-btn color="primary" @click="emit('update:modelValue', false)">Abbrechen</v-btn>

                <!-- confirmDelete mit seinen Emits ist unten definiert -->
                <v-btn color="error" @click="confirmUpdate()">Bearbeiten bestätigen</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>


</template>

<script setup>
    defineProps ({
        modelValue: Boolean,
        postTitle: String, 
        postDesc: String
    })

    // legt dest, welche emits in den parent geschickt werden
    const emit = defineEmits(['update:modelValue', 'confirm'])

    function confirmUpdate() {
      emit('confirm')                  // für parent, bestätigung nach oben
      emit('update:modelValue', false)
    }



    // form logic
    const newTitle = ref('');
    const newDesc = ref('');


</script>
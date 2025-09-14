<template>
    <!-- $event ist platzhalter für was auch immer der hoschschickt, hier false, wird getriggert bei z.B. klicken von esc oder klicken außerhalb-->
    <v-dialog :model-value="modelValue"
                @update:model-value="$emit('update:modelValue', $event)" width="500px">
        <v-card class="p-8" max-width="500" :title="post?.title" text="Bist du dir sicher, das du diesen Artikel löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.">
        
            <v-card-actions>
                <!-- das ist eine von mir selbst implementierte änderung im model, deswegen braucht es einen zusätzlichen emit-->
                <v-btn color="primary" @click="$emit('update:modelValue', false)">Abbrechen</v-btn>
                
                <!-- confirmDelete mit seinen Emits ist unten definiert -->
                <v-btn color="error" @click="confirmDelete()">Löschen bestätigen</v-btn>
            </v-card-actions>
        </v-card>

        <v-row>
            <v-col cols="12" md="6">
                
                
            </v-col>
        </v-row>


        

    </v-dialog>


</template>

<script setup>

    defineProps ({
        modelValue: Boolean,
        post: Object  // bc thats a thing apparently
    })

    // legt dest, welche emits in den parent geschickt werden
    const emit = defineEmits(['update:modelValue', 'confirm'])

    function confirmDelete() {
      emit('confirm')                  // für parent, bestätigung nach oben
      emit('update:modelValue', false)
    }

</script>
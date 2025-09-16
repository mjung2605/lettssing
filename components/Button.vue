<template>
    <v-btn :color="color" class="pa-2" :to="to" @click="emitClick()">
        {{ text }}
    </v-btn>
</template>

<script setup>
    defineProps(
        {
            text: String,
            color: {
                type: String, 
                default: "primary"
            }, 
            to: {
                type: String,
                default: null
            }
        }
    );


    // nach außen --- Parent-Komponente kann jetzt ein @click Event auslösen.
    // muss in komponente selbst auch nochmal gesetzt werden (s.o.)
    // d.h. ich kann im parent jetzt einfach @click schreiben
    defineEmits(['click']);

    function emitClick(event) {
        // nur click emitten, wenn kein 'to' gesetzt ist, sonst fehler
        if (!to) {
            emit('click', event)
        }
    }

</script>
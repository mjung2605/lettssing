<template>
    <v-btn :color="color" class="pa-2" >
        {{ text }}
    </v-btn>
</template>

<script setup>
    defineProps(
        {
            text: String,
            color: String,
        }
    );


    // nach außen --- Komponente kann jetzt ein @click Event auslösen.
    // d.h. ich kann im parent jetzt einfach @click schreiben
    defineEmits(['click']);

</script>
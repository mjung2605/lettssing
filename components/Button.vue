<template>
    <v-btn color="primary" class="pa-2">
        {{ text }}
    </v-btn>
</template>

<script setup>
    defineProps(
        {
            text: String
        }
    )

</script>
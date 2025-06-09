<template>
     <!-- color="light-green-lighten-5" -->
        <v-sheet >
            <v-container class="pt-16 pb-16">
                <v-row>
                    <v-col v-for="post in data"
                    :key="post.id"
                    cols="12"
                    sm="4">
                        <v-sheet class="d-flex flex-column ga-4 justify-center">
                            <v-img cover src="/images/vorstand.jpeg" aspect-ratio="1/1"></v-img>
                            <h2>{{ post.title }}</h2>
                            <p> {{ post.text.length > 120 ? post.text.slice(0, 120) + "..." : post.text }} </p>
                            <v-btn variant="tonal" class="pa-2">mehr lesen</v-btn>

                        </v-sheet>
                        
                    </v-col>
                </v-row>
            </v-container>
            
        
        </v-sheet>
</template>

<script setup>
    const { data, error } = await useFetch("/data/blog.json");

    watchEffect(() => {
  console.log("DATA:", data.value);
  if (error.value) console.error("Fehler beim Laden:", error.value);
});
</script>
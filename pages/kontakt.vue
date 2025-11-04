<template>
    <v-container class="pt-16"> 
        <h1 class="pt-8">Kontakt</h1>
        <p class="pt-8">Schreibe uns eine Nachricht!</p>
        <v-form class="pt-8" v-model="valid" @submit.prevent="onSubmit">
            <v-container class=" pr-0 pl-0">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                        variant="solo"
                        v-model="firstname"
                        :rules="textRules"
                        label="Vorname"
                        required>       
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                        variant="solo"
                        v-model="lastname"
                        :rules="textRules"
                        label="Nachname"
                        required>       
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                        variant="solo"
                        v-model="email"
                        :rules="emailRules"
                        label="E-Mail-Adresse"
                        required>       
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                        variant="solo"
                        v-model="tel"
                        :rules="telRules"
                        label="Telefonnummer (freiwillig)">       
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                        variant="solo"
                        v-model="message"
                        :rules="textRules"
                        label="Nachricht"
                        required>       
                        </v-textarea>
                    </v-col>
                    <v-col cols="12">

                        <!-- bindung zu variable checkbox (true/false bzw checked/not checked), s. skript -->
                        <v-checkbox v-model="checkbox" :rules="checkboxRules">

                            <!-- arbeitet mit label-slot der checkbox, setzt da was rein (das ist der Text neben der Checkbox) -->
                            <template v-slot:label>
                              <div>
                                Ich stimme der Verarbeitung meiner Daten gemäß der
                                <!-- click.stop verhindert Austritt des Klicks "nach außen", d.h. Anwählen der Checkbox wird nicht dadurch ausgelöst. -->
                                <a
                                  href="/datenschutz"
                                  target="_blank"
                                >Datenschutzerklärung</a>
                                 zu.
                              </div>
                            </template>
                        </v-checkbox>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn color="primary" type="submit">Absenden</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

        <v-snackbar v-model="success">
            <p class="d-flex align-center justify-center pb-4">Ihre Nachricht wurde erfolgreich versendet.</p>
        </v-snackbar>
        
    </v-container>
</template>

<script setup>


    const valid = ref(false)
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const tel = ref('')
    const message = ref('')
    const success = ref(null)
    const checkbox = ref(false)

    // vue rules in form of array
    const textRules = [
        value => !!value || 'Bitte fülle dieses Feld aus.'
    ]

    const emailRules = [
        value => !!value || 'Bitte fülle dieses Feld aus.',
        value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Bitte gib eine gültige E-Mail-Adresse ein.'
    ]       

    const telRules = [
        value => value === '' ||
                /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/.test(value) ||
                'Bitte gib eine gültige Telefonnummer ein (freiwillig).'
    ]

    const checkboxRules = [
        value => value || 'Die E-Mail kann ohne die Zustimmung nicht versendet werden.'
    ]

    function onSubmit() {
        if(valid.value) sendEmail()
        else console.log("E-Mail value nicht valid")
    }

    async function sendEmail() {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${firstname.value} ${lastname.value}`,
                email: email.value,
                tel: tel.value,
                message: message.value
            })
        })

        const result = await response.json()
        console.log("email result:", result, result.success)
        success.value = result.success

    }

</script>

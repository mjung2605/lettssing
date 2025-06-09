<template>
    <v-container class="pt-16">
        <h1>Kontakt</h1>
        <p class="pt-8">Schreibe uns eine Nachricht!</p>
        <v-form class="pt-8" v-model="valid">
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
                                  @click.stop
                                >
                                  Datenschutzerklärung
                                </a>
                                zu.
                              </div>
                            </template>
                        </v-checkbox>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn  color="primary" type="submit">Absenden</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        
    </v-container>
</template>

<script>

    export default {
        data: () => ({ 

            valid: false,

            firstname: '', // empty string for value saving (separat von validation)
            lastname: '',
            email: '',
            tel: '',
            message: '',
            checkbox: false,

            // vuetify :rules erwartet Array mit Regeln
            textRules: [
                value => {
                    if (value) return true;
                    return 'Bitte füllen Sie dieses Feld aus.';
                }
            ],
            emailRules: [
                value => {
                    if (value) return true;
                    return 'Bitte füllen Sie dieses Feld aus.';
                },
                value => {
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
                    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
                }
            ],
            telRules: [
                value => {
                    if (!value) return true; // Feld ist freiwillig!!
                    if (/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/.test(value)) return true;
                    return 'Bitte geben Sie eine gültige Telefonnummer ein (freiwillig).'
                }
            ],
            checkboxRules: [
                value => {
                    if(value) return true;
                    return 'Bitte stimmen Sie der Datenschutzerklärung zu.'
                }
            ]
            
        })
    }
</script>
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from "vuetify/iconsets/mdi-svg"
import { mdiInstagram, mdiYoutube, mdiOpenInNew } from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {


  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'mainTheme',
      themes: {
        mainTheme: {
          dark: false, 
          colors: {
            primary: "#006078",
            secondary: "#e50051",
            error: "#db0771ff"
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        instagram: mdiInstagram,
        youtube: mdiYoutube,
        open_in_new: mdiOpenInNew,
      },
      sets: {
        mdi,
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
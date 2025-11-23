import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
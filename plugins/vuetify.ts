import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  
  // define theme for color management?


  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'mainTheme',
      themes: {
        mainTheme: {
          dark: false, 
          colors: {
            primary: "#008066",
            secondary: "#ff0080"
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
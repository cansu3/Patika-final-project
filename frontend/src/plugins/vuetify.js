/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3FBF77',
          secondary: '#f29b8d',
          background:  'ffffff'//'#faf3fa'  //f4f3f4  f5f0f5
        },
        buttons: {
          primaryBtnColor:'#3FBF77',
          secondaryBtnColor: '#f29b8d'
        },
      },
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'outlined',
      rounded: true,
      margin: '1px'
    }
  }
})

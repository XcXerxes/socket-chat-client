import Vue from 'vue'
import 'vuetify/src/stylus/app.styl'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VForm,
  VTextField,
  VIcon,
  VGrid,
  VCard,
  VBtn,
  VToolbar,
  VProgressLinear,
  VProgressCircular,
  VSnackbar,
  transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VIcon,
    VForm,
    VBtn,
    VTextField,
    VGrid,
    VCard,
    VToolbar,
    VProgressLinear,
    VProgressCircular,
    VSnackbar,
    transitions
  },
  theme: {
    // primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

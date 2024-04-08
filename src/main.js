import './assets/main.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import store from './store'

import App from './App.vue'
import router from './router'

import i18n from '@/plugin/i18n'

import CountryFlag from 'vue-country-flag-next'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { Icon } from '@iconify/vue'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

import axios from 'axios'
app.config.globalProperties.$axios = axios;

import Sidebar from 'primevue/sidebar';

app.component('country-flag', CountryFlag)
app.component('Icon', Icon)

app.component('Sidebar', Sidebar)
import 'primevue/resources/themes/aura-light-green/theme.css'

import Rating from 'primevue/rating';
app.component('Rating', Rating)

import PrimeVue from 'primevue/config';
app.use(PrimeVue);

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

app.config.globalProperties.$toastify = Toastify;

// Vee Validate
import { defineRule } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return `This field is required`
  }
  return true
})

defineRule('email', (value) => {
  // Field is empty, should not pass
  if (!value) {
    return 'This field is required'
  }
  // Check if email
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})

defineRule('minLength', (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

import { Form, Field, ErrorMessage } from 'vee-validate'
app.component('VForm', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCaTVs4mAldtKZN_6XO955UjlCWWc45ZOs'
  }
})

app.use(i18n)

app.mount('#app')

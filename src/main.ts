import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'flag-icons/css/flag-icons.min.css'
import './assets/css/main.css'

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f3fafc',
      100: '#e1f5fa',
      200: '#bceaf5',
      300: '#7edaf1',
      400: '#34c9ef',
      500: '#0ba5cc',
      600: '#047c9a',
      700: '#055f76',
      800: '#004050',
      900: '#003040',
      950: '#001820',
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: AppPreset,
    options: {
      darkModeSelector: '.dark',
    },
  },
})

app.mount('#app')

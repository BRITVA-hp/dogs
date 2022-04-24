import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import './assets/css/media.css'
import './assets/fonts/stylesheet.css'

import script from './script'

const app = createApp(App)

app.mount('#app')
script()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../public/assets/css/style.css"
import "../public/assets/css/bootstrap.min.css"


createApp(App).use(router).mount('#app')

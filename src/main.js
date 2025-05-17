// src/main.js
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "@/assets/styles/main.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import i18n from "./i18n";

AOS.init({
    duration: 400,
    offset: 0,
    delay: 0,
    once: true,
    easing: 'ease-in-out',
});

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .use(i18n)
    .mount('#app')

// src/main.js
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/styles/main.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import i18n from "./i18n";

const GTM_ID = process.env.VUE_APP_GTM_ID;

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', GTM_ID);

// ✅ Config AOS
AOS.init({
    duration: 400,
    offset: 0,
    delay: 0,
    once: true,
    easing: 'ease-in-out',
});

// ✅ Change Page Tracking (page_view)
router.afterEach((to) => {
    if (window.gtag) {
        window.gtag('event', 'page_view', {
            page_path: to.fullPath,
            page_title: document.title,
        });
    }
});

// ✅ Enable Vue App
createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
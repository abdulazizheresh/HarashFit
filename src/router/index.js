import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CertificationsView from '@/views/CertificationsView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ServiceDetail from '@/views/ServiceDetailView.vue';
import BlogView from '@/views/BlogView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import PlansView from '@/views/PlansView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

import CookiePolicyView from '@/views/legal/CookiePolicyView.vue';
import PrivacyPolicyView from '@/views/legal/PrivacyPolicyView.vue';
import TermsAndConditionsView from '@/views/legal/TermsAndConditionsView.vue';
import ImpressumView from '@/views/legal/ImpressumView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/certifications', name: 'Certifications', component: CertificationsView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/services/:id', name: 'ServiceDetail', component: ServiceDetail, props: true },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPostView, props: true },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/plans', name: 'Plans', component: PlansView },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundView },

  { path: '/legal/cookie-policy', name: 'CookiePolicy', component: CookiePolicyView },
  { path: '/legal/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicyView },
  { path: '/legal/terms-and-conditions', name: 'TermsAndConditions', component: TermsAndConditionsView },
  { path: '/legal/impressum', name: 'Impressum', component: ImpressumView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // يجعل الصفحة تبدأ من الأعلى دائمًا
    return { top: 0 };
  },
});

export default router;

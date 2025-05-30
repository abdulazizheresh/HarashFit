<template>
    <div class="navbar-wrapper">
        <div class="navbar-container">
            <RouterLink to="/" @click="menuOpen = false">
                <img src="@/assets/images/logo.webp" alt="Logo" class="logo" loading="lazy"/>
            </RouterLink>

            <nav class="nav-links" :class="{ show: menuOpen }">
                <RouterLink to="/" class="link" @click="menuOpen = false">{{ t('navbar_home') }}</RouterLink>
                <RouterLink to="/services" class="link" @click="menuOpen = false">{{ t('navbar_services') }}
                </RouterLink>
                <RouterLink to="/blog" class="link" @click="menuOpen = false">{{ t('navbar_blog') }}</RouterLink>
                <RouterLink to="/about" class="link" @click="menuOpen = false">{{ t('navbar_about') }}</RouterLink>
                <RouterLink to="/contact" class="link" @click="menuOpen = false">{{ t('navbar_contact') }}</RouterLink>


                <button class="lang-switch mobile-only" @click="toggleLanguage">
                    {{ locale === 'ar' ? 'EN' : 'ع' }}
                </button>

                <RouterLink to="/plans" class="membership-btn mobile-only" @click="menuOpen = false">
                    {{ t('navbar_membership') }}
                </RouterLink>
            </nav>

            <div class="right-controls">
                <button class="lang-switch desktop-only" @click="toggleLanguage">
                    {{ locale === 'ar' ? 'EN' : 'ع' }}
                </button>

                <RouterLink to="/plans" class="membership-btn desktop-only">
                    {{ t('navbar_membership') }}
                </RouterLink>
            </div>



            <div class="hamburger" @click="menuOpen = !menuOpen">
                <span :class="{ open: menuOpen }"></span>
                <span :class="{ open: menuOpen }"></span>
                <span :class="{ open: menuOpen }"></span>

            </div>
        </div>
    </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const menuOpen = ref(false)
const route = useRoute()

const { t, locale } = useI18n()

const toggleLanguage = () => {
    locale.value = locale.value === 'ar' ? 'en' : 'ar'
    localStorage.setItem('locale', locale.value);
}

watch(() => route.fullPath, () => {
    menuOpen.value = false
})

</script>

<style scoped>
.navbar-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin: 20px 10px;
}

.navbar-container {
    background-color: rgb(32, 31, 31);
    width: 90%;
    max-width: 1240px;
    padding: 12px 24px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.right-controls {
    display: flex;
    align-items: center;
    gap: 12px;
}

/* زر اللغة */
.lang-switch {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.lang-switch:hover {
    background-color: #c40514;
    border-color: #c40514;
}


.navbar-container:lang(ar) .nav-links {
    flex-direction: row-reverse;
}

.logo {
    height: 70px;
    width: auto;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.link {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.link:hover {
    color: #c40514;
}

.membership-btn {
    background-color: #c40514;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* هيدر الموبايل */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 7px;
}

.hamburger span {
    height: 2px;
    width: 25px;
    background: white;
    transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
    transform: rotate(47deg) translateY(8px);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: rotate(-47deg) translateY(-8px);
}

/* Responsive */
@media (max-width: 768px) {
    .navbar-wrapper {
        padding: 0 20px;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 0% 20px;
        background: #1e1e1e;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        scrollbar-width: none;
        /* Firefox */
        max-height: 0;
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease;
        z-index: 99;
        border-radius: 50px 50px 20px 20px;
    }

    .nav-links::-webkit-scrollbar {
        display: none;
        /* Chrome/Safari */
    }


    .nav-links.show {
        max-height: 500px;
        opacity: 1;
        pointer-events: auto;
        padding: 20px 0;
    }

    .desktop-only {
        display: none;
    }

    .mobile-only {
        display: inline-block;
        margin-top: 7px;
    }

    .hamburger {
        display: flex;
    }
}

@media (min-width: 769px) {
    .mobile-only {
        display: none;
    }
}
</style>
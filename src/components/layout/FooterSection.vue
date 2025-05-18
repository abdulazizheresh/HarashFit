<template>
    <footer class="footer-section">
        <div class="footer-container">
            <!-- Logo & Description -->
            <div class="footer-col">
                <img :src="require('@/assets/images/logo.png')" alt="HarshFit" class="footer-logo" />
                <p :lang="locale">{{ t('footer_description') }}</p>

                <hr class="divider" />
                <h4 :lang="locale">{{ t('footer_contact_us') }}</h4>
                <div class="title-underline"></div>
                <p><strong>{{ t('footer_phone') }}</strong></p>
                <p><strong>{{ t('footer_email') }}</strong></p>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4 :lang="locale">{{ t('footer_links_title') }}</h4>
                <div class="title-underline"></div>
                <ul>
                    <li>
                        <RouterLink to="/services">{{ t('footer_link_services') }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog">{{ t('footer_link_blog') }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">{{ t('footer_link_about') }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">{{ t('footer_link_team') }}</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- Location -->
            <div class="footer-col">
                <h4 :lang="locale">{{ t('footer_location_title') }}</h4>
                <div class="title-underline"></div>
                <p :lang="locale">HarashFit</p>
                <p :lang="locale">Talla Al Alli, Amman, Jordan</p>
            </div>

            <!-- Hours -->
            <div class="footer-col">
                <h4 :lang="locale">{{ t('footer_hours_title') }}</h4>
                <div class="title-underline"></div>
                <p :lang="locale">{{ t('footer_hours_1') }}</p>
                <p :lang="locale">{{ t('footer_hours_2') }}</p>
                <p :lang="locale">{{ t('footer_hours_3') }}</p>
            </div>
        </div>

        <!-- Legal Links -->
        <div class="footer-legal">
            <RouterLink to="/legal/privacy-policy">{{ t('footer_privacy') }}</RouterLink>
            <RouterLink to="/legal/terms-and-conditions">{{ t('footer_terms') }}</RouterLink>
            <RouterLink to="/legal/cookie-policy">{{ t('footer_cookies') }}</RouterLink>
            <RouterLink to="/legal/impressum">{{ t('footer_impressum') }}</RouterLink>
        </div>

        <!-- Bottom Strip -->
        <div class="footer-bottom">
            <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-dumbbell"></i>
            </div>
            <p class="copyright">
                © 2025 HarashFit. {{ t('footer_rights') }}
            </p>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<style scoped>
.footer-section {
    background-color: #222;
    color: white;
    padding: 50px 20px 7px;
}

.footer-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 22px;
}

.footer-col {
    flex: 1 1 240px;
}

.footer-logo {
    height: 50px;
    margin-bottom: 16px;
}

.footer-col h4 {
    margin: 12px 0 -2px;
    font-size: 18px;
}

.title-underline {
    width: 40px;
    height: 2px;
    background-color: #c40514;
    margin: 10px 0 12px;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: #222;
    margin: 8px 0 16px;
    border: none;
}

.footer-col p,
.footer-col li {
    font-size: 14px;
    line-height: 1.6;
    margin: 6px 0;
}

.footer-col ul {
    list-style: none;
    padding: 0;
}

.footer-col ul li {
    border-left: 2px solid #fff;
    padding-left: 10px;
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: white;
    text-decoration: none;
}

.footer-col ul li a:hover {
    text-decoration: underline;
}

.footer-legal {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 10px;
    border-top: 1px solid #333;
    padding-bottom: 10px;
}

.footer-legal a {
    color: #ccc;
    text-decoration: none;
}

.footer-legal a:hover {
    text-decoration: underline;
    color: #fff;
}

.footer-bottom {
    border-top: 1px solid white;
    padding-top: 25px;
    text-align: center;
}

.social-icons {
    margin-bottom: 20px;
}

.social-icons i {
    margin: 0 12px;
    font-size: 27px;
    background-color: black;
    color: #fff;
    padding: 12px;
    border-radius: 50%;
}
</style>
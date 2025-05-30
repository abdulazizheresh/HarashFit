<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="left">
                <h1 v-html="t('hero_title')" :lang="locale"></h1>
                <p class="description" :lang="locale">{{ t('hero_description') }}</p>

                <div class="stats">
                    <div class="stat">
                        <h2>190+</h2>
                        <p>{{ t('stat_1') }}</p>
                    </div>
                    <div class="stat">
                        <h2>120+</h2>
                        <p>{{ t('stat_2') }}</p>
                    </div>
                </div>

                <div class="cert-button-wrapper">
                    <router-link to="/certifications" class="cert-button">
                        <span class="icon">🎓</span>
                        <span>{{ t('view_certifications') }}</span>
                    </router-link>
                </div>

            </div>

            <div class="right">
                <img src="@/assets/images/home_1.webp" alt="Hero" class="hero-img" loading="lazy"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<style scoped>
.hero-section {
    padding: 50px 40px;
    color: white;
    min-height: calc(40vh - 100px);
}

.hero-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.left {
    flex: 1;
    min-width: 300px;
}

.right {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.hero-img {
    max-width: 100%;
    height: auto;
    border-radius: 17px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 24px;
}

::v-deep(.highlight) {
    color: #ffffff;
}

::v-deep(.with) {
    color: #c40514;
}

.description {
    font-size: 17px;
    line-height: 1.4;
    margin-bottom: 32px;
    color: #e0e0e0;
}

.stats {
    display: flex;
    gap: 40px;
    margin-bottom: 32px;
}

.stat h2 {
    font-size: 32px;
    margin: 0;
    color: #ff5555;
}

.stat p {
    margin: 0;
    color: #ccc;
    font-size: 14px;
}

/* زر الشهادات */
.cert-button-wrapper {
    margin-top: 47px;
}

.cert-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(90deg, #c40514, #ff3c38);
    color: white;
    padding: 14px 28px;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(255, 60, 56, 0.35);
    border: none;
    cursor: pointer;
    letter-spacing: 0.5px;
}

.cert-button:hover {
    background: linear-gradient(90deg, #a30411, #380000);
    transform: translateY(-2px) scale(1.02);
}

.cert-button .icon {
    font-size: 20px;
    margin-top: 1px;
}

@media only screen and (max-width: 600px) {
  .hero-section {
    padding-top: 0px;
    min-height: auto;
  }
}
</style>
<template>
    <section class="about-certifications-section" data-aos="fade-up">
        <div class="container">
            <div class="cert-icon-wrap">
                <span class="cert-icon">🎓</span>
            </div>
            <h2 class="cert-title">{{ t("certifications_heading") }}</h2>
            <p class="cert-description">
                {{ t("certifications_text") }}
            </p>
            <router-link to="/certifications" class="cert-btn">
                {{ t("view_all_certifications") }}
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.about-certifications-section {
    padding: 27px 20px;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.container {
    max-width: 1000px;
    margin: auto;
}

.cert-icon-wrap {
    animation: popUp 0.8s ease forwards;
    margin-bottom: 10px;
}

.cert-icon {
    font-size: 48px;
    display: inline-block;
    color: #ff3c38;
    animation: pulse 2s infinite;
}

.cert-title {
    font-size: 36px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    background: linear-gradient(90deg, #ffffff, #c40514);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cert-description {
    font-size: 17px;
    color: #ddd;
    max-width: 700px;
    margin: 0 auto 40px auto;
    line-height: 1.8;
    animation: fadeUp 1s ease forwards;
}

.cert-btn {
    display: inline-block;
    background: linear-gradient(90deg, #c40514, #ff3c38);
    color: white;
    padding: 14px 32px;
    border-radius: 27px;
    font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(255, 60, 56, 0.3);
}

.cert-btn:hover {
    transform: translateY(-3px) scale(1.03);
    opacity: 0.95;
}

@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

@keyframes popUp {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
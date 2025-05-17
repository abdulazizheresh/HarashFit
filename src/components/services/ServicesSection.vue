<template>
    <section class="services-hero">
        <div class="services-container">
            <div class="services-text">
                <h1 :lang="locale">{{ t('services_hero_title') }}</h1>
                <p v-html="t('services_hero_text')" :lang="locale"></p>
            </div>
            <div class="services-image">
                <img src="@/assets/images/home_1.png" alt="Services" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<style scoped>
.services-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.services-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.services-text {
    flex: 1;
    min-width: 300px;
}

.services-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.services-text p {
    font-size: 24px;
    text-align: left;
}

::v-deep(.red) {
    color: #c40514;
    font-weight: bold;
}

.services-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.services-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .services-text h1 {
        font-size: 40px;
    }

    .services-text p {
        font-size: 20px;
    }

    .services-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .services-hero {
        margin-top: -27px;
        padding: 70px 20px;
    }

    .services-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        height: 350px;

    }

    .services-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .services-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .services-text p {
        text-align: left;
    }

    .services-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .services-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
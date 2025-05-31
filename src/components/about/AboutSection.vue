<template>
    <section class="about-hero">
        <div class="about-container">
            <div class="about-text">
                <h1 v-html="t('about_title')" :lang="locale"></h1>
                <p v-html="t('about_subtitle')" :lang="locale"></p>
            </div>
            <!-- <div class="about-image">
                <img src="@/assets/images/home_1.webp" alt="About Us" />
            </div> -->
        </div>
    </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<style scoped>
.about-hero {
    padding: 5px 20px;
    margin: 0 auto;
    color: white;
    /* align-items: center; */
    text-align: center;
    /* position: relative; */
    /* overflow: hidden; */
}

.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text h1 {
    color: white;
    background-clip: text;
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
}

.about-text p {
    font-size: 24px;
    text-align: center;
}

::v-deep(.red) {
    color: #c40514;
    font-weight: bold;
}

/* .about-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.about-image img {
    height: 280px;
    object-fit: contain;
} */

/* RESPONSIVE */
@media (max-width: 1024px) {
    .about-text h1 {
        font-size: 40px;
    }

    .about-text p {
        font-size: 20px;
    }

    /* .about-image img {
        height: 220px;
    } */
}

@media (max-width: 768px) {
    .about-hero {
        /* margin-top: -27px; */
        padding: 5px 25px;
        padding-top: 10px;
    }

    .about-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 140px;

    }

    .about-text {
        flex: unset;
        min-width: unset;
        width: 100%;
    }

    .about-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .about-text p {
        text-align: center;
    }

    /* .about-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .about-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    } */
}
</style>
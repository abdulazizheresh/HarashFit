<template>
    <section class="contact-hero">
        <div class="contact-container">
            <div class="contact-text">
                <h1 :lang="locale">{{ t('contact_hero_title') }}</h1>
                <p v-html="t('contact_hero_paragraph')" :lang="locale"></p>
            </div>
            <div class="contact-image">
                <img src="@/assets/images/home_1.png" alt="Contact Us" />
            </div>
        </div>
    </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>


<style scoped>
.contact-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.contact-text {
    flex: 1;
    min-width: 300px;
}

.contact-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.contact-text p {
    font-size: 24px;
    text-align: left;
}

::v-deep(.red) {
    color: #c40514;
    font-weight: bold;
}

.contact-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.contact-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .contact-text h1 {
        font-size: 40px;
    }

    .contact-text p {
        font-size: 20px;
    }

    .contact-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .contact-hero {
        margin-top: -27px;
        padding: 70px 20px;
        padding-top: 10px;
    }

    .contact-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        height: 350px;

    }

    .contact-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .contact-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .contact-text p {
        text-align: left;
    }

    .contact-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .contact-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
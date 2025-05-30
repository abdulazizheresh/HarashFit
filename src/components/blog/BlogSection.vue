<template>
    <section class="blog-hero">
        <div class="blog-container">
            <div class="blog-text" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
                <h1 :lang="locale">{{ t('blog_hero_title') }}</h1>
                <p v-html="t('blog_hero_text')" :lang="locale"></p>
            </div>
            <div class="blog-image">
                <img src="@/assets/images/home_1.webp" alt="Blog Hero" loading="lazy"/>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>


<style scoped>
.blog-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.blog-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.blog-text {
    flex: 1;
    min-width: 300px;
}

.blog-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.blog-text p {
    font-size: 24px;
    text-align: left;
}

::v-deep(.red) {
    color: #c40514;
    font-weight: bold;
}

.blog-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.blog-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .blog-text h1 {
        font-size: 40px;
    }

    .blog-text p {
        font-size: 20px;
    }

    .blog-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .blog-hero {
        margin-top: -27px;
        padding: 70px 20px;
        padding-top: 10px;
    }

    .blog-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        height: 350px;

    }

    .blog-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .blog-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .blog-text p {
        text-align: left;
    }

    .blog-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .blog-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
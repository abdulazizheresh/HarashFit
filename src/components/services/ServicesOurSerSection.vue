<template>
    <section class="our-services-section">
        <div class="container">
            <!-- Header -->
            <div class="header">
                <div class="title-area">
                    <div class="left-side" data-aos="fade-up" data-aos-duration="600">
                        <h5 :lang="locale"> {{ t('our_services_heading_small') }} </h5>
                        <h2 v-html="t('our_services_heading_big')" :lang="locale"></h2>
                        <div class="underline"></div>
                    </div>

                    <div class="right-side" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                        <p class="subtitle" :lang="locale">{{ t('our_services_description') }}</p>
                        <div class="small-underline"></div>

                        <button class="view-more" @click="showAll = !showAll">
                            {{ showAll ? t('our_services_view_less') : t('our_services_view_more') }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="services-grid">
                <!-- أول ٤ كروت -->
                <div v-for="(service, index) in firstFourServices" :key="service.id" class="service-card" :class="{
                    'large-card': index === 0,
                    'tall-card': index === 1,
                    'small-card': index === 2 || index === 3
                }" :style="{ backgroundImage: `url(/assets/images/services/${service.image})` }"
                    :data-aos="'fade-up'" :data-aos-delay="50 + (index * 20)" data-aos-duration="600">
                    <h3>
                        <span class="bold">{{ getFirstWord(service.locales[locale].title) }}</span>
                        {{ getRestWords(service.locales[locale].title) }}
                    </h3>
                    <p>{{ service.locales[locale].description }}</p>
                    <RouterLink :to="`/services/${service.id}`" class="learn-more">
                        {{ t('our_services_learn_more') }}
                    </RouterLink>
                </div>
            </div>

            <!-- الكروت الإضافية -->
            <div class="extra-services-grid" v-if="showAll">
                <div v-for="(service, index) in restServices" :key="service.id" class="service-card"
                    :style="{ backgroundImage: `url(/assets/images/services/${service.image})` }" :data-aos="'fade-up'"
                    :data-aos-delay="50 + (index * 20)" data-aos-duration="600">
                    <h3>
                        <span class="bold">{{ getFirstWord(service.locales[locale].title) }}</span>
                        {{ getRestWords(service.locales[locale].title) }}
                    </h3>
                    <p>{{ service.locales[locale].description }}</p>
                    <RouterLink :to="`/services/${service.id}`" class="learn-more">
                        {{ t('our_services_learn_more') }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { t, locale } = useI18n();
const showAll = ref(false);

const servicesList = ref([]);
const firstFourServices = ref([]);
const restServices = ref([]);

const getFirstWord = (text) => text.split(' ')[0];
const getRestWords = (text) => text.split(' ').slice(1).join(' ');

onMounted(async () => {
    const res = await fetch('/data/services_list.json');
    const data = await res.json();
    servicesList.value = data;
    firstFourServices.value = data.slice(0, 4);
    restServices.value = data.slice(4);
});
</script>


<style scoped>
.our-services-section {
    background: linear-gradient(to top, #810810, #000000 120%);
    color: #f0ece5;
    padding: 60px 20px;
    padding-top: 0;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.header {
    margin-bottom: 50px;
}

.title-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
}

.left-side,
.right-side {
    flex: 1;
    min-width: 300px;
}

.right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
}

.left-side h5 {
    color: #c4bfb6;
    margin-bottom: 0;
    font-size: 18px;
}

.left-side h2 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 0;
    line-height: 1.4;
}

.highlight {
    color: #c40514;
}

.underline,
.small-underline {
    width: 100px;
    height: 2px;
    background: #c40514;
    margin: 14px 0 20px;
}

.subtitle {
    font-size: 16px;
    color: #ccc;
    max-width: 400px;
}

.view-more {
    background: #c40514;
    color: white;
    padding: 12px 28px;
    border-radius: 25px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

/* Grid أساسي للكروت */
.services-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 250px 250px;
    gap: 20px;
    grid-template-areas:
        "large large tall tall"
        "small1 small2 tall tall";
}

.extra-services-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}

/* كرت */
.service-card {
    background: #444;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.service-card h3 {
    font-size: 20px;
    margin-bottom: -4px;
}

.bold {
    font-weight: bold;
    color: white;
    margin-bottom: -200;
}

.service-card p {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 20px;
}

.learn-more {
    text-decoration: none;
    background: #c40514;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    width: 95px;
    text-align: center;
    display: inline-block;
}

/* تحديد مواقع الكروت الأربعة الأولى */
.large-card {
    grid-area: large;
}

.tall-card {
    grid-area: tall;
}

.small-card:nth-of-type(3) {
    grid-area: small1;
}

.small-card:nth-of-type(4) {
    grid-area: small2;
}

/* موبايل */
@media (max-width: 768px) {

    .services-grid,
    .extra-services-grid {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 10px 16px;
        gap: 0;
        scroll-snap-type: x mandatory;
        scroll-padding-inline: 16px;
        -webkit-overflow-scrolling: touch;
    }

    .service-card {
        flex: 0 0 85%;
        scroll-snap-align: start;
        margin-right: 16px;
        min-height: 320px;
        border-radius: 12px;
    }

    .large-card,
    .tall-card,
    .small-card:nth-of-type(3),
    .small-card:nth-of-type(4) {
        grid-area: auto;
    }
}
</style>

<template>
    <section class="service-detail-hero">
        <div class="hero-images-grid" data-aos="fade-up" data-aos-delay="100">
            <img v-for="(s, i) in servicesList.slice(0, 4)" :key="i" :src="s.image" :alt="s.title" />
        </div>
        <div class="hero-box" data-aos="fade-up" data-aos-delay="200">
            <h1>
                <span class="highlight">{{ service.title.split(' ')[0] }}</span>
                {{ service.title.split(' ').slice(1).join(' ') }} – Body Fusion
            </h1>
            <h4 :lang="locale">{{ t('service_details_subtitle') }}</h4>
            <p :lang="locale">{{ service.description }}</p>
        </div>
    </section>

    <section class="service-detail-section">
        <div class="container">
            <!-- Left Content -->
            <div class="left">
                <!-- <div class="hero-box">
                    <h1>
                        <span class="highlight">{{ service.title.split(' ')[0] }}</span>
                        {{ service.title.split(' ').slice(1).join(' ') }} – Body Fusion
                    </h1>
                    <h4>"Burn Fat, Build Healthy Habits!"</h4>
                    <p>{{ service.description }}</p>
                </div> -->

                <h2 class="benefits-title" data-aos="fade-up" data-aos-delay="300">
                    {{ t('service_details_benefits_title') }}
                </h2>
                <div v-for="(section, i) in service.benefits" :key="i" class="benefit-section" :data-aos="'fade-up'"
                    :data-aos-delay="200 + i * 50">
                    <h3 class="section-title">{{ section.sectionTitle }}</h3>
                    <ul>
                        <li v-for="(point, j) in section.points" :key="j">
                            <i class="fas fa-check-circle"></i> {{ point }}
                        </li>
                    </ul>
                </div>

                <div class="video-box" data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <h4>{{ service.title }} – Body Fusion</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="video-play">
                        <span>&#9658;</span>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar -->
            <div class="right">
                <div class="widget" data-aos="fade-up" data-aos-delay="100">
                    <h4 :lang="locale">{{ t('service_details_operating_hours') }}</h4>
                    <ul>
                        <li v-for="(item, index) in service.schedule" :key="index">
                            <i class="fas fa-clock"></i> {{ item.day }} | {{ item.hours }}
                        </li>
                    </ul>
                </div>

                <div class="widget" data-aos="fade-up" data-aos-delay="100">
                    <h4 :lang="locale">{{ t('service_details_all_services') }}</h4>
                    <ul>
                        <li v-for="s in allServices" :key="s.id">
                            <RouterLink :to="`/services/${s.id}`">{{ s.title }} <i class="fas fa-arrow-right"></i>
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="widget" data-aos="fade-up" data-aos-delay="100">
                    <h4 :lang="locale">{{ t('service_details_membership_join') }}</h4>
                    <form>
                        <input type="text" :placeholder="t('service_details_join_name')" :lang="locale" />
                        <input type="email" :placeholder="t('service_details_join_email')" :lang="locale" />
                        <input type="tel" :placeholder="t('service_details_join_phone')" :lang="locale" />
                        <select>
                            <option :lang="locale">{{ t('service_details_join_plan') }}</option>
                            <option :lang="locale">{{ t('service_details_join_plan_basic') }}</option>
                            <option :lang="locale">{{ t('service_details_join_plan_premium') }}</option>
                        </select>
                        <button type="submit">{{ t('service_details_join_submit') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import servicesList from '@/data/ServicesList.js';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const route = useRoute();
const service = ref(null);
const allServices = servicesList;

watchEffect(() => {
    const id = parseInt(route.params.id);
    service.value = servicesList.find(s => s.id === id);
});


</script>

<style scoped>
.service-detail-hero {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    padding: 50px;
    margin-bottom: -7px;
    /* padding-bottom: -15px; */
    background: linear-gradient(to top, #810810, #000000 120%);
    flex-wrap: wrap;
}


.hero-images-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 300px;
    height: 300px;
}

.hero-images-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.hero-box {
    max-width: 600px;
    color: white;
    text-align: left;
}

.hero-box h1 {
    font-size: 38px;
    font-weight: bold;
    color: #cfc6b8;
}

::v-deep(.hero-box .highlight) {
    color: #c40514;
}

.hero-box h4 {
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
}

.hero-box p {
    font-size: 15px;
    color: #d5d2cb;
    line-height: 1.6;
}

.service-detail-section {
    padding: 20px;
    background: linear-gradient(to top, #810810, #000000 120%);
    color: white;
}

.container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 40px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.left {
    flex: 3;
    min-width: 300px;
}

.right {
    flex: 1;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 27px;
}

.benefits-title {
    font-size: 24px;
    border-bottom: 2px solid #c40514;
    padding-bottom: 10px;
    margin: 40px 0 24px;
}

.benefit-section {
    margin-bottom: 30px;
}

.section-title {
    color: #bbb;
    margin-bottom: 10px;
    font-size: 20px;
}

.benefit-section ul {
    list-style: none;
    padding-left: 0;
    font-size: 27;
}

.benefit-section li {
    margin-bottom: 14px;
    color: #ccc;
    font-size: 22px;
}

.benefit-section i {
    color: #c40514;
    margin-right: 5px;
}

.video-box {
    background: linear-gradient(to right, #4d1c1c, #000);
    padding: 20px;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.video-play span {
    font-size: 28px;
    background: white;
    border-radius: 50%;
    color: #c40514;
    padding: 10px 14px;
}

.description-paragraph {
    color: #ccc;
    font-size: 15px;
    line-height: 1.6;
    margin-top: 20px;
}

.widget {
    background: #911f1f;
    padding: 17px;
    width: 94%;
    border-radius: 10px;
}

.widget h4 {
    margin-bottom: 10px;
    border-bottom: 2px solid #fff;
    display: inline-block;
}

.widget ul {
    list-style: none;
    padding: 0;
}

.widget li {
    margin-bottom: 10px;
    color: white;
}

.widget form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.widget input,
.widget select {
    padding: 10px;
    border-radius: 6px;
    border: none;
}

.widget button {
    padding: 12px;
    background: #000;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

.widget ul li a {
    color: white;
    text-decoration: none;
}

.widget ul li a:hover {
    text-decoration: underline;
}


@media (max-width: 768px) {
    .service-detail-hero {
        padding: 20px;
        margin-top: -27px;
        margin-bottom: -17px;
    }

    .service-detail-section {
        padding: 20px;
        margin-top: -29px;
    }

    .container {
        flex-direction: column;
    }

    .right {
        width: 100%;
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        .service-detail-hero {
            flex-direction: column;
            align-items: flex-start;
        }

        .hero-images-grid {
            width: 100%;
            height: auto;
            grid-template-columns: repeat(2, 1fr);
        }

        .hero-box {
            padding-top: 20px;
        }
    }
}
</style>
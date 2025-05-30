<template>
    <section v-if="service" class="service-detail-hero">
        <div class="hero-image-box" data-aos="fade-up" data-aos-delay="100">
            <div class="image-overlay"></div>
            <img :src="`/assets/images/services/${service.image}`" :alt="service.locales[locale]?.title" loading="lazy"/>
            <div class="image-glow"></div>
        </div>

        <div class="hero-box" data-aos="fade-up" data-aos-delay="200">
            <!-- <div class="hero-badge">
                <i class="fas fa-star"></i>
                <span>{{ t('premium_service') }}</span>
            </div> -->
            <h1 class="hero-title" :lang="locale">
                {{ service.locales[locale]?.title }}
            </h1>
            <h4 class="hero-subtitle" :lang="locale">{{ t('service_details_subtitle') }}</h4>
            <p class="hero-description" :lang="locale">{{ service.locales[locale]?.description }}</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <i class="fas fa-users"></i>
                    <!-- <span>1000+ عميل</span> -->
                </div>
                <div class="stat-item">
                    <i class="fas fa-award"></i>
                    <!-- <span>خدمة مميزة</span> -->
                </div>
            </div>
        </div>
    </section>

    <section v-if="service" class="service-detail-section">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
        
        <div class="container">
            <div class="left">
                <div class="benefits-header" data-aos="fade-up" data-aos-delay="300">
                    <div class="benefits-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <h2 class="benefits-title">
                        {{ t('service_details_benefits_title') }}
                    </h2>
                </div>

                <div class="content-card">
                    <p class="description-paragraph" :lang="locale">
                        {{ service.locales[locale]?.content }}
                    </p>
                </div>

                <div v-for="(section, i) in service.benefits" :key="i" 
                     class="benefit-section" 
                     :data-aos="'fade-up'" 
                     :data-aos-delay="200 + i * 50">
                    
                    <div class="benefit-card">
                        <div class="benefit-header">
                            <h3 class="section-title">
                                {{ section.sectionTitle[locale] }}
                            </h3>
                        </div>
                        
                        <ul class="benefit-list">
                            <li v-for="(point, j) in section.points[locale]" :key="j" class="benefit-item">
                                <div class="check-icon">
                                    <i class="fas fa-check"></i>
                                </div>
                                <span>{{ point }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="widget services-widget" data-aos="fade-up" data-aos-delay="100">
                    <div class="widget-header">
                        <i class="fas fa-list-ul"></i>
                        <h4 :lang="locale">{{ t('service_details_all_services') }}</h4>
                    </div>
                    <ul class="services-list">
                        <li v-for="s in allServices" :key="s.id" class="service-item">
                            <RouterLink :to="`/services/${s.id}`" class="service-link">
                                <div class="service-icon">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                                <span>{{ s.locales[locale]?.title }}</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="widget membership-widget" data-aos="fade-up" data-aos-delay="200">
                    <div class="widget-header">
                        <i class="fas fa-user-plus"></i>
                        <h4 :lang="locale">{{ t('service_details_membership_join') }}</h4>
                    </div>
                    <form class="membership-form">
                        <div class="form-group">
                            <i class="fas fa-user form-icon"></i>
                            <input type="text" :placeholder="t('service_details_join_name')" :lang="locale" />
                        </div>
                        <div class="form-group">
                            <i class="fas fa-envelope form-icon"></i>
                            <input type="email" :placeholder="t('service_details_join_email')" :lang="locale" />
                        </div>
                        <div class="form-group">
                            <i class="fas fa-phone form-icon"></i>
                            <input type="tel" :placeholder="t('service_details_join_phone')" :lang="locale" />
                        </div>
                        <div class="form-group">
                            <i class="fas fa-crown form-icon"></i>
                            <select>
                                <option :lang="locale">{{ t('service_details_join_plan') }}</option>
                                <option :lang="locale">{{ t('service_details_join_plan_basic') }}</option>
                                <option :lang="locale">{{ t('service_details_join_plan_premium') }}</option>
                            </select>
                        </div>
                        <button type="submit" class="submit-btn">
                            <span>{{ t('service_details_join_submit') }}</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const route = useRoute();

const service = ref(null);
const allServices = ref([]);

const fetchData = async (id) => {
  const res = await fetch('/data/services_list.json');
  const data = await res.json();
  allServices.value = data;
  service.value = data.find(s => s.id === parseInt(id));
};

onMounted(() => {
  fetchData(route.params.id);
});

watch(() => route.params.id, (newId) => {
  fetchData(newId);
});

</script>

<style scoped>
/* Hero Section Styles */
.service-detail-hero {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    padding: 60px 50px;
    margin-bottom: -7px;
    background: linear-gradient(135deg, #000000 0%, #1a0404 30%, #810810 100%);
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
}

.service-detail-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, rgba(196, 5, 20, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(196, 5, 20, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.hero-image-box {
    width: 320px;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-image-box:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
        0 35px 70px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(196, 5, 20, 0.3);
}

.hero-image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.hero-image-box:hover img {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(196, 5, 20, 0.2) 0%, transparent 100%);
    z-index: 1;
}

.image-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(circle, rgba(196, 5, 20, 0.3) 0%, transparent 70%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.hero-image-box:hover .image-glow {
    opacity: 1;
}

.hero-box {
    max-width: 600px;
    color: white;
    text-align: left;
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #c40514, #ff0020);
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    box-shadow: 0 4px 15px rgba(196, 5, 20, 0.3);
}

.hero-title {
    font-size: 42px;
    font-weight: 800;
    color: #cfc6b8;
    line-height: 1.2;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.highlight {
    color: #c40514;
    background: linear-gradient(135deg, #c40514, #ff0020);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* .title-rest {
    display: inline-block;
    margin-left: 10px;
} */

.hero-subtitle {
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0;
    color: #f0f0f0;
}

.hero-description {
    font-size: 16px;
    color: #d5d2cb;
    line-height: 1.7;
    margin-bottom: 25px;
}

.hero-stats {
    display: flex;
    gap: 30px;
    margin-top: 25px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item i {
    color: #c40514;
    font-size: 18px;
}

/* Main Section Styles */
.service-detail-section {
    padding: 60px 20px;
    background: linear-gradient(135deg, #000000 0%, #1a0404 30%, #810810 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: rgba(196, 5, 20, 0.1);
    animation: float 6s ease-in-out infinite;
}

.shape-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.shape-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

.container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 50px;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.left {
    flex: 3;
    min-width: 300px;
}

.right {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Benefits Section */
.benefits-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 40px 0 30px;
}

.benefits-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #c40514, #ff0020);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(196, 5, 20, 0.3);
}

.benefits-icon i {
    font-size: 24px;
    color: white;
}

.benefits-title {
    font-size: 28px;
    font-weight: 800;
    color: #fff;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.content-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
}

.description-paragraph {
    color: #e0e0e0;
    font-size: 16px;
    line-height: 1.8;
    margin: 0;
}

.benefit-section {
    margin-bottom: 25px;
}

.benefit-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(196, 5, 20, 0.3);
}

.benefit-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.section-title {
    color: #f0f0f0;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
}

.benefit-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;
    color: #d0d0d0;
    font-size: 16px;
    line-height: 1.6;
}

.check-icon {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #c40514, #ff0020);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.check-icon i {
    font-size: 12px;
    color: white;
}

/* Widget Styles */
.widget {
    background: rgba(145, 31, 31, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.widget:hover {
    transform: translateY(-5px);
}

.widget-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.widget-header i {
    font-size: 20px;
    color: #c40514;
}

.widget-header h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: white;
}

/* Services List */
.services-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-item {
    margin-bottom: 12px;
}

.service-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
}

.service-link:hover {
    background: rgba(196, 5, 20, 0.2);
    transform: translateX(5px);
}

.service-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #c40514, #ff0020);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.service-icon i {
    font-size: 14px;
    color: white;
}

/* Membership Form */
.membership-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    position: relative;
}

.form-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 16px;
    z-index: 1;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-group input::placeholder {
    color: #aaa;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #c40514;
    box-shadow: 0 0 0 3px rgba(196, 5, 20, 0.2);
}

.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    background: linear-gradient(135deg, #000, #333);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
}

.submit-btn:hover {
    background: linear-gradient(135deg, #c40514, #ff0020);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(196, 5, 20, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
    .service-detail-hero {
        padding: 30px 20px;
        flex-direction: column;
        text-align: center;
    }

    .hero-image-box {
        width: 280px;
        height: 280px;
    }

    .hero-title {
        font-size: 32px;
    }

    .hero-stats {
        justify-content: center;
        flex-wrap: wrap;
    }

    .service-detail-section {
        padding: 40px 20px;
    }

    .container {
        flex-direction: column;
        gap: 30px;
    }

    .right {
        width: 100%;
    }

    .benefits-header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .benefit-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
}

@media (max-width: 480px) {
    .hero-image-box {
        width: 250px;
        height: 250px;
    }

    .hero-title {
        font-size: 28px;
    }

    .benefits-title {
        font-size: 24px;
    }

    .widget {
        padding: 20px;
    }
}
</style>
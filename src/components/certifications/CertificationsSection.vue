<template>
    <section class="certifications-section">
        <h2 class="section-title">{{ t("certifications_section.title") }}</h2>

        <div class="cert-scroll-wrapper">
            <div class="cert-grid">
                <div class="cert-card fade-up" v-for="(cert, index) in certifications" :key="index"
                    :style="{ animationDelay: `${index * 150}ms` }">
                    <img :src="cert.image" :alt="cert.title" class="cert-image" style="margin: auto" />
                    <div class="cert-info">
                        <h3 class="cert-title">{{ cert.title }}</h3>
                        <p class="cert-date">{{ cert.date }}</p>
                        <p class="cert-desc">{{ cert.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

import cert1 from '@/assets/certifications/cert_1.png';
import cert2 from '@/assets/certifications/cert_2.jpeg';
import cert3 from '@/assets/certifications/cert_3.jpeg';
import cert4 from '@/assets/certifications/cert_4.jpeg';
import cert5 from '@/assets/certifications/cert_5.jpeg';

const certifications = computed(() => [
    {
        title: "International Certified Personal Trainer (CPT)",
        date: t("certifications_section.cert_1_date"),
        image: cert1,
        description: t("certifications_section.cert_1_desc")
    },
    {
        title: "Physique and Bodybuilding Coach",
        date: t("certifications_section.cert_2_date"),
        image: cert2,
        description: t("certifications_section.cert_2_desc")
    },
    {
        title: "Women's Fitness Specialist (WFS)",
        date: t("certifications_section.cert_3_date"),
        image: cert3,
        description: t("certifications_section.cert_3_desc")
    },
    {
        title: "Weight Loss Specialist (WLS)",
        date: t("certifications_section.cert_4_date"),
        image: cert4,
        description: t("certifications_section.cert_4_desc")
    },
    {
        title: "Mental Toughness",
        date: t("certifications_section.cert_5_date"),
        image: cert5,
        description: t("certifications_section.cert_5_desc")
    }
]);
</script>

<style scoped>
.certifications-section {
    padding: 20px 20px;
    text-align: center;
}

.section-title {
  font-size: 42px;
  color: transparent;
  background: linear-gradient(90deg, #ffffff, #c40514);
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 70px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  animation: fadeUp 1s ease forwards;
}


.section-title::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #c40514, #ff3c38);
  border-radius: 2px;
  box-shadow: 0 0 8px #c40514aa;
}


.cert-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.cert-scroll-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
    scrollbar-width: thin;
    scrollbar-color: #f0ece5 #810810;
    scroll-snap-type: x mandatory;
}

.cert-scroll-wrapper::-webkit-scrollbar {
    height: 6px;
}

.cert-scroll-wrapper::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.cert-scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.cert-card {
  background: linear-gradient(145deg, #1a1a1a, #111);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.06);
  opacity: 0;
  animation: fancyFadeUp 0.9s ease forwards;
}


.cert-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 16px 40px rgba(255, 60, 56, 0.3);
}

.cert-image {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-bottom: 1px solid #333;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0;
    object-fit: contain;
}


.cert-info {
    padding: 24px;
    color: #f0f0f0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cert-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    line-height: 1.4;
}

.cert-title::before {
    content: "🎓";
    font-size: 18px;
}

.cert-date {
    font-size: 13px;
    color: #ccc;
    margin-bottom: 10px;
}

.cert-desc {
    font-size: 15px;
    color: #e5e5e5;
    line-height: 1.6;
}

@media (min-width: 640px) {
    .cert-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .cert-grid {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 15px;
    }

    .cert-card {
        flex: 0 0 280px;
        width: 280px;
        min-width: 280px;
        scroll-snap-align: center;
    }
}


@media (min-width: 1024px) {
    .cert-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@keyframes fancyFadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.96);
  }
  60% {
    opacity: 0.8;
    transform: translateY(-4px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

</style>
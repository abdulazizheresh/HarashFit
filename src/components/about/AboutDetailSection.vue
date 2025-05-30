<template>
  <section class="about-detail-section">
    <div class="container">
      <div class="left" data-aos="fade-up" data-aos-duration="600">
        <div class="image-grid">
          <div class="grid-item" v-for="(img, i) in imageList" :key="i">
            <img :src="img" alt="Grid Image" loading="lazy" />
          </div>

        </div>
      </div>

      <div class="right" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
        <h5 :lang="locale">{{ t('about_detail_title_small') }}</h5>
        <h2 v-html="t('about_detail_title_big')" :lang="locale"></h2>

        <p class="description" :lang="locale">{{ t('about_detail_paragraph') }}</p>

        <div class="stats">
          <div class="stat" v-for="(stat, index) in translatedStats" :key="index" data-aos="fade-up"
            :data-aos-delay="150 + index * 100" data-aos-duration="600">
            <h3>{{ stat.number }}<span>+</span></h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Bar -->
    <div class="features-bar">
      <div class="feature-item" v-for="(feature, index) in translatedFeatures" :key="index" data-aos="fade-up"
        :data-aos-delay="index * 100" data-aos-duration="600">
        <i :class="feature.icon"></i>
        <span :lang="locale">{{ feature.text }}</span>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();

const translatedStats = computed(() => [
  { number: 2, label: t('about_detail_stat_1') },
  { number: 5, label: t('about_detail_stat_2') },
  { number: 20, label: t('about_detail_stat_3') },
  // { number: 120, label: t('about_detail_stat_4') },
]);

const imageList = [
  new URL('@/assets/images/about/a1.webp', import.meta.url).href,
  new URL('@/assets/images/about/a2.webp', import.meta.url).href,
  new URL('@/assets/images/about/a3.webp', import.meta.url).href,
  new URL('@/assets/images/about/a4.webp', import.meta.url).href,
  new URL('@/assets/images/about/a5.webp', import.meta.url).href,
  new URL('@/assets/images/about/a6.webp', import.meta.url).href,
];


const translatedFeatures = computed(() => [
  { icon: 'fas fa-dumbbell', text: t('about_detail_feature_1') },
  { icon: 'fas fa-apple-alt', text: t('about_detail_feature_2') },
  { icon: 'fas fa-gem', text: t('about_detail_feature_3') },
  { icon: 'fas fa-chart-line', text: t('about_detail_feature_4') },
  { icon: 'fas fa-users', text: t('about_detail_feature_5') },
  { icon: 'fas fa-star', text: t('about_detail_feature_6') },
]);
</script>


<style scoped>
.about-detail-section {
  padding: 80px 0 0;
  background-color: #300003;
  background-image: url('@/assets/images/about_1.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 50px;
  align-items: center;
  padding: 0 20px;
}

.left {
  flex: 1;
  width: 100%;
}

.right {
  flex: 1;
  width: 100%;
}

.image-grid {
  width: 100%;
  max-height: 20%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  background: lightgray;
  border: 1px solid #333;
  border-radius: 7px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  display: block;
}



h5 {
  font-size: 20px;
  margin-top: -10px;
  color: #c4bfb6;
  margin-bottom: 10px;
}

h2 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
}

::v-deep(.highlight) {
  color: #911f1f;
}

.description {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}

.stat {
  flex: 0 0 calc(25% - 30px);
  text-align: center;
}

.stat h3 {
  font-size: 32px;
  font-weight: bold;
}

.stat span {
  color: #c40514;
}

.stat p {
  margin-top: -30px;
  font-size: 14px;
  color: #bbb;
}

/* Features Bar */
.features-bar {
  background: #911f1f;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 20px;
  margin-top: 50px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.feature-item i {
  background: #222;
  padding: 8px;
  border-radius: 50%;
  font-size: 18px;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  h2 {
    font-size: 36px;
  }

  .stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 30px;
  }

  .feature-item {
    font-size: 14px;
  }

  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-item {
    min-height: 120px;
  }
}
</style>
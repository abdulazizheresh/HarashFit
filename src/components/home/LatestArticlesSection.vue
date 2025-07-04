<template>
  <section class="latest-section">
    <div class="container">
      <h2
        class="section-title"
        data-aos="fade-up"
        v-html="t('latest_articles_title')"
        :lang="locale"
      ></h2>

      <div class="underline" data-aos="fade-up" data-aos-delay="50"></div>

      <div class="articles-grid">
        <div
          class="article-card"
          v-for="(article, index) in latestArticles"
          :key="article.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-easing="ease-out-cubic"
        >
          <img :src="getImageUrl(article.image)" :alt="article.locales[locale]?.title" loading="lazy"/>
          <h3>{{ article.locales[locale]?.title }}</h3>
          <RouterLink :to="`/blog/${article.id}`" class="more">
            {{ t('latest_articles_read_more') }}
          </RouterLink>
        </div>
      </div>

      <RouterLink
        to="/blog"
        class="view-more-btn"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="50"
        data-aos-duration="500"
        data-aos-easing="ease-out-cubic"
      >
        {{ t('latest_articles_view_more') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const latestArticles = ref([]);

const getImageUrl = (fileName) => `/assets/images/blogs/${fileName}`;

onMounted(async () => {
  const res = await fetch('/data/blog-posts.json');
  const allPosts = await res.json();
  const sorted = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  latestArticles.value = sorted.slice(0, 3);
});
</script>

<style scoped>
.latest-section {
  background: linear-gradient(to top, #250c0e, #000000 120%);
  color: white;
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
}

::v-deep(.section-title .thin) {
  font-weight: 400;
  color: #aaa;
}

.underline {
  width: 280px;
  height: 2px;
  background: linear-gradient(to right, #c40514 20%, #fff 20%);
  margin: 12px 0 40px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.article-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 10px;
}

.article-card h3 {
  font-size: 17px;
  margin: 16px 0;
  min-height: 48px;
  color: white;
}

.article-card .more {
  color: #c40514;
  text-decoration: none;
  border-left: 2px solid #c40514;
  padding-left: 8px;
  font-weight: bold;
  font-size: 14px;
}

.article-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.view-more-btn {
  display: inline-block;
  margin-top: 40px;
  background: #c40514;
  color: white;
  padding: 12px 28px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <section class="blogs-section">
    <div class="container">
      <!-- Title -->
      <div class="section-header" data-aos="fade-up">
        <h5 :lang="locale">{{ t('blogs_title_small') }}</h5>
        <h2 v-html="t('blogs_title_big')" :lang="locale"></h2>
        <div class="underline"></div>
      </div>

      <div class="blogs-grid">
        <!-- Latest Post -->
        <div v-if="latestPost" :key="latestPost.id" class="blog-card latest" data-aos="fade-up">
          <img :src="getImageUrl(latestPost.image)" alt="Latest Post" loading="lazy" />
          <div class="meta">
            <span><i class="fas fa-calendar-alt"></i> {{ latestPost.date }}</span>
            <span><i class="fas fa-comment"></i> {{ latestPost.comments }}</span>
          </div>
          <h3>{{ latestPost.locales[locale]?.title }}</h3>
          <p>{{ latestPost.locales[locale]?.excerpt }}</p>
          <RouterLink :to="`/blog/${latestPost.id}`" class="more">{{ t('blogs_read_more') }}</RouterLink>
        </div>

        <!-- Other Posts -->
        <div v-for="(post, index) in otherPosts" :key="post.id" class="blog-card regular" data-aos="fade-up"
          :data-aos-delay="(index + 1) * 0.1">
          <div class="card-img">
            <img :src="getImageUrl(post.image)" alt="Post" loading="lazy"/>
          </div>
          <div class="card-content">
            <div class="meta">
              <span><i class="fas fa-calendar-alt"></i> {{ post.date }}</span>
              <span><i class="fas fa-comment"></i> {{ post.comments }}</span>
            </div>
            <h4>{{ post.locales[locale]?.title }}</h4>
            <p>{{ post.locales[locale]?.excerpt }}</p>
            <RouterLink :to="`/blog/${post.id}`" class="more">{{ t('blogs_read_more') }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const latestPost = ref(null);
const otherPosts = ref([]);

const getImageUrl = (fileName) => `/assets/images/blogs/${fileName}`;

onMounted(async () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  });

  const res = await fetch('/data/blog-posts.json');
  const data = await res.json();

  const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  latestPost.value = sorted[0];
  otherPosts.value = sorted.slice(1);
});
</script>

<style scoped>
.blogs-section {
  background: linear-gradient(to top, #810810, #000000 95%);
  padding: 20px 20px;
  color: white;
}

.container {
  max-width: 1200px;
  margin: auto;
}

::v-deep(.section-header h5) {
  color: #aaa;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-header h2 {
  font-size: 28px;
  font-weight: bold;
}

::v-deep(.highlight) {
  color: #c40514;
}

::v-deep(.underline) {
  width: 80px;
  height: 2px;
  background: #c40514;
  margin: 16px 0 40px;
}

.blogs-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
}

.blog-card {
  background: #333;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.blog-card.latest img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 16px;
}

.blog-card .meta {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
  display: flex;
  gap: 20px;
}

.blog-card h3,
.blog-card h4 {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.blog-card p {
  font-size: 14px;
  color: #bbb;
  margin-bottom: 20px;
}

.blog-card .more {
  color: white;
  text-decoration: none;
  font-weight: bold;
  align-items: center;
  border-left: 2px solid white;
  padding-left: 7px;
}

.regular {
  display: flex;
  gap: 16px;
  background-color: #222;
  padding: 16px;
  align-items: flex-start;
}

.card-img img {
  width: 140px;
  max-width: 140px;
  height: 140px;
  object-fit: fill;
  border-radius: 4px;
}

.card-content {
  flex: 1;
}

@media (max-width: 900px) {
  .blogs-grid {
    grid-template-columns: 1fr;
  }
}
</style>

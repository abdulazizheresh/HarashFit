<template>
  <section class="post-detail-section">
    <div class="container">
      <!-- Left Content -->
      <div class="left" data-aos="fade-up" data-aos-duration="600" v-if="post">
        <img :src="`/assets/images/blogs/${post.image}`" alt="post image" class="post-image" data-aos="zoom-in"
          data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-back" loading="lazy" />
        <h1>{{ post.locales[locale]?.title }}</h1>
        <h4>{{ post.locales[locale]?.subtitle }}</h4>
        <p class="content">{{ post.locales[locale]?.content }}</p>

        <div class="section-block" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
          <h3 :lang="locale">
            {{ t('post_detail_why_title', { keyword: extractTitleKeyword(post.locales[locale]?.title) }) }}
          </h3>
          <ul>
            <li v-for="(reason, i) in post.locales[locale]?.whyEffective" :key="i">
              <i class="fas fa-check-circle"></i> {{ reason }}
            </li>
          </ul>
        </div>

        <div class="section-block" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
          <h3 :lang="locale">{{ t('post_detail_tips_title') }}</h3>
          <ul>
            <li v-for="(tip, i) in post.locales[locale]?.tips" :key="i">
              <i class="fas fa-check-circle"></i> {{ tip }}
            </li>
          </ul>
        </div>

        <div class="hashtags" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
          <span v-for="(tag, i) in post.locales[locale]?.hashtags" :key="i">#{{ tag }}</span>
        </div>

        <div class="social-icons" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
          <a href="https://www.facebook.com/harashfit/" target="_blank" rel="noopener" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/harashfit/" target="_blank" rel="noopener" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

      </div>

      <!-- Right Sidebar -->
      <div class="right" data-aos="fade-up" data-aos-delay="500" data-aos-duration="600">
        <div class="widget">
          <h4 :lang="locale">{{ t('post_detail_sidebar_hours_title') }}</h4>
          <ul class="hours">
            <li :lang="locale"><i class="fas fa-clock"></i> {{ t('post_detail_sidebar_hours_1') }}</li>
            <li :lang="locale"><i class="fas fa-clock"></i> {{ t('post_detail_sidebar_hours_2') }}</li>
            <li :lang="locale"><i class="fas fa-clock"></i> {{ t('post_detail_sidebar_hours_3') }}</li>
          </ul>
        </div>

        <div class="widget" data-aos="fade-up" data-aos-delay="600" data-aos-duration="600">
          <h4 :lang="locale">{{ t('post_detail_sidebar_related') }}</h4>
          <ul class="services">
            <li v-for="item in otherPosts.slice(0, 5)" :key="item.id">
              <RouterLink :to="`/blog/${item.id}`">
                {{ item.locales[locale]?.title }}
                <i class="fas fa-arrow-right"></i>
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const route = useRoute();

const post = ref(null);
const otherPosts = ref([]);

const extractTitleKeyword = (title) => {
  const words = title?.split(' ') || [];
  return words.length > 3 ? words.slice(0, 3).join(' ') : title;
};

const loadPost = async (id) => {
  const res = await fetch('/data/blog-posts.json');
  const allPosts = await res.json();
  post.value = allPosts.find((p) => p.id === id);
  otherPosts.value = allPosts.filter((p) => p.id !== id);
};

onMounted(() => {
  loadPost(Number(route.params.id));
});

watch(() => route.params.id, (newId) => {
  loadPost(Number(newId));
});
</script>



<style scoped>
.post-detail-section {
  padding: 40px 20px;
  background: linear-gradient(to top, #250c0e, #000000 110%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.left {
  flex: 3;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-self: flex-start;
}

.services li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.services li a:hover {
  text-decoration: underline;
  color: #ffd2d2;
}

.post-image {
  display: block;
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  object-position: center;
  margin: 0 auto 32px auto;

  border-radius: 20px;
  box-shadow:
    0 10px 30px rgba(196, 5, 20, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 3px solid;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: antialiased;

  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  animation: gentle-float 6s ease-in-out infinite;
}

.post-image:hover {
  transform: translateY(-8px) scale(1.02) translateZ(0);
  box-shadow:
    0 20px 50px rgba(196, 5, 20, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 30px rgba(196, 5, 20, 0.6);
  border-radius: 25px;
}

@keyframes gentle-float {

  0%,
  100% {
    transform: translateY(0px) translateZ(0);
  }

  50% {
    transform: translateY(-5px) translateZ(0);
  }
}

@keyframes loading-shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

h1 {
  font-size: 38px;
  font-weight: bold;
  color: white;
  margin-bottom: 12px;
}

h4 {
  font-size: 18px;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 28px;
}

.content {
  line-height: 1.8;
  color: #ddd;
  margin-bottom: 28px;
  font-size: 24px;
}

.section-block h3 {
  font-size: 22px;
  margin: 28px 0 14px;
  color: white;
}

.section-block ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 24px;
}

.section-block li {
  margin-bottom: 14px;
  color: #ccc;
  font-size: 20px;
}

.section-block i {
  color: #c40514;
  margin-right: 4px;
}

.note {
  color: #fff;
  font-size: 15px;
  margin-top: 16px;
}

.hashtags {
  margin-top: 34px;
}

.hashtags span {
  background: #222;
  padding: 7px 14px;
  border-radius: 17px;
  font-size: 14px;
  margin-right: 10px;
  color: #ccc;
}

.social-icons {
  margin-top: 34px;
  display: flex;
  gap: 14px;
  font-size: 20px;
}

.social-icons a {
  background: #c40514;
  padding: 5px;
  border-radius: 50%;
  color: white;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  text-decoration: none;
}

.social-icons a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px #c40514a1;
}

.widget {
  background: #911f1f;
  padding: 20px;
  width: 100%;
  justify-content: space-around;
  border-radius: 10px;
  color: white;
}

.widget h4 {
  margin-bottom: 10px;
  border-bottom: 2px solid #fff;
  display: inline-block;
}

.widget ul {
  padding-left: 0;
  list-style: none;
  font-size: 14px;
}

.widget li {
  margin-bottom: 17px;
  color: #fff;
}

.hours li i,
.services li i {
  margin-left: 0px;
  color: white;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
  }

  .right {
    width: 100%;
    margin-top: 40px;
  }

  .widget {
    width: 90%;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 28px;
  }

  .section-block li {
    font-size: 16px;
  }

  .hashtags span {
    font-size: 12px;
    padding: 5px 10px;
  }

  .social-icons {
    font-size: 18px;
    gap: 10px;
  }
}
</style>
<template>
  <section class="post-detail-section">
    <div class="container">
      <!-- Left Content -->
      <div class="left" data-aos="fade-up" data-aos-duration="600">
        <h1>{{ post.title }}</h1>
        <h4>{{ post.subtitle }}</h4>
        <p class="content">{{ post.content }}</p>

        <div class="section-block" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
          <h3 :lang="locale">{{ t('post_detail_why_title', { keyword: extractTitleKeyword(post.title) }) }}</h3>
          <ul>
            <li v-for="(reason, i) in post.whyEffective" :key="i">
              <i class="fas fa-check-circle"></i> {{ reason }}
            </li>
          </ul>
        </div>

        <div class="section-block" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
          <h3 :lang="locale">{{ t('post_detail_tips_title') }}</h3>
          <ul>
            <li v-for="(tip, i) in post.tips" :key="i">
              <i class="fas fa-check-circle"></i> {{ tip }}
            </li>
          </ul>
          <p class="note" :lang="locale">{{ t('post_detail_note') }}</p>
        </div>

        <div class="hashtags" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
          <span v-for="(tag, i) in post.hashtags" :key="i">#{{ tag }}</span>
        </div>

        <div class="social-icons" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="right" data-aos="fade-up" data-aos-delay="500" data-aos-duration="600">
        <div class="widget">
          <h4 :lang="locale">{{ t('post_detail_sidebar_hours') }}</h4>
          <ul class="hours">
            <li><i class="fas fa-clock"></i> Monday - Friday | 08.00 - 22.00 pm</li>
            <li><i class="fas fa-clock"></i> Saturday | 08.00 - 23.00 pm</li>
            <li><i class="fas fa-clock"></i> Sunday | 07.00 - 23.00 pm</li>
          </ul>
        </div>

        <div class="widget" data-aos="fade-up" data-aos-delay="600" data-aos-duration="600">
          <h4 :lang="locale">{{ t('post_detail_sidebar_services') }}</h4>
          <ul class="services">
            <li>Postural Correction <i class="fas fa-arrow-right"></i></li>
            <li>Endurance Training <i class="fas fa-arrow-right"></i></li>
            <li>Muscle Building <i class="fas fa-arrow-right"></i></li>
            <li>Weight Loss <i class="fas fa-arrow-right"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import blogPosts from '@/data/BlogList.js';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();


const route = useRoute();
const postId = Number(route.params.id);
const post = blogPosts.find((p) => p.id === postId);

const extractTitleKeyword = (title) => {
  const words = title.split(' ');
  return words.length > 3 ? words.slice(0, 3).join(' ') : title;
};

// const allTags = [
//     'Fitness & Workouts',
//     'Nutrition & Meal Plans',
//     'Weight Loss & Transformation',
//     'Strength & Muscle Building',
//     'Recovery & Wellness',
//     'Motivation & Mindset',
//     'Success Stories & Testimonials'
// ];
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
  font-size: 16px;
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

.social-icons i {
  background: #c40514;
  padding: 10px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}

.social-icons i:hover {
  opacity: 0.8;
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
  margin-left: 7px;
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
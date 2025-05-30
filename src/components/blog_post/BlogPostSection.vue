<template>
    <section class="post-hero" v-if="post">
        <div class="post-container">
            <div class="post-text">
                <h1>{{ post.locales[locale]?.title }}</h1>
                <p class="excerpt">{{ post.locales[locale]?.excerpt }}</p>
            </div>
        </div>
    </section>

    <section class="post-hero" v-else>
        <div class="post-container">
            <div class="post-text">
                <h1>Post not found</h1>
                <p class="excerpt">The blog post you're looking for doesn't exist.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()

const post = ref(null)

onMounted(async () => {
    const res = await fetch('/data/blog-posts.json')
    const posts = await res.json()

    const postId = Number(route.params.id)
    post.value = posts.find(p => p.id === postId)
})
</script>

<style scoped>
.post-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.post-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.post-text {
    flex: 1;
    min-width: 300px;
}

.post-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.post-text p {
    font-size: 24px;
    text-align: left;
}

.red {
    color: #c40514;
    font-weight: bold;
}

.post-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.post-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .post-text h1 {
        font-size: 40px;
    }

    .post-text p {
        font-size: 20px;
    }

    .post-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .post-hero {
        margin-top: -27px;
        padding: 70px 20px;
    }

    .post-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        height: 350px;

    }

    .post-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .post-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .post-text p {
        text-align: left;
    }

    .post-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .post-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
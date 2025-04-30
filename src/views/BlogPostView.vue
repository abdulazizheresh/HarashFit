<!-- src/views/BlogPostView.vue -->
<template>
    <BlogPostSection />
    <BlogPostDetail />
    <BlogPostQuestionsSection />
</template>

<script>
import BlogPostSection from '@/components/blog_post/BlogPostSection.vue'
import BlogPostDetail from '@/components/blog_post/BlogPostDetail.vue'
import BlogPostQuestionsSection from '@/components/blog_post/BlogPostQuestionsSection.vue';

export default {
    name: 'BlogPostView',
    components: {
        BlogPostSection,
        BlogPostDetail,
        BlogPostQuestionsSection
    }
}
</script>
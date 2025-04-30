<template>
    <BlogSection />
    <BlogsSection />
</template>

<script>
import BlogSection from "@/components/blog/BlogSection.vue";
import BlogsSection from "@/components/blog/BlogsSection.vue";

export default {
    name: "BlogView",
    components: {
        BlogSection,
        BlogsSection,
    },
};
</script>
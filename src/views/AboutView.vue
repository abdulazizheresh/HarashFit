<template>
    <AboutUsSection />
    <AboutUsWcuSection />
    <AboutUsDetailSection />
</template>

<script>
import AboutUsSection from "@/components/about/AboutSection.vue";
import AboutUsDetailSection from "@/components/about/AboutDetailSection.vue";
import AboutUsWcuSection from "@/components/about/AboutWcuSection.vue";
export default {
    name: "AboutView",
    components: {
        AboutUsSection,
        AboutUsWcuSection,
        AboutUsDetailSection,
    },
};
</script>
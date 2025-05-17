<template>
    <AboutUsSection />
    <AboutCertSection />
    <AboutUsWcuSection />
    <AboutUsDetailSection />
</template>

<script>
import AboutUsSection from "@/components/about/AboutSection.vue";
import AboutUsDetailSection from "@/components/about/AboutDetailSection.vue";
import AboutCertSection from "@/components/about/AboutCertSection.vue";
import AboutUsWcuSection from "@/components/about/AboutWcuSection.vue";
export default {
    name: "AboutView",
    components: {
        AboutUsSection,
        AboutUsWcuSection,
        AboutCertSection,
        AboutUsDetailSection,
    },
};
</script>
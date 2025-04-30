<script>
import HeroSection from "@/components/home/HeroSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import LatestArticlesSection from "@/components/home/LatestArticlesSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ServicesSection,
    LatestArticlesSection,
  },
};
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <LatestArticlesSection />
</template>

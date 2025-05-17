<script>
import HeroSection from "@/components/home/HeroSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import ServicesMpSection from "@/components/services/ServicesMpSection.vue";
import LatestArticlesSection from "@/components/home/LatestArticlesSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ServicesSection,
    ServicesMpSection,
    LatestArticlesSection,
  },
};
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <ServicesMpSection />
  <LatestArticlesSection />
</template>

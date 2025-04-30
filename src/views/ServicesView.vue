<template>
    <ServicesSection />
    <OurServicesSection />
    <ServicesOfferSection />
    <ServicesMpSection />
</template>

<script>
import ServicesSection from "@/components/services/ServicesSection.vue";
import OurServicesSection from "@/components/services/ServicesOurSerSection.vue";
import ServicesOfferSection from "@/components/services/ServicesOfferSection.vue";
import ServicesMpSection from "@/components/services/ServicesMpSection.vue";

export default {
    name: "ServicesView",
    components: {
        ServicesSection,
        OurServicesSection,
        ServicesOfferSection,
        ServicesMpSection,
    },
};
</script>
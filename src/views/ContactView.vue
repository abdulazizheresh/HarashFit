<template>
    <ContactSection />
    <ContactInfoSection />
    <ContactSendSection />
</template>

<script>
import ContactSection from '@/components/contact/ContactSection.vue'
import ContactInfoSection from '@/components/contact/ContactInfoSection.vue';
import ContactSendSection from '@/components/contact/ContactSendSection.vue';
export default {
    name: 'ContactView',
    components: {
        ContactSection,
        ContactInfoSection,
        ContactSendSection,
    }
}
</script>
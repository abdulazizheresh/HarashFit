<template>
  <v-app class="app-container">
    <NavbarSection />

    <v-main class="main-content">
      <router-view />
      <CookieConsent />
    </v-main>

    <FooterSection />
    <WhatsappSection />
  </v-app>
</template>

<script>
import NavbarSection from "@/components/layout/NavbarSection.vue";
import FooterSection from "@/components/layout/FooterSection.vue";
import WhatsappSection from "./components/WhatsappSection.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "App",
  components: {
    NavbarSection,
    FooterSection,
    WhatsappSection,
    CookieConsent,
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between; /* يدفع Header والأولاد والفوتر إلى الأطراف */
  background: linear-gradient(to bottom, #000000, #810810);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}
</style>

<template>
    <div class="whatsapp-wrapper">
        <div class="whatsapp-tooltip">{{ t("whatsapp_section_tooltip") }}</div>

        <a :href="`https://wa.me/+962790606181?text=${encodeURIComponent(t('whatsapp_section_message'))}`"
            target="_blank" rel="noopener noreferrer" class="floating-whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</template>


<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.whatsapp-wrapper {
    position: fixed;
    bottom: 25px;
    right: 27px;
    display: inline-block;
    z-index: 2000;
}

.whatsapp-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background-color: #25d366;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    display: none;
    z-index: 1199;
    text-align: center;
    font-weight: bold;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.whatsapp-wrapper:hover .whatsapp-tooltip {
    display: block;
    opacity: 1;
    transform: translateX(-70%) translateY(-15px);
}


.floating-whatsapp {
    position: relative;
    text-decoration: none;
    background-color: #25d366;
    color: white;
    padding: 17px;
    border-radius: 100%;
    font-size: 24px;
    z-index: 2000;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: pulse 2.5s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-whatsapp:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.floating-whatsapp i {
    font-size: 28px;
}

/* Animation pulse effect */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
    }

    70% {
        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
}

/* Smaller size on mobile */
@media (max-width: 600px) {
    .floating-whatsapp {
        padding: 14px;
        font-size: 14px;
        bottom: 5px;
        right: 5px;
    }

    .floating-whatsapp i {
        font-size: 24px;
    }
}
</style>
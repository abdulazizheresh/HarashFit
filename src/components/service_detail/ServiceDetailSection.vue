<template>
    <section class="service_detail-hero">
        <div class="service_detail-container">
            <div class="service_detail-text">
                <h1 v-if="service_detail">{{ service_detail.title }}</h1>
                <p v-else>Service not found.</p>
            </div>
            <!-- <div class="service_detail-image">
                <img src="@/assets/images/home_1.webp" alt="service_detail Hero" loading="lazy"/>
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import servicesList from '@/data/ServicesList.js';

const route = useRoute();
const service_detail_Id = parseInt(route.params.id);
const service_detail = computed(() =>
    servicesList.find(service => service.id === service_detail_Id)
);

</script>

<style scoped>
.service_detail-hero {
    max-width: 1280px;
    margin: auto;
    padding: 50px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.service_detail-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.service_detail-text {
    flex: 1;
    min-width: 300px;
}

.service_detail-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.service_detail-text p {
    font-size: 24px;
    text-align: left;
}

.red {
    color: #c40514;
    font-weight: bold;
}

.service_detail-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.service_detail-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .service_detail-text h1 {
        font-size: 40px;
    }

    .service_detail-text p {
        font-size: 20px;
    }

    .service_detail-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .service_detail-hero {
        margin-top: -27px;
    }

    .service_detail-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;

    }

    .service_detail-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .service_detail-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .service_detail-text p {
        text-align: left;
    }

    .service_detail-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .service_detail-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
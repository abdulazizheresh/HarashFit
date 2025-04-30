<template>
    <section class="services-section">
        <div class="container">
            <div class="header">
                <div class="header-text" data-aos="fade-up">
                    <h3>Our Services</h3>
                    <h2>
                        Best Services for a
                        <span class="highlight">More <br> Active</span>,
                        Healthy Life
                    </h2>
                </div>
            </div>

            <div class="cards">
                <div v-for="(service, index) in services" :key="index" class="card" :style="{ backgroundImage: `url(${service.image})` }" :class="service.area"
                    data-aos="fade-up" data-aos-offset="50" data-aos-delay="50" data-aos-duration="500"
                    data-aos-easing="ease-out-cubic">
                    <div class="overlay"></div>
                    <h3>
                        <span class="bold">{{ service.titleBold }}</span> {{ service.title }}
                    </h3>
                    <p>{{ service.description }}</p>
                    <RouterLink class="learn-more" :to="`/services/${service.id}`">
                        Learn More
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import servicesList from '@/data/ServicesList.js'

const services = servicesList.slice(0, 4).map((s) => {
    const words = s.title.split(' ')
    return {
        id: s.id,
        titleBold: words[0],
        title: words.slice(1).join(' '),
        description: s.description,
        image: s.image,
        area: s.id === 1 ? 'large' : s.id === 4 ? 'tall' : 'small',
    }
})
</script>

<style scoped>
.services-section {
    background: linear-gradient(to top, #810810, #000000 120%);
    padding: 40px;
    color: white;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 0px;
    flex-wrap: wrap;
}

.header-text {
    flex: 1;
    min-width: 300px;
}

.header-text h3 {
    font-size: 16px;
    color: #aaa;
    margin-bottom: 8px;
}

.header-text h2 {
    font-size: 32px;
    line-height: 1.4;
}

.highlight {
    color: #c40514;
}

/* البطاقات */
.cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.card {
    position: relative;
    background-color: #333;
    padding: 30px 20px;
    border-radius: 8px;
    background-size: cover;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    transition: transform 0.3s ease;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* ✅ لون غامق */
    z-index: 0;
}

/* ✅ تأكد أن النص فوق الـ overlay */
.card h3,
.card p,
.learn-more {
    position: relative;
    z-index: 1;
}

.card h3 {
    color: #ccc;
    margin-bottom: -14px;
}

.card .bold {
    font-weight: bold;
    color: white;
}

.card p {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 4px;
}

.learn-more {
    text-decoration: none;
    background: #c40514;
    color: white;
    border: none;
    width: 40%;
    text-align: center;
    padding: 8px 18px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr;
    }
}
</style>

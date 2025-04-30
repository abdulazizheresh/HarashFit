<template>
    <section class="offers-section">
        <div class="container">
            <!-- Left Side - صورة -->
            <div class="left" data-aos="fade-up" data-aos-duration="600">
                <div class="image-placeholder"></div>
                <div class="stats">
                    <div class="stat-item">
                        <h3>190+</h3>
                        <p><span class="highlight">Satisfied</span> customer</p>
                    </div>
                    <div class="stat-item">
                        <h3>120+</h3>
                        <p>Professional <span class="highlight">Trainer</span></p>
                    </div>
                </div>
            </div>

            <!-- Right Side - الخصومات -->
            <div class="right" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                <h2>
                    Special <span class="highlight">Discounts</span> & <br />
                    <span class="highlight">Promos</span>
                </h2>
                <div class="underline"></div>

                <div class="offer" v-for="(offer, index) in offers" :key="index" :data-aos="'fade-up'"
                    :data-aos-delay="200 + index * 100" data-aos-duration="600">
                    <div class="offer-title">
                        <span class="icon">{{ offer.icon }}</span>
                        <h4>{{ offer.title }}</h4>
                    </div>
                    <p>{{ offer.description }}</p>
                    <div class="separator"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const offers = [
    {
        icon: '🔥',
        title: 'Family Discount',
        description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel condimentum rutrum sit habitant aliquet.',
    },
    {
        icon: '🎓',
        title: 'Student Discount',
        description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel condimentum rutrum sit habitant aliquet.',
    },
    {
        icon: '🆕',
        title: 'New Member Promotion',
        description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel condimentum rutrum sit habitant aliquet.',
    },
];
</script>

<style scoped>
.offers-section {
    background: linear-gradient(to top, #810810, #000000 120%);
    color: #f0ece5;
    padding: 80px 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
}

.left {
    flex: 1;
    min-width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-placeholder {
    width: 100%;
    max-width: 400px;
    height: 450px;
    background: url('@/assets/images/offer_1.png') no-repeat center/contain;
}

.stats {
    margin-top: 30px;
    display: flex;
    gap: 40px;
}

.stat-item h3 {
    font-size: 32px;
    color: #f0ece5;
}

.stat-item p {
    font-size: 16px;
    margin-top: -18px;
}

.stat-item .highlight {
    color: #c40514;
}

.right {
    flex: 1;
    min-width: 300px;
}

.right h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 0px;
}

.highlight {
    color: #c40514;
}

.underline {
    width: 100px;
    height: 2px;
    background: #c40514;
    margin-bottom: 20px;
}

.offer {
    margin-bottom: -7px;
}

.offer-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: -28px;
}

.offer-title .icon {
    font-size: 24px;
}

.offer h4 {
    font-size: 22px;
    font-weight: bold;
}

.offer p {
    font-size: 15px;
    color: #ccc;
}

.separator {
    width: 100%;
    height: 2px;
    background: #ccc;
    margin-top: 15px;
}

/* Responsive */
@media (max-width: 900px) {
    .container {
        flex-direction: column;
        text-align: center;
    }

    .right {
        margin-top: 40px;
    }

    .stats {
        justify-content: center;
    }
}
</style>
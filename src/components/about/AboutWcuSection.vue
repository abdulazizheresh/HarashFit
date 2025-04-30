<template>
    <section class="wcu-section">
        <div class="container">
            <h2 class="section-title" data-aos="fade-up">
                Why Choose Us?
            </h2>
            <div class="underline" data-aos="fade-up" data-aos-delay="50"></div>

            <div class="cards">
                <div v-for="(item, index) in cards" :key="index" class="card" data-aos="fade-up"
                    :data-aos-delay="index * 100" data-aos-offset="50" data-aos-duration="500"
                    data-aos-easing="ease-out-cubic">
                    <div class="icon-wrapper">
                        <i :class="item.icon"></i>
                    </div>
                    <h4 class="card-title">
                        <span class="highlight">{{ item.highlight }}</span> {{ item.title }}
                    </h4>
                    <p class="card-description">
                        Lorem ipsum dolor sit amet consectetur posuere vel
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const cards = [
    { icon: "fas fa-dumbbell", highlight: "Commitment", title: "to results" },
    { icon: "fas fa-certificate", highlight: "Professional", title: "& Certified Trainer" },
    { icon: "fas fa-layer-group", highlight: "Programs", title: "for All Levels" }
];
</script>

<style scoped>
.wcu-section {
    padding-top: 10px;
    padding-bottom: 80px;
    color: white;
    background: linear-gradient(to top, #810810, #000000 120%);
    text-align: center;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10px;
}

.underline {
    width: 120px;
    height: 3px;
    background: #911f1f;
    margin: 16px auto 40px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.card {
    background: linear-gradient(to bottom, #1a1313 70%, #911f1f 100%);
    padding: 40px 20px 30px;
    border-radius: 30px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
}

.icon-wrapper {
    background: #911f1f;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-wrapper i {
    font-size: 28px;
    color: white;
}

.card-title {
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
}

.highlight {
    text-decoration: underline;
}

.card-description {
    font-size: 16px;
    color: #ccc;
    margin-top: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
    .section-title {
        font-size: 40px;
    }
}

@media (max-width: 768px) {
    .cards {
        flex-direction: column;
        align-items: center;
    }

    .section-title {
        font-size: 36px;
    }

    .card {
        width: 90%;
        padding: 30px 15px;
    }

    .icon-wrapper {
        width: 50px;
        height: 50px;
    }

    .icon-wrapper i {
        font-size: 22px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-description {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 30px;
    }

    .underline {
        width: 80px;
        height: 2px;
        margin: 12px auto 30px;
    }

    .card {
        padding: 25px 15px;
    }

    .card-title {
        font-size: 18px;
    }
}
</style>
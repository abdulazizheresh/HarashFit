<template>
    <section class="wcu-section">
        <div class="container">
            <h2 class="section-title" v-html="t('wcu_title')" data-aos="fade-up"></h2>
            <div class="underline" data-aos="fade-up" data-aos-delay="50"></div>

            <div class="cards">
                <div v-for="(item, index) in translatedCards" :key="index" class="card" data-aos="fade-up"
                    :data-aos-delay="index * 100" data-aos-offset="50" data-aos-duration="500"
                    data-aos-easing="ease-out-cubic">
                    <div class="icon-wrapper">
                        <i :class="item.icon"></i>
                    </div>
                    <h4 class="card-title" v-html="item.title" :lang="locale"></h4>
                    <p class="card-description" :lang="locale">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, locale } = useI18n();

// الحصول على البيانات حسب اللغة
const translatedCards = computed(() => [
    {
        icon: "fas fa-dumbbell",
        title: t("wcu_card_1_title"),
        description: t("wcu_card_1_desc"),
    },
    {
        icon: "fas fa-certificate",
        title: t("wcu_card_2_title"),
        description: t("wcu_card_2_desc"),
    },
    {
        icon: "fas fa-layer-group",
        title: t("wcu_card_3_title"),
        description: t("wcu_card_3_desc"),
    },
]);
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
    text-align: center;
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
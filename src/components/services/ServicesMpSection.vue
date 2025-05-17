<template>
    <section class="membership-section">
        <div class="container">
            <div class="header" data-aos="fade-up" data-aos-duration="600">
                <h5 :lang="locale">{{ t('membership_heading_small') }}</h5>
                <h2 v-html="t('membership_heading_big')" :lang="locale"></h2>
            </div>

            <div class="scroll-wrapper">
                <div class="plans-grid">
                    <div v-for="(plan, index) in plans" :key="plan.id" class="plan-card"
                        :class="{ 'popular': plan.isPopular, 'zoomed': plan.isPopular }"
                        :data-aos="plan.isPopular ? 'zoom-in-up' : 'fade-up'" :data-aos-delay="100 + index * 100"
                        data-aos-duration="600">
                        <div class="plan-header">
                            <div class="icon-circle">
                                <i class="fas fa-dumbbell"></i>
                            </div>
                            <div class="plan-title">
                                <h3>{{ plan.title }}</h3>
                                <p>{{ plan.subtitle }}</p>
                            </div>
                        </div>

                        <div class="price">
                            $<span class="amount">{{ plan.price }}</span>
                            <span class="per">/ {{ plan.priceType }}</span>
                        </div>

                        <div class="separator"></div>

                        <ul class="benefits">
                            <li v-for="(benefit, idx) in plan.benefits" :key="idx">
                                <i class="fas fa-check-circle"></i> {{ benefit }}
                            </li>
                        </ul>

                        <button class="order-btn">{{ t('membership_order_now') }}</button>
                    </div>
                </div>
            </div>
            <div class="show-more-wrapper" data-aos="fade-up" data-aos-delay="500">
    <RouterLink to="/plans" class="show-more-btn">
        {{ t('view_all_plans') }}
    </RouterLink>
</div>
        </div>
    </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
import PricePlanList from '@/data/MembershipsPlanList.js';

const { t, locale } = useI18n();
const plans = PricePlanList.slice(0, 3);
</script>

<style scoped>
.membership-section {
    background: url('@/assets/images/mp_1.png');
    background-size: cover;
    color: #f0ece5;
    padding: 80px 20px 40px;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.show-more-wrapper {
    text-align: center;
    margin-top: 74px;
}

.show-more-btn {
    background: black;
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

.show-more-btn:hover {
    opacity: 0.85;
}

/* Header */
.header {
    text-align: left;
    margin-bottom: 50px;
}

.header h5 {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 10px;
}

.header h2 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.3;
}

::v-deep(.highlight) {
    color: #c40514;
}

.scroll-wrapper {
    overflow: visible;
}

.plans-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
}

.plan-card {
    background: #f5f1e7;
    color: #222;
    flex: 1 1 320px;
    max-width: 340px;
    padding: 30px 20px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.4s ease;
}

.plan-card.popular {
    background: #911f1f;
    color: #f0ece5;
}

.plan-card.zoomed {
    transform: scale(1.05);
    z-index: 2;
}

.plan-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.icon-circle {
    background: #222;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-circle i {
    color: white;
    font-size: 20px;
}

.plan-title h3 {
    font-size: 22px;
    font-weight: bold;
}

.plan-title p {
    color: #aaa;
    font-size: 14px;
}

.plan-card.popular .plan-title p {
    color: #ccc;
}

.price {
    font-size: 26px;
    font-weight: bold;
    margin: 20px 0 10px;
}

.price .amount {
    font-size: 36px;
}

.per {
    font-size: 16px;
    color: #999;
}

.separator {
    width: 100%;
    height: 2px;
    background: #ccc;
    margin: 20px 0;
}

.benefits {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
    text-align: left;
}

.benefits li {
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.benefits li i {
    color: #000;
}

.plan-card.popular .benefits li i {
    color: #f5f1e7;
}

.order-btn {
    background: #222;
    color: white;
    padding: 12px 28px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.order-btn:hover {
    opacity: 0.8;
}


@media (max-width: 768px) {
    .header {
        text-align: center;
    }

    .scroll-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        padding: 0 16px;
    }

    .plans-grid {
        display: flex;
        flex-wrap: nowrap;
        gap: 27px;
        min-width: max-content;
        padding: 18px 0px;
        /* scroll-padding-inline: 100px; */
    }

    .plan-card {
        scroll-snap-align: center;
        max-width: 280px;
    }
}
</style>
<template>
    <section class="all-plans-section">
        <div class="container">
            <!-- Hero Section -->
            <div class="hero" data-aos="fade-up">
                <h1>{{ t('plans_view_plans_heading') }}</h1>
                <p>{{ t('plans_view_plans_subheading') }}</p>
            </div>

            <!-- Filter Toggle -->
            <div class="filter-tabs" data-aos="fade-up" data-aos-delay="100">

                <button :class="{ active: selectedType === 'monthly' }" @click="selectedType = 'monthly'">
                    {{ t('plans_view_monthly') }}
                </button>
                <button :class="{ active: selectedType === 'yearly' }" @click="selectedType = 'yearly'">
                    {{ t('plans_view_yearly') }}
                </button>
                <button :class="{ active: selectedType === 'one-time' }" @click="selectedType = 'one-time'">
                    {{ t('plans_view_one_time') }}
                </button>
            </div>

            <!-- Plans Grid with Horizontal Scroll on Mobile -->
            <div class="plans-container" data-aos="fade-up" data-aos-delay="200">
                <div class="plans-scroll-wrapper">
                    <div class="core-grid">
                        <div v-for="(group, groupName) in groupedPlans" :key="groupName" class="core-card">
                            <div class="badge top-right" v-if="groupName === 'Coaching Plan'">
                                ⭐ {{ t('plans_view_most_popular') }}
                            </div>
                            <div class="card-content">
                                <h3>{{ groupName }}</h3>
                                <p class="subtitle">{{ group[0].subtitle }}</p>
                                <div class="price">
                                    <span class="amount">${{ selectedPlan(groupName)?.price }}</span>
                                    <span class="per"> / {{ selectedPlan(groupName)?.priceType }}</span>
                                </div>

                                <select v-if="group.length > 1" v-model="selectedOptions[groupName]"
                                    class="select-dropdown">
                                    <option v-for="plan in group" :key="plan.id" :value="plan.id">
                                        {{ plan.priceType }} - ${{ plan.price }}
                                    </option>
                                </select>

                                <div v-if="selectedPlan(groupName)" class="plan-details">
                                    <ul>
                                        <li v-for="(benefit, i) in selectedPlan(groupName).benefits" :key="i">
                                            <i class="fas fa-check-circle"></i> {{ benefit }}
                                        </li>
                                    </ul>
                                    <p class="ideal" v-if="selectedPlan(groupName).idealFor">
                                        👉 {{ selectedPlan(groupName).idealFor }}
                                    </p>

                                    <button class="order-btn">{{ t('plans_view_order_now') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import MembershipsPlanList from '@/data/MembershipsPlanList';

const { t } = useI18n();

const selectedType = ref('monthly');
const selectedOptions = reactive({});

const filteredPlans = computed(() => {
    if (selectedType.value === 'monthly') {
        return MembershipsPlanList.filter(p => p.priceType.toLowerCase().includes('month'));
    } else if (selectedType.value === 'yearly') {
        return MembershipsPlanList.filter(p => p.priceType.toLowerCase().includes('year'));
    } else if (selectedType.value === 'one-time') {
        return MembershipsPlanList.filter(p => p.priceType.toLowerCase().includes('one-time'));
    }
    return MembershipsPlanList;
});

const groupedPlans = computed(() => {
    const groups = {};
    filteredPlans.value.forEach(plan => {
        if (!groups[plan.title]) {
            groups[plan.title] = [];
        }
        groups[plan.title].push(plan);
        if (!selectedOptions[plan.title]) {
            selectedOptions[plan.title] = plan.id;
        }
    });

    const sorted = {};
    if (groups['Coaching Plan']) {
        sorted['Coaching Plan'] = groups['Coaching Plan'];
    }
    for (const key in groups) {
        if (key !== 'Coaching Plan') {
            sorted[key] = groups[key];
        }
    }
    return sorted;
});

const selectedPlan = (groupName) => {
    return groupedPlans.value[groupName].find(p => p.id === selectedOptions[groupName]);
};
</script>

<style scoped>
.all-plans-section {
    background: linear-gradient(to top, #810810, #000000 120%);
    color: #f0ece5;
    padding: 80px 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.hero {
    text-align: center;
    margin-bottom: 40px;
}

.hero h1 {
    font-size: 42px;
    font-weight: bold;
}

.hero p {
    font-size: 18px;
    color: #ddd;
}

.filter-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
}

.filter-tabs button {
    background: transparent;
    border: 2px solid #f0ece5;
    color: #f0ece5;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.filter-tabs button.active,
.filter-tabs button:hover {
    background: #f0ece5;
    color: #810810;
}

/* Plans Container and Scroll Wrapper */
.plans-container {
    width: 100%;
    position: relative;
}

.plans-scroll-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
    scrollbar-width: thin;
    scrollbar-color: #f0ece5 #810810;
    scroll-snap-type: x mandatory;
}

.plans-scroll-wrapper::-webkit-scrollbar {
    height: 6px;
}

.plans-scroll-wrapper::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.plans-scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.core-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

@media (max-width: 768px) {
    .plans-container {
        overflow-x: hidden;
    }

    /* .plans-scroll-wrapper {
        overflow-x: scroll;
        padding: 10px 0;
        margin: 0 -20px;
        padding: 0 20px;
        scroll-padding: 0 20px;
        -ms-overflow-style: none;
        /* IE and Edge */
    /* scrollbar-width: none; */
    /* Firefox */
    /* } */

    .plans-scroll-wrapper {
        overflow-x: scroll;
        margin: 0;
        padding-inline: 0;
        /* ✅ */
        scroll-padding-inline: 0;
    }



    .plans-scroll-wrapper::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari, Opera */
    }

    .core-grid {
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 15px;
        /* Eliminates the extra space at the end */
        /* width: max-content; */
    }

    .core-card {
        flex: 0 0 280px;
        width: 280px;
        min-width: 280px;
        scroll-snap-align: center;
    }

    .filter-tabs {
        gap: 10px;
    }

    .filter-tabs button {
        padding: 8px 15px;
        font-size: 14px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .hero p {
        font-size: 16px;
    }
}

.card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.core-card {
    display: flex;
    flex-direction: column;
    min-height: 500px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 30px;
    width: 340px;
    backdrop-filter: blur(8px);
    position: relative;
    text-align: left;
    overflow: hidden;
}

@media (max-width: 768px) {
    .core-card {
        padding: 20px;
        min-height: 480px;
    }
}

.badge {
    position: absolute;
    background: gold;
    color: #000;
    padding: 6px 12px;
    font-weight: bold;
    border-radius: 0 0 0 8px;
}

.badge.top-right {
    top: 0;
    right: 0;
    border-radius: 0 0 0 8px;
}

.core-card h3 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
}

.core-card .subtitle {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 10px;
}

.price {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
}

.price .amount {
    font-size: 36px;
    font-weight: bold;
}

.price .per {
    font-size: 16px;
    color: #ccc;
}

.select-dropdown {
    width: 100%;
    padding: 10px;
    margin-bottom: 14px;
    border-radius: 8px;
    border: none;
    background: #f0ece5;
    color: #000;
    font-weight: bold;
}

.plan-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.plan-details ul {
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
}

.plan-details li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
}

.plan-details .ideal {
    font-style: italic;
    color: #eee;
    margin-bottom: 12px;
    font-size: 15px;
}

.order-btn {
    margin-top: auto;
    background: #c40514;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

.order-btn:hover {
    opacity: 0.9;
}
</style>
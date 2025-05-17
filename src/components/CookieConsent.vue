<template>
    <div v-if="!decisionMade" class="cookie-banner">
        <p class="cookie-text">
            {{ t('cookie.message') }}
            <router-link to="/legal/cookie-policy" class="link">{{ t('cookie.learn_more') }}</router-link>
        </p>
        <div class="cookie-actions">
            <button class="btn accept" @click="handleAccept">{{ t('cookie.accept') }}</button>
            <button class="btn reject" @click="handleReject">{{ t('cookie.reject') }}</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const decisionMade = ref(false);

onMounted(() => {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (cookieChoice === 'accepted' || cookieChoice === 'rejected') {
        decisionMade.value = true;
    }
});

const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    decisionMade.value = true;
};

const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    decisionMade.value = true;
};
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #1a1a1a;
    color: #f0f0f0;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
    animation: slideUp 0.5s ease;
}

.cookie-text {
    font-size: 14px;
    margin-bottom: 12px;
    text-align: center;
}

.cookie-text .link {
    color: #c40514;
    text-decoration: underline;
    margin-left: 4px;
}

.cookie-actions {
    display: flex;
    gap: 12px;
}

.btn {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn.accept {
    background: #c40514;
    color: white;
}

.btn.reject {
    background: transparent;
    color: #ccc;
    border: 1px solid #ccc;
}

.btn:hover {
    opacity: 0.9;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
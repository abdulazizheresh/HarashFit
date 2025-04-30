<template>
    <div class="navbar-wrapper">
        <div class="navbar-container">
            <RouterLink to="/" @click="menuOpen = false">
                <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
            </RouterLink>

            <nav class="nav-links" :class="{ show: menuOpen }">
                <RouterLink to="/" class="link" @click="menuOpen = false">Home</RouterLink>
                <RouterLink to="/services" class="link" @click="menuOpen = false">Services</RouterLink>
                <RouterLink to="/blog" class="link" @click="menuOpen = false">Blog</RouterLink>
                <RouterLink to="/about" class="link" @click="menuOpen = false">About</RouterLink>
                <RouterLink to="/contact" class="link" @click="menuOpen = false">Contact</RouterLink>

                <!-- يظهر فقط في الموبايل -->
                <RouterLink to="/membership" class="membership-btn mobile-only" @click="menuOpen = false">
                    Membership
                </RouterLink>
            </nav>

            <!-- هذا يظهر فقط في الشاشات الكبيرة -->
            <RouterLink to="/membership" class="membership-btn desktop-only">
                Membership
            </RouterLink>

            <div class="hamburger" @click="menuOpen = !menuOpen">
                <span :class="{ open: menuOpen }"></span>
                <span :class="{ open: menuOpen }"></span>
                <span :class="{ open: menuOpen }"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
    menuOpen.value = false
})

</script>

<style scoped>
.navbar-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.navbar-container {
    background-color: rgb(32, 31, 31);
    width: 90%;
    max-width: 1240px;
    padding: 12px 24px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.logo {
    height: 70px;
    width: auto;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.link {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.link:hover {
    color: #c40514;
}

.membership-btn {
    background-color: #c40514;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* هيدر الموبايل */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    height: 3px;
    width: 25px;
    background: white;
    transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
}

/* Responsive */
@media (max-width: 768px) {
    .navbar-wrapper {
        padding: 0 20px;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 0% 20px;
        background: #1e1e1e;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        scrollbar-width: none;
        /* Firefox */
        max-height: 0;
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease;
        z-index: 99;
        border-radius: 50px 50px 20px 20px;
    }

    .nav-links::-webkit-scrollbar {
        display: none;
        /* Chrome/Safari */
    }


    .nav-links.show {
        max-height: 500px;
        opacity: 1;
        pointer-events: auto;
        padding: 20px 0;
    }

    .desktop-only {
        display: none;
    }

    .mobile-only {
        display: inline-block;
        margin-top: 10px;
    }

    .hamburger {
        display: flex;
    }
}

@media (min-width: 769px) {
    .mobile-only {
        display: none;
    }
}
</style>
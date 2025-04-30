<template>
    <section class="about-hero">
        <div class="about-container">
            <div class="about-text">
                <h1>About</h1>
                <p>
                    Transform Your <span class="red">Body</span>, Elevate Your
                    <span class="red">Life!</span>
                </p>
            </div>
            <div class="about-image">
                <img src="@/assets/images/home_1.png" alt="About Us" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutUsSection",
};
</script>

<style scoped>
.about-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.about-text p {
    font-size: 24px;
    text-align: left;
}

.red {
    color: #c40514;
    font-weight: bold;
}

.about-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.about-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .about-text h1 {
        font-size: 40px;
    }

    .about-text p {
        font-size: 20px;
    }

    .about-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .about-hero {
        margin-top: -27px;
        padding: 70px 20px;
    }

    .about-container {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        height: 350px;

    }

    .about-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .about-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .about-text p {
        text-align: left;
    }

    .about-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .about-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
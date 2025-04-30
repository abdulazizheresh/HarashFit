<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="left">
                <h1>
                    Unite Your <span class="highlight">Body</span> And<br />
                    Mind <span class="with">With</span> Harash<br />
                    Fit
                </h1>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur. Volutpat viverra tellus in proin. Nulla nunc id orci
                    condimentum.
                </p>

                <div class="stats">
                    <div class="stat">
                        <h2>190+</h2>
                        <p>Satisfied customer</p>
                    </div>
                    <div class="stat">
                        <h2>120+</h2>
                        <p>Professional Trainer</p>
                    </div>
                </div>

                <!-- <div class="reviews">
                    <div class="circles">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle plus">+</div>
                    </div>
                    <div class="stars">
                        <strong>4.8/5</strong>
                        <span class="stars-icons">★ ★ ★ ★ ★</span>
                        <p>Based on 130 Reviews</p>
                    </div>
                </div> -->
            </div>

            <div class="right">
                <img src="@/assets/images/home_1.png" alt="Hero" class="hero-img" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
    padding: 80px 40px;
    color: white;
    min-height: calc(40vh - 100px); 
}

.hero-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.left {
    flex: 1;
    min-width: 300px;
}

.right {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.hero-img {
    max-width: 100%;
    height: auto;
}

h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 24px;
}

.highlight {
    color: #ffffff;
}

.with {
    color: #c40514;
}

.description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 32px;
}

.stats {
    display: flex;
    gap: 40px;
    margin-bottom: 24px;
}

.stat h2 {
    font-size: 32px;
    margin: 0;
    color: white;
}

.stat p {
    margin: 0;
    color: #ccc;
}

.reviews {
    display: flex;
    gap: 20px;
    align-items: center;
}

.circles {
    display: flex;
}

.circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #ddd;
    margin-right: -8px;
    border: 2px solid #000;
}

.plus {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c40514;
    color: white;
    font-weight: bold;
}

.stars strong {
    font-size: 18px;
}

.stars-icons {
    color: gold;
    margin-left: 8px;
}

.stars p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #ccc;
}
</style>
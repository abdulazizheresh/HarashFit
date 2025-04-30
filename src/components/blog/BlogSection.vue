<template>
    <section class="blog-hero">
        <div class="blog-container">
            <div class="blog-text">
                <h1>Blog Archive</h1>
                <p>
                    Get Knowledge, Get <span class="red">Results</span> – The Best Articles for Maximum
                    <span class="red">Performance!</span>
                </p>
            </div>
            <div class="blog-image">
                <img src="@/assets/images/home_1.png" alt="Blog Hero" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BlogSection",
};
</script>

<style scoped>
.blog-hero {
    max-width: 1280px;
    margin: auto;
    padding: 70px 20px;
    color: white;
    position: relative;
    overflow: hidden;
}

.blog-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.blog-text {
    flex: 1;
    min-width: 300px;
}

.blog-text h1 {
    font-size: 48px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 20px;
}

.blog-text p {
    font-size: 24px;
    text-align: left;
}

.red {
    color: #c40514;
    font-weight: bold;
}

.blog-image {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.blog-image img {
    height: 280px;
    object-fit: contain;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .blog-text h1 {
        font-size: 40px;
    }

    .blog-text p {
        font-size: 20px;
    }

    .blog-image img {
        height: 220px;
    }
}

@media (max-width: 768px) {
    .blog-hero {
        margin-top: -27px;
        padding: 70px 20px;
    }

    .blog-container {
        flex-direction: column;
        align-items: flex-start;
        /* مهم: يبقي كل شيء جهة اليسار */
        text-align: left;
        height: 350px;

    }

    .blog-text {
        flex: unset;
        min-width: unset;
        margin-bottom: 30px;
        width: 100%;
    }

    .blog-text h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .blog-text p {
        text-align: left;
        /* مهم جداً لإبقاء النص على اليسار */
    }

    .blog-image {
        position: relative;
        bottom: unset;
        right: unset;
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .blog-image img {
        height: 200px;
        max-width: 280px;
        width: 100%;
    }
}
</style>
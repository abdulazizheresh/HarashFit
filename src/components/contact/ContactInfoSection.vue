<template>
    <section class="contact-info-section">
        <div class="container">
            <div class="info-card" data-aos="fade-up" data-aos-duration="600">
                <div class="info-block">
                    <div class="icon-title">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>Our Location</h3>
                    </div>
                    <div class="underline"></div>
                    <p class="bold">Body Fusion Gym</p>
                    <p>Jl. Kebugaran No. 21, Jakarta Selatan, Indonesia</p>
                </div>

                <div class="info-block" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-title">
                        <i class="fas fa-clock"></i>
                        <h3>Operating Hours</h3>
                    </div>
                    <div class="underline"></div>
                    <p><span class="bold">Monday - Friday</span> | 08.00 - 22.00 pm</p>
                    <p><span class="bold">Saturday</span> | 08.00 - 23.00 pm</p>
                    <p><span class="bold">Sunday</span> | 07.00 - 23.00 pm</p>
                </div>
            </div>

            <div class="info-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                <div class="info-block">
                    <div class="icon-title">
                        <i class="fas fa-phone-volume"></i>
                        <h3>Contact Us</h3>
                    </div>
                    <div class="underline"></div>
                    <p><span class="bold">Phone Number</span> | +123 456 789</p>
                    <p><span class="bold">Email</span> | bodyf@mail.com</p>
                </div>

                <div class="info-block" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-title">
                        <i class="fas fa-user-plus"></i>
                        <h3>Connect With Us</h3>
                    </div>
                    <div class="underline"></div>
                    <div class="social-links">
                        <div class="social-item">
                            <i class="fab fa-facebook"></i> @BodyFusion
                        </div>
                        <div class="social-item">
                            <i class="fab fa-instagram"></i> @BodyFusion
                        </div>
                        <div class="social-item">
                            <i class="fab fa-twitter"></i> @BodyFusion
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// لا نحتاج أي سكريبت إضافي هنا
</script>

<style scoped>
.contact-info-section {
    background: linear-gradient(to top, #810810, #000000 120%);
    padding: 80px 20px;
    color: #fff;
}

.container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
}

.info-card {
    background: transparent;
    border: 1px solid #f0ece5;
    padding: 30px 20px;
    flex: 1 1 450px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.info-block {
    width: 100%;
    text-align: left;
}

.icon-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon-title i {
    color: #fff;
    font-size: 24px;
}

.icon-title h3 {
    font-size: 22px;
    font-weight: bold;
}

.underline {
    width: 100px;
    height: 2px;
    background: #911f1f;
    margin: 10px 0 20px;
}

.bold {
    font-weight: bold;
}

p {
    margin: 6px 0;
    font-size: 16px;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.social-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.social-item i {
    font-size: 24px;
    color: #911f1f;
    background: #222;
    padding: 10px;
    border-radius: 50%;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .info-card {
        width: 100%;
        max-width: 370px;
    }
}

</style>
<template>
    <section class="contact-send-section">
        <div class="container">
            <div class="form-side" data-aos="fade-up" data-aos-duration="600">
                <h2>Get In Touch</h2>
                <div class="underline"></div>

                <form class="contact-form">
                    <div class="input-group">
                        <input type="text" placeholder="Your Name" />
                        <i class="fas fa-user"></i>
                    </div>

                    <div class="input-group">
                        <input type="email" placeholder="Your Email" />
                        <i class="fas fa-envelope"></i>
                    </div>

                    <div class="input-group">
                        <input type="text" placeholder="Phone Number" />
                        <i class="fas fa-phone"></i>
                    </div>

                    <div class="input-group">
                        <textarea placeholder="Message"></textarea>
                        <i class="fas fa-comment" style="opacity: 0;"></i>
                    </div>

                    <button type="submit">Send</button>
                </form>
            </div>

            <div class="divider"></div>

            <div class="image-side" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                <img src="@/assets/images/home_1.png" alt="Contact Image" />
            </div>
        </div>
    </section>
</template>

<script setup>
// لا نحتاج سكريبت خاص هنا
</script>

<style scoped>
.contact-send-section {
    background: #911f1f;
    color: #fff;
    padding: 80px 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.form-side {
    flex: 1;
    max-width: 550px;
}

.form-side h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
}

.underline {
    width: 320px;
    height: 3px;
    background: linear-gradient(to right, #2b1919 30%, #f3ede7 70%);
    margin-bottom: 30px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group {
    position: relative;
}

.input-group input,
.input-group textarea {
    width: 100%;
    background: #f3ede7;
    border: none;
    border-radius: 30px;
    padding: 14px 20px 14px 50px;
    font-size: 16px;
    color: #000;
    box-sizing: border-box;
}

.input-group textarea {
    min-height: 120px;
    resize: none;
}

.input-group i {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 16px;
}

button {
    width: 100%;
    background: #1a1313;
    border: none;
    border-radius: 30px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #f3ede7;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #000;
}

.divider {
    width: 4px;
    background: #f3ede7;
    opacity: 0.8;
    min-height: 400px;
    align-self: stretch;
    margin: 0 30px;
}

.image-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-side img {
    max-height: 450px;
    object-fit: contain;
}

/* Responsive */
@media (max-width: 1024px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .divider {
        display: none;
    }

    .form-side {
        max-width: 100%;
    }

    .underline {
        margin-left: auto;
        margin-right: auto;
    }

    .form-side h2 {
        text-align: center;
    }

    .contact-form {
        width: 100%;
    }

    .image-side {
        margin-top: 40px;
    }
}
</style>
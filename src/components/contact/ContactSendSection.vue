<template>
    <section class="contact-send-section">
        <div class="container">
            <div class="form-side" data-aos="fade-up" data-aos-duration="600">
                <h2 :lang="locale" v-html="t('contact_form_title')"></h2>
                <div class="underline"></div>

                <form class="contact-form">
                    <div class="input-group">
                        <input type="text" :placeholder="t('contact_form_name')" dir="auto" />
                        <i class="fas fa-user"></i>
                    </div>

                    <div class="input-group">
                        <input type="email" :placeholder="t('contact_form_email')" dir="auto"/>
                        <i class="fas fa-envelope"></i>
                    </div>

                    <div class="input-group">
                        <input type="text" :placeholder="t('contact_form_phone')" dir="auto"/>
                        <i class="fas fa-phone"></i>
                    </div>

                    <div class="input-group">
                        <textarea :lang="locale" :placeholder="t('contact_form_message')" dir="auto"></textarea>
                        <i class="fas fa-comment" style="opacity: 0;"></i>
                    </div>

                    <button type="submit">{{ t('contact_form_send') }}</button>
                </form>
            </div>

            <div class="divider"></div>

            <div class="image-side" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                <img src="@/assets/images/home_1.webp" alt="Contact Image" loading="lazy"/>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
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

@media (max-width: 768px) {
    .form-side h2 {
        font-size: 24px;
    }

    .form-side {
    width: 100%;
    max-width: 100%;
    padding: 0 10px;
}


    .underline {
        width: 200px;
    }

    .contact-form {
        gap: 16px;
    }

    .input-group input,
    .input-group textarea {
        padding-left: 44px;
        font-size: 14px;
    }

    .input-group i {
        font-size: 14px;
        left: 14px;
    }

    button {
        font-size: 16px;
        padding: 12px;
    }

    .image-side {
    display: none;
}

}

</style>
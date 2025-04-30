<template>
    <section class="questions-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up" data-aos-duration="600">
                <h5>Contact Us</h5>
                <h2>Still <span class="highlight">Have</span> Questions?</h2>
                <div class="underline"></div>
            </div>

            <div class="contact-grid">
                <div class="contact-card" v-for="(contact, index) in contacts" :key="index" data-aos="fade-up"
                    :data-aos-delay="index * 100" data-aos-duration="600">
                    <div class="text">
                        <h4>{{ contact.title }}</h4>
                        <p>{{ contact.value }}</p>
                    </div>
                    <i :class="contact.icon"></i>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// جعلنا الكونتاكتس ستاتيكية ليست ديناميكية ولكن باستخدام v-for لتنظيم الكود أكثر
const contacts = [
    { title: "Phone Number", value: "+123 456 789", icon: "fas fa-phone-volume" },
    { title: "E-mail", value: "bodyf@mail.com", icon: "fas fa-envelope" }
];
</script>

<style scoped>
.questions-section {
    padding-bottom: 70px;
    padding-top: 5px;
    background: linear-gradient(to top, #250c0e, #000000 110%);
    color: white;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h5 {
    color: #c4bfb6;
    margin-bottom: 8px;
    font-size: 22px;
}

.section-header h2 {
    font-size: 48px;
    margin-bottom: 15px;
    font-weight: bold;
}

.highlight {
    color: #911f1f;
}

.underline {
    width: 120px;
    height: 3px;
    background: linear-gradient(to right, white, #911f1f 42%);
    margin: 0 auto 0;
}

.contact-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    justify-content: center;
    align-items: center;
}

.contact-card {
    border: 3px solid #911f1f;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
}

.contact-card .text h4 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 8px;
}

.contact-card .text p {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
}

.contact-card i {
    font-size: 42px;
    color: #fff;
}

@media (max-width: 768px) {
    .section-header h2 {
        font-size: 36px;
    }
}
</style>
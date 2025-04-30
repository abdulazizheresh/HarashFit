<template>
    <footer class="footer-section">
        <div class="footer-container">
            <!-- Logo & Description -->
            <div class="footer-col">
                <img src="@/assets/images/logo.png" alt="HarshFit" class="footer-logo" />
                <p>
                    Independent Fitness & Bodybuilding Coach — empowering clients through personalized training and real dedication.
                </p>


                <hr class="divider" />
                <h4>Contact Us</h4>
                <p><strong>Phone Number</strong> | +962 7 9060 6181</p>
                <p><strong>Email</strong> | baderharash@gmail.com</p>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li>
                        <RouterLink to="/services">Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog">Blog Archive</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About Us</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Our Team</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- Location -->
            <div class="footer-col">
                <h4>Our Location</h4>
                <p>HarashFit</p>
                <p>Talla Al Alli, Amman, Jordan</p>
            </div>

            <!-- Hours -->
            <div class="footer-col">
                <h4>Operating Hours</h4>
                <p>Saturday - Wednesday | 08.00 - 17.00</p>
                <p>Thursday | 08.00 - 14.00</p>
                <p>Friday | Closed</p>
            </div>
        </div>

        <!-- Bottom Strip -->
        <div class="footer-bottom">
            <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-dumbbell"></i>
            </div>
            <p class="copyright">
                © 2025 HarashFit. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection',
};
</script>

<style scoped>
.footer-section {
    background-color: #222;
    color: white;
    padding: 60px 20px 7px;
}

.footer-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
}

.footer-col {
    flex: 1 1 240px;
}

.footer-logo {
    height: 50px;
    margin-bottom: 16px;
}

.footer-col h4 {
    margin: 12px 0 -2px;
    font-size: 18px;
}

.footer-col h4::after {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    background-color: #c40514;
    margin-top: 8px;
    margin-bottom: 16px;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: #222;
    margin: 8px 0 16px;
    border: none;
}

.divider h4{
    margin-bottom: 10px;
    padding: 10px;
}

.footer-col p,
.footer-col li {
    font-size: 14px;
    line-height: 1.6;
    margin: 6px 0;
}

.footer-col ul {
    list-style: none;
    padding: 0;
}

.footer-col ul li {
    border-left: 2px solid #fff;
    padding-left: 10px;
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: white;
    text-decoration: none;
}

.footer-col ul li a:hover {
    text-decoration: underline;
}

.footer-bottom {
    border-top: 1px solid white;
    padding-top: 20px;
    text-align: center;
}

.social-icons {
    margin-bottom: 20px;
}

.social-icons i {
    margin: 0 12px;
    font-size: 27px;
    background-color: black;
    color: #fff;
    padding: 12px;
    border-radius: 50%;
}
</style>
<template>
    <section class="legal-section">
        <div class="container">
            <h1 class="legal-title">Privacy Policy</h1>
            <p class="legal-intro">
                This Privacy Policy outlines how we collect, use, and protect your personal information when you use our
                website and services.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, and any data you provide through forms
                    or account registration.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, browser type, IP address (via analytics
                    tools if enabled).</li>
                <li><strong>Cookies:</strong> See our <router-link to="/cookies">Cookie Policy</router-link> for full
                    details.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>To provide and maintain our services.</li>
                <li>To personalize user experience.</li>
                <li>To send updates, newsletters, or respond to inquiries (with your consent).</li>
                <li>To improve our website and analyze performance.</li>
            </ul>

            <h2>3. Sharing Your Data</h2>
            <p>
                We do not sell or rent your personal data. We may share information with trusted third parties (e.g.,
                payment processors or analytics providers) solely to support our services, and always under strict
                confidentiality agreements.
            </p>

            <h2>4. Data Security</h2>
            <p>
                We use industry-standard security measures to protect your data. However, no method of transmission over
                the Internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
                You have the right to access, correct, or delete your personal data. To request this, contact us using
                the information below.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
                We may update this policy occasionally. The latest version will always be available on this page with
                the effective date.
            </p>

            <h2>7. Contact</h2>
            <p>
                If you have any questions or requests regarding this privacy policy, please contact us at: <br />
                <strong>Email:</strong> support@example.com
            </p>
        </div>
    </section>
</template>

<style scoped>
.legal-section {
    padding: 10px 20px;
    color: #f0f0f0;
    min-height: 100vh;
    line-height: 1.7;
    font-size: 15px;
}

.container {
    max-width: 900px;
    margin: auto;
}

.legal-title {
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
}

.legal-intro {
    font-size: 16px;
    margin-bottom: 30px;
    color: #dddddd;
}

h2 {
    margin-top: 32px;
    font-size: 22px;
    color: #ff5555;
}

ul {
    margin-left: 20px;
    margin-top: 10px;
    color: #cccccc;
}

li {
    margin-bottom: 12px;
}
</style>
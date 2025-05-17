<template>
    <section class="legal-section">
        <div class="container">
            <h1 class="legal-title">Impressum</h1>

            <h2>Information according to § 5 TMG</h2>
            <p>
                John Doe<br>
                Personal Fitness Coaching<br>
                Musterstraße 12<br>
                12345 Musterstadt<br>
                Germany
            </p>

            <h2>Contact</h2>
            <p>
                Phone: +49 123 456789<br>
                Email: info@example.com
            </p>

            <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
            <p>
                John Doe<br>
                Musterstraße 12<br>
                12345 Musterstadt
            </p>

            <h2>Disclaimer</h2>
            <p>
                Despite careful content control, we assume no liability for the content of external links. The operators
                of the linked pages are solely responsible for their content.
            </p>

            <h2>EU Dispute Resolution</h2>
            <p>
                The European Commission provides a platform for online dispute resolution (OS):<br>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a>
            </p>

            <p class="legal-footer">
                Last updated: May 2025
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

h2 {
    margin-top: 32px;
    font-size: 22px;
    color: #ff5555;
}

p,
a {
    color: #cccccc;
    margin-bottom: 16px;
}

.legal-footer {
    margin-top: 40px;
    font-size: 14px;
    color: #aaa;
}
</style>
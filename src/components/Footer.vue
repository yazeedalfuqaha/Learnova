<template>
    <footer class="footer">

        <div class="footer-container">

            <!-- Logo + description -->
            <div class="footer-section">
                <h2 class="logo">Learnova</h2>
                <p>
                    Learn modern skills online with expert instructors.
                    Start your learning journey today.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <!-- Courses -->
            <div class="footer-section">
                <h3>Courses</h3>
                <a href="#">Vue.js</a>
                <a href="#">JavaScript</a>
                <a href="#">React</a>
                <a href="#">Python</a>
            </div>

            <!-- Social -->
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="socials">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">YouTube</a>
                </div>
            </div>

        </div>

        <div class="footer-bottom">
            <p>© 2026 Learnova. All rights reserved.</p>
        </div>

    </footer>
</template>

<style scoped>
.footer {
    background: #111;
    color: white;
    padding: 60px 10% 20px;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
}

.footer-section h3 {
    margin-bottom: 15px;
}

.footer-section a {
    display: block;
    color: #ccc;
    text-decoration: none;
    margin: 6px 0;
    transition: 0.3s;
}

.footer-section a:hover {
    color: #fff;
}

.logo {
    color: #6366f1;
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    border-top: 1px solid #333;
    padding-top: 20px;
    color: #aaa;
}

/* mobile */

@media (max-width:768px) {

    .footer {
        text-align: center;
    }

}
</style>
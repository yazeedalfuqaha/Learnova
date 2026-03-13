<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Learnova" class="logo-img" />
      <span class="logo-text">Learnova</span>
    </div>

    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'courses' }">Courses</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      

      <!-- <button @click="toggleTheme" class="theme-btn">
        {{ isDark ? '🌙' : '☀️' }}
      </button> -->

     <router-link :to="{ name: 'login' }">Login</router-link>
      <a class="signup"><span class="sign_span">Sign Up</span></a>

      <select v-model="currentLang" class="lang-picker">
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>

    <div class="burger" @click="toggleMenu">☰</div>
  </nav>

  <transition name="slide">
    <div v-if="mobileMenu" class="mobile-overlay">
      <div class="mobile-sidebar">
        <div class="mobile-header">
          <span class="logo-text">Menu</span>
          <button class="close-btn" @click="toggleMenu">✕</button>
        </div>
        <div class="mobile-links">
          <router-link to="/" @click="toggleMenu">Home</router-link>
          <router-link to="/courses" @click="toggleMenu">Courses</router-link>
          <router-link to="/about" @click="toggleMenu">About</router-link>
          <router-link to="/login" @click="toggleMenu">Login</router-link>

          <hr class="divider" />

          <div class="mobile-controls">
            <label for="mobile-lang">Language:</label>
            <select
              id="mobile-lang"
              v-model="currentLang"
              @change="updateLanguage"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          <router-link to="/signup" class="signup-mobile" @click="toggleMenu"
            >Sign Up</router-link
          >
        </div>
      </div>
      <div class="backdrop" @click="toggleMenu"></div>
    </div>
  </transition>
</template>
<script setup>
import { ref, watchEffect } from "vue";

const mobileMenu = ref(false);
const isDark = ref(false);
const currentLang = ref("en");

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

// const toggleTheme = () => {
//   isDark.value = !isDark.value
//   // Apply class to root for CSS variables to pick up
//   if (isDark.value) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
// }
</script>

<style>
/* 1. Define Variables */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --nav-bg: #ffffff;
  --border-color: #eee;
  --primary: #4f46e5;
}

/* 2. Dark Mode Overrides */
:root.dark {
  --bg-color: #0f172a;
  --text-color: #f1f5f9;
  --nav-bg: #1e293b;
  --border-color: #334155;
}

/* Apply variables globally */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s ease;
  margin: 0;
  font-family: sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--border-color);
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  color: var(--primary);
}

.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.links {
  display: flex;
  align-items: center;
}

.links a {
  margin-left: 20px;
  text-decoration: none;
  color: var(--text-color);
}

/* Theme & Lang Styles */
.theme-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-left: 15px;
}

.lang-picker {
  background: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-left: 15px;
  padding: 2px 5px;
}

.signup {
  background: var(--primary);
  padding: 8px 16px;
  border-radius: 6px;
}

.sign_span {
  color: #eee;
  cursor: pointer;
}

.burger {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--text-color);
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--nav-bg);
  border-top: 1px solid var(--border-color);
}

.mobile-menu a {
  padding: 10px 0;
  text-decoration: none;
  color: var(--text-color);
}

.mobile-extras {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 10px;
}

/* Mobile Overlay & Sidebar */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
}

.backdrop {
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.mobile-sidebar {
  width: 280px;
  background: var(--nav-bg);
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--text-color);
  cursor: pointer;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-links a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
}

.divider {
  border: 0;
  border-top: 1px solid var(--border-color);
  margin: 10px 0;
}

.mobile-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-theme-toggle {
  background: var(--border-color);
  border: none;
  padding: 10px;
  border-radius: 8px;
  color: var(--text-color);
  cursor: pointer;
}

.signup-mobile {
  background: var(--primary);
  color: white !important;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
}

/* Vue Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .links {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
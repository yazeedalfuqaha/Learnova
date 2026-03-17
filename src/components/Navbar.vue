<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="logo">Learnova</div>

    <nav :class="['nav-links', { open: mobileMenu }]">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link :to="{ name: 'courses' }" @click="closeMenu"
        >Courses</router-link
      >
      <router-link :to="{ name: 'about' }" @click="closeMenu"
        >About</router-link
      >
      <router-link :to="{name: 'contact'}" @click="closeMenu">Contact</router-link>

      <router-link :to="{ name: 'login' }" class="login-btn" @click="closeMenu">
        <span class="l-s">Login</span>
      </router-link>
      <!-- <button class="login-btn" >Signup</button> -->
    </nav>

    <div class="hamburger" @click="toggleMenu">
      <span :class="{ bar1: true, open: mobileMenu }"></span>
      <span :class="{ bar2: true, open: mobileMenu }"></span>
      <span :class="{ bar3: true, open: mobileMenu }"></span>
    </div>

    <!-- Overlay -->
    <div v-if="mobileMenu" class="overlay" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenu = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

const closeMenu = () => {
  mobileMenu.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8%;
  transition: 0.3s;
  z-index: 1000;
}

.l-s {
  color: #fff;
}

.navbar.scrolled {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #4f46e5;
}

/* LINKS */
.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
  transition: transform 0.3s ease-in-out;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #4f46e5;
}

.login-btn {
  background: #4f46e5;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: #4f46e5;
  border-radius: 3px;
  transition: all 0.4s ease;
}

/* Animate Hamburger to X */
.bar1.open {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar2.open {
  opacity: 0;
}
.bar3.open {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* MOBILE */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: -300px; /* hidden by default */
    height: 100%;
    width: 250px;
    background: white;
    flex-direction: column;
    padding: 60px 20px;
    gap: 25px;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    z-index: 1001;
  }

  .nav-links.open {
    left: 0; /* slide in */
  }

  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
}
</style>
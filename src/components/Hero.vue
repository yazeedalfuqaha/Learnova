<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Learn Skills That Shape Your Future</h1>
      <p>
        Join thousands of students mastering programming, design, and
        technology with expert instructors. Start learning anytime, anywhere.
      </p>

      <div class="hero-buttons">
        <button class="primary">Get Started</button>
      <router-link :to="{ name: 'courses' }" @click="closeMenu" class="btn-co">Brows All Courses</router-link>
      </div>
    </div>

    <div class="hero-image">
      <img src="../assets/images/on1.png" alt="Online Learning">
    </div>
  </section>
</template>

<script setup>
// لا حاجة لجافاسكريبت إضافي حاليا
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 10%;
  background: #f6f8fc;
}

.hero-text {
  max-width: 500px;
}

.hero-text h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #111827;
}

.hero-text p {
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 16px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.primary  {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.btn-co {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  list-style: none;
  /* إضافة السطر التالي لإزالة الخط */
  text-decoration: none; 
  /* لضمان توسيط النص وجعله يظهر كزر */
  display: inline-block; 
}

.primary:hover {
  background: #3730a3;
}

.secondary {
  background: none;
  border: 2px solid #4f46e5;
  color: #4f46e5;
  padding: 14px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.secondary:hover {
  background: #4f46e5;
  color: white;
}

.hero-image img {
  width: 500px;
  max-width: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    gap: 50px;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
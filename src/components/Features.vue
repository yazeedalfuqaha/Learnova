<template>
  <section class="features" aria-label="Platform Features">
    <h2>Why Choose Learnova</h2>
    <p>Our platform offers everything you need to grow your skills online.</p>

    <div class="features-grid">

      <!-- Feature Card 1 -->
      <article class="feature-card">
        <div class="icon" aria-hidden="true">🎓</div>
        <h3>Expert Teachers</h3>
        <p>Learn from industry professionals and experienced instructors.</p>
      </article>

      <!-- Feature Card 2 -->
      <article class="feature-card">
        <div class="icon" aria-hidden="true">⌚</div>
        <h3>Flexible Learning</h3>
        <p>Study anytime and anywhere at your own pace with our online courses.</p>
      </article>

      <!-- Feature Card 3 -->
      <article class="feature-card">
        <div class="icon" aria-hidden="true">📜</div>
        <h3>Certification</h3>
        <p>Receive certificates to showcase your achievements and skills.</p>
      </article>

      <!-- Feature Card 4 -->
      <article class="feature-card">
        <div class="icon" aria-hidden="true">💻</div>
        <h3>Practical Projects</h3>
        <p>Work on real-world projects to apply your knowledge effectively.</p>
      </article>

    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.features {
  padding: 80px 10%;
  background: #f6f8fc;
  text-align: center;
}

.features h2 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #111827;
}

.features p {
  color: #555;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.feature-card .icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #4f46e5;
}

.feature-card p {
  color: #555;
  font-size: 14px;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
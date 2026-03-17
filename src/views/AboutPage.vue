<template>
  <section class="about-page">

    <!-- Hero Section -->
    <div class="about-hero">
      <div class="about-text">
        <h1>About Learnova</h1>
        <p>
          Learnova is an online learning platform dedicated to helping students
          master new skills in programming, design, and technology. Our expert
          instructors and practical projects ensure you gain real-world knowledge.
        </p>
        <p>
          Whether you're looking to start a career, enhance your skills, or
          learn something new, Learnova offers flexible courses that fit your
          schedule and learning style.
        </p>
      </div>

      <div class="about-image">
        <img src="https://via.placeholder.com/500x350?text=Online+Learning" alt="Learnova About Image">
      </div>
    </div>

    <!-- Mission / Values -->
    <div class="about-values">
      <h2>Our Mission</h2>
      <p>
        To empower learners worldwide with practical, engaging, and accessible
        online education that transforms careers and lives.
      </p>

      <div class="values-grid">
        <div class="value-card">
          <div class="icon">🎯</div>
          <h3>Focus on Skills</h3>
          <p>Courses designed to teach real-world skills that matter in the industry.</p>
        </div>

        <div class="value-card">
          <div class="icon">🌐</div>
          <h3>Global Community</h3>
          <p>Learn and collaborate with students and instructors from around the world.</p>
        </div>

        <div class="value-card">
          <div class="icon">⚡</div>
          <h3>Flexible Learning</h3>
          <p>Access courses anytime, anywhere, and learn at your own pace.</p>
        </div>

        <div class="value-card">
          <div class="icon">🏆</div>
          <h3>Certified Success</h3>
          <p>Receive certificates that validate your skills and achievements.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  padding: 80px 10%;
  background: #f6f8fc;
  color: #111827;
}

/* Hero Section */
.about-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin-bottom: 80px;
}

.about-text h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #555;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
}

/* Mission / Values */
.about-values {
  text-align: center;
}

.about-values h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.about-values p {
  font-size: 16px;
  color: #555;
  margin-bottom: 50px;
}

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.value-card {
  background: white;
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.value-card .icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.value-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #4f46e5;
}

.value-card p {
  font-size: 14px;
  color: #555;
}

/* Responsive */
@media(max-width:1024px){
  .about-hero {
    flex-direction: column-reverse;
    text-align: center;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width:768px){
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
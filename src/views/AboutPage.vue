<template>
   <section class="about-page">

  <div class="about-hero">
    <h1>About Learnova</h1>
    <p>Empowering learners around the world with modern digital education.</p>
  </div>

  <div class="about-container">

    <div class="about-text">
      <h2>Our Mission</h2>
      <p>
        At Learnova, our mission is to make high-quality education accessible to everyone.
        We provide modern courses taught by industry experts to help learners build real-world skills.
      </p>
    </div>

    <div class="about-text">
      <h2>Our Vision</h2>
      <p>
        We believe learning should be flexible, engaging, and available anywhere.
        Our goal is to create a global learning platform where students and professionals
        can grow their careers and knowledge.
      </p>
    </div>

    <div class="about-text">
      <h2>Why Choose Us</h2>
      <ul>
        <li>Expert instructors</li>
        <li>Practical real-world courses</li>
        <li>Flexible online learning</li>
        <li>Career-focused content</li>
      </ul>
    </div>

  </div>

  <div class="team-section">
    <h2>Meet Our Team</h2>

    <div class="team-grid">

      <div class="team-card">
        <img src="https://i.pravatar.cc/200?img=1" alt="">
        <h3>John Smith</h3>
        <p>Frontend Instructor</p>
      </div>

      <div class="team-card">
        <img src="https://i.pravatar.cc/200?img=2" alt="">
        <h3>Sarah Johnson</h3>
        <p>Backend Instructor</p>
      </div>

      <div class="team-card">
        <img src="https://i.pravatar.cc/200?img=3" alt="">
        <h3>Michael Lee</h3>
        <p>UI/UX Designer</p>
      </div>

    </div>
  </div>

</section>
</template>

<style scoped>
/* Main Container */
.about-page {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #334155;
  line-height: 1.6;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.about-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Mission/Vision/Why Us Content */
.about-container {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  display: grid;
  gap: 3rem;
}

.about-text h2 {
  color: #1e293b;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  position: relative;
}

.about-text h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 4px;
  background: #3b82f6;
  margin-top: 0.5rem;
  border-radius: 2px;
}

.about-text ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.about-text li {
  background: #f8fafc;
  padding: 0.75rem 1rem;
  border-left: 4px solid #3b82f6;
  border-radius: 4px;
  font-weight: 500;
}

/* Team Section */
.team-section {
  background-color: #f1f5f9;
  padding: 5rem 1.5rem;
  text-align: center;
}

.team-section h2 {
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #1e293b;
}

.team-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
}

/* Team Cards */
.team-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #e2e8f0;
}

.team-card h3 {
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.team-card p {
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2.2rem;
  }
  
  .about-container {
    margin: 2.5rem auto;
    gap: 2rem;
  }
}
</style>
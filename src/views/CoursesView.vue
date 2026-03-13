<template>
 <section class="courses-page">
  <h1 class="page-title">Our Courses</h1>
  <p class="page-subtitle">Learn from the best instructors and master new skills online.</p>

  <div class="courses-grid">
    <div class="course-card">
      <img src="https://images.unsplash.com/photo-1581091870624-93613f1bfa63?auto=format&fit=crop&w=400&q=80" alt="Vue.js Mastery" class="course-img" />
      <h2 class="course-title">Vue.js Mastery</h2>
      <p class="course-desc">Learn Vue from beginner to advanced with real projects.</p>
      <a href="/courses/1" class="course-btn">View Course</a>
    </div>

    <div class="course-card">
      <img src="https://images.unsplash.com/photo-1581090700227-0a42b38f912e?auto=format&fit=crop&w=400&q=80" alt="JavaScript Advanced" class="course-img" />
      <h2 class="course-title">JavaScript Advanced</h2>
      <p class="course-desc">Deep dive into modern JavaScript and ES6+ features.</p>
      <a href="/courses/2" class="course-btn">View Course</a>
    </div>

    <div class="course-card">
      <img src="https://images.unsplash.com/photo-1581092795366-6071e8ec5c34?auto=format&fit=crop&w=400&q=80" alt="React Fundamentals" class="course-img" />
      <h2 class="course-title">React Fundamentals</h2>
      <p class="course-desc">Build modern web applications with React.</p>
      <a href="/courses/3" class="course-btn">View Course</a>
    </div>

    <div class="course-card">
      <img src="https://images.unsplash.com/photo-1581091215360-55fc0f85b1a4?auto=format&fit=crop&w=400&q=80" alt="Python for Beginners" class="course-img" />
      <h2 class="course-title">Python for Beginners</h2>
      <p class="course-desc">Start programming with Python and data science basics.</p>
      <a href="/courses/4" class="course-btn">View Course</a>
    </div>
  </div>
</section>
</template>

<script setup>

</script>

<style scoped>
.courses-page {
  padding: 100px 10% 50px 10%;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 50px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.course-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.course-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.course-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.course-desc {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 15px;
}

.course-btn {
  display: inline-block;
  padding: 8px 15px;
  background-color: #4f46e5;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.course-btn:hover {
  background-color: #4338ca;
}
</style>
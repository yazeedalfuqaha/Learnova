<template>
  <section class="courses-page">

    <!-- Header -->
    <div class="page-header">
      <h1>All Courses</h1>
      <p>Browse all available courses and find what suits you best.</p>
    </div>

    <!-- Courses Grid -->
    <div class="courses-grid">

      <!-- Card 1 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=Web+Dev" alt="Web Development">
        <div class="course-content">
          <h3>Web Development Bootcamp</h3>
          <p>Learn HTML, CSS, JavaScript and build real projects.</p>
          <div class="course-footer">
            <span class="price">$49</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=UI%2FUX+Design" alt="UI/UX Design">
        <div class="course-content">
          <h3>UI/UX Design Masterclass</h3>
          <p>Design beautiful websites and apps with Figma and Adobe XD.</p>
          <div class="course-footer">
            <span class="price">$39</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=Python" alt="Python Programming">
        <div class="course-content">
          <h3>Python Programming</h3>
          <p>Master Python for web, data science, and automation.</p>
          <div class="course-footer">
            <span class="price">$59</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=React" alt="React JS">
        <div class="course-content">
          <h3>React JS Essentials</h3>
          <p>Learn React JS from scratch and build modern web apps.</p>
          <div class="course-footer">
            <span class="price">$45</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=Node+JS" alt="Node JS">
        <div class="course-content">
          <h3>Node JS Backend Development</h3>
          <p>Build scalable backend applications with Node.js and Express.</p>
          <div class="course-footer">
            <span class="price">$50</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="course-card">
        <img src="https://via.placeholder.com/400x200?text=Data+Science" alt="Data Science">
        <div class="course-content">
          <h3>Data Science with Python</h3>
          <p>Learn data analysis, visualization, and machine learning in Python.</p>
          <div class="course-footer">
            <span class="price">$60</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.courses-page {
  padding: 80px 10%;
  background: #f6f8fc;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-header h1 {
  font-size: 36px;
  color: #111827;
  margin-bottom: 10px;
}

.page-header p {
  color: #555;
  font-size: 16px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.course-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.course-content {
  padding: 20px;
  text-align: left;
}

.course-content h3 {
  margin-bottom: 10px;
  color: #4f46e5;
}

.course-content p {
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #111827;
}

.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #3730a3;
}

/* Responsive */
@media(max-width:1024px){
  .courses-grid{
    grid-template-columns: repeat(2,1fr);
  }
}

@media(max-width:768px){
  .courses-grid{
    grid-template-columns: 1fr;
  }
}
</style>
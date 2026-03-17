<template>
  <section class="courses-cards">
    <h2>Featured Courses</h2>
    <p>Explore our popular courses and start learning today.</p>

    <div class="cards-grid">

      <!-- Card 1 -->
      <div class="card">
        <img src="../assets/images/web.png" alt="Web Development">
        <div class="card-content">
          <h3>Web Development Bootcamp</h3>
          <p>Learn HTML, CSS, JavaScript , Vue js3 and build real projects.</p>
          <div class="card-footer">
            <span class="price">$49</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <img src="../assets/images/ux.png" alt="UI/UX Design">
        <div class="card-content">
          <h3>UI/UX Design Masterclass</h3>
          <p>Design beautiful websites and apps with Figma and Adobe XD.</p>
          <div class="card-footer">
            <span class="price">$39</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card">
        <img src="../assets/images/py.png" alt="Python Programming">
        <div class="card-content">
          <h3>Python Programming</h3>
          <p>Master Python for web, data science, and automation.</p>
          <div class="card-footer">
            <span class="price">$59</span>
            <button class="btn">Enroll</button>
          </div>
        </div>
      </div>

    </div>

    <!-- See All Courses Button -->
    <div class="see-all">
       <router-link :to="{ name: 'courses' }"  class="btn-co">Brows All Courses</router-link>
    </div>
  </section>
</template>

<style scoped>
.courses-cards {
  padding: 80px 10%;
  background: #f6f8fc;
  text-align: center;
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

.courses-cards h2 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #111827;
}

.courses-cards p {
  color: #555;
  margin-bottom: 50px;
  font-size: 16px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: left;
}

.card-content h3 {
  margin-bottom: 10px;
  color: #4f46e5;
}

.card-content p {
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-footer {
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

/* See All Courses Button */
.see-all {
  margin-top: 40px;
}

.btn-see-all {
  padding: 12px 30px;
  font-size: 16px;
}

/* Responsive */
@media(max-width:1024px){
  .cards-grid{
    grid-template-columns: repeat(2,1fr);
  }
}

@media(max-width:768px){
  .cards-grid{
    grid-template-columns: 1fr;
  }
}
</style>
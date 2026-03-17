<template>
  <footer class="footer">

    <div class="footer-container">

      <!-- Brand -->
      <div class="footer-brand">
        <h3>Learnova</h3>
        <p>
          Learn new skills online with expert instructors.
          Build your future with our courses.
        </p>
      </div>

      <!-- Platform Links -->
      <div class="footer-links">
        <h4>Platform</h4>
        <router-link to="/courses">Courses</router-link>
        <router-link to="/instructors">Instructors</router-link>
        <router-link to="/pricing">Pricing</router-link>
      </div>

      <!-- Company Links -->
      <div class="footer-links">
        <h4>Company</h4>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/careers">Careers</router-link>
      </div>

      <!-- Social Links -->
      <div class="footer-links">
        <h4>Follow Us</h4>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 Learnova. All rights reserved.</p>
    </div>

  </footer>
</template>

<script setup>
// لا حاجة لجافاسكريبت إضافي حاليا
</script>

<style scoped>
.footer{
  background:#111827;
  color:white;
  padding:60px 10% 20px;
  margin-top:80px;
}

.footer-container{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
}

.footer-brand h3{
  color:#6366f1;
  margin-bottom:10px;
}

.footer-links h4{
  margin-bottom:15px;
  font-weight:600;
}

.footer-links a{
  display:block;
  text-decoration:none;
  color:#cbd5e1;
  margin-bottom:8px;
  font-size:14px;
}

.footer-links a:hover{
  color:white;
}

.footer-bottom{
  text-align:center;
  margin-top:40px;
  border-top:1px solid #374151;
  padding-top:15px;
  font-size:14px;
  color:#9ca3af;
}

/* RESPONSIVE */
@media(max-width:900px){
  .footer-container{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:600px){
  .footer-container{
    grid-template-columns:1fr;
    text-align:center;
  }
}
</style>
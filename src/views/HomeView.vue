<template>
  <div>

    <!-- HERO / LANDING WITH VIDEO -->
    <section class="hero">

      <!-- Video Background -->
     <video class="bg-video" autoplay muted loop playsinline>
  <source src="@/assets/videos/hero.mp4" type="video/mp4">
</video>

      <!-- Overlay -->
      <div class="overlay"></div>

      <!-- Content -->
      <div class="hero-content">

        <div class="hero-text">
          <h1>Learn New Skills Online</h1>

          <p>
            Join thousands of students learning programming,
            design and technology.
          </p>

          <div class="buttons">
            <button class="primary">
              Start Learning
            </button>

            <button
              class="secondary"
              @click="$router.push('/courses')"
            >
              Browse Courses
            </button>
          </div>
        </div>

      </div>

    </section>


    <!-- COURSES -->
    <section class="courses">

      <h2>Popular Courses</h2>

      <div class="course-grid">

        <div class="course-card">
          <h3>Vue.js Mastery</h3>
          <p>Learn Vue from beginner to advanced.</p>
        </div>

        <div class="course-card">
          <h3>JavaScript Advanced</h3>
          <p>Deep dive into modern JavaScript.</p>
        </div>

        <div class="course-card">
          <h3>React Fundamentals</h3>
          <p>Build modern web apps.</p>
        </div>

      </div>

    </section>


    <!-- TESTIMONIAL -->
    <section class="features">
      <Testimonial />
    </section>


    <!-- PARTNERS -->
    <section class="partners">
      <Partners />
    </section>


    <!-- FOOTER -->
    <!-- <footer class="footer">
      <Footer />
    </footer> -->

  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import Partners from "@/components/Partners.vue";
import Testimonial from "@/components/Testimonial.vue";

export default {
  name: "HomeView",

  components: {
    Footer,
    Partners,
    Testimonial
  }
};
</script>


<style>

/* GLOBAL */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Poppins", sans-serif;
}


/* HERO SECTION */

.hero{
  position:relative;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  color:white;
  overflow:hidden;
}


/* VIDEO BACKGROUND */

.bg-video{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:-2;
}


/* DARK OVERLAY */

.overlay{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.55);
  z-index:-1;
}


/* HERO CONTENT */

.hero-content{
  max-width:800px;
  padding:20px;
  animation:fadeUp 1s ease;
}


.hero-text h1{
  font-size:60px;
  margin-bottom:20px;
}


.hero-text p{
  font-size:20px;
  margin-bottom:30px;
  opacity:0.9;
  color: #fff;
}


/* BUTTONS */

.buttons{
  display:flex;
  justify-content:center;
  gap:20px;
}


button{
  padding:12px 28px;
  border-radius:30px;
  border:none;
  font-size:16px;
  cursor:pointer;
  transition:0.3s;
}


.primary{
  background:#6366f1;
  color:white;
}

.primary:hover{
  transform:scale(1.08);
}


.secondary{
  background:white;
  color:#6366f1;
}

.secondary:hover{
  transform:scale(1.08);
}



/* COURSES */

.courses{
  padding:80px 10%;
  text-align:center;
  background:#f9fafb;
}


.courses h2{
  font-size:34px;
  margin-bottom:40px;
}


.course-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:30px;
}


.course-card{
  background:white;
  padding:30px;
  border-radius:15px;
  box-shadow:0 10px 30px rgba(0,0,0,0.1);
  transition:0.4s;
}


.course-card:hover{
  transform:translateY(-10px);
  box-shadow:0 20px 40px rgba(0,0,0,0.2);
}


.course-card h3{
  margin-bottom:10px;
}



/* FEATURES */

.features{
  padding:80px 10%;
}


/* PARTNERS */

.partners{
  padding:60px 10%;
  background:#f9fafb;
}



/* FOOTER */

.footer{
  background:#111;
  color:white;
  padding:40px;
  text-align:center;
}



/* ANIMATION */

@keyframes fadeUp{

  from{
    opacity:0;
    transform:translateY(40px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}



/* RESPONSIVE */

@media(max-width:768px){

.hero-text h1{
  font-size:40px;
}

.hero-text p{
  font-size:16px;
  color: #fff;
}

.buttons{
  flex-direction:column;
}

}


</style>
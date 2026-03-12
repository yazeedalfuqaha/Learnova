<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <h1>Learn New Skills Online</h1>
        <p>
          Join thousands of students learning programming, design and
          technology.
        </p>

        <div class="buttons">
          <button class="primary">Start Learning</button>
          <button class="secondary">Browse Courses</button>
        </div>
      </div>

      <div class="hero-img">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        />
      </div>
    </section>

    <!-- Courses -->
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

    <!-- Features -->
    <section class="features">
      <Testimonial />
    </section>

    <!-- CTA -->
    <section class="partners">
      <Partners />
    </section>

    <!-- Footer -->
    <footer class="footer">
    <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Partners from "@/components/Partners.vue";
import Testimonial from "@/components/Testimonial.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Testimonial,
    Partners,
    Footer
  },
};
</script>


<style>
</style>

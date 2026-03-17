<template>
  <section class="signup-page">
    <div class="signup-card">
      <h1>Create an Account</h1>
      <p>Join Learnova and start learning new skills today.</p>

      <form class="signup-form" >
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="btn signup-btn">Sign Up</button>
      </form>

      <!-- Login Link -->
      <p class="login-text">
        Already have an account? <router-link :to="{name:'login'}">Login</router-link>
      </p>
    </div>
  </section>

   <Footer/>
</template>

<script setup>

import Footer from '@/components/Footer.vue';

</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f4f8;
  padding: 20px;
}

.signup-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.signup-card h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #111827;
}

.signup-card p {
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
}

.signup-form .form-group {
  text-align: left;
  margin-bottom: 20px;
}

.signup-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.signup-form input {
  width: 90%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border 0.3s;
}

.signup-form input:focus {
  outline: none;
  border-color: #4f46e5;
}

.signup-btn {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  margin-top: 10px;
}

.signup-btn:hover {
  background: #3730a3;
}

.login-text {
  margin-top: 20px;
  font-size: 14px;
}

.login-text a {
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
}

.login-text a:hover {
  text-decoration: underline;
}

/* Responsive */
@media(max-width:480px){
  .signup-card {
    padding: 30px 20px;
  }
}
</style>
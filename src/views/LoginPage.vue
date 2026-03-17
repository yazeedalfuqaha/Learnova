<template>
  <section class="login-page">
    <div class="login-card">
      <h1>Login to Learnova</h1>
      <p>Access your courses and continue learning.</p>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="btn">Login</button>

        <p class="forgot-password">
          <a href="#">Forgot Password?</a>
        </p>
      </form>

      <!-- Sign Up Link -->
      <p class="signup-text">
        Don't have an account? <router-link :to="{name: 'signup'}">Sign Up</router-link>
      </p>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Footer from '@/components/Footer.vue';


</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f6f8fc;
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-card h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #111827;
}

.login-card p {
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
}

.login-form .form-group {
  text-align: left;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.login-form input {
  width: 90%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border 0.3s;
}

.login-form input:focus {
  outline: none;
  border-color: #4f46e5;
}

.btn {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.btn:hover {
  background: #3730a3;
}

.forgot-password {
  margin-top: 15px;
  font-size: 14px;
}

.forgot-password a {
  color: #4f46e5;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.signup-text {
  margin-top: 20px;
  font-size: 14px;
}

.signup-text a {
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
}

.signup-text a:hover {
  text-decoration: underline;
}

/* Responsive */
@media(max-width:480px){
  .login-card {
    padding: 30px 20px;
  }
}
</style>
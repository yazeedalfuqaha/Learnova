<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-header">
        <h2 class="brand-name">Learnova</h2>
        <h1>Welcome Back</h1>
        <p>Please enter your details to sign in.</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            v-model="loginData.email"
            type="email" 
            id="email" 
            placeholder="name@example.com" 
            required
          >
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="password">Password</label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>
          <input 
            v-model="loginData.password"
            type="password" 
            id="password" 
            placeholder="••••••••" 
            required
          >
        </div>

        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="loginData.remember">
            Remember me
          </label>
        </div>

        <button type="submit" class="login-btn">Sign In</button>
      </form>

      <div class="login-footer">
        <p>Don't have an account? <a href="#">Create an account</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const loginData = reactive({
  email: '',
  password: '',
  remember: false
});

// Function to hash the password using SHA-256
async function hashPassword(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const handleLogin = async () => {
  // Hash the password before doing anything with it
  const hashedPassword = await hashPassword(loginData.password);

  // Prepare the data for the "API"
  const payload = {
    email: loginData.email,
    password: hashedPassword, // The raw password is now obscured
    remember: loginData.remember
  };

  console.log('Secure Payload:', payload);
};
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
  padding: 1.5rem;
}

.login-card {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.brand-name {
  color: #2563eb;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-header h1 {
  font-size: 1.5rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.login-header p {
  color: #64748b;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.forgot-link, .login-footer a {
  color: #2563eb;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
}

.form-options {
  margin: 1rem 0 1.5rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #475569;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.login-btn:hover {
  background-color: #1d4ed8;
}

.login-footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
}
</style>
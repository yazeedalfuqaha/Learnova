<template>
   <h2>Signup Page yy</h2>
<form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
   <div class="error" v-if="error">
  {{ error }}
</div>
    <button>SignUp</button>

     <p class="login-link">
        Already have an account?
        <router-link :to="{ name: 'login' }">Login</router-link>
    </p>
</form>
</template>


<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup'

export default {
    setup(){

      const {error , signup} = useSignup()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit  = async () => {
         await signup(email.value, password.value, displayName.value)
         console.log("user singed up")
        }


        return{displayName, email, password, handleSubmit, error }
    }
}
</script>

<style scoped>


.error {
  color: #ef4444;             
  background-color: #ffe5e5;  
  border: 1px solid #f87171; 
  border-radius: 8px;         
  padding: 8px 12px;          
  font-size: 14px;             
  font-weight: 500;            
  text-align: center;          
  min-height: 20px;           
  transition: all 0.3s ease;  
  margin-bottom: 10px;         
}


@media (max-width: 500px) {
  .error {
    font-size: 13px;
    padding: 6px 10px;
  }
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
}

.login-link a:hover {
  text-decoration: underline;
}
/* Center the form */
form {
  max-width: 400px;
  width: 90%;
  margin: 80px auto;
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.3s ease;
}

/* Inputs */
form input {
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 14px;
  transition: 0.3s ease;
  background: #f9fafb;
}

/* Input focus effect */
form input:focus {
  border-color: #6366f1;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

/* Button */
form button {
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

/* Button hover */
form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.25);
}

/* Button active */
form button:active {
  transform: scale(0.98);
}

/* Mobile responsive */
@media (max-width: 500px) {
  form {
    padding: 30px 20px;
    margin: 40px auto;
  }

  form input {
    font-size: 13px;
    padding: 12px;
  }

  form button {
    font-size: 14px;
    padding: 12px;
  }
}

/* Background (optional but nice look) */
body {
  background: linear-gradient(135deg, #eef2ff, #f8fafc);
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
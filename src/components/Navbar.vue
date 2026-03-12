

<template>

<nav class="navbar">

  <div class="logo">
    Learnova
  </div>

  <!-- desktop menu -->
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">About</a>
    <a href="#">Login</a>
    <a class="signup"><span class="sign_span">Sign Up</span></a>
  </div>

  <!-- burger icon -->
  <div class="burger" @click="toggleMenu">
    ☰
  </div>

</nav>

<!-- mobile menu -->
<div v-if="mobileMenu" class="mobile-menu">

  <a href="#">Home</a>
  <a href="#">Courses</a>
  <a href="#">About</a>
  <a href="#">Login</a>
  <a class="signup"><span class="sign_span">Sign Up</span></a>

</div>

</template>

<script setup>
import { ref } from "vue"

const mobileMenu = ref(false)

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value
}
</script>

<style>

.sign_span{
    color: #eee;
    cursor: pointer;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 10%;
background:white;
}

.logo{
font-size:24px;
font-weight:bold;
color:#4f46e5;
}

/* desktop links */

.links a{
margin-left:20px;
text-decoration:none;
color:#333;
}

.signup{
background:#4f46e5;
color:white;
padding:8px 16px;
border-radius:6px;
}

/* burger */

.burger{
display:none;
font-size:28px;
cursor:pointer;
}

/* mobile menu */

.mobile-menu{
display:flex;
flex-direction:column;
padding:20px;
background:white;
border-top:1px solid #eee;
}

.mobile-menu a{
padding:10px 0;
text-decoration:none;
color:#333;
}

/* responsive */

@media(max-width:768px){

.links{
display:none;
}

.burger{
display:block;
}

}

</style>
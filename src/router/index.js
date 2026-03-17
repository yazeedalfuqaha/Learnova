import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesPage from '../views/CoursesPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import ContactusPage from '@/views/ContactusPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage
  },

  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },


  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },

   {
    path: '/contact',
    name: 'contact',
    component: ContactusPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

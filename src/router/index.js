import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesPage from '../views/CoursesPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactusPage from '@/views/ContactusPage.vue'
import SignupComp from '@/components/SignupComp.vue'
import LoginCom from '@/components/LoginCom.vue'

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
    component: LoginCom
  },


  {
    path: '/signup',
    name: 'signup',
    component: SignupComp
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

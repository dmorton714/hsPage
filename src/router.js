import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './components/SignUp.vue'
import DownloadPage from './components/DownloadPage.vue'
import MainPage from './components/MainPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/signup',
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadPage,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

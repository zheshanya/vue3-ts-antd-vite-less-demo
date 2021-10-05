import { createRouter, createWebHashHistory } from "vue-router"
import  AppLayout from '../components/AppLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: AppLayout,
    meta: {
      title: "页面布局"
    },
    redirect: {name: 'Home'},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue'),
        meta: {
          title: "首页"
        }
      },
      {
        path: '/user',
    name: 'User',
    component: () => import('../views/user/User.vue'),
    meta: {
      title: "用户"
    },
      }
    ]
  },
  

]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
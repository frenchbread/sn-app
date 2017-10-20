import Vue from 'vue'
import Router from 'vue-router'

import libAuth from '@/lib/auth'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('@/components/Home')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('@/components/Dashboard'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: require('@/components/Login')
  },
  {
    path: '/logout',
    name: 'logout',
    component: require('@/components/Logout')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({ routes })

// Only authorized users can access restricted rotues
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    const validated = await libAuth.validateToken()
    if (!validated) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

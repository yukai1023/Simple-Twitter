import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('/not-found')
    return
  }
  next()
}

const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'user') {
    next('/not-found')
    return
  }
  next()
}
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/main',
    name: 'main',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/Main.vue')
  },
  {
    path: '/user',
    name: 'user',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/User.vue')
  },
  {
    path: '/user/:id',
    name: 'OtherUser',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/OtherUser.vue')
  },
  {
    path: '/user/replyList/:id',
    name: 'replyList',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/user/followingList/:id',
    name: 'followingList',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/FollowingList.vue')
  },
  {
    path: '/user/followerList/:id',
    name: 'followerList',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/FollowerList.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    beforeEnter: authorizeIsUser,
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/main',
    name: 'adminMain',
    beforeEnter: authorizeIsAdmin,
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin/userList',
    name: 'adminUserList',
    beforeEnter: authorizeIsAdmin,
    component: () => import('../views/AdminUserList.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // ?????? dispatch ?????? Vuex ?????? actions
  store.dispatch('fetchCurrentUser')
  next()
})

router.beforeEach(async (to, from, next) => {
  // ??? localStorage ?????? token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  const roleInLocalStorage = localStorage.getItem('role')
  let isAuthenticated = store.state.isAuthenticated

  // ????????? token ???????????????
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // ????????????????????? token ?????????
  const pathsWithoutAuthentication = ['login', 'regist', 'admin']

  // ?????? token ?????????????????????????????????????????????????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }

  // ?????? token ???????????????????????????????????????????????????????????????
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name) && roleInLocalStorage === 'user') {
    next('/main')
    return
  }

  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name) && roleInLocalStorage === 'admin') {
    next('/admin/main')
    return
  }
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router

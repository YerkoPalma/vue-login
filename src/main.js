import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))

Vue.config.debug = true

/**
 *  Components
 */
 import Login from './components/login.vue'
 import Register from './components/register.vue'
 import UserLayout from './components/user.vue'

/**
 *  Main app is an extension of Vue to be used with Vueroueter
 */
let App = Vue.extend({})
let router = new VueRouter()

/* eslint-disable no-new */
router.map({
  '/login' : {
    component : Login
  },
  '/register' : {
    component : Register
  },
  '/user' : {
    component : UserLayout
  }
})

router.alias({
  '/' : '/login'
})

router.start(App, '#app')

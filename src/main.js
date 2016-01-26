import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))

/**
 *  Components
 */
 import Login from './components/login.vue'
 import Register from './components/register.vue'

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
  }
})

router.alias({
  '/' : '/login'
})

router.start(App, '#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))

Vue.config.debug = true
Vue.http.headers.common['Access-Control-Expose-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, *'

/**
 *  Components
 */
 import Login from './components/login.vue'
 import Register from './components/register.vue'
 import UserLayout from './components/user.vue'

/**
 *  Main app is an extension of Vue to be used with Vueroueter
 */
let App = Vue.extend({
  data() {
    return {
        backend: 'http://localhost:8080/'
    }
  }
})

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

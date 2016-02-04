<style lang="less">
    .container{
      width: 350px;
      label {
        width: 100%;
        a {
          cursor: pointer;
        }
      }
      .g-login{
        margin: 15px 0 0;
      }
      p{
        margin: 0;
      }
      .horizontal-divider{
        position: relative;
        margin: 15px 0 0;
        border-top: solid 1px #ddd;
        span {
          position: absolute;
          top: -12px;
          left: 150px;
          z-index: 100;
          background: #fff;
          padding: 0 5px;
          color: #777;
        }
      }
    }
</style>

<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">Register</h1>
      <div class="panel panel-default">
        <div class="panel-body">
              <div class="form-group">
                <label for="registerEmail">Email address</label>
                <input type="email" class="form-control" id="registerEmail" placeholder="Email" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="registerUsername">Username</label>
                <input type="email" class="form-control" id="registerUsername" placeholder="Username" v-model="user.username">
              </div>
              <div class="form-group">
                <label for="registerPassword">Password</label>
                <input type="password" class="form-control" id="registerPassword" placeholder="Password" v-model="user.password">
              </div>
              <div class="form-group">
                <label for="registerRepeatPassword">Repeat Password</label>
                <input type="password" class="form-control" id="registerRepeatPassword" placeholder="Password">
              </div>
              <button class="btn btn-primary btn-block text-center" v-on:click="register">Register</button>
              <div class="horizontal-divider">
                <span>or</span>
              </div>
              <button class="btn btn-danger btn-block text-center g-login"><i class="fa fa-google-plus"></i> Register with google+</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-body">
          <p class="text-center">Already have an account? <a v-link="{ path: '/login' }">Sign In</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cookie from 'cookie-cutter'
  
  export default{
    data() {
      return {
        user: {
          email: '',
          username: '',
          password: ''
        }
      }
    },
    methods: {
      register: function(){

        this.$http.post(
          this.$parent.backend + 'signup', //post uri
          {
            'email' : this.user.email,
            'password' : this.user.password,
            'username' : this.user.username
          }
        ).then( (response) => {

          if (typeof response.headers('x-session-token') !== 'undefined') {
            cookie.set('token', response.headers('x-session-token'))
          } else {
            console.log(JSON.stringify(response.headers()))
          }

          this.$route.router.go('/user') //success
        }, (response) => {
          console.log("error")
          this.$route.router.go('/') //success
        })
      }
    }
  }
</script>

<template>
  <!-- This component work as a layout, with it's own router -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" @click="showLeft = true"><i class="fa fa-chevron-left"></i> Empresa</a>
        <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
        ...
        </sidebar>
      </div>


      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li><a href="#">{{user.username}}</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import sidebar from './aside.vue'
import cookie from 'cookie-cutter'

export default{
  ready() {
    //here should check that there is an user connected
    this.$http.get(
      this.$parent.backend + 'profile',
      {},
      { headers: {
        'x-session-token' : cookie.get('token')
      }}
    ).then( (response) => {
      this.user.username = response.data.username
      this.user.email = response.data.mail
      //console.log(JSON.stringify(response))
    }, (response) => {
      console.log("error")
      this.$route.router.go('/login')
    })
  },
  data() {
    return {
      user: {
        email: 'john.doe@mail.com',
        username: 'John Doe'
      },
      showLeft: false
    }
  },
  components: {
    sidebar
  }
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

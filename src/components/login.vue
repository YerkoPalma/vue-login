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
      <h1 class="text-center">Login</h1>
      <div class="panel panel-default">
        <div class="panel-body">
              <div class="form-group">
                <label for="loginEmail">Email address</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="Email">

              </div>
              <div class="form-group">
                <label for="loginPassword">Password <span class="pull-right"><a>forgot password?</a></span></label>
                <input type="password" class="form-control" id="loginPassword" placeholder="Password">

              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
              <button class="btn btn-success btn-block text-center">Login</button>
              <div class="horizontal-divider">
                <span>or</span>
              </div>
              <button class="btn btn-danger btn-block text-center g-login"><i class="fa fa-google-plus"></i> Login with google+</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="panel panel-default">
        <div class="panel-body">
          <p class="text-center">You don't have an account? <a v-link="{ path: '/register' }">Sign up</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-dark">
    
    <!-- Account Modal -->
      <div class="modal modal-dark" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="accountModalLabel">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
              <div class="modal-title text-center">
                
                <h1 class=" animated fadeInRight animation-delay-6"><strong><span class="color-"><strong>Repentance</strong></span> </strong></h1>
                <span class="ms-logo ms-logo-white ms-logo-sm mr-1">R</span>
              </div>
              
            </div>
            <div class="modal-body" >
              <div class="tab-content" >
                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab" >
                  <form v-on:submit.prevent="login()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Email</label>
                          <input type="text" id="ms-form-user" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" class="form-control" v-model="password">
                        </div>
                        <div class="input-group">
                                                    
                        </div>
                      </div>
                      <div class="row mt-2">
                        {{errors[0]}}
                     
                          <button type="submit" class="btn btn-raised btn-block btn-black pull-right">Login</button>
                        <!-- </div> -->
                      </div>
                    </fieldset>
                  </form>
                 
                </div>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link v-if="!auth()" to="/login">                
        <span class="ms-logo animated zoomInDown animation-delay-5">R</span>
      </router-link>
      <router-link v-if="auth()" to="/logout">                
        <span class="ms-logo animated zoomInDown animation-delay-5">R</span>
      </router-link>

      <div class="container container-full">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">
            <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> -->
            
            <span class="ms-title"> <strong>Repentance</strong></span>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="ms-navbar">
          <ul class="navbar-nav">
            
          </ul>
        </div>   
    
      </div> <!-- container -->
    
    </nav>

    <router-view/>

  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      page: "",
      email: "",
      password: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    auth: function(){
      return true;
      // if (localStorage.getItem("jwt")){
        
      //   return true;
      // } else {
      //   return false;
      // }
    },
    login: function(){
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });

    }
  }
};
</script>

<template>
  <div class="login">
      
      <div class="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div class="mw-500 absolute-center">
          <div class="card color-dark shadow-6dp animated fadeIn animation-delay-7">
            <div class="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 class="text-center no-m pt-4 pb-4 color-white index-1">Login Form</h2>
            </div>
            <div class="card-body">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab">
                  <form v-on:submit.prevent="login()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Username</label>
                          <input type="text" id="ms-form-user" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" class="form-control" v-model="password">
                        </div>
                      </div>
                      <div class="row mt-6">
                        <div class="col-7">
                          <button class="btn btn-raised btn-primary pull-right">Login</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center animated fadeInUp animation-delay-7">
            <router-link :to="'/'" class="btn btn-white"><i class="zmdi zmdi-home"></i> Go Home</router-link>
          </div>
        </div>
      </div>

        
        



    
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  created: function() {
   
  },
  methods: {

    login: function() {
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
          // this.$router.push("/");
          // forceRerender();

          window.location.href="/";
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

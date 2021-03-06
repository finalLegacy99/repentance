import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "production" ? "https://repentance-api.herokuapp.com" : "/";

createApp(App).use(router).mount('#app')

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
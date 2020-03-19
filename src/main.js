import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"; //追記
import VueAxios from "vue-axios"; //追記
import AOS from "aos";
import firebase from "./firebase";
import store from "./store";

// firebaseを初期化
firebase.init();

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(AOS);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

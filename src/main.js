import Vue from "vue";
import App from "./App.vue";
import env from "dotenv";
import moment from 'moment';
import Vuemoment from 'vue-moment';
import router from './router'

env.config();

Vue.use(Vuemoment,{moment});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");

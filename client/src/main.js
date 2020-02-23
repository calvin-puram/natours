import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';

Vue.use(VueNoty);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const token = JSON.parse(localStorage.getItem('token'));
Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

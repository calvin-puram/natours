import Vue from 'vue';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(VueNoty);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const token = JSON.parse(localStorage.getItem('new'));
Vue.prototype.$http.defaults.headers.common[
  'Authorization'
] = `Bearer ${token}`;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

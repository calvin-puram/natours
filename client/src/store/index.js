import Vue from 'vue';
import Vuex from 'vuex';
import Tours from './modules/Tours';
import Auth from './modules/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Tours,
    Auth
  }
});

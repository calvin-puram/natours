import Vue from "vue";
import Vuex from "vuex";
import Tours from "./modules/Tours";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Tours
  }
});

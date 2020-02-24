import axios from 'axios';

const state = {
  token: JSON.parse(localStorage.getItem('token')) || '',
  errors: null,
  loading: false
};
const getters = {
  isLoggedIn: () => !!state.token,
  getUser: () => state.user,
  getAuthErrors: () => state.errors,
  authLoading: () => state.loading,
  getToken: () => state.token
};
const actions = {
  //LOGIN USER
  async login({ commit }, user) {
    try {
      commit('loading_status');
      const res = await axios.post(
        'http://localhost:8000/api/v1/users/login',
        user
      );
      if (res.data.success) {
        localStorage.setItem('token', JSON.stringify(res.data.data));
        localStorage.setItem('new', JSON.stringify(res.data.token));
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.token}`;
        commit('login_status', res.data);
      }
      return res;
    } catch (err) {
      console.log(err.response.data.msg);
      commit('authError_status', err.response.data.msg);
    }
  },

  //REGISTER USER
  async register({ commit }, user) {
    try {
      commit('loading_status');
      const res = await axios.post(
        'http://localhost:8000/api/v1/users/signup',
        user
      );
      if (res.data.success) {
        localStorage.setItem('token', JSON.stringify(res.data));
        axios.defaults.headers.common['Authorization'] = res.data;
        commit('login_status', res.data);
      }
      return res;
    } catch (err) {
      console.log(err.response.data.msg);
      commit('authError_status', err.response.data.msg);
    }
  }
};
const mutations = {
  loading_status(state) {
    state.loading = true;
    state.errors = null;
  },

  login_status(state, token) {
    state.loading = false;
    state.errors = false;
    state.token = token;
  },

  authError_status(status, err) {
    state.loading = false;
    state.errors = err;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

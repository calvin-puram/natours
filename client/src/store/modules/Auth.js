import axios from 'axios';

const state = {
  token: JSON.parse(localStorage.getItem('new')) || '',
  errors: null,
  loading: false,
  user: {}
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

  // USER PROFILE
  async userProfile({ commit }) {
    try {
      commit('loading_status');
      const res = await axios.get(
        'http://localhost:8000/api/v1/users/myprofile'
      );
      if (res.data.success) {
        console.log(res.data);
        commit('profile_status', res.data.data);
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
  },

  //LOGOUT USER
  logout() {
    localStorage.removeItem('new');
    delete axios.defaults.headers.common['Authorization'];
    return;
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

  authError_status(state, err) {
    state.loading = false;
    state.errors = err;
  },

  profile_status(state, user) {
    state.loading = false;
    state.errors = false;
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

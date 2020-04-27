import axios from 'axios';

const state = {
  newUser: JSON.parse(localStorage.getItem('token')) || {},
  userLoading: false,
  userErrors: null
};
const getters = {
  getNewUser: () => state.newUser,
  getUserLoading: () => state.userLoading,
  getUserErrors: () => state.userErrors
};
const actions = {
  //UPDATE USER DETAILS
  async updateNewUser({ commit }, user) {
    try {
      commit('loading_status');
      const res = await axios.patch(
        'http://localhost:8000/api/v1/users/updateMe',
        user
      );

      if (res.data.success) {
        // localStorage.removeItem('token');
        // localStorage.setItem('token', JSON.stringify(res.data.data));
      }
      return res;
    } catch (err) {
      console.log(err.response.data.msg);
      commit('userError_status', err.response.data.msg);
    }
  },

  //UPDATE PASSWORD
  async updateUserPassword({ commit }, user) {
    try {
      commit('loading_status');
      const res = await axios.patch(
        'http://localhost:8000/api/v1/users/updatePassword',
        user
      );
      return res;
    } catch (err) {
      console.log(err.response.data.msg);
      commit('userError_status', err.response.data.msg);
    }
  }
};
const mutations = {
  loading_status(state) {
    state.userLoading = true;
    state.userErrors = null;
  },

  userError_status(state, err) {
    state.userLoading = false;
    state.userErrors = err;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

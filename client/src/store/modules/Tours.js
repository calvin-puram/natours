import axios from 'axios';

const state = {
  tours: [],
  tour: {},
  loading: false,
  errors: null
};
const getters = {
  getTours: () => state.tours,
  isLoading: () => state.loading,
  getErrors: () => state.errors,
  getTour: () => state.tour
};
const actions = {
  // GET ALL TOURS
  async allTours({ commit }) {
    try {
      commit('loading_state');
      const res = await axios.get('http://localhost:8000/api/v1/tours');
      if (res.data.success) {
        commit('tours_response', res.data.data);
      }
      return res;
    } catch (err) {
      commit('error_response', err.response);
    }
  },

  // GET ONE TOUR
  async singleTour({ commit }, slug) {
    try {
      console.log(slug);
      commit('loading_state');
      const res = await axios.get(`http://localhost:8000/api/v1/tours/${slug}`);
      if (res.data.success) {
        console.log(res.data.data);
        commit('tour_response', res.data.data);
      }
      return res;
    } catch (err) {
      console.log(err.response);
      commit('error_response', err.response);
    }
  }
};
const mutations = {
  loading_state(state) {
    state.loading = true;
    state.errors = null;
  },

  error_response(state, err) {
    state.loading = false;
    state.errors = err;
  },

  tours_response(state, data) {
    state.loading = false;
    state.errors = null;
    state.tours = data;
  },

  tour_response(state, data) {
    state.loading = false;
    state.errors = null;
    state.tour = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

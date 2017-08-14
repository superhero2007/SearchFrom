

import * as types from '../mutation-types';

const state = {
  filter: {
    optionName: 'All years',
    datePickerVisible: false,
    selectedDate: '',
  },
};
const getters = {
  currentState: state => state.filter,
};
const actions = {
  setFilter({ commit }, filterData) {
    commit(types.SET_FILTER, filterData);
  },
  setDate({ commit }, date) {
    commit(types.SET_DATE, date);
  },
};
const mutations = {
  [types.SET_FILTER](state, data) {
    state.filter = data;
  },
  [types.SET_DATE](state, date) {
    state.selectedDate = date;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};


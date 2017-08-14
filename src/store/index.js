/**
 * Created by aleksei on 5/10/17.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import * as getters from './getters';
import auth from './modules/auth';
import filterOptions from './modules/filterOption';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    filterOptions,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

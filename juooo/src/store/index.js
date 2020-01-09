import Vue from 'vue'
import Vuex from 'vuex'
import index from './index/index'
import axios from 'axios'
// import 'swiper/dist/css/swiper.css';

Vue.use(Vuex)

Vuex.Store.prototype.$axios = axios;

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    index
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import works from './assets/json/works.json'
import about from './assets/json/about.json'
import { _ } from 'core-js';

const store = new Vuex.Store({
  state: {
    works: works,
    about: about
  },
  getters: {
    allWorks: state => {
      return state.works;
    },
    works: state => {
      return state.works.filter(work => work.shouldBeExposed);
    },
    length: (state, getters) => {
      return getters.works.length;
    }
  },
  mutations: {
    
  },
  actions: {
    
  }
})

export default store;
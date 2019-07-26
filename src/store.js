import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import allWorks from './assets/json/works.json'
import about from './assets/json/about.json'
import { _ } from 'core-js';

const store = new Vuex.Store({
  state: {
    allWorks: allWorks,
    works: allWorks.filter(work => work.shouldBeExposed).map((work, idx, arr) => {
      work.id = idx;
      return work;
    }),
    about: about,
    
    // TODO: 슬라이드가 바뀌거나, 특정 포트폴리오 페이지로 이동할 때 변경되어야합니다.
    currentWorkId: 0,
  },
  getters: {
    about: state => {
      return state.about;
    },
    snsForFooter: state => {
      return state.about.sns.filter(s => s.exposeFooter);
    },
    snsForAboutPage: state => {
      return state.about.sns.filter(s => s.exposeAboutPage);
    },
    allWorks: state => {
      return state.allWorks;
    },
    works: state => {
      return state.works;
    },
    length: (state) => {
      return state.works.length;
    },
    currentWork: (state, getters) => {
      const currentWorkId = state.currentWorkId;
      return getters.works[currentWorkId];
    },
    nextWork: (state, getters) => {
      const currentWorkId = state.currentWorkId;
      const nextWorkId = (currentWorkId + 1) % getters.length;
      return getters.works[nextWorkId];
    },
    prevWork: (state, getters) => {
      const currentWorkId = state.currentWorkId;
      if (currentWorkId == 0) {
        return getters.works[getters.length - 1];
      }

      const prevWorkId = (currentWorkId - 1) % getters.length;
      return getters.works[prevWorkId];
    },
    currentWorkId: (state) => {
      return state.currentWorkId;
    },
    workFromPath: (state, getters) => (path) => {
      const work = getters.works.filter(work => {
        return `/portfolio/${work.path}` == path;
      });

      return work[0];
    }

  },
  mutations: {
    changeCurrentWorkId (state, workId) {
      state.currentWorkId = workId;
    },
    changeCurrentWorkIdWithWork (state, work) {
      state.currentWorkId = work.id;
    },
    amIActive(state, obj) {
      obj.isActive = obj.work.id === state.currentWorkId;
    }
  },
  actions: {
    
  }
})

export default store;
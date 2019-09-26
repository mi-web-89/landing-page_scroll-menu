import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutY: 0,
    productY: 0,
    visiY: 0,
  },
  getters: {
    getAboutY(state) {
      return state.aboutY
    },
    getProductY(state) {
      return state.productY
    },
    getVisiY(state) {
      return state.visiY
    },

  },
  mutations: {
    setAboutY(state, value) {
      state.aboutY = value
    },
    setProductY(state, value) {
      state.productY = value
    },
    setVisiY(state, value) {
      state.visiY = value
    }
  },
  actions: {
    setPositionAboutY({ state, commit }, valueY) {
      if (state.aboutY != valueY) {
        commit('setAboutY', valueY)
      }
    },
    setPositionProductY({ state, commit }, valueY) {
      if (state.aboutY != valueY) {
        commit('setProductY', valueY)
      }
    },
    setPositionVisiY({ state, commit }, valueY) {
      if (state.aboutY != valueY) {
        commit('setVisiY', valueY)
      }
    }
  }
})

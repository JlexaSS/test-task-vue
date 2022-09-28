import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false
  },
  getters: {
    IS_MENU_OPEN(state) {
      return state.isMenuOpen;
    }
  },
  mutations: {
    CHANGE_IS_MENU_OPEN: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    }
  },
  actions: {
    TOGGLE_MENU({commit}) {
      commit('CHANGE_IS_MENU_OPEN')
    }
  },
  modules: {
  }
})

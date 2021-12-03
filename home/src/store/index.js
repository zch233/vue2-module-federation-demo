import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 'vuex'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
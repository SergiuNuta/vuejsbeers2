import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items: state => {
      return state.items
    }
  },
  mutations: {
    SET_Items (state, items) {
      state.items = items
    }
  },
  actions: {
    loadItems ({ commit }) {
      axios.get('/api/beers', {})
        .then(response => response.data)
        .then(items => {
          commit('SET_Items', items)
        })
    }
  },
  modules: {
  }
})

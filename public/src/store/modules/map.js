import axios from 'axios'


const state = {
  items: []
}

const mutations = {
  SET_ITEMS (state, objects) {
    state.items = objects
  }
}

const actions = {
  load ({ commit }) {
    axios.get('/api/object')
      .then((results) => {
        commit('SET_ITEMS', results.data)
      })
  }  
}

export default {
  namespaced: true,
  state, 
  mutations,
  actions
}
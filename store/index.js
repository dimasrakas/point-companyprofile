import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      lang: 'id',
    },
    mutations: {
      changeID(state) {
        state.lang = 'id'
      },
      changeEN(state) {
        state.lang = 'eng'
      },
    },
  })
}

export default createStore

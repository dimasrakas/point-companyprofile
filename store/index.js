import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      lang: 'id',
    },
    mutations: {
      changeLanguange(state) {
        if (state.lang === 'id') {
          state.lang = 'en'
        } else {
          state.lang = 'id'
        }
      },
    },
  })
}

export default createStore

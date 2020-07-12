import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lang: 'en',
      featureHeader: '',
      featureSubHeader: '',
      featureDetail: '',
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

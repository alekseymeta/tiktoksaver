export const state = () => ({
  showLoader: false,
  resultData: null
})

export const getters = {
  showLoader: s => s.showLoader,
  resultData: s => s.resultData
}

export const mutations = {
  SET_LOADER(state, showLoader) {
    state.showLoader = showLoader
  },
  SET_RESULTDATA(state, resultData) {
    state.resultData = resultData
  }
}

export const actions = {
  async GETDATA({commit}, val) {
    commit('SET_LOADER', true)
    await fetch('https://www.tiktoksaver.online/tik/api.php?id=' + val)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        commit('SET_RESULTDATA', json)
        commit('SET_LOADER', false)
      })
      .catch(e => {
        commit('SET_LOADER', false)
        commit('SET_RESULTDATA', {success: false, message: 'Something wrong. Try later'})
      })
  }
}

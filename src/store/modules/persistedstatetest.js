const persistedstatetest = {
  namespaced: true,
  state() {
    return {
      persistedData: 0,
      unpersistedData: 0
    }
  },
  mutations: {
    persistedData(state, data) {
      state.persistedData = data
    },
    unpersistedData(state, data) {
      state.unpersistedData = data
    }
  }
}

export default persistedstatetest

const user = {
  namespaced: true,
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    user(state, data) {
      state.user = data
    }
  }
}

export default user

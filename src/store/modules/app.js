const state = {
  user: {},
  userIsAuthenticated: false,
  loader_tokenValidation: false
}

const mutations = {
  SAVE_USER (state, user) {
    state.userIsAuthenticated = true
    state.user = user
  },
  CLEAR_USER (state) {
    state.userIsAuthenticated = false
    state.user = {}
  },
  START_LOADER_TOKEN_VALIDATION (state) {
    state.loader_tokenValidation = true
  },
  STOP_LOADER_TOKEN_VALIDATION (state) {
    state.loader_tokenValidation = false
  }
}

const actions = {
  saveUser ({ commit }, user) {
    commit('SAVE_USER', user)
  },
  clearUser ({ commit }) {
    commit('CLEAR_USER')
  },
  start_loader_tokenValidation ({ commit }) {
    commit('START_LOADER_TOKEN_VALIDATION')
  },
  stop_loader_tokenValidation ({ commit }) {
    commit('STOP_LOADER_TOKEN_VALIDATION')
  }
}

const getters = {
  user: state => state.user,
  userIsAuthenticated: state => state.userIsAuthenticated,
  loader_tokenValidation: state => state.loader_tokenValidation
}

export default {
  state,
  mutations,
  actions,
  getters
}

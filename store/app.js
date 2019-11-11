export const state = () => ({
  windowWidth: null,
  windowHeight: null,
  isOpenMenu: false,
  isLoading: false
})

export const getters = {
  isSmartPhone (state) {
    if (state.windowWidth) {
      return state.windowWidth <= 768
    }
  }
}

export const mutations = {
  setWindowWidth (state, windowWidth) {
    state.windowWidth = windowWidth
  },
  setWindowHeight (state, windowHeight) {
    state.windowHeight = windowHeight
  },
  setIsOpenMenu (state, is) {
    state.isOpenMenu = is
  }
}

export const actions = {
  toggleMenu ({ state, commit }) {
    commit('setIsOpenMenu', !state.isOpenMenu)
  },
  closeMenu ({ state, commit }) {
    commit('setIsOpenMenu', false)
  }
}

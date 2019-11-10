export default ({ store }) => {
  let isResize = false
  store.commit('app/setWindowWidth', window.innerWidth)
  store.commit('app/setWindowHeight', window.innerHeight)

  window.addEventListener('resize', () => {
    if (!isResize) {
      isResize = true
      setTimeout(() => {
        const windowWidth = store.state.app.windowWidth
        if (windowWidth !== window.innerWidth) {
          store.commit('app/setWindowWidth', window.innerWidth)
          store.commit('app/setWindowHeight', window.innerHeight)
        }
        isResize = false
      }, 100)
    }
  })
}

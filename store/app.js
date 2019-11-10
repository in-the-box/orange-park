export const getters = {
  isSmartPhone () {
    if (window) {
      return window.innerWidth >= 768
    }
  }
}

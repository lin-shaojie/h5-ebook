const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENTBOOK', currentBook)
  },
  setDefaultTheme: ({ commit }, defaultTheme) => {
    return commit('SET_DEFAULTTHEME', defaultTheme)
  }
}
export default actions

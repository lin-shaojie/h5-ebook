const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1:不显示,0:字号,1:主题,2:进度,3:目录
    currentBook: null,
    defaultTheme: 'Default'
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    SET_SETTINGVISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_CURRENTBOOK: (state, currentBook) => {
      state.currentBook = currentBook
    },
    SET_DEFAULTTHEME: (state, defaultTheme) => {
      state.defaultTheme = defaultTheme
    }
  }
}
export default book

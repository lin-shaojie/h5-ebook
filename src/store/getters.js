const book = {
    fileName: state => state.book.fileName,
    menuVisible: state => state.book.menuVisible,
    settingVisible: state => state.book.settingVisible,
    currentBook: state => state.book.currentBook,
    defaultTheme: state => state.book.defaultTheme
}
export default book

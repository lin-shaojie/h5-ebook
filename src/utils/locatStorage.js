import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage (key, value) {
    return localStorage.set(key, value)
}

export function getLocalStorage (key) {
    return localStorage.get(key)
}

export function removeLocalStorage (key) {
    return localStorage.delete(key)
}

export function clearLocalStorage () {
    return localStorage.clear()
}

export function setBookObject (fileName, key, value) {
    let book = getLocalStorage(`${fileName}-info`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject (fileName, key) {
    const book = getLocalStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}

/**
 * @Desc 获取缓存中的字体样式
 * @param {*} fileName  电子书名
 */
export function getFontFamily (fileName) {
    return getBookObject(fileName, 'fontFamily')
}

/**
 * @Desc 保存字体样式到缓存中
 * @param {*} fileName  电子书名
 */
export function saveFontFamily (fileName, font) {
    return setBookObject(fileName, 'fontFamily', font)
}

/**
 * @Desc 获取缓存中的字体大小
 * @param {*} fileName  电子书名
 */
export function getFontSize (fileName) {
    return getBookObject(fileName, 'fontSize')
}

/**
 * @Desc 保存字体大小到缓存中
 * @param {*} fileName  电子书名
 */
export function saveFontSize (fileName, fontSize) {
    return setBookObject(fileName, 'fontSize', fontSize)
}

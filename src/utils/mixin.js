import { mapGetters, mapActions } from 'vuex'
import { themeList } from './book'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible',
      'currentBook',
      'defaultTheme'
    ]),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisible',
      'setSettingVisible',
      'setCurrentBook',
      'setDefaultTheme'
    ])
  }
}

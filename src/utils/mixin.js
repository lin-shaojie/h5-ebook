import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    methods: {
        ...mapActions(['setFileName', 'setMenuVisible', 'setSettingVisible', 'setCurrentBook'])
    },
    computed: {
        ...mapGetters(['fileName', 'menuVisible', 'settingVisible', 'currentBook'])
    }
}

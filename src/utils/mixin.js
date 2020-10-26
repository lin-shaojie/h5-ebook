import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    methods: {
        ...mapActions(['setFileName', 'setMenuVisible'])
    },
    computed: {
        ...mapGetters(['fileName', 'menuVisible'])
    }
}

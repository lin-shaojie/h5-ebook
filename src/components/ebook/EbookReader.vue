<template>
  <div class="ebook-reader">
      <div id="read"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
    methods: {
        initEpub () {
            const url = `http://localhost:8081/epub/${this.fileName}.epub`
            this.book = new Epub(url)
            this.rendition = this.book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight,
                methods: 'default'
            })
            this.rendition.display()
        }
    },
    computed: {
        ...mapGetters(['fileName'])
    },
    mounted () {
        const fileName = this.$route.params.fileName.split('|').join('/')
        this.$store.dispatch('setFileName', fileName).then(() => {
            this.initEpub()
        })
    }
}
</script>

<style>

</style>

<template>
  <div class="ebook-reader">
      <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Epub from 'epubjs'
global.ePub = Epub
export default {
    mixins: [ebookMixin],
    methods: {
        prevPage () {
            if (this.rendition) {
                this.rendition.prev()
                if (this.menuVisible) {
                    this.hideTitleAndMenu()
                }
            }
        },
        nextPage () {
            if (this.rendition) {
                this.rendition.next()
                if (this.menuVisible) {
                    this.hideTitleAndMenu()
                }
            }
        },
        toggleTitleAndMenu () {
            if (this.menuVisible) {
                 this.setSettingVisible(-1)
            }
            this.setMenuVisible(!this.menuVisible)
        },
        hideTitleAndMenu () {
            this.setMenuVisible(false)
            this.setSettingVisible(-1)
        },
        initEpub () {
            const url = `http://localhost:8081/epub/${this.fileName}.epub`
            this.book = new Epub(url)
            this.setCurrentBook(this.book)
            this.rendition = this.book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight,
                methods: 'default'
            })
            this.rendition.display()
            this.rendition.on('touchstart', event => {
                this.touchStartX = event.changedTouches[0].clientX
                this.touchStartTime = event.timeStamp
            })

            this.rendition.on('touchend', event => {
                const offsetX = event.changedTouches[0].clientX - this.touchStartX
                const time = event.timeStamp - this.touchStartTime
                if (offsetX > 40 && time < 500) {
                    this.prevPage()
                } else if (offsetX < -40 && time < 500) {
                    this.nextPage()
                } else {
                    this.toggleTitleAndMenu()
                }
                event.stopPropagation()
            })
        }
    },
    mounted () {
        const fileName = this.$route.params.fileName.split('|').join('/')
        this.setFileName(fileName).then(() => {
            this.initEpub()
        })
    }
}
</script>

<style>

</style>

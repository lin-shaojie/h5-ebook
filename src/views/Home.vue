<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub

export default {
  name: 'Home',
  mounted () {
    this.book = new Epub('/2018_Book_HousingEstatesInEurope.epub')
    console.log(this.book)
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>

<style scoped>

</style>

<template>
   <transition name="slide-up">
     <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
          <span style="font-size:16px;">A</span>
          <van-slider v-model="fontSize" @change="setFontSizeChange" :min="12" :max="24" :step="2"  >
            <template #button>
              <div class="custom-button">{{ fontSize }}</div>
            </template>
          </van-slider>
          <span style="font-size:22px;">A</span>
     </div>
   </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
export default {
  name: 'EbookSettingFont',
  mixins: [ebookMixin],
  data () {
    return {
      fontSize: 16
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    setFontSizeChange (value) {
      this.fontSize = value
      this.currentBook.rendition.themes.fontSize(`${this.fontSize}PX`)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
  .setting-wrapper {
    @include center;
    position: absolute;
    bottom: 46px;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 58px;
    background: white;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
  }
  span {
    margin: 0 18px;
  }
  .custom-button {
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    font-size: 14px;
    color: #000;
    @include center;
  }
</style>

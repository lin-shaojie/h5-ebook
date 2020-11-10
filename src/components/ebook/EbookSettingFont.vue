<template>
   <transition name="slide-up">
        <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
            <div class="font-size-setting">
              <span style="font-size:16px;">A</span>
              <van-slider v-model="fontSize" @change="setFontSizeChange" :min="12" :max="26" :step="2"  >
                <template #button>
                  <div class="custom-button">{{ fontSize }}</div>
                </template>
              </van-slider>
              <span style="font-size:22px;">A</span>
            </div>
            <van-dropdown-menu direction="up" active-color="#1989fa"  >
              <van-dropdown-item v-model="fontFamily" :options="fontFamilyList" @change="setFontFamily" />
            </van-dropdown-menu>
        </div>
   </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { getFontFamily, getFontSize, saveFontFamily, saveFontSize } from '../../utils/locatStorage'
export default {
  name: 'EbookSettingFont',
  mixins: [ebookMixin],
  data () {
    return {
      fontSize: 16, // 字体大小
      fontFamily: 'Times new Roman',
      fontFamilyList: [
        { text: 'Default', value: 'Times new Roman' },
        { text: 'Cabin', value: 'Cabin' },
        { text: 'Days One', value: 'Days One' },
        { text: 'Montserrat', value: 'Montserrat' },
        { text: 'Tangerine', value: 'Tangerine' }
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    // 初始化字体
    const fontFamily = getFontFamily(this.fileName)
    const fontSize = getFontSize(this.fileName)
    if (fontFamily) {
      this.fontFamily = fontFamily
    }
    if (fontFamily) {
      this.fontSize = fontSize
    }
  },

  methods: {
    setFontSizeChange (value) {
      this.fontSize = value
      this.currentBook.rendition.themes.fontSize(`${this.fontSize}PX`)
      saveFontSize(this.fileName, value)
    },
    showPopup () {
      this.show = !this.show
    },
    setFontFamily (value) {
      this.currentBook.rendition.themes.font(value)
      this.fontFamily = value
      saveFontFamily(this.fileName, value)
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
    flex-direction: column;
    width: 100%;
    height: 100px;
    background: white;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
    .font-size-setting {
       display: flex;
       flex-direction: row;
       width: 100%;
       margin-top: 10px;
      @include center;
    }
    .font-family {
      margin: 10px 15px 0px 15px;
      font-size: 18px;
    }
    .van-dropdown-menu {
      width:100%;
      margin-top: 16px;
      ::v-deep .van-dropdown-menu__bar {
          height: 15px;
          box-shadow: none;
      }
    }

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

<template>
    <transition name="slide-up">
        <div class="setting-wrapper" v-show="menuVisible && settingVisible === 1">
          <van-row gutter="10">
             <van-col span="6"  v-for="(item, index) in themeList" :key="index" class="themeItmes" @click="setThemes(index)">
               <div class="preview" :style="{background: item.style.body.background}" :class="{'selected': item.name === defaultTheme}"></div>
               <div class="text" :class="{'selected': item.name === defaultTheme }">{{item.alias}}</div>
             </van-col>
          </van-row>
        </div>
   </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
  export default {
    name: 'EbookSettingTheme',
    mixins: [ebookMixin],
    data () {
      return {
      }
    },

    computed: {},

    mounted () {},

    methods: {
      setThemes (index) {
        const theme = this.themeList[index].name
        this.setDefaultTheme(theme)
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
    flex-direction: row;
    width: 100%;
    height: 100px;
    background: white;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
    .themeItmes {
       flex-direction: row;
       text-align: center;
        .preview {
          width: 80px;
          height: 50px;
          &.selected {
            box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .1);
          }
        }
        .text {
          margin-top: 10px;
          font-size: 16px;
           &.selected {
            font-weight: bold;
          }
        }
    }

  }
</style>

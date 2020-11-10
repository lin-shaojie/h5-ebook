<template>
    <transition name="slide-up">
        <div class="setting-wrapper" v-show="menuVisible && settingVisible === 1">
            <div class="font-size-setting">
                123
            </div>
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
          show: true
      }
    },

    components: {},

    computed: {},

    mounted () {},

    methods: {}

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

  }
</style>

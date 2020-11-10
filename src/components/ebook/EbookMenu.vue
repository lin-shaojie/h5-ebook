<template>
    <div>
        <transition name="slide-up">
            <div class="menu-wrapper" :class="{'hide-box-shadow': !menuVisible || settingVisible >= 0 }" v-show="menuVisible">
                <div class="icon-wrapper">
                <span class="icon-menu" @click="showSetting(3)"></span>
                </div>
                <div class="icon-wrapper">
                <span class="icon-progress" @click="showSetting(2)"></span>
                </div>
                <div class="icon-wrapper">
                <span class="icon-bright" @click="showSetting(1)"></span>
                </div>
                <div class="icon-wrapper">
                <span class="icon-A" @click="showSetting(0)"></span>
                </div>
            </div>
        </transition>
        <ebook-setting-font></ebook-setting-font>
        <ebook-setting-theme></ebook-setting-theme>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import EbookSettingFont from './EbookSettingFont'
import EbookSettingTheme from './EbookSettingTheme'

export default {
    mixins: [ebookMixin],
    components: {
        EbookSettingFont,
        EbookSettingTheme
    },
    methods: {
        showSetting (key) {
            this.setSettingVisible(key)
        }
    }
}
</script>

<style lang="scss" scope>
@import '../../assets/styles/global.scss';

.menu-wrapper {
position: absolute;
bottom: 0;
left: 0;
z-index: 100;
display: flex;
width: 100%;
height: 46px;
background: white;
font-size: 26px;
box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
&.hide-box-shadow {
    box-shadow: none;
}
.icon-wrapper {
    flex: 1;
    @include center;
    .icon-progress {
      font-size: 22px;
    }
    .icon-bright {
     font-size: 22px;
    }
}
}
</style>

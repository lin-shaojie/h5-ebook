<template>
    <transition name="slide-down">
        <div class="title-wrapper" v-show='menuVisible'>
            <div class="left">
                <span class="icon-back" @click="back"></span>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="icon-shelf"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-cart"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-more"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'

export default {
    mixins: [ebookMixin],
    data () {
        return {

        }
    },
    methods: {
        back () {
            console.log('back')
        }
    }

}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.title-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    z-index: 100;
    width: 100%;
    height: 46px;
    background-color: white;
    font-size: 26px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, .15);
    .left {
        flex: 0 0 40px;
        margin-left: 10px;
         @include left;
    }
    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .icon-wrapper {
            flex: 0 0 42px;
            @include left;
        }
    }

}
</style>

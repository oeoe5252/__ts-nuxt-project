<template>
    <div class="main-tab">
        <MainTabItem
            v-for="(item, idx) of items"
            :item="item"
            :key="idx"
            @changeTab="printItem"
            :class="[item.className, { on: activeTab === item.className }]"
            ><span class="bg"></span></MainTabItem>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator"

    @Component
    export default class MainTabList extends Vue {
        @Prop() items?: object

        activeTab: string = 'event01'
        printItem(payload : any) {
            this.$emit('changeTab', payload)
            this.activeTab = payload.className
        }
    }
</script>
<style lang="scss" scoped>
    .main-tab {
        @include displayFlex();
        .tab-item {
            
            &.event01,
            &.event02 {
                width: 50%;
                height: 60px;
                border-radius: 10px 10px 0 0;
                background-color: $grayB3;
                .bg {
                    display: block;
                    margin: auto;
                    @include bgImg(top left, cover);
                }
            }

            &.event01 {
                .bg {
                    @include bgItemSize(365px, 25px);
                    @include bgSprite(0 0);
                    background-image: url('~@/assets/images/common/tab_ev1_v.png');
                }
                
                &.on,
                &:hover {
                    background-color: $mainColor01;
                    .bg {
                        @include bgSprite(0 -35px);
                    }
                }
            }
            
            &.event02 {
                .bg {
                    @include bgItemSize(324px, 25px);
                    @include bgSprite(0 0);
                    background-image: url('~@/assets/images/common/tab_ev2_v.png');
                }
                &.on,
                &:hover {
                    background-color: $mainColor02;
                    .bg {
                        @include bgSprite(0 -35px);
                    }
                }
            }
        }
    }
</style>
<template>
    <ul class="tab-item-wrap region-tab">
        <RegionTabItem
            v-for="(item, idx) of tmpRegion"
            :item="item"
            :key="idx"
            @changeTab="printItem"
            :class="[{ on: item === activeTab }]"
            >{{item}}</RegionTabItem>
    </ul>
</template>
<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator"

    @Component
    export default class RegionTabList extends Vue {
        tmpRegion: Array<string> = ['전국', '수도권', '충청도', '전라도', '경상도', '강원도', '제주도']

        activeTab: string = '전국'
        printItem(payload : string) {
            this.$emit('changeTab', payload)
            this.activeTab = payload
        }
    }
</script>
<style lang="scss">
    .region-tab {
        @include flexbox();
        @include justify-content();
        margin-bottom: 6rem;
        .tab-item + .tab-item {
            border-left: 1px solid $grayD3;
        }
        .tab-item {
            @include displayFlex(inlin-flex, center, center);
            height: 60px;
            min-width: 130px;
            font-size: 2.2rem;
            font-weight: 500;
            color: $txtColor;
            box-shadow: 3px 3px $boxShodow02;
            background-color: $white;

            &.on,
            &:hover {
                color: $white;
                background-color: $empColor02;
            }
        }
        .tab-item:first-child {
            border-radius: 50px 0 0 50px;
        }
        .tab-item:last-child {
            border-radius: 0 50px 50px 0;
        }
    }
</style>
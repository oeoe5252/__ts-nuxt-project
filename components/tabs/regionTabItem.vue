<template>
    <li class="tab-item" @click="printItem">
        <slot></slot>
    </li>
</template>
<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator"

    @Component
    export default class RegionTabItem extends Vue {
        @Prop() item!: object

        printItem() {
            this.$emit('changeTab', this.item)
        }
    }
</script>
<style lang="scss">

</style>
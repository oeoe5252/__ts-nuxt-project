<template>
<!-- 정리요망 :: tab01Content, tab02Content 로 대신 사용됨 -->
  <div class="tab-panel-item">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TabPanel extends Vue {}
</script>
<style lang="scss">
.tab-panel-item {
  &.event02 {
    background-color: $mainBgColor02;
  }
}
</style>
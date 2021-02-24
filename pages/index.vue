
<template>
  <div class="oe__toy01-hanwoo01">
    <h1 class="hide">Toy01 테스트</h1>

    <!--
      :::::::::::::::::::::::::::::(update: 21.02.)
      1. 안된거 많지
      :::::::::::::::::::::::::::::
     -->

    <!-- 메인탭 -->
    <main-tab-list :items="mainTabItems" @changeTab="changeTab" />

    <!-- 메인탭 본문 -->
    <div class="tab-panel-wrap">
      <!-- 이벤트1 -->
      <Tab01Content
        v-show="activeTabContent === 'event01'"
        :class="mainTabItems['tab01'].className" />
      <!-- 이벤트2 -->
      <Tab02Content
        v-show="activeTabContent === 'event02'"
        :class="mainTabItems['tab02'].className" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  layout: 'hanwooEvent/index',
})
export default class Index extends Vue {
  /**
   * 메인탭
   */
  activeTabContent: string = 'event01'
  mainTabItems: object = {
    tab01: {
      className: 'event01',
    },
    tab02: {
      className: 'event02',
    },
  }

  /**
   * 메인탭 활성: payload : object 로 하면 .className 에러뜸
   */
  changeTab(payload: any) {
    this.activeTabContent = payload.className
  }
}
</script>

<style lang="scss">
.oe__toy01-hanwoo01 {
  width: 1024px;
  min-width: 1024px;
  margin: auto;
  text-align: center;
  .store-list-wrap {
    padding: 0 80px;
  }
}
</style>
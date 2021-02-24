<template>
  <!-- 
    :::::::::::::::::::::
    ccaEventLayout :: 이벤트 페이지 레이아웃은, pc기준으로 작업되었고, 1024px 중앙정렬을 가지고 있다. 이벤트 페이지라서 안에 페이지는 탭이동이 있을뿐, 페이지 이동이 있는게 아니라 레이아웃을 크게 활용할게 없는거 같아서 하나만 썼다.
    :::::::::::::::::::::
  -->
  <div class="oe__event-wrap">
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class OeEventLayout extends Vue {}
</script>

<style lang="scss">
  .oe__event-wrap {
    width: 1024px;
    min-width: 1024px;
    margin: auto;
    text-align: center;
  }
</style>
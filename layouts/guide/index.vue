<template>
  <!-- 
    :::::::::::::::::::::
    코드정렬상태 :: 탭->스페이스2로 대체, 저장시 코드 정렬안함
    :::::::::::::::::::::
  -->
  <!-- 
    :::::::::::::::::::::
    styleguideLayout :: 스타일가이드용 레이아웃
                   뱅샐 보며 이유, 및 기타 다 기재하며 정리하기 , 이 한우용이 아니라 개인용으로 설계 꾸준히 하기, 민지네가 정의했다는 것처럼 각각,
    :::::::::::::::::::::
  -->
  <div class="styleguide-wrap">
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class StyleGuideLayout extends Vue {}
</script>

<style lang="scss">
  .styleguide-wrap {
    width: 1024px;
    min-width: 1024px;
    margin: auto;
  }
</style>
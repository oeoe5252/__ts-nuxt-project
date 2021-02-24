<template>
  <div class="img-box-wrap">
    <slot name="img"></slot>
    <p class="hide">
      <slot name="hide"></slot>
    </p>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class ImgBox extends Vue {}
</script>
<style lang="scss">
.img-box-wrap {
  position: relative;
}
</style>
<template>
  <div
    class="banner-wrap"
    :style="{ width: width, height: height, 'background-color': bgColor }"
  >
    <div class="banner-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class Banner extends Vue {
  @Prop({ default: '' }) width?: string
  @Prop({ default: '' }) height?: string
  @Prop({ default: '' }) bgColor?: string
}
</script>
<style lang="scss">
.banner-wrap {
  @include displayFlex();
  .banner-content {
    height: inherit;
    position: relative;
    padding-left: 50px;
    margin-left: 165px;
    text-align: left;
    img {
      position: absolute;
      bottom: 0;
      left: -160px;
    }
    p {
      font-family: BMJUA;
      font-size: 2.2rem;
      color: $white;
      padding: 1.5rem 0 1rem;

      span {
        font-size: 2.8rem;
      }
    }
  }
}
</style>
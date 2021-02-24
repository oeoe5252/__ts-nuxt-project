<template>
  <div class="sub-info" :class="[`color-${colorType}`]">
    <h2 class="tit"><slot name="tit" /></h2>
    <p class="desc"><slot name="desc" /></p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class SubInfo extends Vue {
  /**
   * @Prop colorType : [(def), y, p]
   */
  @Prop({ default: 'def' }) colorType?: string
}
</script>
<style lang="scss">
.sub-info {
  text-align: center;
  margin-bottom: 3.5rem;
  .tit {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }
  .desc {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.2;
  }
  &.color-def {
    .desc {
      color: $black;
    }
  }
  &.color-y {
    .desc {
      color: $subTxtColor01;
    }
  }
  &.color-p {
    .desc {
      color: $subTxtColor02;
    }
  }
}
</style>
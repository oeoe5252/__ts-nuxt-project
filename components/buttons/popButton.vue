<template>
  <button 
    :class="[
      className,
      { [`btn-${btnType}`] : btnType },
      { [`btn-${btnShape}`] : btnShape },
      { [`btn-${btnSize}`] : btnSize },
      { [`btn-${btnColor}`] : btnColor },
      { [`btn-action-${btnActionType}`] : btnActioned },
      { 'btn-bg-clear' : btnBg === 'clear' },
      { [`align-${textAlign}`] : textAlign && !iconType },
      { 'align-between' : textAlign && iconType }]"
    :disabled="btnDisabled"
    @click="$emit('click')">
    <i v-if="iconType && iconPos === 'left'"
      :class="{ [`ico-${iconType}`] : iconType }"></i>
    <span><slot /></span>
    <i v-if="iconType && iconPos === 'right'"
      :class="{ [`ico-${iconType}`] : iconType }"></i>
  </button>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class MainButton extends Vue {
    /**
     *                      : [value]                     : prefix 
     * @Prop btnType        : [(def), ok, cancle]         : btn-
     * @Prop btnShape       : [(), r100, r50, r10]        : btn-
     * @Prop btnBg          : [(), clear]                 : btn-
     * @Prop textAlign      : [(), left, right]
     * @Prop btnDisabled    : T || (F)
     * @Prop className      : [(), ?]
     * ********* 아직 정의 안함()
     * @Prop btnColor       : [(), yellow, pink]          : btn-
     * @Prop iconPos        : [(left), right]
     * @Prop iconType       : [(), arr, plus]             : ico-
     * @Prop btnSize        : [(), large, small, xsmall]  : btn-
     * @Prop btnActioned    : T || (F)
     * @Prop btnActionType  : [(def), ?, ?]               : btn-action-
     */
    @Prop({ default: 'def' }) btnType?:         string
    @Prop({ default: '' }) btnShape?:           string
    @Prop({ default: '' }) btnBg?:              string
    @Prop({ default: '' }) textAlign?:          string
    @Prop({ default: false }) btnDisabled?:     boolean
    @Prop({ default: '' }) className?:          string
    
    @Prop({ default: '' }) btnColor?:           string
    @Prop({ default: '' }) iconType?:           string
    @Prop({ default: 'left' }) iconPos?:        string
    @Prop({ default: '' }) btnSize?:            string
    @Prop({ default: false }) btnActioned?:     boolean
    @Prop({ default: 'def' }) btnActionType?:   string
  }
</script>
<style lang="scss" scoped>
  // :: btnShape
  .btn-r100 {
    border-radius: 100%;
  }
  .btn-r50 {
    border-radius: 50px;
  }
  .btn-r15 {
    border-radius: 15px;
  }
  .btn-r5 {
    border-radius: 5px;
  }
  // :: <PopButton> common :: btn-type 공통 사용 ::
  [class*='btn-'] {
    @include displayFlex(inline-flex, center, center);
    height: 55px;
    min-width: 240px;
    color: $white;
    font-size: 2.4rem;
    letter-spacing: -0.16rem;
    padding: 0 1em;
    margin-right: 1rem;
    margin-bottom: 1rem;

    // :: disabled
    &[disabled],
    &[disabled].active,
    &[disabled]:active,
    &[disabled]:focus,
    &[disabled]:hover {
        color: $grayCCC;
        text-shadow: none;

        &.btn-ok,
        &.btn-cancle {
          background-color: $grayF3;
        }
    }

    // :: textAlign
    &.align-left {
      @include justify-content(flex-start); 
      text-align: left;
    }
    &.align-right {
      @include justify-content(flex-end); 
      text-align: right;
    }
    &.align-between {
      @include justify-content(space-between); 
    }
  }

  // :: btn-ok [bg-clear]
  .btn-ok {
    background-color: $gray3E;

    // :: bg-clear
    &.btn-bg-clear {
      background-color: transparent;
    }
  }
  // :: btn-cancle [bg-clear]
  .btn-cancle {
    background-color: $gray999;

    // :: bg-clear
    &.btn-bg-clear {
      background-color: transparent;
    }
  }
</style>
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
      { [`align-${textAlign}`] : textAlign }]"
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
  export default class VoteButton extends Vue {
    /**
     *                      : [value]                     : prefix 
     * @Prop btnType        : [(def), line, ok, cancel]               : btn-
     * @Prop iconType       : [(), arr, plus]             : ico-
     * @Prop iconPos        : [(left), right]
     * @Prop btnShape       : [(), r100, r50, r10]        : btn-
     * @Prop btnSize        : [(), large, small, xsmall]  : btn-
     * @Prop btnColor       : [(), ?, ?]                  : btn-
     * @Prop btnBg          : [(), ?, ?]                  : btn-
     * @Prop btnDisabled    : T || (F)
     * @Prop btnActioned    : T || (F)
     * @Prop btnActionType  : [(def), ?, ?]               : btn-action-
     * @Prop textAlign      : [(), left, right]
     * @Prop className      : [(), ?]
     */
    @Prop({ default: 'def' }) btnType?:         string
    @Prop({ default: '' }) iconType?:           string
    @Prop({ default: 'left' }) iconPos?:        string
    @Prop({ default: '' }) btnShape?:           string
    @Prop({ default: '' }) btnSize?:            string
    @Prop({ default: '' }) btnColor?:           string
    @Prop({ default: '' }) btnBg?:              string
    @Prop({ default: false }) btnDisabled?:     boolean
    @Prop({ default: false }) btnActioned?:     boolean
    @Prop({ default: 'def' }) btnActionType?:   string
    @Prop({ default: '' }) textAlign?:          string
    @Prop({ default: '' }) className?:          string
  }
</script>
<style lang="scss" scoped>
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
  .btn-def {
    @include displayFlex(inline-flex, center, center);
    height: 60px;
    font-size: 2rem;
    font-weight: 500;
    color: $white;
    padding: 0 2rem 0 1.5rem;

    // icoType
    i {
      position: relative;
      margin-left: 0;
      margin-right: 10px;

      &.ico-heart {
        @include itemSize(27px, 27px);
        background-image: url('~@/assets/images/common/ico/ico_ht.png');
      }
    }

    span + i {
      margin-left: 10px;
      margin-right: 0;
    }

    &.btn-bg-clear {
      background-color: transparent;
    }

    // btnColor
    &.btn-pink {
      background-color: $mainColor02;
    }
  }
</style>
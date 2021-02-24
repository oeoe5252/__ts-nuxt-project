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
  export default class LineButton extends Vue {
    /**
     *                      : [value]                     : prefix 
     * @Prop btnType        : [(def)]                     : btn-
     * @Prop iconType       : [(), arr, plus]             : ico-
     * @Prop iconPos        : [(left), right]
     * @Prop btnShape       : [(), r100, r50, r10]        : btn-
     * @Prop btnColor       : [(), yellow, pink]          : btn-
     * @Prop btnBg          : [(), clear]                  : btn-
     * @Prop className      : [(), ?]
     * @Prop textAlign      : [(), left, right]
     * @Prop btnDisabled    : T || (F)
     * ********* 아직 정의 안함(어떻게 해야할지 감이 아직 아놈)
     * @Prop btnSize        : [(), large, small, xsmall]  : btn-
     * @Prop btnActioned    : T || (F)
     * @Prop btnActionType  : [(def), ?, ?]               : btn-action-
     */
    @Prop({ default: 'def' }) btnType?:         string
    @Prop({ default: '' }) iconType?:           string
    @Prop({ default: 'left' }) iconPos?:        string
    @Prop({ default: '' }) btnShape?:           string
    @Prop({ default: '' }) btnColor?:           string
    @Prop({ default: '' }) btnBg?:              string
    @Prop({ default: '' }) textAlign?:          string
    @Prop({ default: '' }) className?:          string
    @Prop({ default: false }) btnDisabled?:     boolean
    
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
  // :: <MainButton> common :: btn-type 공통 사용 :: main은 btn-type이 def 밖에 없어서..
  [class*='btn-'] {
    @include displayFlex(inline-flex, center, center);
    height: 33px;
    border: 1px solid $gray999;
    font-size: 1.6rem;
    color: $txtColor;
    letter-spacing: -0.16px;
    padding: 0 1em;

    i {
      display: inline-block;
      position: relative;
      margin-left: 0;
      margin-right: 5px;

      &:before,
      &:after {
        @include pseudoBase();
      }

      &.ico-arr {
        @include itemSize(8px, 8px);

        &:before {
          width: 100%;
          height: 100%;
          border-width: 2px 2px 0 0;
          border-style: solid;
          transform: rotate(45deg);
        }
        &:after {
          display: none;
        }
      }
    }
    span + i {
      margin-left: 5px;
      margin-right: 0;
    }

    // :: disabled
    &[disabled],
    &[disabled].active,
    &[disabled]:active,
    &[disabled]:focus,
    &[disabled]:hover {
        color: $grayCCC;
        text-shadow: none;

        &.btn-def {
          background-color: $grayF3;
          border-color: $grayF3;
        }
        &.btn-line,
        &.btn-dashed {
          border-color: $grayCCC;
        }

        i {
          &.ico-arr {
            &:before,
            &:after {
              border-color: $grayCCC;
            }
          }
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

  // :: btn-def [bg-clear, icoType, btnColor]
  .btn-def {
    color: $txtColor;
    background-color: $white;

    // :: bg-clear
    &.btn-bg-clear {
      background-color: transparent;
    }

    // :: btn-color
    &.btn-pink,
    &.btn-yellow {
      &.btn-bg-clear {
        background-color: transparent;
      }
    }

    &.btn-pink {
      i {
        &:before,
        &:after {
          border-color: $mainColor02;
        }
        &.ico-arr {
          &:before {
            // background-color: transparent;
            border-color: $mainColor02;
          }
        }
      }
    }
    &.btn-yellow {
      i {
        &:before,
        &:after {
          border-color: $empColor02;
        }
        &.ico-arr {
          &:before {
            // background-color: transparent;
            border-color: $empColor02;
          }
        }
      }
    }

    // :: btn-size
    &.btn-small {
        height: 22px;
        font-size: 1.3rem;
    }
  }
</style>
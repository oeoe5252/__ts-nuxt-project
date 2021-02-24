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
    height: 60px;
    min-width: 360px;
    font-size: 2.2rem;
    font-family: BMJUA;
    padding: 0 1rem;

    i {
      display: inline-block;
      position: relative;
      // 아이콘 left 여백
      margin-left: 0;
      margin-right: 10px;

      &:before,
      &:after {
        @include pseudoBase();
        border-radius: 50px;
      }

      &.ico-arr {
        @include itemSize(13px, 13px);

        &:before {
          width: 100%;
          height: 100%;
          border-width: 3px 3px 0 0;
          border-style: solid;
          border-radius: 0;
          transform: rotate(45deg);
        }
        &:after {
          display: none;
        }
      }

      &.ico-plus {
        @include itemSize(20px, 20px);

        &:before {
          width: 100%;
          height: 3px;
          top: 50%;
          transform: translateY(-50%);
        }
        &:after {
          width: 3px;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    span + i {
      margin-left: 10px;
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

          &.ico-plus {
            &:before,
            &:after {
              background-color: $grayCCC;
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
    box-shadow: 5px 5px $grayE6;

    // :: bg-clear
    &.btn-bg-clear {
      background-color: transparent;
    }

    // :: ico-type
    i {
      &.ico-arr {
        &:before,
        &:after {
          border-color: $txtColor;
        }
      }

      &.ico-plus {
        &:before,
        &:after {
          background-color: $txtColor;
        }
      }
    }

    // :: btn-color
    &.btn-pink,
    &.btn-yellow {
      &.btn-bg-clear {
        background-color: transparent;
      }
    }

    &.btn-pink {
      background-color: $white;
      box-shadow: 5px 5px $boxShodow02;

      i {
        &:before,
        &:after {
          background-color: $mainColor02;
        }
        &.ico-arr {
          &:before {
            background-color: transparent;
            border-color: $mainColor02;
          }
        }
      }
    }
    &.btn-yellow {
      background-color: #fffa6f;
      box-shadow: 5px 5px #453329;

      i {
        &:before,
        &:after {
          background-color: $empColor02;
        }
        &.ico-arr {
          &:before {
            background-color: transparent;
            border-color: $empColor02;
          }
        }
      }
    }
  }
</style>
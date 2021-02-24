<template>
  <!-- 안씀 -->
  <div :class="[`input-${inputType}`, styleType]">
    <label v-if="isLabelLeft()" :for="id" :class="[label]"><slot /></label>

    <input
      v-if="inputType === 'text'"
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
    />
    <input
      v-if="inputType === 'radio'"
      :type="inputType"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
    />
    <input
      v-if="inputType === 'checkbox'"
      :type="inputType"
      :name="name"
      :id="id"
    />
    <label v-if="inputType === 'file'" :for="id">{{ placeholder }}</label>
    <input
      v-if="inputType === 'file'"
      :type="inputType"
      :name="name"
      :id="id"
      class="hide"
    />

    <label v-if="!isLabelLeft()" :for="id">
      <slot name="must" />
      <slot name="txt" />
      <slot />
    </label>

    <!-- 인풋 추가설명 -->
    <p v-if="alert" :class="[{ alert: alert }]"><i></i>{{ alert }}</p>
    <!-- 인풋 에러(툴팁:abs로)? || 기존 스타일에 컬러만?  -->
    <!-- <p v-if="error"
            :class="[{'error': error}]">
            <i></i>{{ error }}
        </p> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Inputs extends Vue {
  /**
   * @Prop inputType : [(text), radio, checkbox, file]
   * @Prop styleType : [(def), type1]
   * @Prop name : [(f_tmp)]
   * @Prop id : [(f_tmp)]
   * @Prop value : [()]
   * @Prop readonly : T || (F)
   * @Prop checked : T || (F)
   * @Prop placeholder : [(Enter your text)]
   * @Prop label : [(), hide]
   * @Prop error : [()]
   * @Prop alert : [()]
   */
  @Prop({ default: 'text' }) inputType?:              string
  @Prop({ default: 'def' }) styleType?:               string
  @Prop({ default: 'f_tmp' }) name?:                  string
  @Prop({ default: 'f_tmp' }) id?:                    string
  @Prop({ default: '' }) value?:                      string
  @Prop({ default: false }) readonly?:                boolean
  @Prop({ default: false }) checked?:                 boolean
  @Prop({ default: 'Enter your text' }) placeholder?: string
  @Prop({ default: '' }) label?:                      string
  @Prop({ default: '' }) error?:                      string
  @Prop({ default: '' }) alert?:                      string

  isLabelLeft(): boolean {
    switch (this.inputType) {
      case 'radio':
      case 'checkbox':
      case 'file':
        return false
      default:
        return true
    }
  }

}
</script>
<style lang="scss">
  input::placeholder,
  textarea::placeholder {
    color: $gray999;
  }

  [class*='input-'] {
    margin-bottom: 2rem;
  }
  
  .alert {
    font-size: 1.5rem;
    font-weight: 300;
    color: $gray999;
    letter-spacing: -0.01em;
    padding: 1.1em 1.6em 0;

    &:before {
      content: '*';
      display: inline-block;
    }
  }

  // [text]
  [type='text'] {
    width: 100%;
    height: 60px;
    font-size: 2rem;
    background-color: $grayF3;
    padding: 1em 1.5em;
  }

  // [radio]
  .input-radio {
    &.def {
      label {
        display: inline-block;
        position: relative;
        font-size: 1.6rem;
        line-height: 24px; // label 아이콘 높이만큼 설정
        padding-left: 2em;

        &:before,
        &:after {
          @include pseudoBase(inline-block);
          top: 0;
          bottom: 0;
          border-radius: 50%;
          margin: auto;
        }
        &:before {
          @include itemSize(24px, 24px);
          left: 0;
          background-color: $grayE6;
        }
        &:after {
          @include itemSize(10px, 10px);
          left: 7px;
          background-color: $white;
        }
      }
      :checked + label {
        &:before {
          background-color: $empColor02;
        }
      }
    }

    &.type1 {
      label {
        display: inline-block;
        width: 100px;
        height: 60px;
        font-size: 2rem;
        line-height: 60px;
        letter-spacing: -0.02rem;
        text-align: center;
        border: 1px solid $gray3E;
      }
      :checked + label {
        color: $white;
        background-color: $gray3E;
      }
    }

    &.type2 {
      label {
        display: block;
        display: inline-block;
        margin: auto;
        @include bgImg(top left, cover);
      }
      &.std {
        label {
          @include bgItemSize(280px, 365px);
          @include bgSprite(0 0);
          background-image: url('~@/assets/images/event1/pop/ev1_std_sp_h.png');
        }
        &:hover label,
        :checked + label {
          @include bgSprite(-290px 0);
        }
      }
      &.normal {
        label {
          @include bgItemSize(264px, 340px);
          @include bgSprite(0 0);
          background-image: url('~@/assets/images/event1/pop/ev1_normal_sp_h.png');
        }
        &:hover label,
        :checked + label {
          @include bgSprite(-274px 0);
        }
      }
    }
  }

  // [checkbox]
  .input-checkbox {
    label {
      display: inline-block;
      position: relative;
      font-size: 1.6rem;
      line-height: 24px; // label 아이콘 높이만큼 설정
      padding-left: 2em;

      &:before,
      &:after {
        @include pseudoBase(inline-block);
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:before {
        @include itemSize(24px, 24px);
        left: 0;
        background-color: $grayE6;
      }
      &:after {
        @include itemSize(15px, 10px);
        top: -5px;
        left: 5px;
        border: 3.5px solid $white;
        border-top: 0;
        border-right: 0;
        transform: rotate(-45deg);
      }
    }
    :checked + label {
      &:before {
        background-color: $empColor02;
      }
    }
    .must {
      color: $mustColor;
    }
  }

  // [text]
  .input-file {
    @include displayFlex(flex, space-between, center);
    @include flex-wrap();
    label:first-child {
      display: inline-block;
      width: calc(100% - 60px - 10px);
      height: 60px;
      font-size: 2rem;
      text-align: left;
      color: $gray999;
      background-color: $grayF3;
      padding: 1em 1.5em;
    }

    [type='file'] + label {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 5px;
      background-image: url('~@/assets/images/common/ico/ico_file.png');
      background-position: center;
      background-repeat: no-repeat;
      background-color: $grayB3;
    }
  }
</style>
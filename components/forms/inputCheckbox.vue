<template>
  <div :class="[`input-${inputType}`, styleType]">
    <label v-if="isLabelLeft()" :for="id" :class="[label]"><slot /></label>

    <input
      :type="inputType"
      :name="name"
      :id="id"
      :checked="userInputVal"
      @change="userInput"
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
export default class InputCheckbox extends Vue {
  /**
   * @Prop inputType : [(checkbox)]
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
  @Prop({ default: 'checkbox' }) inputType?:              string
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

  userInputVal: string = ''
  userInput(e: any) {
    this.userInputVal = e.target.checked
    console.log(e.target.checked)
    this.$emit('change', e.target.checked)
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
</style>
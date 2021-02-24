<template>
  <div :class="[`input-${inputType}`, styleType]">
    <label v-if="isLabelLeft()" :for="id" :class="[label]"><slot /></label>

    <input
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="userInput"
      :value="userInputVal"
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
export default class InputText extends Vue {
  /**
   * @Prop inputType : [(text)]
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

  userInputVal: string = ''
  userInput(e: any) {
    this.userInputVal = e.target.value
    // console.log(this.userInputText)
    this.$emit('input', e.target.value)
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
</style>
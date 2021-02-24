<template>
  <div class="modal modal-overlay" @click.self="$emit('close')">
    <div class="modal-window">
      <div class="modal-head" :class="[bgColor]">
        <h2><slot name="tit"></slot></h2>
        <nuxt-link
          v-if="hasCloseBtn"
          @click.native="$emit('close')"
          to=""
          class="close"
          >close<span></span
        ></nuxt-link>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop({ default: true }) hasCloseBtn?: boolean
  @Prop({ default: true }) isClose?: boolean
  @Prop({ default: 'color-y' }) bgColor?: string
}
</script>

<style lang="scss">
.modal {
  &.modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    @include displayFlex();
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    z-index: 100;
  }

  &-window {
    position: relative;
    display: inline-block;
    width: 640px;
    min-width: 640px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.25);
    z-index: 201;

    .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 90px;
      height: 90px;
      text-indent: -9999px;
      z-index: 1;
      span {
        position: absolute;
        display: block;
        width: 35px;
        height: 35px;
        right: 25px;
        top: 25px;
        transform: rotate(45deg);
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          background-color: #000;
        }
        &::before {
          left: 0;
          right: 0;
          margin: auto;
          width: 2px;
          height: 100%;
        }
        &::after {
          top: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 2px;
        }
      }
    }
  }
  &-head {
    @include displayFlex();
    font-family: BMJUA;
    font-size: 2.2rem;
    height: 90px;
    border-radius: 30px 30px 0 0;
    &.color-y {
      background-color: $mainColor01;
      .emp {
        color: $empColor01;
      }
    }
    &.color-p {
      background-color: $mainBgColor02;
      .emp {
        color: $empColor02;
      }
    }
    i {
      font-style: italic;
    }
  }
  &-content {
    max-height: 500px;
    max-height: 600px;
    text-align: center;
    padding: 40px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

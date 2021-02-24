<template>
  <ul class="store-list">
    <!-- 이건아냐 -->
    <StoreListItem
      v-for="(item, idx) of items"
      :item="item"
      :key="idx"
      @detail="detail"
      v-show="region === item.region || region === '전국'"/>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class StoreList extends Vue {
  @Prop() items?:   any
  @Prop() region?:  string

  detail(payload: any) {
    this.$emit('detail', payload)
  }
}
</script>

<style lang="scss" scoped>
  .store-list {
    @include displayFlex(flex, stretch, center);
    @include flex-wrap();
    margin-bottom: 2rem;
  }
</style>

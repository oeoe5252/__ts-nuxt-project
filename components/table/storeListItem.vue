<template>
  <li class="store-item">
    <div class="img-area">
      <img src="@/assets/images/event2/store/store_thum01.png" alt="" />
    </div>
    <div class="txt-area">
      <p class="tit">{{ item.name }}</p>
      <LineButton
            btnShape="r50"
            btnColor="pink"
            iconType="arr"
            iconPos="right"
            @click="$emit('detail', item)"
            >컨텐츠 보고 투표 GO</LineButton>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class StoreListItem extends Vue {
  @Prop() item!: any
}
</script>
<style lang="scss" scoped>
.store-item {
  width: 270px;
  border-radius: 30px;
  background-color: $white;
  box-shadow: 5px 5px $boxShodow02;
  margin-bottom: 4rem;
  margin-right: 2rem;
  overflow: hidden;

  &:nth-child(3n) {
    margin-right: 0;
  }

  .txt-area {
    @include displayFlex(flex, space-between, flex-start);
    @include flex-direction();
    height: 130px;
    padding: 1.7rem;

    .tit {
      font-size: 2.2rem;
      font-weight: 600;
      color: $txtColor;
      padding-left: 0.3em;
    }

    button {
      width: 100%;
    }
  }
}
</style>

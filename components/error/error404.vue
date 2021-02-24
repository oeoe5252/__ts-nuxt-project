<template>
  <div class="err-tmp">페이지를 찾을수 없습니다.</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>
<style lang="scss">
// 여기서 작성한거 개발자도구 하단에, sourceURL, sourceMappingURL 뜨는거 없애는거 찾아보기...
.err-tmp {
  color: $errorColor;
}
</style>


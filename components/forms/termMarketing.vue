<template>
  <div class="terms-box">
    <p class="jo">마케팅 정보 수신 동의</p>
    <p>
        1. 수집 항목 : 이벤트 참여자 이름, 전화번호, 이메일<br />
        2. 수집 및 이용 목적 : 한우자조금관리위원회에서 진행하는 이벤트 및
        프로모션 안내<br />
        3. 업무 위탁 제공처 : 한우자조금관리위원회 위탁협력업체<br />
        4. 보유 및 이용기간 : 위탁 목적 및 계약 종료시까지<br />
        5. 동의 철회 방법 : 개인정보 보호 관리자 및 담당자에게 서면, 전화
        또는 이메일 연락
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TermMarketing extends Vue {}
</script>
<style lang="scss" scoped>
.terms-box {
  border-radius: 5px;
  text-align: left;
  background-color: $grayF3;
  padding: 2rem 3rem;
  margin-bottom: 2rem;

  p {
    color: $gray666;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.09rem;
    &.jo {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
  }
}
</style>
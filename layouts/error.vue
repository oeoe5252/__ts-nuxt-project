<template>
  <!-- 
    :::::::::::::::::::::
    코드정렬상태 :: 탭 그대로 사용됨, 저장시 코드 정렬안함
    :::::::::::::::::::::
  -->
  <!-- 
    :::::::::::::::::::::
    ErrorLayout :: 에러페이지용 레이아웃
                   에러컴포넌트에 별도로 에러레이아웃 쓴다고 정의는 안되어있네? 자동으로 매칭해주는건가? 어떻게(찾아보기)
				   아래에 있네?
				   왜 import Vue from 'vue'/ import { Component } from 'vue-property-decorator'이거 안쓰고할까(기본문서 다시보기)
    :::::::::::::::::::::
  -->
	<div class="err-wrap">
		<error400 v-if="error.statusCode === 404" />
		<error500 v-if="error.statusCode === 500" />
	</div>
</template>

<script lang="ts">
import Error400 from '~/components/error/error404.vue';
import Error500 from '~/components/error/error500.vue';

export default {
	components: {
		Error400,
		Error500,
	},
	props: ["error"],
	layout: "error",
};
</script>
<style lang="scss">
	.err-wrap {
		color: $errorColor;
	}
</style>

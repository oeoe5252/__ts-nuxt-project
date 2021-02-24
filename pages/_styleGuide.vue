
<template>
    <!-- 
    :::::::::::::::::::::
    코드정렬상태 :: 탭->스페이스4로 대체, 저장시 코드 정렬안함
    :::::::::::::::::::::
    -->
    <div class="cca__constents-inner">
        <h1 class="hide">cca_tmpIndex</h1>
        임시 인덱스 메인 콘텐츠 영역
        <section class="hide">
            <!-- 메인타입 버튼 테스트 한것(그나마 정리 된 상태) -->
            <div class="btn-wrap">
                <h2>메인 기본 타입(15자 이내 권장)</h2>
                <MainButton
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-plus -->
                <MainButton
                    iconType="plus"
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-arr -->
                <MainButton
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 btn-shpe[r100, r50, r15, r5]</h2>
                <MainButton
                    btnShape=""
                    @click="tmpClickBtn">main버튼(r100)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(r50)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(r5)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 컬러 타입</h2>
                <MainButton
                    btnShape="r5"
                    @click="tmpClickBtn">main버튼(def)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnColor="yellow"
                    btnShape="r5"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(yellow)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnColor="pink"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(pink)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 컬러 타입 투명배경</h2>
                <MainButton
                    btnBg="clear"
                    btnShape="r5"
                    @click="tmpClickBtn">main버튼(def-clear)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnBg="clear"
                    btnColor="yellow"
                    btnShape="r5"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(yellow-clear)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnBg="clear"
                    btnColor="pink"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(pink-clear)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 disabled</h2>
                <MainButton
                    btnDisabled="true"
                    @click="tmpClickBtn">main버튼(Disabled)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnDisabled="true"
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(Disabled)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnDisabled="true"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(Disabled)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 라인 타입</h2>
                <MainButton
                    btnType="line"
                    @click="tmpClickBtn">main버튼(line)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnType="line"
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(clear)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnType="line"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(clear)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 라인 타입(disabled)</h2>
                <MainButton
                    btnDisabled="true"
                    btnType="line"
                    @click="tmpClickBtn">main버튼(line-disabled)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnDisabled="true"
                    btnType="line"
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(clear-disabled)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnDisabled="true"
                    btnType="line"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(clear-disabled)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 대시 타입</h2>
                <MainButton
                    btnType="dashed"
                    @click="tmpClickBtn">main버튼(dashed)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnType="dashed"
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(dashed)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnType="dashed"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(dashed)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 대시 타입(disabled)</h2>
                <MainButton
                    btnDisabled="true"
                    btnType="dashed"
                    @click="tmpClickBtn">main버튼(dashed-disabled)</MainButton>
                <!-- ico-plus -->
                <MainButton
                    btnDisabled="true"
                    btnType="dashed"
                    btnShape="r50"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼(dashed-disabled)</MainButton>
                <!-- ico-arr -->
                <MainButton
                    btnDisabled="true"
                    btnType="dashed"
                    btnShape="r5"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼(dashed-disabled)</MainButton>
            </div>
            <div class="btn-wrap">
                <h2>메인 좌측 정렬</h2>
                <MainButton
                    textAlign="left"
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-plus -->
                <MainButton
                    textAlign="left"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-arr -->
                <MainButton
                    textAlign="left"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼</MainButton><br>
            </div>
            <div class="btn-wrap">
                <h2>메인 우측 정렬</h2>
                <MainButton
                    textAlign="right"
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-plus -->
                <MainButton
                    textAlign="right"
                    iconType="plus"
                    @click="tmpClickBtn">main버튼</MainButton>
                <!-- ico-arr -->
                <MainButton
                    textAlign="right"
                    iconType="arr"
                    iconPos="right"
                    @click="tmpClickBtn">main버튼</MainButton><br>
            </div>
        </section>
        <section class="hide">
            <!-- 팝업 버튼 테스트-->
            <p class="hide">
                팝업 버튼은 아이콘 스타일 확장 못함. 디자인 하고싶지 않아서, 하지만 마크업은 냄겨놓음, 불필요한가...
            </p>
            <div class="btn-wrap">
                <h2>팝업 버튼 타입</h2>
                <PopButton
                    @click="tmpClickBtn">pop버튼(def)</PopButton>
                <PopButton
                    btnType="ok"
                    @click="tmpClickBtn">pop버튼(ok)</PopButton>
                <PopButton
                    btnType="cancle"
                    @click="tmpClickBtn">pop버튼(can)</PopButton>
            </div>
            <div class="btn-wrap">
                <h2>팝업 버튼 모양</h2>
                <PopButton
                    btnShape="r100"
                    @click="tmpClickBtn">pop버튼</PopButton>
                <PopButton
                    btnShape="r50"
                    btnType="ok"
                    @click="tmpClickBtn">pop버튼</PopButton>
                <PopButton
                    btnShape="r5"
                    btnType="cancle"
                    @click="tmpClickBtn">pop버튼</PopButton>
            </div>
            <div class="btn-wrap">
                <h2>팝업 버튼 (disabled)</h2>
                <PopButton
                    disabled
                    @click="tmpClickBtn">pop버튼(def)</PopButton>
                <PopButton
                    disabled
                    btnType="ok"
                    btnShape="r50"
                    @click="tmpClickBtn">pop버튼(ok)</PopButton>
                <PopButton
                    disabled
                    btnType="cancle"
                    btnShape="r5"
                    @click="tmpClickBtn">pop버튼(can)</PopButton>
            </div>
        </section>
        <LineButton
            btnShape="r50"
            iconType="arr"
            iconPos="right"
            btnSize="small">
            버튼
        </LineButton>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'

    @Component({
        layout: 'ccaEventLayout/index',
    })
    export default class EventContent extends Vue {
        tmpClickBtn() {
            console.log('버튼클릭');
        }
    }
</script>

<style lang="scss">
    .cca__constents-inner {
        width: 1024px;
        min-width: 1024px;
        margin: auto;
        text-align: center;

        .btn-wrap {
            padding-top: 2rem;
            background-color: $gray333;
            position: relative;

            h2 {
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
</style>
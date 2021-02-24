<template>
  <div class="tab-panel-item">

    <h2 class="hide">tab02 내용</h2>
    <ImgBox>
        <template #img><img src="@/assets/images/event2/ev2_kv.jpg" alt=""/></template>
        <template #hide>이미지 설명 추가</template>
    </ImgBox> <!-- (E) kv -->
    <ImgBox>
        <template #img><img src="@/assets/images/event2/ev2_step.jpg" alt=""/></template>
        <template #hide>이미지 설명 추가</template>
    </ImgBox> <!-- (E) 이벤트 참여 방법 -->
    <div class="pb60">
      <RegionTabList @changeTab="selectRegion"/>

      <div class="store-list-wrap">
          <StoreList :items="tmpTestStoreItems" :region="selectedRegion" @detail="detail" />
      </div>

      <MainButton
        v-show="tmpTestStoreItems.length > 9"
        btnColor="pink"
        btnShape="r50"
        iconType="plus"
        >인증점 더보기</MainButton>
    </div> <!-- (E) 판매점 리스트 -->
    <Banner 
      height="102px"
      bgColor="#654d40">
        <img src="@/assets/images/event2/ico/ev2_ico_banner.png" alt="" />
        <p><span class="txt-p">한우 인증점 득표 현황</span>을 실시간으로 확인해보세요!</p>
        <!-- btnColor="btn-wp" -->
        <LineButton
            iconType="arr"
            iconPos="right"
            btnShape="r50"
            btnColor="pink"
            @click="tmpEvent02Modal02 = true"
            >투표현황 보러가기</LineButton>
    </Banner> <!-- (E) 배너 -->
    <ImgBox>
        <template #img><img src="@/assets/images/event2/ev2_ft.jpg" alt=""/></template>
        <template #hide>이미지 설명 추가</template>
    </ImgBox> <!-- (E) footer :: 유의사항 -->

    <!-- <div class="tmp-style-wrap">
      <buttons icon="true" @click.native="tmpEvent02Modal01 = true"
        >이벤트2 팝업 일괄</buttons>
      <buttons icon="true" @click.native="tmpEvent02Modal02 = true"
        >이벤트2 팝업 득표현황</buttons>
    </div> (E) TMP :: 모달 확인용 버튼 :: -->

    <Modal
      class="tmpEvent02Modal01"
      v-show="tmpEvent02Modal01"
      @close="close"
      bgColor="color-p">
      <template #tit>
        내 마음 속의 <span class="emp">최애 한우인증점 Pick<i>!</i></span>
      </template>

      <section class="step01" v-show="sections2.step1">
        <div class="store-head">
          <h3>{{ tmpStoreItem.name }}</h3>
          <div class="btn-wrap">
            <LineButton
              iconType="arr"
              iconPos="right"
              btnSize="small"
              btnShape="r50"
              btnColor="pink"
              >홈페이지</LineButton>
            <LineButton
                iconType="arr"
                iconPos="right"
                btnSize="small"
                btnShape="r50"
                btnColor="pink"
                >후기 포스팅</LineButton>
          </div>
        </div>
        <div class="store-content">
          <div class="swipe-area">
            <client-only>
              <swiper ref="mySwiper" class="swiper" :options="swiperOption">
                <swiper-slide
                  v-for="(item, idx) of tmpStoreItem.thums"
                  :key="`B-${idx}`"
                  ><img :src="item" :alt="item"
                /></swiper-slide>
              </swiper>
            </client-only>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
          <p class="desc">
            보고 계시는 한우 인증점이 마음에 든다면 좋은 이유를 댓글로 적고,<br />
            <span class="emp">♥ 좋아요 투표</span>버튼을 눌러주세요.
          </p>
          <div class="vote-area">
            <div class="f-vote">
              <InputText
                v-model="eventUserInfo.event2.reason"
                name="reason"
                id="ev2-reason"
                placeholder="좋은 이유를 입력해주세요! (30자 이내)"
                label="hide">좋은 이유</InputText>
              <VoteButton
                iconType="heart"
                btnShape="r5"
                btnColor="pink"
                @click="tmpClickFunc">투푱</VoteButton>
            </div>

            <!-- 게시판 리스트 -->
            <ul class="list-wrap">
              <li class="list-item">
                <p class="txt">직원분이 너무 친절해서 맛있게 먹었습니다.</p>
                <p class="date">2018.11.19</p>
              </li>
              <li class="list-item">
                <p class="txt">고기와 함께 나오는 밑반찬이 너무 맛있었습니다. 재방문예정입니다.</p>
                <p class="date">2018.11.19</p>
              </li>
              <li class="list-item">
                <p class="txt">고기가 너무 맛있어여</p>
                <p class="date">2018.11.19</p>
              </li>
              <li class="list-item">
                <p class="txt">가격도 착하고 직원분도 친절하네요~</p>
                <p class="date">2018.11.19</p>
              </li>
              <li class="list-item">
                <p class="txt">친구 소개로 방문했는데, 사람이 많고 바쁜데도 친절하시네요</p>
                <p class="date">2018.11.19</p>
              </li>
            </ul>
          </div>
        </div>
      </section> <!-- (E) step01 -->

      <section class="step02" v-show="sections2.step2">
        <SubInfo colorType="p">
          <template #tit>경품 발송 시 연락드릴 연락처를 입력해주세요.</template>
          <template #desc>개인정보를 입력하시면 이벤트 참여가 완료됩니다.</template>
        </SubInfo>
        <div class="f-age">
          <InputRadio
            styleType="type1"
            checked="true"
            name="age"
            id="ev2-age1"
            value="10"
            >10대</InputRadio>
          <InputRadio
            styleType="type1"
            name="age"
            id="ev2-age2"
            value="20"
            >20대</InputRadio>
          <InputRadio
            styleType="type1"
            name="age"
            id="ev2-age3"
            value="30"
            >30대</InputRadio>
          <InputRadio
            styleType="type1"
            name="age"
            id="ev2-age4"
            value="40"
            >40대</InputRadio>
          <InputRadio
            styleType="type1"
            name="age"
            id="ev2-age5"
            value="50"
            >50대 이상</InputRadio>
        </div>
        <InputText 
          v-model="eventUserInfo.event2.name"
          name="name" 
          id="ev2-name1" 
          placeholder="이름"
          label="hide">이름</InputText>
        <InputText 
          v-model="eventUserInfo.event2.tel"
          name="tel" 
          id="ev2-tel1" 
          placeholder="전화번호" 
          label="hide">전화번호</InputText>
        <InputText 
          v-model="eventUserInfo.event2.email"
          name="email" 
          id="ev2-email1" 
          placeholder="이메일"
          label="hide">이메일</InputText>

        <div class="f-pri">
          <InputCheckbox
            v-model="eventUserInfo.event2.pri1"
            name="pri1"
            id="ev2-pri1-1"
            ><span class="must">(필수)</span>개인정보 활용 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="pink"
            @click="tmpPri01 = !tmpPri01"
            >자세히보기</LineButton>
        </div> <!-- (E) 개인정보 -->
        <TermPrivacy v-show="tmpPri01" />

        <div class="f-pri">
          <InputCheckbox
            v-model="eventUserInfo.event2.pri2"
            name="pri2"
            id="ev2-pri2-1"
            ><span>(선택)</span>마케팅 정보 수신 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="pink"
            @click="tmpPri02 = !tmpPri02"
            >자세히보기</LineButton><br />
        </div> <!-- (E) 마케팅정보 -->
        <TermMarketing v-show="tmpPri02" />

        <div class="btn-wrap">
          <PopButton
            v-ripple
            btnType="ok"
            @click="tmpClickFunc2"
            >확 인</PopButton>
          <PopButton
            v-ripple
            btnType="cancle"
            @click="close">취 소</PopButton>
        </div>
      </section> <!-- (E) step02 -->

      <section class="step03" v-show="sections2.step3">
        <SubInfo colorType="p">
          <template #tit>이벤트 참여가 완료되었습니다.</template>
          <template #desc>내일 다시 응모가 가능합니다.</template>
        </SubInfo>
        <div class="btn-wrap">
          <PopButton
            v-ripple
            btnType="ok"
            @click="close">확 인</PopButton>
        </div>
      </section> <!-- (E) step03 -->
    </Modal> <!-- (E) 팝업ev2 :: 전체 하나로 묶은 것   -->

    <Modal
      class="tmpEvent02Modal02"
      v-show="tmpEvent02Modal02"
      @close="close"
      bgColor="color-p">

      <template #tit>한우 인증점 <span class="emp">득표현황<i>!</i></span></template>

      득표현황 테이블
    </Modal> <!-- (E) 팝업ev2 :: 득표현황    -->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'

  @Component
  export default class Tab02Panel extends Vue {
    @State((state) => state.Test.StoreProducts) tmpTestStoreItems!: any
    
    selectedRegion: string = "전국"

    tmpClickFunc() {
      this.sections2.step1 = false
      this.sections2.step2 = true

      this.printUserInfo()
    }

    tmpClickFunc2() {
      this.sections2.step2 = false
      this.sections2.step3 = true
      
      this.printUserInfo()
    }

    printUserInfo() {
      console.log("event1", this.eventUserInfo.event1);
      console.log("event2", this.eventUserInfo.event2);
    }

    /**
     * v-model 테스트 
     */
    eventUserInfo: any = {
      event1 : {
        type: "",
        file: "",
        name: "",
        tel: "",
        email: "",
        pri1: false,
        pri2: false
      },
      event2 : {
        age: "",
        name: "",
        tel: "",
        email: "",
        reason: "",
        pri1: false,
        pri2: false
      }
    }
      
    /**
   * 개인정보, 마케팅정보
   */
  tmpPri01: boolean = false
  tmpPri02: boolean = false
    /**
   * 모달 show
   */
  tmpEvent02Modal01: boolean = false
  tmpEvent02Modal02: boolean = false
    /**
   * 모달 섹션
   */
  sections2: any = {
    step1: true,
    step2: false,
    step3: false,
  }
  /**
 * 스토어 아이템(초기화?) 
 * property or method "tmpStoreItem" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.
 */
  tmpStoreItem: any = {
    name: '늘푸름 홍천 한우1',
    thums: [
      require('@/assets/images/event2/store/tmp_store_main.png'),
      require('@/assets/images/event2/store/tmp_store_main.png'),
      require('@/assets/images/event2/store/tmp_store_main.png'),
    ],
  }
    /**
   * 스와이퍼
   */
  swiperOption: any = {
    effect : 'fade',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
      /**
     * 이벤트2 모달 열기
     */
    detail(payload: any) {
      this.tmpEvent02Modal01 = true
      this.tmpStoreItem = payload
    }

      /**
     * 모달 닫기
     */
    close() {
      // 팝업2 일괄 닫기
      if (this.tmpEvent02Modal01) {
      this.tmpEvent02Modal01 = !this.tmpEvent02Modal01
      }
      // 팝업2 득표현황 닫기
      if (this.tmpEvent02Modal02) {
      this.tmpEvent02Modal02 = !this.tmpEvent02Modal02
      }
      // 팝업 단계 초기화
      this.stepClear()
    }
    
    // destroyed 될때 지우기 함수로 만들지 말규
    /**
   * 단계 초기화
   */
    stepClear() {
        this.sections2.step1 = true
        this.sections2.step2 = false
        this.sections2.step3 = false
    }

    // 지역선택?
    selectRegion(payload: string) {
      this.selectedRegion = payload
    }
  }
</script>
<style lang="scss">
    .tab-panel-item {
        &.event02 {
            background-color: $mainBgColor02;
        }
    }
</style>
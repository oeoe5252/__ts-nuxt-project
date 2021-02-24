<template>
  <div class="tab-panel-item">
    <h2 class="hide">tab01 내용</h2>
    <ImgBox>
        <template #img><img src="@/assets/images/event1/ev1_kv.jpg" alt="ev1_kv"/></template>
        <template #hide>한우먹고 한우 인증 고</template>
    </ImgBox> <!-- (E) kv -->
    <ImgBox>
        <template #img><img src="@/assets/images/event1/ev1_step.jpg" alt=""/></template>
        <template #hide>이벤트 참여 방법</template>
    </ImgBox> <!-- (E) 이벤트 참여 방법 -->
    <Banner 
      height="102px"
      bgColor="#654d40">
        <img src="@/assets/images/event1/ico/ev1_ico_banner.png" alt="" />
        <p><span class="txt-y">전국 한우 인증점</span>을 바로 확인해보세요!</p>
        <!-- btnColor="btn-wy" -->
        <LineButton
          iconType="arr"
          iconPos="right"
          btnShape="r50"
          btnColor="yellow"
          btnBg="clear"
          @click="tmpPri01 = !tmpPri01"
          >내 주변 한우 인증점 보러가기</LineButton>
    </Banner> <!-- (E) 배너 -->
    <ImgBox>
        <template #img><img src="@/assets/images/event1/ev1_prize.jpg" alt=""/></template>
        <template #hide>경품 안내</template>
    </ImgBox> <!-- (E) 경품안내 -->
    <ImgBox>
        <template #img><img src="@/assets/images/event1/ev1_join.jpg" alt=""/></template>
        <template #hide>이벤트 응모하기</template>
        <MainButton
          btnColor="yellow"
          btnShape="r50"
          iconType="arrow"
          className="btn-join"
          @click="tmpEvent01Modal01 = true"
          >응모하기</MainButton>
    </ImgBox> <!-- (E) 응모하기 -->
    <ImgBox>
        <template #img><img src="@/assets/images/event1/ev1_ft.jpg" alt=""/></template>
        <template #hide>이벤트 유의사항</template>
    </ImgBox> <!-- (E) footer :: 유의사항 -->

    <Modal
      class="tmpEvent01Modal01"
      v-show="tmpEvent01Modal01"
      @close="close"
      bgColor="color-y">
      <template #tit>
        한우 먹고<i>!</i> <span class="emp">한우 인증 GO~<i>!</i></span>
      </template>

      <section class="step01" v-show="sections1.step1">
        <SubInfo>
          <template #desc>수험생과 일반 참여 방법이 다릅니다!<br />참여 유형을 선택해주세요.</template>
        </SubInfo>

        <div class="flex-wrap">
          <InputRadio
            styleType="type2 std"
            name="user"
            id="ev1-user1"
            value="user1"
            @click.native="
              sections1.step1 = false
              sections1.step2_1 = true
            "/>
          <InputRadio
            styleType="type2 normal"
            name="user"
            id="ev1-user2"
            value="user2"
            @click.native="
              sections1.step1 = false
              sections1.step2_2 = true
            "/>
        </div>
      </section> <!-- (E) 수험표,일반 선택 -->

      <section class="step02-01" v-show="sections1.step2_1">
        <SubInfo colorType="y">
          <template #tit>경품 발송 시 연락드릴 연락처를 입력해주세요.</template>
          <template #desc>한우 인증점 로고와 수험표가 나온 이미지를 업로드 후,<br />개인정보를 남겨주셔야 이벤트 참여가 완료됩니다.</template>
        </SubInfo>
        <InputFile
          placeholder="이미지는 한 장만 업로드 가능합니다."
          name="file"
          id="ev1-file1"
          alert="Jpg, Jpeg, Png 파일만 업로드 가능합니다."/>
        <InputText 
          v-model="eventUserInfo.event1.name"
          name="name" 
          id="ev1-name1" 
          placeholder="이름" 
          label="hide">이름</InputText>
        <InputText 
          v-model="eventUserInfo.event1.tel"
          name="tel" 
          id="ev1-tel1" 
          placeholder="전화번호" 
          label="hide">전화번호</InputText>
        <InputText 
          v-model="eventUserInfo.event1.email"
          name="email" 
          id="ev1-email1" 
          placeholder="이메일" 
          label="hide">이메일</InputText>

        <div class="f-pri">
          <InputCheckbox 
            name="pri1"
            id="ev1-pri1-1"
            ><span class="must">(필수)</span>개인정보 활용 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="yellow"
            @click="tmpPri01 = !tmpPri01"
            >자세히보기</LineButton>
        </div> <!-- (E) 개인정보 -->
        <TermPrivacy v-show="tmpPri01" />
        
        <div class="f-pri">
          <InputCheckbox
            name="pri2"
            id="ev1-pri2-1"><span>(선택)</span>마케팅 정보 수신 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="yellow"
            @click="tmpPri02 = !tmpPri02"
            >자세히보기</LineButton><br />
        </div> <!-- (E) 마케팅정보 -->
        <TermMarketing v-show="tmpPri02" />

        <div class="btn-wrap">
          <PopButton
            v-ripple
            btnType="ok"
            @click="
                sections1.step2_1 = false
                sections1.step3 = true
            "
            >확 인</PopButton>
        </div> <!-- (E) 버튼 -->
      </section> <!-- (E) 수험표 -->

      <section class="step02-02" v-show="sections1.step2_2">
        <SubInfo colorType="y">
          <template #tit>경품 발송 시 연락드릴 연락처를 입력해주세요.</template>
          <template #desc
            >한우 인증점 로고와 영수증이 나온 이미지를 업로드 후,<br />개인정보를
            남겨주셔야 이베트 참여가 완료됩니다.</template
          >
        </SubInfo>
        <InputFile
          placeholder="이미지는 한 장만 업로드 가능합니다."
          name="file"
          id="ev1-file2"
          alert="Jpg, Jpeg, Png 파일만 업로드 가능합니다."
        />
        <InputText 
          v-model="eventUserInfo.event1.name"
          name="name" 
          id="ev1-name2" 
          placeholder="이름" 
          label="hide">이름</InputText>
        <InputText 
          v-model="eventUserInfo.event2.tel"
          name="tel" 
          id="ev1-tel2" 
          placeholder="전화번호" 
          label="hide">전화번호</InputText>
        <InputText 
          v-model="eventUserInfo.event2.email"
          name="email" 
          id="ev1-email2" 
          placeholder="이메일" 
          label="hide">이메일</InputText>
        
        <div class="f-pri">
          <InputCheckbox 
            v-model="eventUserInfo.event1.pri1"
            name="pri1"
            id="ev1-pri1-2"
            ><span class="must">(필수)</span>개인정보 활용 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="yellow"
            @click="tmpPri01 = !tmpPri01"
            >자세히보기</LineButton>
        </div> <!-- (E) 개인정보 -->
        <TermPrivacy v-show="tmpPri01" />
        
        <div class="f-pri">
          <InputCheckbox
            v-model="eventUserInfo.event1.pri2"
            name="pri2"
            id="ev1-pri2-2"
            ><span>(선택)</span>마케팅 정보 수신 동의</InputCheckbox>
          <LineButton
            iconType="arr"
            iconPos="right"
            btnSize="small"
            btnShape="r50"
            btnColor="yellow"
            @click="tmpPri02 = !tmpPri02"
            >자세히보기</LineButton><br />
        </div> <!-- (E) 마케팅정보 -->
        <TermMarketing v-show="tmpPri02" />

        <div class="btn-wrap">
            <PopButton
                v-ripple
                btnType="ok"
                @click="
                    sections1.step2_2 = false
                    sections1.step3 = true 
                ">확 인</PopButton>
        </div>
      </section> <!-- (E) 일반 -->

      <section class="step03" v-show="sections1.step3">
        <SubInfo>
          <template #desc>이벤트 참여가 완료되었습니다.</template>
        </SubInfo>
        <div class="btn-wrap">
        <PopButton
          btnType="ok"
          @click="close">확 인</PopButton>
        </div>
      </section> <!-- (E) 완료 -->
    </Modal> <!-- (E) 팝업ev1 :: 전체 하나로 묶은 것   -->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Tab01Panel extends Vue {
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
        pri1: "",
        pri2: ""
      },
      event2 : {
        age: "",
        name: "",
        tel: "",
        email: "",
        reason: "",
        pri1: "",
        pri2: ""
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
    tmpEvent01Modal01: boolean = false
      /**
     * 모달 섹션
     */
    sections1: any = {
      step1: true,
      step2_1: false,
      step2_2: false,
      step3: false,
    }
      /**
     * 모달 닫기
     */
    close() {
      // 팝업1 일괄 닫기
      if (this.tmpEvent01Modal01) {
        this.tmpEvent01Modal01 = !this.tmpEvent01Modal01
      }
      // 팝업 단계 초기화
      this.stepClear()
    }
      /**
     * 단계 초기화
     */
    stepClear() {
      this.sections1.step1 = true
      this.sections1.step2_1 = false
      this.sections1.step2_2 = false
      this.sections1.step3 = false
    }
      }
</script>
<style lang="scss">
  .tab-panel-item {
      &.event02 {
          background-color: $mainBgColor02;
      }
  }
  .btn-join {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 90px;
      margin: auto;
  }
</style>
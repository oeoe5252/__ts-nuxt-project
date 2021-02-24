<template>
    <!-- 안씀 -->
    <button :class="[btnType, btnSize, btnColor, className, {'btn-dis': btnDisabled}]">
        <i v-if="iconLeft && icon"
            :class="[iconType]"></i>
        <span><slot/></span>
        <i v-if="!iconLeft && icon"
            :class="[iconType]"></i>
    </button>
</template>
<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator"

    @Component
    export default class Buttons extends Vue {
        /**
         * @Prop btnType : [(btn-default), btn-main, btn-pop, btn-ht]
         * @Prop btnSize : [(), btn-xs]
         * @Prop btnColor : [(), btn-pink, btn-yellow]
         * @Prop btnDisabled : T || (F)
         * @Prop iconType : [(ico-arr), ico-plus]
         * @Prop icon : T || (F)
         * @Prop iconLeft : T || (F)
         */
        @Prop({default: 'btn-default'}) btnType?:   string;
        @Prop({default: ''}) btnSize?:              string;
        @Prop({default: ''}) btnColor?:             string;
        @Prop({default: false}) btnDisabled?:       boolean;
        @Prop({default: 'ico-arr'}) iconType?:      string;
        @Prop({default: false}) icon?:              boolean;
        @Prop({default: false}) iconLeft?:          boolean;
        @Prop({default: ''}) className?:            string;
    }
</script>
<style lang="scss">
    // 기본형
    .btn-default {
        @include displayFlex(inline-flex, center, center);
        height: 33px;
        border: 1px solid $gray999;
        border-radius: 20px;
        font-size: 1.6rem;
        color: $txtColor;
        letter-spacing: -0.16px;
        padding: 0 2.5em;

        // icoType
        i {
            width: 13px;
            height: 13px;
            margin-left: 0;
            margin-right: 5px;
            position: relative;
            
            &:before,
            &:after {
                @include pseudoBase();
                background-color: $white;
                border-radius: 50px;
            }
            
            &.ico-arr {
                width: 8px;
                height: 8px;
                &:before,
                &:after {
                    background-color: transparent;
                }
                &:before {
                    width: 100%;
                    height: 100%;
                    border-width: 2px 2px 0 0;
                    border-style: solid;
                    border-radius: 0;
                    border-color: $mainColor02;
                    transform: rotate(45deg);
                }
                &:after {
                    display: none;
                }
            }

            &.ico-detail {
                width: 8px;
                height: 8px;
                background-color: transparent;

                &:before {
                    width: 100%;
                    height: 100%;
                    top: 2px;
                    border-width: 2px 2px 0 0;
                    border-style: solid;
                    border-radius: 0;
                    border-color: $mainColor02;
                    transform: rotate(-45deg);
                }
                &:after {
                    display: none;
                }
            }
        }

        span + i {
            margin-left: 5px;
            margin-right: 0;
        }

        // 활성화 스타일
        &.on,
        &:hover {
            i.ico-detail {
                &:before {
                    top: 0;
                    transform: rotate(135deg);
                }
            }
        }

        &.btn-wy {
            color: $white;
            border: 1px solid $white;
            i {
                &.ico-arr {
                    &:before {
                        border-color: $mainColor01;
                    }
                }
            }
        }
        &.btn-wp {
            color: $white;
            border: 1px solid $white;
            i {
                &.ico-arr {
                    &:before {
                        border-color: $mainColor02;
                    }
                }
            }
        }

        &.btn-xs {
            height: 22px;
            font-size: 1.3rem;
            padding: 0 1em;
        }
    }
    // 메인형
    .btn-main {
        @include displayFlex(inline-flex, center, center);
        height: 60px;
        min-width: 360px;
        font-size: 2.2rem;
        font-family: BMJUA;
        color: $txtColor;
        border-radius: 50px;

        // icoType
        i {
            width: 20px;
            height: 20px;
            margin-left: 0;
            margin-right: 10px;
            position: relative;
            
            &:before,
            &:after {
                @include pseudoBase();
                border-radius: 50px;
            }

            &.ico-arr {
                width: 13px;
                height: 13px;
                &:before {
                    width: 100%;
                    height: 100%;
                    border-width: 3px 3px 0 0;
                    border-style: solid;
                    border-radius: 0;
                    transform: rotate(45deg);
                }
                &:after {
                    display: none;
                }
            }

            &.ico-plus {

                // @include bgItemSize(23px, 23px);
                // @include bgSprite(0 0);
                // background-image: url('~@/assets/images/common/ico/ico_tmp02.png');
                &:before {
                    width: 100%;
                    height: 3px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:after {
                    width: 3px;
                    height: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

        }

        span + i {
            margin-left: 10px;
            margin-right: 0;
        }
        // btnColor
        &.btn-pink {
            background-color: $white;
            box-shadow: 5px 5px $boxShodow02;
            i {
                &:before,
                &:after {
                    background-color: $mainColor02;
                }
                &.ico-arr {
                    &:before {
                        background-color: transparent;
                        border-color: $mainColor02;
                    }
                }
            }
        }
        &.btn-yellow {
            background-color: #fffa6f;
            box-shadow: 5px 5px #453329;

            i {
                &:before,
                &:after {
                    background-color: $empColor02;
                }
                &.ico-arr {
                    &:before {
                        background-color: transparent;
                        border-color: $empColor02;
                    }
                }
            }
        }

    }
    // 파법 
    .btn-pop {
        @include displayFlex(inline-flex, center, center);
        height: 55px;
        min-width: 240px;
        border-radius: 50px;
        font-size: 2.4rem;
        color: $white;
        letter-spacing: -0.16px;
        padding: 0 2.5em;

        &.btn-gray3E {
            background-color: $gray3E;
        }
        &.btn-gray9 {
            background-color: $gray999;
        }
    }
    // 하트
    .btn-ht {
        @include displayFlex(inline-flex, center, center);
        height: 60px;
        font-size: 2rem;
        font-weight: 500;
        color: $white;
        border-radius: 5px;
        background-color: $mainColor02;
        padding: 0 20px 0 15px;

        // icoType
        i {
            width: 27px;
            height: 27px;
            margin-left: 0;
            margin-right: 10px;
            position: relative;
            background-image: url('~@/assets/images/common/ico/ico_ht.png');
        }

        span + i {
            margin-left: 10px;
            margin-right: 0;
        }
    }
</style>
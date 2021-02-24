import { Module, Mutation, VuexModule } from "vuex-module-decorators"

// 아래 @Module namespaced 요것은 어디에 쓰이는 것인가 검색
@Module({
    namespaced: true
})
export default class StoreProducts extends VuexModule {
    StoreProducts: any = [
        {
            region: '수도권',
            name: '늘푸름 홍천 한우1',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '수도권',
            name: '늘푸름 홍천 한우2',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '충청도',
            name: '늘푸름 홍천 한우3',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '전라도',
            name: '늘푸름 홍천 한우4',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '경상도',
            name: '늘푸름 홍천 한우5',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '강원도',
            name: '늘푸름 홍천 한우6',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '제주도',
            name: '늘푸름 홍천 한우7',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
        {
            region: '전라도',
            name: '늘푸름 홍천 한우8',
            thums: [
                require('@/assets/images/event2/store/tmp_store_main.png'),
                require('@/assets/images/event2/store/tmp_store_main.png'),
            ]
        },
    ]
}

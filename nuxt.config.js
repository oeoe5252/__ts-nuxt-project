import Swiper from 'swiper'
import colors from 'vuetify/es5/util/colors'

export default {
	/**
	 * 서버 렌더링여부
	 */
	ssr: false,

	/**
	 * ENV 파일 이름
	 */
	dotenv: '.env',

	/**
	 * HTML 속성 정의
	 */
	head: {
		titleTemplate: process.env.APP_NAME,

		/**
		 * HTML 타이틀
		 */
		title: process.env.APP_NAME,

		/**
		 * HTML 로케일
		 */
		htmlAttrs: {
			lang: 'kr'
		},

		/**
		 * HTML 메타태그 정의
		 */
		meta: [
			{ charset: 'utf-8' },
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION }
		],

		/**
		 * Static Asset 로드
		 */
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: process.env.APP_FAVICON },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' },
			{ rel: 'stylesheet', href: '/assets/css/reset.css' },
		]
	},

	/**
	 * 글로벌 CSS & SCSS(일반) 로드
	 */
	css: [
		'@/assets/scss/fonts.scss',
		'@/assets/scss/style.scss',
		'@/assets/scss/pop.scss',
	],

	/**
	 * 글로벌 플로그인 로드
	 */
	plugins: [
		{ src: '@/plugins/swiper.ts', mode: 'client' }
	],

	/**
	 * Nuxt can auto import your components when used in your templates. :: [https://ko.nuxtjs.org/docs/2.x/directory-structure/components/]
	 */
	/**
	 *  If components: true is set, ~/components directory is scanned by default. (nuxt v2.13+)
	 */
	components: true,
	/**
	* 해당 경로에 있는 컴포넌트에 prefix 대입
	components: {
		dirs: [
			'~/components',
			{
				path: '~/components/base/',
				prefix: 'Base'
			}
		]
	},
	*/
	/**
	 * webpack 빌드 모듈
	 */
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/vuetify'
	],

	/**
	 * 글로벌 모듈 로드
	 */
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/style-resources'
	],

	/**
 * _scss 리소스 로드
 */
	styleResources: {
		scss: [
			'@/assets/scss/_mixin.scss',
		]
	},

	/**
	 * 통신 설정
	 */
	axios: {},

	/**
	 * 뷰티파이 플러그인 정의
	 */
	vuetify: {
		customVariables: ['~/assets/scss/lib/variables.scss'],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	build: {
		transpile: [
			'swiper'
		]
	}
}

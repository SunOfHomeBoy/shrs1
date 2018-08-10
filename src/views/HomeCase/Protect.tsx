import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export default class Protect extends Vue {
        public user: any = this.$store.state.user
        public ImgIetms: any = [
                {
                        _id: '',
                        title: '和道国际箱包交易',
                        src: 'http://i4.fuimg.com/611341/1ab7f92b95aa41a9t.jpg'
                },
                {
                        _id: '',
                        title: '银河SOHO',
                        src: 'http://i4.fuimg.com/611341/55d9f2e391973961t.jpg'
                },
                {
                        _id: '',
                        title: '盘古大观',
                        src: 'http://i4.fuimg.com/611341/e95dbfad218027c1t.jpg'
                },
                {
                        _id: '',
                        title: '国贸三期',
                        src: 'http://i4.fuimg.com/611341/d036b4743a45f901t.jpg'
                },
                {
                        _id: '',
                        title: '天津永旺梦乐购',
                        src: 'http://i4.fuimg.com/611341/38b3165be6ca5691t.jpg'
                },
                {
                        _id: '',
                        title: '华贸城',
                        src: 'http://i4.fuimg.com/611341/0e52f59d92f3cdf4t.jpg'
                }
        ]
        public render(h: CreateElement) {
                return (
                        <div id="Protect" class="swiper-container">
                                <div class="swiper-wrapper">
                                        {this.createCaseImg(h)}
                                </div>
                                {/* <!-- 如果需要导航按钮 --> */}
                                <div v-show={this.userMode()} class="swiper-button-prev"></div>
                                <div v-show={this.userMode()} class="swiper-button-next"></div>

                                {/* <!-- 如果需要滚动条 --> */}
                                {/* <div class="swiper-scrollbar"></div> */}
                        </div>
                )
        }
        public mounted() {
                this.swiper()
                // this.imgHight()
                // window.onresize = () => { this.imgHight(); console.log(111); }
        }
        public userMode() {
                return this.user = this.$store.state.user
        }
        public swiper() {
                let Protect: any = new Swiper('#Protect', {
                        notNextTick: true,
                        autoplay: {
                                delay: 800,
                                disableOnInteraction: false // 解决 拖动、点击后不能自动开始轮播
                        },
                        speed: 500,
                        direction: 'horizontal',
                        loop: true,
                        // autoHeight: true, // 自动高度
                        grabCursor: true,
                        slidesPerView: 4, // 
                        spaceBetween: 15,
                        slidesPerGroup: 1,
                        // effect: 'coverflow', // 切换方式
                        observer: true,
                        observeParents: true,
                        centeredSlides: false, // 轮播图居中
                        pagination: { // 如果需要分页器
                                el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                        }
                })
        }



        public createCaseImg(h: CreateElement) {
                let imgItem = []
                for (let i = 0; i < this.ImgIetms.length; i++) {

                        imgItem.push(
                                <div class="swiper-slide">
                                        <dl>
                                                <dt>
                                                        <img src={this.ImgIetms[i].src} alt={this.ImgIetms[i].title} />
                                                </dt>
                                                <dd>
                                                        <p>{this.ImgIetms[i].title}</p>
                                                </dd>
                                        </dl>
                                </div>
                        )

                }
                return imgItem
        }
}

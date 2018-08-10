import Vue, { CreateElement } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { theme } from '../config'

@Component
export default class Shrs extends Vue {
        public switch: boolean = true
        public clientWidth: any
        public delay: boolean = true

        public render(h: CreateElement) {
                return (
                        <div class="shrs-body container-fluid mpclear">
                                <div class="head">
                                        <div class="shrs-top"></div>
                                        {/* pc头部 */}
                                        <div class="hidden-sm hidden-xs pcHead">
                                                <div class="logo fl"><img src="http://i4.fuimg.com/611341/bf32f7c430754d21.png" alt="logo" /></div>
                                                <div class="menu-row fl">
                                                        <div class="menus fl">
                                                                <span><router-link to="/">网站首页</router-link></span>
                                                                <span><router-link to="/itemCard/into">走进四海</router-link></span>
                                                                <span><router-link to="/itemCard/server">服务项目</router-link></span>
                                                                <span><router-link to="/itemCard/case">施工案例</router-link></span>
                                                                <span><router-link to="/itemCard/team">团队风采</router-link></span>
                                                                <span><router-link to="/itemCard/news">新闻中心</router-link></span>
                                                                <span><router-link to="/itemCard/contact">联系我们</router-link></span>
                                                        </div>
                                                        <div class="phone fl">
                                                                <span class="phoneImg"></span>
                                                                <div class="p">
                                                                        <p class="p1">24小时咨询热线</p>
                                                                        <p class="p2">13911897528 </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* 手机头部 */}
                                        <div class="hidden-lg hidden-md mbHead">
                                                <div class="row mpclear">
                                                        <div class="col-sm-4 col-xs-4 mpclear">
                                                                <img src="./img/logo.png" alt="logo" />
                                                        </div>
                                                        <div class="menu-xs fr">
                                                                <span class="glyphicon glyphicon-menu-hamburger" onClick={this.menuSwitch}></span>
                                                        </div>
                                                        <div class={(this.switch ? `toggle` : '') + " mini-menus fl"} onClick={this.menuSwitch}>
                                                                <div><router-link to="/">网站首页</router-link></div>
                                                                <div><router-link to="/itemCard/into">走进四海</router-link></div>
                                                                <div><router-link to="/itemCard/server">服务项目</router-link></div>
                                                                <div><router-link to="/itemCard/case">施工案例</router-link></div>
                                                                <div><router-link to="/itemCard/team">团队风采</router-link></div>
                                                                <div><router-link to="/itemCard/news">新闻中心</router-link></div>
                                                                {/* <div><router-link to="/itemCard/talents">人才招聘</router-link></div> */}
                                                                <div><router-link to="/itemCard/contact">联系我们</router-link></div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                {/* 内容 */}
                                <div class="content">
                                        <router-view></router-view>
                                </div>
                                {/* pc marginTop */}
                                {/* <div class="footerMargin hidden-sm hidden-xs"></div> */}
                                {/* 脚部 */}
                                <div class="footer" id='footer'>
                                        {/* pc脚部 */}
                                        <div class="hidden-sm hidden-xs pcFoot">
                                                <div class="content">
                                                        <div class="img fl">
                                                                <img src="./img/QRCode.png" alt="" />
                                                        </div>
                                                        <div class="info fl">
                                                                <div class="menu">
                                                                        <router-link to="/">四海日盛</router-link>|
                                                                        <router-link to="/itemCard/into">走进四海</router-link>|
                                                                        <router-link to="/itemCard/server">服务项目</router-link>|
                                                                        <router-link to="/itemCard/case">施工案例</router-link>|
                                                                        <router-link to="/itemCard/team">团队风采</router-link>|
                                                                        <router-link to="/itemCard/news">新闻中心</router-link>|
                                                                        <router-link to="/itemCard/talents">人才招聘</router-link>|
                                                                        <router-link to="/itemCard/contact">联系我们</router-link>
                                                                </div>
                                                                <div class="phone">
                                                                        <span>手 机：</span>
                                                                        <span>13911897528</span>
                                                                        <span>13311268400</span>
                                                                        <span>15811059960</span>
                                                                </div>
                                                                <div class="tel">
                                                                        <span>电 话：</span>
                                                                        <span>010-85782599</span>
                                                                        <span>传 真：</span>
                                                                        <span>010-60595297</span>
                                                                </div>
                                                                <div class="emal">
                                                                        <span>网 址：</span>
                                                                        <span>www.shrswy.com</span>
                                                                        <span>邮 箱：</span>
                                                                        <span>shrs2009@163.com</span>
                                                                </div>
                                                                <div>
                                                                        <span>技术支持：</span>

                                                                        <a href="http://www.jdyxqq.com/cn/">京典一线</a>

                                                                </div>
                                                        </div>
                                                        <div class="consult">

                                                        </div>
                                                </div>
                                        </div>
                                        {/* 手机脚部 */}
                                        <div class="hidden-lg hidden-md mbFoot">
                                                <div class="QRcode fl"></div>
                                                <div class='info hidden-xs fl'>
                                                        <div class="">
                                                                <span class="">手 机:</span>
                                                                <span class="">13911897528</span>
                                                                <span class="">13311268400</span>

                                                        </div>
                                                        <div class="">
                                                                <span class="">电 话:</span>
                                                                <span class="">010-85782599</span>
                                                                <span class="">传 真:</span>
                                                                <span class="">010-60595297</span>
                                                        </div>
                                                        <div class="">
                                                                <span class="">网 址:</span>
                                                                <span class="">www.shrswy.com</span>
                                                                <span class="">邮 箱:</span>
                                                                <span class="">shrs2009@163.com</span>
                                                        </div>
                                                </div>
                                                <div class='visible-xs' style='height:100%'>
                                                        <div class="xsInfo">
                                                                <div>
                                                                        <span>联系方式：</span>
                                                                        <router-link to="/itemCard/contact">联系我们</router-link>
                                                                </div>
                                                                <div>
                                                                        <span>技术支持：</span>
                                                                        <a href="http://www.jdyxqq.com/cn/">京典一线</a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div >
                )
        }
        public mounted() {
                this.pcLayout()
                window.onresize = () => {
                        this.pcLayout()
                        if (this.delay) {
                                this.delay = false
                                setTimeout(() => { this.delay = true; this.bgSize() }, 500)
                        }
                }
        }
        public destroyed() { }
        @Watch('$route', { immediate: true, deep: true })
        on$routeChanged(val: any, oldVal: any) {
                window.scrollTo(0, 0)
        }
        public menuSwitch(): void {
                this.switch = !this.switch
        }
        public pcLayout() {
                if (/AppleWebKit.*mobile/i.test(navigator.userAgent) && window.innerWidth < 768) {
                        try {
                                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                                        document.documentElement.style.fontSize
                                                = document.documentElement.clientWidth / 3.75 + 'px'

                                        this.$store.commit('mode', false)
                                        this.$store.commit('pcOrPh', false)
                                }
                        } catch (e) {
                                console.log('error:', e)
                        }
                } else if (window.innerWidth < 992) {
                        this.$store.commit('mode', false)
                        this.$store.commit('pcOrPh', true)
                        document.documentElement.style.fontSize = (window.innerWidth / 9.92 * 2) + 'px'
                } else {
                        this.$store.commit('mode', true)
                        this.$store.commit('pcOrPh', true)
                        document.documentElement.style.fontSize = 100 + 'px'
                }
        }
        public bgSize() {
                let swiper1 = document.getElementById('swiper1')
                if (swiper1 !== null) {
                        let slides = swiper1.getElementsByClassName('swiper-slide')
                        let slidesWid = slides[0].clientWidth, slidesHig = slides[0].clientHeight
                        let ratio = slidesWid / 1.77
                        for (let i = 0; i < slides.length; i++) {
                                ratio > slidesHig ?
                                        slides[i].setAttribute('style', `background-size: 100vw auto;`) :
                                        slides[i].setAttribute('style', `background-size: auto 100vh;`)
                        }
                }
        }
        // 插入方法二
        public addEventListener(h: CreateElement) {
                if (5 > 3) {
                        return (
                                <div>456456</div>
                        )
                }
        }
}

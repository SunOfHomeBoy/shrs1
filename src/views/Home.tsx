import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'
import Protect from './HomeCase/Protect'
import { NewsList } from './NewsCard/NewsList'
import axios from 'axios';

@Component
export default class Home extends Vue {
        public home: any = (window as any).initData.home
        public user: any = this.$store.state.user
        public caseData: any = this.home.caseData || []
        public homeMenu: any = this.home.homeMenu || []
        public slogan: any = this.home.slogan || {}
        public card1BannerList: any = this.home.card1BannerList || []
        public card2ImgList: any = this.home.card2ImgList || []
        public card3List: any = this.home.card3List || []
        public card4ImgList: Array<any> = this.home.card4ImgList || []
        public card5Introduce: string = this.home.card5Introduce || ''

        public switchTab: string = "成品保护"
        public render(h: CreateElement) {
                return (
                        <div class="home container-fluid mpclear">
                                {/* PC轮播图 */}
                                <div v-show={this.userMode()} id="swiper1" class="swiper-container">
                                        <div class="swiper-wrapper">
                                                <div id="card1" class="swiper-slide">
                                                        <div class="logo"></div>
                                                        <div class="menu">
                                                                <ul>
                                                                        {this.createHomeMenu(h)}
                                                                </ul>
                                                        </div>
                                                        <div class="titCon">
                                                                <span class="title">
                                                                        <b>{this.slogan.title}</b>
                                                                </span>
                                                                <span class="subTitle">
                                                                        <b id="subTit"></b>
                                                                </span>
                                                        </div>
                                                </div>
                                                <div id="card2" class="swiper-slide">
                                                        <ul class="case">
                                                                {this.createCard2Img(h)}
                                                        </ul>
                                                </div>
                                                <div id="card3" class="swiper-slide">
                                                        <h3>关于业务</h3>
                                                        <ul>{this.createCard3List(h)}</ul>
                                                </div>
                                                <div id="card4" class="swiper-slide">
                                                        <ul>{this.createCard4ImgList(h)}</ul>
                                                </div>
                                                <div id="card5" class="swiper-slide">
                                                        <ul>
                                                                <li></li>
                                                                <li></li>
                                                        </ul>
                                                        <ul>
                                                                <li></li>
                                                                <li></li>
                                                                <li></li>
                                                                <li><img src="http://i4.fuimg.com/611341/c78defa1eed5550b.jpg" alt="" /></li>
                                                        </ul>
                                                        <ul>
                                                                {/* <li><span><b>描述字体</b></span></li> */}
                                                                <li></li>
                                                                <li>
                                                                        <p class="title">企业简介</p>
                                                                        <p class="card5Introduce">{(window as any).initData.home.card5Introduce}</p>
                                                                </li>
                                                        </ul>
                                                        <ul>
                                                                <li>
                                                                        <div class="homeFooter">
                                                                                <div class="img">
                                                                                        <img src="./img/QRCode.png" alt="" />
                                                                                </div>
                                                                                <div class="info">
                                                                                        <div class="menu">
                                                                                                <router-link to="/">四海日盛</router-link>
                                                                                                <router-link to="/itemCard/into">走进四海</router-link>
                                                                                                <router-link to="/itemCard/server">服务项目</router-link>
                                                                                                <router-link to="/itemCard/case">施工案例</router-link>
                                                                                                <router-link to="/itemCard/team">团队风采</router-link>
                                                                                                <router-link to="/itemCard/news">新闻中心</router-link>
                                                                                                <router-link to="/itemCard/contact">联系我们</router-link>
                                                                                        </div>
                                                                                        <div class="phone">
                                                                                                <b>手 机：</b>
                                                                                                <b>13911897528</b>
                                                                                                <b>13311268400</b>
                                                                                                <b>15811059960</b>
                                                                                        </div>
                                                                                        <div class="tel">
                                                                                                <b>电 话：</b>
                                                                                                <b>010-85782599</b>
                                                                                                <b>传 真：</b>
                                                                                                <b>010-60595297</b>
                                                                                        </div>
                                                                                        <div class="emal">
                                                                                                <b>网 址：</b>
                                                                                                <b>www.shrswy.com</b>
                                                                                                <b>邮 箱：</b>
                                                                                                <b>shrs2009@163.com</b>
                                                                                        </div>
                                                                                        <div>
                                                                                                <b>技术支持：</b>
                                                                                                <b><a class="link" href="http://www.jdyxqq.com/cn/">京典一线</a></b>
                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div class="swiper-pagination"></div>
                                        {/* <div v-show={this.userMode()} class="swiper-button-prev"></div>
                              <div v-show={this.userMode()} class="swiper-button-next"></div> */}
                                </div>
                                {/* 移动端 */}
                                <div v-show={!this.userMode()} class="mobile">
                                        {/* 移动端开发中。。。 */}
                                        <div class="mbBanner">
                                                <div class="text">
                                                        <p>四海日盛以诚信为本</p>
                                                        <p>情系员工  开拓创新  和谐共赢的经营理念</p>
                                                </div>
                                                <img src="http://i1.fuimg.com/611341/f98fc8d4061045d6.jpg" alt="" />
                                        </div>
                                        <div class="row pnav">
                                                <div class="col-sm-3 col-xs-3">
                                                        <router-link to="/itemCard/into">走进四海</router-link>
                                                </div>
                                                <div class="col-sm-3 col-xs-3">
                                                        <router-link to="/itemCard/server">服务项目</router-link>
                                                </div>
                                                <div class="col-sm-3 col-xs-3">
                                                        <router-link to="/itemCard/case">施工案例</router-link>
                                                </div>
                                                <div class="col-sm-3 col-xs-3">
                                                        <router-link to="/itemCard/contact">联系我们</router-link>
                                                </div>
                                        </div>
                                        {/* serviceItems*/}
                                        <div class="serviceItems">
                                                <h3>SERVICE ITEMS</h3>
                                                <h4><b>服务项目</b></h4>
                                                {/* Mb端 */}
                                                <div class="row mb">
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/protect">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i2.tiimg.com/611341/b66c935ed2587806t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>成品保护</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/spiderman">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i2.tiimg.com/611341/9252393a0c767480t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>外墙清洗</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/liftAttendant">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i2.tiimg.com/611341/aba3abac2ca50f60t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>电梯司机</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/cleaning">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i2.tiimg.com/611341/29c9e8f9214aed55t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>开荒保洁</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/renovation">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i1.fuimg.com/611341/4dabaa90cf9cd229t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>石材翻新</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-4 mpclear">
                                                                <router-link to="/itemCard/case/housekeeping">
                                                                        <dl>
                                                                                <dt>
                                                                                        <div class="boxF">
                                                                                                <div class="boxS">
                                                                                                        <div class="boxT">
                                                                                                                <img src="http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg" alt="" />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </dt>
                                                                                <dd>
                                                                                        <p>家政服务</p>
                                                                                </dd>
                                                                        </dl>
                                                                </router-link>
                                                        </div>
                                                </div>
                                                <div class="link">
                                                        <router-link to="/">MORE>></router-link>
                                                </div>
                                        </div>
                                        {/* construction case */}
                                        <div class="construction">
                                                <h3>CONSTRUCTION CASE</h3>
                                                <h4><b>施工案例</b></h4>
                                                <div class="content">
                                                        <div class="menu">
                                                                <div id="caseMenu" class="swiper-container">
                                                                        <div class="swiper-wrapper">
                                                                                {this.createCaseTab(h)}
                                                                        </div>
                                                                        {/* <!-- 如果需要导航按钮 --> */}
                                                                        <div class="swiper-button-prev"></div>
                                                                        <div class="swiper-button-next"></div>
                                                                </div>
                                                        </div>
                                                        <div class="slideshow">
                                                                <Protect></Protect>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* into sh */}
                                        <div class="intoSh">
                                                <h3>INTO THE WORLD</h3>
                                                <h4><b>走进四海</b></h4>
                                                <div class="content row">
                                                        <div class="col-md-6 conlef">
                                                                <img src="http://i1.fuimg.com/611341/82eafe56911b6faat.jpg" alt="" />
                                                                <h4>北京四海日盛人力资源管理有限公司</h4>
                                                                <p>四海日盛保洁四海日盛保洁隶属于北京四海日盛人力资源管理有限公司座落于北京朝阳区高碑店，总投资9000万、注册资本800万,在2006年初公司为了扩大经营范围，主要接受委托提供工程劳务人员输送以及清洁服务一体…</p>
                                                                <router-link to="/itemCard/into">
                                                                        <span>MORE</span>
                                                                </router-link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                )
        }
        public mounted() {
                this.swiper()
                this.bgSize()
                this.hideEle()
                this.innerXMLs()
                // this.autoBackground()
        }
        public beforeDestroy() {
                this.displayEle()
        }
        public destroyed() { }

        public autoBackground() {
                let card1 = document.getElementById('card1')
                if (card1) {
                        let imgList = this.card1BannerList, i = 0;

                        setInterval(() => {
                                i >= imgList.length - 1 ? i = 0 : ++i;
                                card1.style.backgroundImage = `url(${imgList[i].img})`;
                        }, 3000);
                }
        }

        public innerXMLs() {
                let subTit = document.getElementById('subTit')
                if (subTit) {
                        subTit.innerHTML = this.slogan.subtitle
                }
        }
        public userMode() {
                return this.user = this.$store.state.user
        }
        public pcOrPh() {
                return this.$store.state.mode
        }
        public swiper() {
                let swiper1: any = new Swiper('#swiper1', {
                        direction: 'vertical',
                        mousewheel: true,
                        autoHeight: true,
                        grabCursor: true,
                        pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                        },
                        navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                        }

                })
                let caseMenu: any = new Swiper('#caseMenu', {
                        direction: 'horizontal',
                        autoHeight: true,
                        grabCursor: true,
                        slidesPerView: 5,
                        spaceBetween: 0,
                        slidesPerGroup: 1,
                        centeredSlides: false,
                        navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                        },
                })
        }
        public bgSize() {
                let slides = document.getElementsByClassName('swiper-slide')
                let slidesWid = slides[0].clientWidth, slidesHig = slides[0].clientHeight
                let ratio = slidesWid / 1.77
                for (let i = 0; i < slides.length; i++) {
                        ratio > slidesHig ?
                                slides[i].setAttribute('style', `background-size: 100vw auto;`) :
                                slides[i].setAttribute('style', `background-size: auto 100vh;`)
                }
        }

        public createCaseTab(h: CreateElement) {
                let Ele = []
                for (let key in this.caseData) {
                        Ele.push(
                                <div class="swiper-slide">
                                        <router-link to={this.caseData[key].href}>
                                                <div onClick={() => this.switchTab = this.caseData[key].title}>
                                                        <span>{this.caseData[key].title}</span>
                                                </div >
                                        </router-link>
                                </div>
                        )
                }
                return Ele
        }
        public createHomeMenu(h: CreateElement) {
                let Ele = []
                for (let key in this.homeMenu) {
                        Ele.push(
                                <li><router-link to={this.homeMenu[key].link}>{this.homeMenu[key].title}</router-link></li>
                        )
                }
                return Ele
        }
        public createCard2Img(h: CreateElement) {
                let Ele = []
                for (let key in this.card2ImgList) {
                        Ele.push(
                                <li class="col-lg-3 col-md-3 col-sm-3">
                                        <div class="introduce">
                                                <router-link to={this.card2ImgList[key].link}>{this.card2ImgList[key].title}</router-link>
                                        </div>
                                        <div class="img" style={`background-image: url(${this.card2ImgList[key].img})`}></div>
                                </li>
                        )
                }
                return Ele
        }
        public createCard3List(h: CreateElement) {
                let Ele = []
                for (let key in this.card3List) {
                        Ele.push(
                                <li><b></b><router-link to={this.card3List[key].link}><span>{this.card3List[key].title}</span></router-link></li>
                        )
                }
                return Ele
        }
        public createCard4ImgList(h: CreateElement) {
                let Ele = []
                for (let key in this.card4ImgList) {
                        Ele.push(
                                <li><span><b>{this.card4ImgList[key].title}</b></span></li>
                        )
                }
                return Ele
        }

        public hideEle() {
                let head = document.getElementsByClassName('head')[0],
                        foot = document.getElementsByClassName('footer')[0]
                if (head && foot) {
                        head.setAttribute('style', 'display:none')
                        foot.setAttribute('style', 'display:none')
                }
        }

        public displayEle() {
                let head = document.getElementsByClassName('head')[0],
                        foot = document.getElementsByClassName('footer')[0]
                if (head && foot)
                        head.setAttribute('style', 'display:block'),
                                foot.setAttribute('style', 'display:block')
        }
}

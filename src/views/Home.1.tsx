import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'
import Protect from './HomeCase/Protect'
import { NewsList } from './NewsCard/NewsList'
import axios from 'axios';

@Component
export default class Home extends Vue {
      public user: any = this.$store.state.user
      public caseData: any = [
            {
                  title: '成品保护',
                  href: '/itemCard/case/protect'
            },
            {
                  title: '保洁',
                  href: '/itemCard/case/cleaning'
            },
            {
                  title: '外墙清洗',
                  href: '/itemCard/case/spiderman'
            },
            {
                  title: '石材翻新',
                  href: '/itemCard/case/renovation'
            },
            {
                  title: '家政服务',
                  href: '/itemCard/case/housekeeping'
            },
            {
                  title: '电梯司机',
                  href: '/itemCard/case/liftAttendant'
            },
            {
                  title: '停车管理',
                  href: '/itemCard/case/parkingManage'
            },
            {
                  title: '消防工程',
                  href: '/itemCard/case/fireEngineering'
            },
            {
                  title: '拆迁工程',
                  href: '/itemCard/case/demolitionEngineering'
            }
      ]
      public ImgIetms: any = [
            {
                  linkTo: '/itemCard/team/Img1#dowebok',
                  title: '礼仪员工',
                  img: 'http://i4.fuimg.com/611341/4000300e3bda82e9t.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img2',
                  title: '团队风采',
                  img: 'http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img3',
                  title: '成品保护',
                  img: 'http://i4.fuimg.com/611341/11565606e0c72d6bt.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img4',
                  title: '外墙清洗',
                  img: 'http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img5',
                  title: '地毯清洗',
                  img: 'http://i1.fuimg.com/611341/9f9217cc477c44b8t.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img6',
                  title: '保洁员工',
                  img: 'http://i4.fuimg.com/611341/33359574de2e4637t.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img7',
                  title: '开荒员工',
                  img: 'http://i2.tiimg.com/611341/3da60f21650abff1t.jpg'
            },
            {
                  linkTo: '/itemCard/team/Img8',
                  title: '石材结晶及养护',
                  img: 'http://i2.tiimg.com/611341/b55ac648e595e924t.jpg'
            }
      ]

      public switchTab: string = '成品保护'

      public render(h: CreateElement) {
            return (
                  <div class="home container-fluid mpclear">
                        {/* 轮播图 */}
                        <div id="swiper1" class="swiper-container">
                              <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                          <img src="http://i4.fuimg.com/611341/990e22fe20cc9cd7.jpg" alt="" />
                                    </div>
                                    <div class="swiper-slide">
                                          <img src="http://i4.fuimg.com/611341/b9326446d3ce1cbd.jpg" alt="" />
                                    </div>
                              </div>

                              <div v-show={this.userMode()} class="swiper-button-prev"></div>
                              <div v-show={this.userMode()} class="swiper-button-next"></div>
                        </div>
                        {/* 移动端Pnav */}
                        <div v-show={!this.pcOrPh()} class="row pnav">
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
                              {/* pc端  */}
                              <div v-show={this.pcOrPh()} class="row pc">
                                    <div class="col-md-3 col-sm-3 col-xs-6 mpclear">
                                          <dl class="item1">
                                                <dt>
                                                      <div class="text">
                                                            <p>成品保护</p>
                                                            <p>Product protection</p>
                                                            <p>_____</p>
                                                      </div>
                                                </dt>
                                                <dd>
                                                      <img src="http://i2.tiimg.com/611341/b66c935ed2587806t.jpg" alt="" />
                                                </dd>
                                          </dl>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xs-6 mpclear">
                                          <dl class="item2">
                                                <dt>
                                                      <img src="http://i2.tiimg.com/611341/9252393a0c767480t.jpg" alt="" />
                                                </dt>
                                                <dd>
                                                      <div class="text">
                                                            <p>外墙清洗</p>
                                                            <p>Wall cleaning</p>
                                                            <p>_____</p>
                                                      </div>
                                                </dd>
                                          </dl>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xs-6 mpclear">
                                          <dl class="item3">
                                                <dt>
                                                      <div class="text">
                                                            <p>电梯司机</p>
                                                            <p>lift attendant</p>
                                                            <p>_____</p>
                                                      </div>
                                                </dt>
                                                <dd>
                                                      <img src="http://i2.tiimg.com/611341/aba3abac2ca50f60t.jpg" alt="" />
                                                </dd>
                                          </dl>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xs-6 mpclear">
                                          <dl class="item4">
                                                <dt>
                                                      <img src="http://i2.tiimg.com/611341/29c9e8f9214aed55t.jpg" alt="" />
                                                </dt>
                                                <dd>
                                                      <div class="text">
                                                            <p>工程开荒保洁</p>
                                                            <p>Cleaning engineering</p>
                                                            <p>_____</p>
                                                      </div>
                                                </dd>
                                          </dl>
                                    </div>
                              </div>
                              {/* Mb端 */}
                              <div v-show={!this.pcOrPh()} class="row mb">
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
                        {/* pc construction case */}
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

                        {/* pc CERTIFICATE  */}
                        <div class="certificate">
                              <h3>CERTIFICATE HONOR</h3>
                              <h4><b>荣誉证书</b></h4>
                              <div class="certificateSlider dlImgRatio">
                                    <div id="swiper3" class="swiper-container">
                                          <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/635673d18b0ad969t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>医院消毒清洁资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>

                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/be4cadbe3d75c8d6t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>外墙资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/4a1ab98ced7292e5t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>石材清洁资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>

                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/bacc9d53e2ff962dt.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>日常保洁资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/24fb9f8f2f37a81bt.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>清洁养护资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/60c015e4e4d52618t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>古建筑清养护资质证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/9813adae16369191t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>聘书证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/9261056149389e04t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>会员证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/2c2aef5ac8816f8ft.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>建筑物清洁荣誉证书</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>

                                                <div class="swiper-slide">
                                                      <router-link to="/itemCard/honor">
                                                            <dl>
                                                                  <dt>
                                                                        <img src="http://i1.fuimg.com/611341/1049b655e20af203t.jpg" alt="" />
                                                                  </dt>
                                                                  <dd>
                                                                        <p>项目经理清洗养护证</p>
                                                                  </dd>
                                                            </dl>
                                                      </router-link>
                                                </div>
                                          </div>

                                          {/* <!-- 如果需要分页器 --> */}
                                          {/* <div class="swiper-pagination"></div> */}

                                          {/* <!-- 如果需要导航按钮 --> */}
                                          <div v-show={this.userMode()} class="swiper-button-prev"></div>
                                          <div v-show={this.userMode()} class="swiper-button-next"></div>

                                          {/* <!-- 如果需要滚动条 --> */}
                                          {/* <div class="swiper-scrollbar"></div> */}
                                    </div>
                              </div>
                        </div>

                        {/* pc into sh */}
                        <div class="intoSh">
                              <h3>INTO THE WORLD</h3>
                              <h4><b>走进四海</b></h4>
                              <div class="content row">
                                    <div class="col-md-6 conlef">
                                          <h5><b>关于四海</b></h5>
                                          <img src="http://i1.fuimg.com/611341/82eafe56911b6faat.jpg" alt="" />
                                          <h4>北京四海日盛人力资源管理有限公司</h4>
                                          <p>四海日盛保洁四海日盛保洁隶属于北京四海日盛人力资源管理有限公司座落于北京朝阳区高碑店，总投资9000万、注册资本800万,在2006年初公司为了扩大经营范围，主要接受委托提供工程劳务人员输送以及清洁服务一体…</p>
                                          <router-link to="/itemCard/into">
                                                <span>MORE</span>
                                          </router-link>
                                    </div>
                                    <div class="col-md-6 conrit">
                                          <NewsList></NewsList>
                                    </div>
                              </div>
                        </div>

                        {/* pc teamStyle */}
                        <div class="teamStyle">
                              <h3>THE TEAM STYLE</h3>
                              <h4><b>团队风采</b></h4>
                              <div class="teamSlider">
                                    <div id="swiper4" class="swiper-container">
                                          <div class="swiper-wrapper dlImgRatio">
                                                {this.createCaseImg(h)}
                                          </div>
                                          {/* <!-- 如果需要分页器 --> */}
                                          {/* <div class="swiper-pagination"></div> */}

                                          {/* <!-- 如果需要导航按钮 --> */}

                                          <div v-show={this.userMode()} class="swiper-button-prev"></div>
                                          <div v-show={this.userMode()} class="swiper-button-next"></div>

                                          {/* <!-- 如果需要滚动条 --> */}
                                          {/* <div class="swiper-scrollbar"></div> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
      public mounted() {
            this.swiper()
      }
      public destroyed() { }
      public userMode() {
            return this.user = this.$store.state.user
      }
      public pcOrPh() {
            return this.$store.state.mode
      }
      public swiper() {
            let swiper1: any = new Swiper('#swiper1', {
                  autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                  },
                  speed: 1000,
                  direction: 'horizontal',
                  loop: true,
                  autoHeight: true,
                  grabCursor: true,
                  pagination: {
                        el: '.swiper-pagination',
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
                  slidesPerView: 5, //
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  centeredSlides: false,
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
            })
            let swiper3: any = new Swiper('#swiper3', {
                  autoplay: true,
                  direction: 'horizontal',
                  loop: true,
                  autoHeight: true,
                  grabCursor: true,
                  slidesPerView: 4, //
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                  // effect: 'coverflow', // 切换方式

                  centeredSlides: false,
                  // 如果需要分页器
                  pagination: {
                        el: '.swiper-pagination',
                  },

                  // 如果需要前进后退按钮
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  }
            })
            let swiper4: any = new Swiper('#swiper4', {
                  notNextTick: true,
                  autoplay: {
                        delay: 800,
                        disableOnInteraction: false // 解决 拖动、点击后不能自动开始轮播
                  },
                  speed: 500,
                  direction: 'horizontal',
                  loop: true,
                  // autoHeight: true,
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
      public createCaseImg(h: CreateElement) {
            let imgItem = []
            for (let i = 0; i < this.ImgIetms.length; i++) {
                  imgItem.push(
                        <div class="swiper-slide">
                              <router-link to={this.ImgIetms[i].linkTo}>
                                    <dl>
                                          <dt>
                                                <img src={this.ImgIetms[i].img} alt={this.ImgIetms[i].title} />
                                          </dt>
                                          <dd>
                                                <p>{this.ImgIetms[i].title}</p>
                                          </dd>
                                    </dl>
                              </router-link>
                        </div>
                  )
            }
            return imgItem
      }
}

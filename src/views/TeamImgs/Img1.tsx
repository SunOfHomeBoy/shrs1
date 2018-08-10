import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'
import Viewer from 'viewerjs'

@Component
export class Img1 extends Vue {
        public imgList: any = {
                Img1: [
                        {
                                title: '礼仪员工',
                                img: 'http://i4.fuimg.com/611341/4000300e3bda82e9.png'
                        },
                        {
                                title: '礼仪员工',
                                img: 'http://i4.fuimg.com/611341/a330c4c603e8e14a.jpg'
                        }
                ],
                Img2: [
                        {
                                title: '团队风采',
                                img: 'http://i4.fuimg.com/611341/bd7dc98da4c49385.jpg'
                        },
                        {
                                title: '团队风采',
                                img: 'http://i4.fuimg.com/611341/bf4ac5d1ff249119.jpg'
                        },
                        {
                                title: '团队风采',
                                img: 'http://i4.fuimg.com/611341/a26eab6c29d89bb4.jpg'
                        }
                ],
                Img3: [
                        {
                                title: '成品保护',
                                img: 'http://i4.fuimg.com/611341/bd7dc98da4c49385.jpg'
                        },
                        {
                                title: '成品保护',
                                img: 'http://i4.fuimg.com/611341/bf4ac5d1ff249119.jpg'
                        },
                        {
                                title: '成品保护',
                                img: 'http://i4.fuimg.com/611341/a26eab6c29d89bb4.jpg'
                        }
                ],
                Img4: [
                        {
                                title: '外墙清洗',
                                img: 'http://i1.fuimg.com/611341/89714ca72799ef1d.jpg'
                        },
                        {
                                title: '外墙清洗',
                                img: 'http://i2.tiimg.com/611341/91a4340f26b3305c.jpg'
                        },
                        {
                                title: '外墙清洗',
                                img: 'http://i1.fuimg.com/611341/238e7ba2d06e05f0.jpg'
                        },
                        {
                                title: '外墙清洗',
                                img: 'http://i1.fuimg.com/611341/db0c69e244985876.jpg'
                        }
                ],
                Img5: [
                        {
                                title: '地毯清洗',
                                img: 'http://i4.fuimg.com/611341/5b1a9e3dd76568fe.jpg'
                        },
                        {
                                title: '地毯清洗',
                                img: 'http://i4.fuimg.com/611341/f084f52d97f623d5.jpg'
                        },
                        {
                                title: '地毯清洗',
                                img: 'http://i4.fuimg.com/611341/e61be01035c7d6f6.jpg'
                        },
                        {
                                title: '地毯清洗',
                                img: 'http://i4.fuimg.com/611341/89e14f8f3f060189.jpg'
                        },
                        {
                                title: '地毯清洗',
                                img: 'http://i1.fuimg.com/611341/9f9217cc477c44b8.jpg'
                        }
                ],
                Img6: [
                        {
                                title: '保洁员工',
                                img: 'http://i4.fuimg.com/611341/33359574de2e4637.jpg'
                        },
                        {
                                title: '保洁员工',
                                img: 'http://i4.fuimg.com/611341/2b4a162148c39bae.jpg'
                        }
                ],
                Img7: [
                        {
                                title: '开荒员工',
                                img: 'http://i4.fuimg.com/611341/70929bbaf57210b3.jpg'
                        },
                        {
                                title: '开荒员工',
                                img: 'http://i4.fuimg.com/611341/496e904ed3f49c06.jpg'
                        }
                ],
                Img8: [
                        {
                                title: '石材结晶及养护',
                                img: 'http://i1.fuimg.com/611341/4dabaa90cf9cd229.jpg'
                        },
                        {
                                title: '石材结晶及养护',
                                img: 'http://i1.fuimg.com/611341/9dfbed009c6a2536.jpg'
                        },
                        {
                                title: '石材结晶及养护',
                                img: 'http://i2.tiimg.com/611341/b55ac648e595e924.jpg'
                        }
                ],
        }
        public imgItemInfo: any = [
                {
                        title: '礼仪员工',
                        img: 'http://i4.fuimg.com/611341/4000300e3bda82e9.png'
                },
                {
                        title: '礼仪员工',
                        img: 'http://i4.fuimg.com/611341/a330c4c603e8e14a.jpg'
                }
        ]
        public render(h: CreateElement) {
                return (
                        <div class="Img1 container-fluid mpclear">
                                <div class="incontent">
                                        <ul id="dowebok" class='row'>
                                                {this.createItems(h)}
                                        </ul>
                                </div>
                        </div>
                )
        }
        public beforeMount() {
                this.getImgInfo()
        }
        public mounted() {
                var viewer = new Viewer(document.getElementById('dowebok'), {
                        inline: true
                })
                this.imgHight()
        }
        public getImgInfo() {
                let curPath = (this.$router as any).history.current.path
                let imgId = curPath.split('/itemCard/team/')[1]
                this.imgItemInfo = this.imgList[imgId]
        }
        public createItems(h: CreateElement) {
                let template = []
                for (let i = 0; i < this.imgItemInfo.length; i++) {
                        template.push(
                                <li class='col-md-4 col-sm-6 col-xs-12'>
                                        <dl>
                                                <dt><img src={this.imgItemInfo[i].img} alt={this.imgItemInfo[i].title} title='点击启动图片查看器，支持鼠标滚轴缩放，以及方向键切换。' /></dt>
                                                <dd><span>{this.imgItemInfo[i].title}</span></dd>
                                        </dl>

                                </li>
                        )
                }
                return template
        }
        public imgHight() {
                window.onresize = () => this.imgHight()
                let dowebok = document.getElementById('dowebok')

                if (/AppleWebKit.*mobile/i.test(navigator.userAgent)) {
                        if (window.location.href.indexOf("?mobile") < 0) {
                                try {
                                        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                                                dowebok.style.height = dowebok.clientWidth + 'px'
                                        }
                                } catch (e) {
                                        console.log('error:', e);
                                }
                        }
                } else if (window.innerWidth < 992) {
                        dowebok.style.height = (dowebok.clientWidth * 0.8) + 'px'

                } else {
                        dowebok.style.height = (dowebok.clientWidth * 0.66) + 'px'
                }
        }
}

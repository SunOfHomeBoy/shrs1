import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Viewer from 'viewerjs'
import { api } from '../utils'

@Component
export default class Certificate extends Vue {
        public imgItemInfo: any = [
                {
                        title: '医院消毒清洁资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/635673d18b0ad969s.jpg'
                },
                {
                        title: '项目经理清洗养护证',
                        linkURL: 'http://i1.fuimg.com/611341/1049b655e20af203s.jpg'
                },
                {
                        title: '外墙资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/be4cadbe3d75c8d6.jpg'
                },
                {
                        title: '石材清洁资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/4a1ab98ced7292e5.jpg'
                },
                {
                        title: '荣誉证书',
                        linkURL: 'http://i1.fuimg.com/611341/2c2aef5ac8816f8f.jpg'
                },
                {
                        title: '日常保洁资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/2c2aef5ac8816f8f.jpg'
                },
                {
                        title: '清洁养护资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/24fb9f8f2f37a81b.jpg'
                },
                {
                        title: '聘书证书',
                        linkURL: 'http://i1.fuimg.com/611341/9813adae16369191.jpg'
                },
                {
                        title: '会员证书',
                        linkURL: 'http://i1.fuimg.com/611341/9261056149389e04.jpg'
                },
                {
                        title: '古建筑清养护资质证书',
                        linkURL: 'http://i1.fuimg.com/611341/60c015e4e4d52618s.jpg'
                }
        ]
        public render(h: CreateElement) {
                return (
                        <div class="Certificate container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>荣誉证书</dt>
                                                <dd>Honor</dd>
                                        </dl>
                                </div>
                                <div class="incontent">
                                        <ul id="dowebok" class='row'>
                                                {this.createItems(h)}
                                        </ul>
                                </div>
                        </div>
                )
        }
        
        public created() {
                api('/api/searchImg', {
                        "imgMode": 1,
                        "imgItem": '荣誉证书'
                }, callback => {
                        if (callback.code === 200) {
                                this.imgItemInfo = callback.data.items
                        }
                })
        }

        public mounted() {
                var viewer = new Viewer(document.getElementById('dowebok'), {});
                this.imgHight()
        }
        public createItems(h: CreateElement) {
                let template = []
                for (let i = 0; i < this.imgItemInfo.length; i++) {
                        template.push(
                                <li class='col-md-4 col-sm-6 col-xs-12'>
                                        <dl>
                                                <dt><img src={this.imgItemInfo[i].linkURL} alt={this.imgItemInfo[i].title} title='点击启动图片查看器，支持鼠标滚轴缩放，以及方向键切换。' /></dt>
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
        }

}

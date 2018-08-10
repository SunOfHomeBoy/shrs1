import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Imgs extends Vue {
        public itemInfo: any = [
                {
                        linkTo: '/itemCard/team/Img1',
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
        public render(h: CreateElement) {
                return (
                        <div class="Imgs container-fluid mpclear">
                                <div class="InContent">
                                        <ul class="imglist">
                                                {this.createItems(h)}
                                        </ul>
                                </div>
                        </div>
                )
        }
        public createItems(h: CreateElement) {
                let template = []
                for (let i = 0; i < this.itemInfo.length; i++) {
                        template.push(
                                <li class='col-md-3 col-sm-4 col-xs-6'>
                                        <router-link to={this.itemInfo[i].linkTo} title={this.itemInfo[i].title}>
                                                <dl>
                                                        <dt>
                                                                <img src={this.itemInfo[i].img} alt={this.itemInfo[i].title} />
                                                        </dt>
                                                        <dd><span>{this.itemInfo[i].title}</span></dd>
                                                </dl>
                                        </router-link>
                                </li>
                        )
                }
                return template
        }
}

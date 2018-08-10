import Vue, { CreateElement } from 'vue'
// import { api } from '../../utils'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class CaseList extends Vue {
        public itemInfo: any = [
                {
                        linkTo: '/itemCard/case/protect',
                        title: '成品保护',
                        img: 'http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg'
                },
                {
                        linkTo: '/itemCard/case/cleaning',
                        title: '保洁',
                        img: 'http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg'
                },
                {
                        linkTo: '/itemCard/case/spiderman',
                        title: '外墙清洗',
                        img: 'http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg'
                },
                {
                        linkTo: '/itemCard/case/renovation',
                        title: '石材翻新',
                        img: 'http://i2.tiimg.com/611341/b55ac648e595e924t.jpg'
                },
                {
                        linkTo: '/itemCard/case/housekeeping',
                        title: '家政服务',
                        img: 'http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg'
                },
                {
                        linkTo: '/itemCard/case/liftAttendant',
                        title: '电梯司机',
                        img: 'http://i4.fuimg.com/611341/49272676020e5d4et.jpg'
                },
                {
                        linkTo: '/itemCard/case/parkingManage',
                        title: '停车管理',
                        img: 'http://i4.fuimg.com/611341/e70312190ecf083ct.jpg'
                },
                {
                        linkTo: '/itemCard/case/fireEngineering',
                        title: '消防工程',
                        img: 'http://i4.fuimg.com/611341/bbb4a1a28c8987dbt.jpg'
                },
                {
                        linkTo: '/itemCard/case/demolitionEngineering',
                        title: '拆迁工程',
                        img: 'http://i4.fuimg.com/611341/c99ffbf40c1227f7t.jpg'
                }
        ]

        public render(h: CreateElement) {
                return (
                        <div class="CaseList">
                                <div class="title">
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>施工案例</dt>
                                                        <dd>Construction case</dd>
                                                </router-link>
                                        </dl>
                                </div>
                                <div class="list container-fluid mpclear">
                                        <div class="InContent">
                                                <ul class="imglist">
                                                        {this.createItems(h)}
                                                </ul>
                                        </div>
                                </div>
                        </div>
                )
        }
        /**
         * create
         */
        // public create() {
        //         api('/api/foundation/lotto', { data:"参数" }, callback => {
        //                 console.log(callback)
        //                 // this.xxx = callback.xxx
        //         })
        // }
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

import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Protect extends Vue {
        public data: any = {
                "protect": {
                        "titleZ": "成品保护",
                        "titleE": "Protection",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "和道国际箱包交易中心",
                                        "img": "http://i4.fuimg.com/611341/1ab7f92b95aa41a9t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "银河SOHO",
                                        "img": "http://i4.fuimg.com/611341/55d9f2e391973961t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "盘古大观",
                                        "img": "http://i4.fuimg.com/611341/e95dbfad218027c1t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "国贸三期",
                                        "img": "http://i4.fuimg.com/611341/d036b4743a45f901t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/housekeeping",
                                        "title": "天津永旺梦乐购",
                                        "img": "http://i4.fuimg.com/611341/38b3165be6ca5691t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/liftAttendant",
                                        "title": "华贸城",
                                        "img": "http://i4.fuimg.com/611341/0e52f59d92f3cdf4t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/parkingManage",
                                        "title": "燕达国际建康城",
                                        "img": "http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/fireEngineering",
                                        "title": "神华大厦",
                                        "img": "http://i4.fuimg.com/611341/cd0b8e13815ef7b6t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "大连万达公馆",
                                        "img": "http://i4.fuimg.com/611341/bc3431452d8e9dbbt.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "国家会议中心",
                                        "img": "http://i4.fuimg.com/611341/76217a09aa3076bet.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "中国建筑股份有限公司",
                                        "img": "http://i4.fuimg.com/611341/a16c2b6db3a478d6t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "铁道部党校",
                                        "img": "http://i4.fuimg.com/611341/458dbb7ceac292a3t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "海军司令办公大楼",
                                        "img": "http://i4.fuimg.com/611341/f02d31422be13daet.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "雅世合金公寓",
                                        "img": "http://i4.fuimg.com/611341/11565606e0c72d6bt.jpg"
                                }
                        ]
                },
                "cleaning": {
                        "titleZ": "保     洁",
                        "titleE": "Cleaning",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "保洁工作程序",
                                        "img": "http://i1.fuimg.com/611341/5fb5dfbf283b8a0ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "保洁岗位职责",
                                        "img": "http://i1.fuimg.com/611341/6fce493a7aedf3b0t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "保洁",
                                        "img": "http://i1.fuimg.com/611341/f129423d276a7426t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "管理员巡检制度",
                                        "img": "http://i1.fuimg.com/611341/5badbcd9d7ab9175t.jpg"
                                }
                        ]
                },
                "spiderman": {
                        "titleZ": "外墙清洁",
                        "titleE": "Wall cleaning",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "​外墙清洗的质量保证措施",
                                        "img": "http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "外墙清洗方式",
                                        "img": "http://i1.fuimg.com/611341/238e7ba2d06e05f0t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "安全事项",
                                        "img": "http://i1.fuimg.com/611341/db0c69e244985876t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "外墙清洗",
                                        "img": "http://i1.fuimg.com/611341/89714ca72799ef1dt.jpg"
                                }
                        ]
                },
                "renovation": {
                        "titleZ": "石材翻新",
                        "titleE": "Renovation",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "石材翻新",
                                        "img": "http://i2.tiimg.com/611341/b55ac648e595e924t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "花岗岩翻新",
                                        "img": "http://i1.fuimg.com/611341/9dfbed009c6a2536t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "石材翻新注意事项",
                                        "img": "http://i1.fuimg.com/611341/64c8f9809f7ce709t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "人造石翻新",
                                        "img": "http://i1.fuimg.com/611341/4dabaa90cf9cd229t.jpg"
                                }
                        ]
                },
                "housekeeping": {
                        "titleZ": "家政服务",
                        "titleE": "Housekeeping",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "家政服务受理",
                                        "img": "http://i4.fuimg.com/611341/9e92c2414cbf9b00t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "家政服务接待",
                                        "img": "http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "家政服务工作规范",
                                        "img": "http://i4.fuimg.com/611341/4eb294952765934at.jpg"
                                }
                        ]
                },
                "liftAttendant": {
                        "titleZ": "电梯司机",
                        "titleE": "Lift Attendant",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "电梯司机的“五要”与“十不开”",
                                        "img": "http://i4.fuimg.com/611341/49272676020e5d4et.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "电梯停驶后的安全规程",
                                        "img": "http://i4.fuimg.com/611341/267862bbfc5c42dct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "电梯司机",
                                        "img": "http://i2.tiimg.com/611341/aba3abac2ca50f60t.jpg"
                                }
                        ]
                },
                "parkingManage": {
                        "titleZ": "停车管理",
                        "titleE": "Parking Manage",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "停车管理管理制度",
                                        "img": "http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "停车管理纪律",
                                        "img": "http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "停车管理职责",
                                        "img": "http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg"
                                }
                        ]
                },
                "fireEngineering": {
                        "titleZ": "消防工程",
                        "titleE": "Fire Engineering",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "成品保护",
                                        "img": "http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "保洁",
                                        "img": "http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "外墙清洗",
                                        "img": "http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "石材翻新",
                                        "img": "http://i2.tiimg.com/611341/b55ac648e595e924t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/housekeeping",
                                        "title": "家政服务",
                                        "img": "http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/liftAttendant",
                                        "title": "电梯司机",
                                        "img": "http://i4.fuimg.com/611341/49272676020e5d4et.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/parkingManage",
                                        "title": "停车管理",
                                        "img": "http://i4.fuimg.com/611341/e70312190ecf083ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/fireEngineering",
                                        "title": "消防工程",
                                        "img": "http://i4.fuimg.com/611341/bbb4a1a28c8987dbt.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "拆迁工程",
                                        "img": "http://i4.fuimg.com/611341/c99ffbf40c1227f7t.jpg"
                                }
                        ]
                },
                "demolitionEngineering": {
                        "titleZ": "拆迁工程",
                        "titleE": "Demolition",
                        "main": [
                                {
                                        "linkTo": "/itemCard/case/protect",
                                        "title": "成品保护",
                                        "img": "http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/cleaning",
                                        "title": "保洁",
                                        "img": "http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/spiderman",
                                        "title": "外墙清洗",
                                        "img": "http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/renovation",
                                        "title": "石材翻新",
                                        "img": "http://i2.tiimg.com/611341/b55ac648e595e924t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/housekeeping",
                                        "title": "家政服务",
                                        "img": "http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/liftAttendant",
                                        "title": "电梯司机",
                                        "img": "http://i4.fuimg.com/611341/49272676020e5d4et.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/parkingManage",
                                        "title": "停车管理",
                                        "img": "http://i4.fuimg.com/611341/e70312190ecf083ct.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/fireEngineering",
                                        "title": "消防工程",
                                        "img": "http://i4.fuimg.com/611341/bbb4a1a28c8987dbt.jpg"
                                },
                                {
                                        "linkTo": "/itemCard/case/demolitionEngineering",
                                        "title": "拆迁工程",
                                        "img": "http://i4.fuimg.com/611341/c99ffbf40c1227f7t.jpg"
                                }
                        ]
                }
        }
        public curData: any = {
                "titleZ": "成品保护",
                "titleE": "Protection",
                "main": [
                        {
                                "linkTo": "/itemCard/case/protect",
                                "title": "成品保护1",
                                "img": "http://i4.fuimg.com/611341/f12de4a16c7af019t.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/cleaning",
                                "title": "保洁1",
                                "img": "http://i4.fuimg.com/611341/1df5abf01a290aa9t.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/spiderman",
                                "title": "外墙清洗1",
                                "img": "http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/renovation",
                                "title": "石材翻新1",
                                "img": "http://i2.tiimg.com/611341/b55ac648e595e924t.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/housekeeping",
                                "title": "家政服务1",
                                "img": "http://i4.fuimg.com/611341/6b2f8cb1fa931ce6t.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/liftAttendant",
                                "title": "电梯司机",
                                "img": "http://i4.fuimg.com/611341/49272676020e5d4et.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/parkingManage",
                                "title": "停车管理",
                                "img": "http://i4.fuimg.com/611341/e70312190ecf083ct.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/fireEngineering",
                                "title": "消防工程",
                                "img": "http://i4.fuimg.com/611341/bbb4a1a28c8987dbt.jpg"
                        },
                        {
                                "linkTo": "/itemCard/case/demolitionEngineering",
                                "title": "拆迁工程",
                                "img": "http://i4.fuimg.com/611341/c99ffbf40c1227f7t.jpg"
                        }
                ]
        }
        public render(h: CreateElement) {
                return (
                        <div class="Protect">
                                <div class='title'>
                                        <dl id='caseTitle' class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>{this.curData.titleZ}</dt>
                                                        <dd>{this.curData.titleE}</dd>
                                                </router-link>
                                        </dl>
                                </div>
                                {/* <div class="InContent list">
                                        <ul class="imglist">
                                                {this.createItems(h)}
                                        </ul>
                                </div> */}
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
        public beforeMount() {

        }
        public mounted() {

                this.getData()
        }
        public updated() {
                // this.getData()
        }

        @Watch('$route', { immediate: true, deep: true })
        on$routeChanged(val: any, oldVal: any) {
                this.getData()
        }
        public getData() {
                let curPath = (this.$router as any).history.current.path
                let listId = curPath.split('/itemCard/case/')[1]
                this.curData = this.data[listId]
        }
        public createItems(h: CreateElement) {
                let template = []
                for (let i = 0; i < this.curData.main.length; i++) {
                        template.push(
                                <li class='col-md-3 col-sm-4 col-xs-6'>
                                        <router-link to={this.curData.main[i].linkTo} title={this.curData.main[i].title}>
                                                <dl>
                                                        <dt>
                                                                <img src={this.curData.main[i].img} alt={this.curData.main[i].title} />
                                                        </dt>
                                                        <dd><span>{this.curData.main[i].title}</span></dd>
                                                </dl>
                                        </router-link>
                                </li>
                        )
                }
                return template
        }
}

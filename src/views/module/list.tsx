import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export default class List extends Vue {
        public listNum: number = 0
        public list: any = [
                {
                        card: '走进四海',
                        item: [
                                {
                                        url: '/itemCard/into',
                                        name: '四海简介'
                                },
                                {
                                        url: '/itemCard/honor',
                                        name: '荣誉证书'
                                }
                        ]
                },
                {
                        card: '服务项目',
                        item: [
                                {
                                        url: '/itemCard/server',
                                        name: '服务项目'
                                }
                        ]
                },
                {
                        card: '施工案例',
                        item: [
                                {
                                        url: '/itemCard/case/protect',
                                        name: '成品保护'
                                },
                                {
                                        url: '/itemCard/case/cleaning',
                                        name: '保洁'
                                },
                                {
                                        url: '/itemCard/case/spiderman',
                                        name: '外墙清洗'
                                },
                                {
                                        url: '/itemCard/case/renovation',
                                        name: '石材翻新'
                                },
                                {
                                        url: '/itemCard/case/housekeeping',
                                        name: '家政服务'
                                },
                                {
                                        url: '/itemCard/case/liftAttendant',
                                        name: '电梯司机'
                                },
                                {
                                        url: '/itemCard/case/parkingManage',
                                        name: '停车管理'
                                },
                                {
                                        url: '/itemCard/case/fireEngineering',
                                        name: '消防工程'
                                },
                                {
                                        url: '/itemCard/case/demolitionEngineering',
                                        name: '拆迁工程'
                                },
                        ]
                },
                {
                        card: '团队风采',
                        item: [
                                {
                                        url: '/itemCard/team',
                                        name: '风采展示'
                                }
                        ]
                },
                {
                        card: '新闻中心',
                        item: [
                                {
                                        url: '/itemCard/news',
                                        name: '新闻中心'
                                }
                        ]
                },
                {
                        card: '联系我们',
                        item: [
                                {
                                        url: '/itemCard/contact',
                                        name: '联系方式'
                                }
                        ]
                }
        ]
        public routeList: any = []

        public render(h: CreateElement) {
                return (
                        <div class="list container-fluid hidden-xs mpclear">
                                <h2>走进四海</h2>
                                <div class="sideMenu">
                                        {this.listFor(h)}
                                </div>
                        </div >
                )
        }
        public created() {
                this.cardList()
        }
        public mounted() {
                this.showdd()
        }
        public updated() {
                this.showdd()
        }

        @Watch('$route', { immediate: true, deep: true })
        on$routeChanged(val: any, oldVal: any) {
                this.cardList()
        }
        public showdd() {
                let sideMenu = document.getElementsByClassName('sideMenu')[0]

                for (let i = 0; i < sideMenu.children.length; i++) {
                        let evedd = sideMenu.children[i].getElementsByTagName('dd')[0]
                        evedd.setAttribute('style', `height: 0px`)
                }

                for (let i = 0; i < this.list.length; i++) {
                        let dd = sideMenu.getElementsByClassName(`showdd${i}`)[0]
                        let itemLen = this.list[i].item.length
                        if (dd !== undefined) dd.setAttribute('style', `height:${itemLen * 36}px`)
                }
        }
        public listFor(h: CreateElement) {
                let res = []
                for (let i = 0; i < this.list.length; i++) {
                        let dd = []
                        for (let n = 0; n < this.list[i].item.length; n++) {
                                dd.push(<span><router-link to={this.list[i].item[n].url}>{this.list[i].item[n].name}</router-link></span>)
                        }

                        res.push(
                                <dl>
                                        <dt onClick={() => { this.listNum = (i + 1) }}>
                                                <span class={this.listNum === i + 1 ? 'show' : ''}>{this.list[i].card}</span>
                                        </dt>
                                        <dd class={(this.listNum === i + 1 ? `showdd${i}` : '') + " " + "show"}>
                                                {dd}
                                        </dd>
                                </dl >
                        )
                }
                return res
        }

        public cardList() {
                let curPath = (this.$router as any).history.current.path
                for (let i = 0; i < this.list.length; i++) {
                        for (let n = 0; n < this.list[i].item.length; n++) {
                                let curRoute = this.list[i].item[n].url.split('/itemCard/')[1]
                                let curReg = new RegExp(curRoute)
                                if (curReg.test(curPath)) this.listNum = i + 1
                        }
                }
        }
}

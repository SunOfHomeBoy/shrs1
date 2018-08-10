import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'


@Component
export class NewsList extends Vue {
        public dataInfo: any = [
                {
                        day: '24',
                        years: '2016/3',
                        title: '军区总医院',
                        newsId: 'news1',
                        detail: '北京军区总医院坐落在北京市中心，占地面积 23.2 万平方米的北京军区总医院分东、西两院。东院位于北京市…'
                },
                {
                        day: '24',
                        years: '2016/3',
                        title: '国家会议中心',
                        newsId: 'news2',
                        detail: '国家会议中心外形美观大方,总建筑面积53万平方米,会议中心主体建筑面积27万平方米,功能齐全,设施先进,将…'
                },
                {
                        day: '24',
                        years: '2016/3',
                        title: '公安部家属楼',
                        newsId: 'news3',
                        detail: '2009年我司承接成品保护工作，人保160名进行24小时现场看护。合作单位：中国建筑第八工程局有限公司。'
                },
                {
                        day: '18',
                        years: '2016/3',
                        title: '海军司令办公大楼',
                        newsId: 'news4',
                        detail: '海军司令办公大楼位于西长安街公主坟地段我司承接海军司令办公大楼'
                },
                {
                        day: '18',
                        years: '2016/3',
                        title: '北京铁道部党校',
                        newsId: 'news5',
                        detail: '铁道部党校占地总面积3.9万平方米,建筑 面积4.8万平方米。铁道部党校始建于1955年,原为铁道部干部学校…'
                },
                {
                        day: '15',
                        years: '2016/3',
                        title: '公司简介',
                        newsId: 'news6',
                        detail: '北京四海日盛建材有限公司及物业管理分公司 '
                }
        ]
        public render(h: CreateElement) {
                return (
                        <ul class="newslist">
                                {this.createItems(h)}
                        </ul>
                )
        }
        public createItems(h: CreateElement) {
                let template = []
                for (let i = 0; i < this.dataInfo.length; i++) {
                        template.push(
                                <li>
                                        <div class='years fl'>
                                                <p class="day">{this.dataInfo[i].day}</p>
                                                <span>{this.dataInfo[i].years}</span>
                                        </div>
                                        <router-link to={`/itemCard/news/${this.dataInfo[i].newsId}`} title={this.dataInfo[i].title}>
                                                <span class="tItle" >
                                                        <h3>{this.dataInfo[i].title}</h3>
                                                        <p>{this.dataInfo[i].detail}</p>
                                                </span>
                                        </router-link>
                                </li >
                        )
                }
                return template
        }
}

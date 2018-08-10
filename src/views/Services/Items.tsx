import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Items extends Vue {
        public itemInfo: any = [
                {
                        linkTo: '/itemCard/server/Item1',
                        title: 'NO.1成品保护',
                        img: 'http://i2.tiimg.com/611341/b66c935ed2587806t.jpg',
                        introduce: '成品保护管理是施工管理的重要组成部分,是保证工期避免工料费用和施工安全,保证生产顺利进行的主要环节。因此，切实加强成品保护管理。特别是加强装修阶段的成品保护管理，落实岗位责任制，杜绝或减少人为的丢失损坏现象是成品保护管理工…'
                },
                {
                        linkTo: '/itemCard/server/Item2',
                        title: 'NO.2外墙清洗',
                        img: 'http://i2.tiimg.com/611341/91a4340f26b3305ct.jpg',
                        introduce: '外墙清洗 外墙清洗是高空清洗的一种，是一种极危险的清洗作业，外墙清洗不仅要做到清洗物的干净清洁，更重要的是要在确保安全的情况下施工作业。这就要求：施工人员有着非常丰富的高空清洗实践操作经验，并有良好的管理团队和过硬的安全…'
                },
                {
                        linkTo: '/itemCard/server/Item3',
                        title: 'NO.3地毯清洗',
                        img: 'http://i2.tiimg.com/611341/0bd65b3ad28c3139t.jpg',
                        introduce: '公司地毯-清洗方法A、 泡沫地毯干洗法:先说地毯泡沫干洗，地毯干洗主要使用的工具有：中心打泡地毯清洗机、泡沫加泡箱、泡槽刷、干泡地毯水等工具。主要操作是用泡沫干洗机，采用带有旋转毛刷及植入式湿性真空吸头将大量洗涤剂喷洒在毯面绒…'
                },
                {
                        linkTo: '/itemCard/server/Item4',
                        title: 'NO.4工程开荒保洁',
                        img: 'http://i2.tiimg.com/611341/3da60f21650abff1t.jpg',
                        introduce: '开荒保洁 由于建筑工程中常常会遗留下许多垃圾污垢,各种地面石头,墙壁上会遗留下（一）开荒保洁所用工具大型吸尘吸水机、多功能擦地机、玻璃套装工具、加长杆、梯子、水桶、掸子、云石铲刀、刮子、涂水器等。 （二）开荒保洁所用药剂'
                },
                {
                        linkTo: '/itemCard/server/Item5',
                        title: 'NO.5石材翻新',
                        img: 'http://i2.tiimg.com/611341/b55ac648e595e924t.jpg',
                        introduce: '石材养护一、服务项目：花岗岩打蜡、大理石、水磨石、抛光，石材翻新、石材补缝、防水、晶面硬化、病变处理、防渗处理等。 二、一般操作流程：（1）打蜡、抛光石材是一种天然、环保的装饰材料，其色彩亮丽、豪华气派，所以对其的保养尤为重…'
                },
                {
                        linkTo: '/itemCard/server/Item6',
                        title: 'NO.6家政服务',
                        img: 'http://i2.tiimg.com/611341/68709d510386c239t.jpg',
                        introduce: '1、建立良好的人际关系家政服务人员服务的过程首先是与雇主相处的过程，因此家政服务人员入户后，必须要和雇主建立起良好的人际关系，只有雇佣双方建立起和谐的人际关系，家政服务员在服务的过程中才能心情愉快，工作顺利。否则，双方的合…'
                },
                {
                        linkTo: '/itemCard/server/Item7',
                        title: 'NO.7消防工程',
                        img: 'http://i2.tiimg.com/611341/c583469f92d31ad8t.jpg',
                        introduce: '消防施工注意事项 1．风管要做漏光和漏风试验 漏光试验由施工单位做，每10M不多于一个漏光点（不是在风机、风阀安装后测试），在第一次做漏光试验时应作节能样板；漏风试验由建设单位委托第三方做（理由：要是在排烟时漏烟雾将会造成…'
                },
                {
                        linkTo: '/itemCard/server/Item8',
                        title: 'NO.8停车管理',
                        img: 'http://i2.tiimg.com/611341/72e0d16ecd56ebdet.jpg',
                        introduce: '一、车辆管理的方法与要求 (一)建立健全车辆管理队伍 为做好管理区域内车辆管理,提供安全有序的车辆停放管理服务,物业管理企业应根据小区车辆管理实际情况做好人员安排,包括小区车辆交通的疏导及管理人员、停车场维护人员和车辆收费…'
                },
                {
                        linkTo: '/itemCard/server/Item9',
                        title: 'NO.9拆迁工程',
                        img: 'http://i2.tiimg.com/611341/ef6e0dbc0f520dc5t.jpg',
                        introduce: '拆除工程施工注意事项一、技术准备工作1、首先熟悉被拆建筑物的设计图纸，弄清建筑物的结构情况、建筑情况、水电及设备管道情况。工地负责人要根据施工组织设计和安全技术规程向参加拆除的工作人员进行详细的交底。2、对施工员进行安全技术…'
                },
                {
                        linkTo: '/itemCard/server/Item10',
                        title: 'NO.10物业管理',
                        img: 'http://i2.tiimg.com/611341/23924b630fbe6ef0t.jpg',
                        introduce: '公共服务是指物业管理中公共性的管理和服务工作，是物业管理企业面向所有住用人提供的最基本的管理和服务。主要有以下8项：（1）房屋建筑主体的管理及住宅装修的日常监督；（2）房屋设备、设施的管理；（3）环境卫生的管理；'
                },

        ]
        public render(h: CreateElement) {
                return (
                        <div class="Items container-fluid mpclear">
                                <div class="InContent">
                                        <ul class="newslist">
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
                                <li>
                                        <div class="pic">
                                                <router-link to={this.itemInfo[i].linkTo} title={this.itemInfo[i].title}>
                                                        <img src={this.itemInfo[i].img} alt={this.itemInfo[i].title} />
                                                </router-link>
                                        </div>
                                        <div class="text">
                                                <h6>
                                                        <router-link to={this.itemInfo[i].linkTo} title={this.itemInfo[i].title}>{this.itemInfo[i].title}</router-link>
                                                </h6>
                                                <div>{this.itemInfo[i].introduce}</div>
                                                <span>
                                                        <router-link to={this.itemInfo[i].linkTo} title={this.itemInfo[i].title}>查看详情&gt;&gt;</router-link>
                                                </span>
                                        </div>
                                </li>
                        )
                }
                return template
        }
}

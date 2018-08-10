import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item10 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item10 container-fluid mpclear">
                                <div class="InContent">

                                        <div class="title">
                                                <h1>NO.10物业管理</h1>
                                        </div>
                                        <div class="content">
                                                <p>
                                                        <span>公共服务</span>
                                                </p>
                                                <p>
                                                        <span>是指物业管理中公共性的管理和服务工作，是物业管理企业面向所有住用人提供的最基本的管理和服务。主要有以下8项：</span>
                                                </p>
                                                <p>
                                                        <span>（1）房屋建筑主体的管理及住宅装修的日常监督；</span></p>
                                                <p>
                                                        <span>（2）房屋设备、设施的管理；</span>
                                                </p>
                                                <p>
                                                        <span>（3）环境卫生的管理；</span>
                                                </p>
                                                <p>
                                                        <span>（4）绿化管理；</span>
                                                </p>
                                                <p>
                                                        <span>（5）配合公安和消防部门做好住宅区内公共秩序维护工作；</span>
                                                </p>
                                                <p>
                                                        <span>（6）车辆秩序管理；</span>
                                                </p>
                                                <p>
                                                        <span>（7）公众代办性质的服务；</span>
                                                </p>
                                                <p>
                                                        <span>（8）物业档案资料的管理</span>
                                                </p>
                                                <p>
                                                        <span>针对性服务</span>
                                                </p>
                                                <p>
                                                        <span>是指物业管理企业面向广大住用人，为满足其中一些住户、群体和单位的一定需要而提供的各项服务工作。</span>
                                                </p>
                                                <p>
                                                        <span>①日常生活类；</span>
                                                </p>
                                                <p>
                                                        <span>②商业服务类；</span>
                                                </p>
                                                <p>
                                                        <span>③文化、教育、卫生、体育类；</span>
                                                </p>
                                                <p>
                                                        <span>④金融服务类；</span>
                                                </p>
                                                <p>
                                                        <span>⑤经纪代理中介服务；</span>
                                                </p>
                                                <p>
                                                        <span>⑥社会福利类；</span>
                                                </p>
                                                <p>
                                                        <span>委托性服务</span>
                                                </p>
                                                <p>
                                                        <span>物业管理企业在实施物业管理时，第一大类是最基本的工作，是必须做好的。同时，根据自身的能力和住用人的要求，确定第二、第三大类中的具体服务项目与内容，采取灵活多样的经营机制和服务方式，以人为核心做好物业管理的各项管理与服务工作，并不断拓展其广度和深度。</span>
                                                </p>
                                        </div>
                                </div>
                        </div>
                )
        }
}

import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item7 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item7 container-fluid mpclear">
                                <div class="InContent">

                                        <div class="title">
                                                <h1>NO.7消防工程</h1>
                                        </div>
                                        <div class="content">
                                                <p>
                                                        <span><b>消防施工注意事项</b>s</span>
                                                </p>
                                                <p>
                                                        <span>1．风管要做漏光和漏风试验 漏光试验由施工单位做，每10M不多于一个漏光点（不是在风机、风阀安装后测试），在第一次做漏光试验时应作节能样板；漏风试验由建设单位委托第三方做（理由：要是在排烟时漏烟雾将会造成损失）；要掌握漏光漏风试验的要领及做法；  </span>
                                                </p>
                                                <p>
                                                        <span>2．见机到货应有开箱检查记录，要重点核查见机功率是否大于设计功率，另外要检查品牌的符合性；  </span>
                                                </p>
                                                <p>
                                                        <span>3．生活水质化验报告（进水口：水泵处，出水口：住宅末端，小于等于500户取一户，大于500小于等于1000取两处，依此类推）；  </span>
                                                </p>
                                                <p>
                                                        <span>4．PPR、钢塑管要有卫生及性能检测报告（两总包可共一份，每不同材质的材料各一份）；  </span>
                                                </p>
                                                <p>
                                                        <span>5．消防应有专门的图纸会审记录，镀锌钢管应检测镀锌层厚度； </span>
                                                </p>
                                                <p>
                                                        <span>6．大于Φ110的排水管应间隔设置门型吊架，不能只采用卡箍吊架；  </span>
                                                </p>
                                                <p>
                                                        <span>7．风管进入风机房应安装铁皮套管，防火阀单独设吊架（风机房内）；  </span>
                                                </p>
                                                <p>
                                                        <span>8．消毒由施工单位进行（加漂白粉水冲洗）；  </span>
                                                </p>
                                                <p>
                                                        <span>9．大于1200的风管下面应做喷头，风管应做防晃支架（一般在最后固定时做）；  </span>
                                                </p>
                                                <p>
                                                        <span>10．电气回路的套管应采用同一种管材，不要一段采用钢管，一段采用塑料管； </span>
                                                </p>
                                                <p>
                                                        <span>11．桥架直线段长度大于30米应设置伸缩节。  </span>
                                                </p>
                                                <p>
                                                        <span>12．消防的软接头应有不燃证，最后能现场点火试验。  </span>
                                                </p>
                                        </div>
                                </div>
                        </div>
                )
        }
}

import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item3 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item3 container-fluid mpclear">
                                <div class="InContent">
                                        <div class="title">
                                                <h1>NO.3地毯清洗</h1>
                                        </div>
                                        <div class="content">
                                                <p>
                                                        <span><b>公司地毯-清洗方法</b></span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <b>A、 泡沫地毯干洗法</b>
                                                                <span>:先说地毯泡沫干洗，地毯干洗主要使用的工具有：中心打泡地毯清洗机、泡沫加泡箱、泡槽刷、干泡地毯水等工具。主要操作是用泡沫干洗机，采用带有旋转毛刷及植入式湿性真空吸头将大量洗涤剂喷洒在毯面绒头上，在滚动毛刷的作用下洗涤剂清洁绒头，之后用吸尘吸水机吸去洗涤泡沫及悬浮尘土，达到清洁地毯的目的。</span>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <b>B、干性提取清除法</b>
                                                                <span>:将干洗粉均匀的喷撒在地毯表面，让干洗粉和地毯表面的污汁自然产生化学反应。15分钟后用专用的多功能洗地机清洗地毯，等到灰尘和污渍全部浮出地毯表面再用大功率吸尘器配合带毛刷的吸头将其灰尘吸尽，当时洗完即可使用。</span>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>地毯干洗是一种表面清洁方式，其优点是可以快速去除地毯表面的油污、尘土等各种污垢，清洁后不缩水、不易退色。其缺点是仅仅只能清洁地毯表面，无法除味、杀菌，并且刷洗过程中对地毯有一定程度的损伤，特别不适合长毛的羊毛地毯。地毯水洗可深层清洁地毯，但不可使用质量差的地毯水，品质较差的地毯水不仅严重影响地毯外观，还有可能导致地毯脆化、失去弹性。</span>
                                                </p>
                                        </div>
                                </div>
                        </div>
                )
        }
}

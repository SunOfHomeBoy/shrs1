import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item9 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item9 container-fluid mpclear">
                                <div class="InContent">

                                        <div class="title">
                                                <h1>NO.9拆迁工程</h1>
                                        </div>
                                        <div class="content">
                                                <p>
                                                        <span>拆除工程施工注意事项</span>
                                                </p>
                                                <p>
                                                        <span>一、技术准备工作</span>
                                                </p>
                                                <p>
                                                        <span>1、首先熟悉被拆建筑物的设计图纸，弄清建筑物的结构情况、建筑情况、水电及设备管道情况。工地负责人要根据施工组织设计和安全技术规程向参加拆除的工作人员进行详细的交底。</span>
                                                </p>
                                                <p>
                                                        <span>2、对施工员进行安全技术交底，加强安全意识。对工人做好安全教育，组织工人学习安全操作规程。</span>
                                                </p>
                                                <p>
                                                        <span>3、踏看施工现场，熟悉周围环境、场地、道路、水电设备管路情况及建筑物情况等。</span>
                                                </p>
                                                <p>
                                                        <span>二、现场准备</span>
                                                </p>
                                                <p>
                                                        <span>1、清理施工场地，保证运输道路畅通。</span>
                                                </p>
                                                <p>
                                                        <span>2、施工前，先清理需要拆除部分范围内的物资、设备；将电线、水管、设备等各类管线切断或迁移；检查周围危旧房屋或构件，必要时进行临时加固；向周围群众出安民告示，在拆除危险区周围设禁区围栏、警戒标志，派专人监护，禁止非拆除人员进入施工现场。</span>
                                                </p>
                                                <p>
                                                        <span>3、对于生产、使用、储存化学危险品的建筑物的拆除，要经过消防、安全部门参与审核，制定保证安全的预案，经过批准后实施。</span>
                                                </p>
                                                <p>
                                                        <span>4、搭设临时防护设施，避免拆除时的砂、石、灰尘飞扬影响生产的正常进行。</span>
                                                </p>
                                                <p>
                                                        <span>5、在拆除危险区设置警戒区标志。</span>
                                                </p>
                                                <p>
                                                        <span>6、接引好施工用临时电源、水源，现场照明不能使用被拆建筑物内的配电设施，应另外敷设。保证施工时水电畅通。</span>
                                                </p>
                                                <p>
                                                        <span>四、施工组织</span>
                                                </p>
                                                <p>
                                                        <span>1、在甲方的支持下，做好群众工作，争取周边业主的配合，赢得群众的支持，派专人做好周边警戒工作。</span>
                                                </p>
                                                <p>
                                                        <span>2、按施工组织设计的程序安排，首先清拆原有管线，采取人工进行拆除，划分区域，分块、逐段、逐根进行拆除。</span>
                                                </p>
                                                <p>
                                                        <span>3、拆除混凝土构件时，采用人工拆除。严格控制飞石、响声、冲击波。采用湿水除尘，减少声响及冲击波，确保不扰民。</span>
                                                </p>
                                                <p>
                                                        <span>4、拆除外墙、隔墙时，采用人工拆除，专人进行监测，发现情况及时联系研究，以确保施工安全。</span>
                                                </p>
                                                <p>
                                                        <span>5、墙体拆除后，组织工人回收构件中有价值的可利用废品。</span>
                                                </p>
                                                <p>
                                                        <span>6、不可利用废物，用汽车外运到指定地点。</span>
                                                </p>

                                        </div>
                                </div>
                        </div>
                )
        }
}

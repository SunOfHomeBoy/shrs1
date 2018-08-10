import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'

@Component
export default class Contacat extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Contacat container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>联系我们</dt>
                                                <dd>Contact us</dd>
                                        </dl>
                                </div>
                                <div class="incontent">
                                        <div class="InContent" style="padding-top:20px;">
                                                <p style="line-height: 2em;">
                                                        <span>公司名称：</span>
                                                        <span style="font-family: 宋体, SimSun; font-size: 14px; text-align: center;">北京四海日盛人力资源管理有限公司</span>
                                                </p>
                                                <p style="line-height: 2em;">
                                                        <span>联 系 人： 宋海彦</span>
                                                </p>
                                                <p style="line-height: 2em;">电 &nbsp; &nbsp;话：<span>010-85782599</span></p>
                                                <p style="line-height: 2em;">电 &nbsp; &nbsp;话：<span>010-57288570</span></p>
                                                <p style="line-height: 2em;">传 &nbsp; &nbsp;真：<span>010-60595297</span></p>
                                                <p style="line-height: 2em;">移动电话：<span>13911897528</span> &nbsp; &nbsp; &nbsp;<span>13311268400</span></p>
                                                <p style="line-height: 2em;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15811059960 &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                                <p style="line-height: 2em;">电子邮箱：shrs2009@163.com</p>
                                                <p style="line-height: 2em;">地 &nbsp; &nbsp;址：北京市通州区中山大街59号院2810</p>
                                        </div>
                                </div>
                        </div>
                )
        }
}

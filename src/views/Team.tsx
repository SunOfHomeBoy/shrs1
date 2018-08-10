import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'

@Component
export default class Team extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Team container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/team' title='目录列表'>
                                                        <dt>团队风采</dt>
                                                        <dd>Team Style</dd>
                                                </router-link>
                                        </dl>
                                        <div class="RightTitle">
                                                <span><router-link to='/' title="北京四海日盛人力资源管理有限公司">首页</router-link></span>
                                                <span>&nbsp;&gt;&nbsp;</span>
                                                <span><router-link to='/itemCard/team' title="团队风采">团队风采</router-link></span>
                                        </div>
                                </div>
                                <div class="incontent">
                                        <router-view></router-view>
                                </div>
                        </div>
                )
        }
}

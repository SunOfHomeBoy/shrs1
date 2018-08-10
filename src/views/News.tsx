import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'

@Component
export default class News extends Vue {

        public render(h: CreateElement) {
                return (
                        <div class="News container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/news' title="团队风采">
                                                        <dt>新闻中心</dt>
                                                        <dd>News Center</dd>
                                                </router-link>
                                        </dl>
                                        <div class="RightTitle">
                                                <span><router-link to='/' title="北京四海日盛人力资源管理有限公司">首页</router-link></span>
                                                <span>&nbsp;&gt;&nbsp;</span>
                                                <span><router-link to='/itemCard/news' title="团队风采">新闻中心</router-link></span>
                                        </div>
                                </div>
                                <div class="incontent">
                                        <router-view></router-view>

                                </div>
                        </div>
                )
        }

}

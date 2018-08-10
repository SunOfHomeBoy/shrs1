import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Housekeeping extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Housekeeping">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>家政服务</dt>
                                                        <dd>Housekeeping</dd>
                                                </router-link>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

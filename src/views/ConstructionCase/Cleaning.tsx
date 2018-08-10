import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Cleaning extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Cleaning">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>保&nbsp;&nbsp;洁</dt>
                                                        <dd>Cleaning</dd>
                                                </router-link>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Spiderman extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Spiderman">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>外墙清洁</dt>
                                                        <dd>Wall cleaning</dd>
                                                </router-link>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

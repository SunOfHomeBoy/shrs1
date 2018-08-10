import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Renovation extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Renovation">
                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>石材翻新</dt>
                                                        <dd>Renovation</dd>
                                                </router-link>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

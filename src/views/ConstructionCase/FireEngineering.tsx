import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class FireEngineering extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="FireEngineering">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>消防工程</dt>
                                                <dd>Fire Engineering</dd>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

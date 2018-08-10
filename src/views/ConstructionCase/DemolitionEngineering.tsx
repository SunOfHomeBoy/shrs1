import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class Demolition extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Demolition">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>拆迁工程</dt>
                                                <dd>Demolition</dd>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

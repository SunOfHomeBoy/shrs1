import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class LiftAttendant extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="LiftAttendant">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>电梯司机</dt>
                                                <dd>Lift Attendant</dd>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

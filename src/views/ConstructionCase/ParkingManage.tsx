import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export class ParkingManage extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="ParkingManage">

                                <div class='title'>
                                        <dl class='fl'>
                                                <router-link to='/itemCard/case' title='目录列表'>
                                                        <dt>停车管理</dt>
                                                        <dd>Parking Manage</dd>
                                                </router-link>
                                        </dl>
                                </div>
                        </div>
                )
        }
}

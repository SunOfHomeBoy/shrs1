import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'

@Component
export default class Talents extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Talents container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>人才招聘</dt>
                                                <dd>Recruitment</dd>
                                        </dl>
                                </div>
                                <div class="incontent">

                                </div>
                        </div>
                )
        }
}

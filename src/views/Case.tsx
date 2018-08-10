import Vue, { CreateElement } from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export default class Case extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Case container-fluid mpclear itemTitle">
                                <div class="incontent">
                                        <router-view></router-view>
                                </div>
                        </div>
                )
        }
}

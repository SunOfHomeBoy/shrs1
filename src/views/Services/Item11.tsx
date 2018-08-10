import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item11 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item11 container-fluid mpclear">
                                Item11
                        </div>
                )
        }
}

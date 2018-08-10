import { Component, Prop } from 'vue-property-decorator'
import Vue, { CreateElement } from 'vue'
import List from './module/list'
import "../styles/ItemCard.scss"

@Component
export default class ItemCard extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="ItemCard container-fluid mpclear">
                                <div class="top">
                                        <img src="http://i4.fuimg.com/611341/d2cd577e8701c6da.jpg" alt="" />
                                </div>
                                <div class="content">
                                        <div class="col-md-2 col-sm-2 list fl">
                                                <List></List>
                                        </div>
                                        <div class="col-md-10 col-sm-10 article">
                                                <router-view></router-view>
                                        </div>
                                </div>
                        </div>
                )
        }
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
        state: {
                /* 用户信息 */
                user: true,
                mode: false

        },
        mutations: {
                mode(state, user: any) {
                        state.user = user;
                },

                pcOrPh(state, mode: boolean) {
                        state.mode = mode;
                }
        }
})
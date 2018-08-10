/// <reference path="shrs.d.tsx" />
import Vue from 'vue'
import VueRouter from 'vue-router'

import initBrowsers from 'init-browsers'
import { settings, routes, theme, store } from './config'
import './styles/pcsheets.scss'
import '../node_modules/viewerjs/dist/viewer.min.css'
import '../node_modules/swiper/dist/css/swiper.min.css'

export default function shrsMain() {
        Vue.config.devtools = settings.debug
        Vue.use(VueRouter)


        let router = new VueRouter({ routes, mode: settings.history ? 'history' : 'hash' })
        router.beforeEach(({ path, meta }, from, next) => {
                next()
        })

        initBrowsers(Object.assign(theme, {}))
        new Vue({ router, store }).$mount('#' + settings.appID)

        if (/AppleWebKit.*mobile/i.test(navigator.userAgent) && window.innerWidth < 768) {
                if (window.location.href.indexOf("?mobile") < 0) {
                        try {
                                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                                        document.documentElement.style.fontSize
                                                = document.documentElement.clientWidth / 3.75 + 'px';
                                        console.log('手机页面')
                                }
                        } catch (e) {
                                console.log('error:', e);
                        }
                }
        } else {
                window.innerWidth < 992 ?
                        document.documentElement.style.fontSize = (window.innerWidth / 9.92 * 2) + 'px' :
                        document.documentElement.style.fontSize = 100 + 'px'
                // console.log('PC页面');
        }
}

if (typeof (process.env.production) !== 'undefined') {
        shrsMain();
}

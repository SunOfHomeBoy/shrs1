import axios from 'axios'
import { auth } from './auth'
import { json } from './json'
import { redirect } from './redirect'
import { settings } from '../config'

export function api(path: string, document: any, callback: (data: any) => void) {
        axios({
                url: settings.pathAPI + path,
                method: 'post',
                data: {
                        accessToken: auth().accessToken || '',
                        appID: settings.appID,
                        parameters: json(document)
                },
                transformRequest: [
                        (data: any) => {
                                let buf = []

                                for (let i in data) {
                                        buf.push(...[
                                                global.encodeURIComponent(i),
                                                '=',
                                                global.encodeURIComponent(data[i]),
                                                '&'
                                        ])
                                }

                                return buf.join('')
                        }
                ],
                headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                }
        })
                .then((response: any) => {
                        let responseData = response.data

                        if (typeof (response) === 'string') {
                                responseData = json(response)
                        }

                        switch (responseData.code) {
                                case 403:
                                        return redirect(settings.pathSignin || '/signin')

                                case 404:
                                        if (settings.debug) {
                                                console.log('Not Found')
                                        }
                                        break

                                case 500:
                                        if (settings.debug) {
                                                console.log('Internal Server Error:')
                                        }
                                        break

                                default:
                                        callback(responseData)
                        }

                })
                .catch((err: Error) => { })
}
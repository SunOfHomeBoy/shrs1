import { settings } from '../config'

export function uri(path: string): string {
        if (typeof (path) === 'undefined') {
                return settings.history
                        ? window.location.pathname
                        : window.location.hash
        }

        if (path.indexOf(':lang') !== -1) {
                return path.replace(':lang', String(settings.history
                        ? window.location.pathname
                        : window.location.hash
                ).split('/')[1])
        }

        return path
}
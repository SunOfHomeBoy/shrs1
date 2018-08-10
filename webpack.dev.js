const webpackConfigure = require('./webpack.config')

module.exports = webpackConfigure({
        entry: {
                'shrs': 'shrs.tsx'
        }
})